# anotações do curso - WebSockets: implemente autenticação e avance no Socket.IO

---

## WebSockets seguro
**Os dados que vão do cliente até o servidor estão seguros?**
A resposta é: no nosso atual ambiente, não. Da mesma forma que o protocolo HTTP possui sua versão segura, o HTTPS, o protocolo WS (WebSockets) também possui sua versão segura, o WSS. Entretanto, durante o curso, estamos trabalhando no localhost, então, por padrão, estamos utilizando a versão não segura do protocolo WS.

Você já deve ter conferido no curso de HTTP as diferenças entre o HTTP e o HTTPS, e uma delas é que as mensagens enviadas do cliente para o servidor no HTTPS são criptografadas, diferente do HTTP. Ou seja, mesmo que um invasor intercepte a senha que foi digitada no formulário, ela estará criptografada até o momento em que chegar no servidor, assim o invasor não terá acesso ao que realmente foi digitado.

Sabia que a mesma coisa acontece no protocolo WSS a versão segura do WS? Seja partindo do cliente ou do servidor, os dados que são carregados pelos eventos são criptografados até chegar no outro lado da comunicação. Ou seja, caso você precise utilizar WebSockets no mercado, desde que seja a versão segura, não há problema em enviar informações sensíveis através dos eventos.

Então, respondendo novamente a pergunta inicial: o protocolo WS não garante a segurança dos dados enviados entre cliente e servidor, mas o protocolo WSS sim!

---

## lidando com CORS
Até agora na nossa aplicação, estamos utilizando o front-end e o back-end na mesma URL: http://localhost:3000. Isso porque o próprio servidor Node está disponibilizando as páginas HTML no navegador.

E se estivéssemos lidando com front-end e back-end de forma mais separada? Por exemplo, se tivéssemos uma aplicação construída em React que rodasse na porta 5000, enquanto nosso servidor está rodando na porta 3000?

Se você já se deparou com situações assim antes, talvez tenha pensado que iria lidar com Cross-Origin Resource Sharing (CORS), e é exatamente isso! Vamos simular essa situação?

### Acessando o Alura Docs por uma porta diferente
Para simular que o nosso Front-end está sendo servido de forma separada, vamos fazer o próprio servidor Node escutar em mais uma porta, por exemplo, a 5000. No arquivo servidor.js, adicione o seguinte código:
```
const servidorHttp2 = http.createServer(app);
servidorHttp2.listen(5000, () => console.log(`Servidor escutando na porta 5000`));
```

Com esse código, criamos um novo servidor HTTP que escuta na porta 5000. Salvando o arquivo, o seguinte texto deve aparecer no terminal:
```
Conectado ao banco de dados com sucesso!
Servidor escutando na porta 3000
Servidor 2 escutando na porta 5000
```

Com isso, já podemos acessar o Alura Docs em http://localhost:5000/login/index.html, por exemplo. Entretanto, o servidor do Socket.IO que nós temos foi criado a partir do primeiro servidor HTTP, com o seguinte código:
```
const io = new Server(servidorHttp);
```

Ou seja, todas as funcionalidades de escutar e emitir eventos não estarão disponíveis para o segundo servidor que criamos. Se você abrir a página de login no navegador, na porta 5000, poderá conferir um erro como esse no console do navegador:

GET http://localhost:5000/socket.io/socket.io.js net::ERR_ABORTED 404 (Not Found)

Esse erro indica que o navegador não encontrou o arquivo socket.io.js no caminho http://localhost:5000/socket.io/socket.io.js.

Esse arquivo está sendo procurado nesse caminho por causa da tag script que colocamos no HTML da página de login, com o seguinte código:
```
<script src="/socket.io/socket.io.js"></script>
```

Ao acessar o Alura Docs pela porta 5000, o atributo src dessa tag agora tem como base a URL http://localhost:5000, pois o caminho começa com /. Como nosso servidor Socket.IO foi criado pelo servidor HTTP da porta 3000, então o arquivo socket.io.js não está sendo disponibilizado na porta 5000.

O que queremos fazer é acessar o servidor Socket.IO que está escutando na porta 3000, mesmo que o Alura Docs esteja sendo acessado pela porta 5000 no navegador.

Para alcançar esse objetivo, a primeira coisa que podemos fazer é alterar o atributo src da tag script para "http://localhost:3000/socket.io/socket.io.js", como no código abaixo:
```
<script src="http://localhost:3000/socket.io/socket.io.js"></script>
```

Com isso, o arquivo socket.io.js que é disponibilizado pelo servidor Socket.IO poderá ser encontrado. Mas a conexão com o servidor ainda não será feita corretamente, pois no arquivo socket-front-login.js, temos o seguinte código:
```
const socket = io();
```

E quando não passamos nenhum parâmetro para io, o Socket.IO do front-end tenta fazer uma conexão com o servidor que possui a mesma origem do navegador. Ou seja, esse código não vai funcionar caso estejamos acessando o Alura Docs pela porta 5000, pois a origem do navegador será http://localhost:5000.

Lembre-se que criamos o servidor da porta 5000 apenas para simular o front-end sendo servido em um porta diferente. O próximo passo agora é: a partir da porta 5000 do navegador, conectar o front-end ao servidor da porta 3000.

Para isso, vamos passar como parâmetro a string "http://localhost:3000/" para a função io, como no código abaixo:
```
const socket = io("http://localhost:3000");
```

Salvando o arquivo e atualizando a página de login no navegador, agora teremos no console do navegador uma mensagem de erro como a seguinte:

Access to XMLHttpRequest at 'http://localhost:3000/socket.io/?EIO=4&transport=polling&t=OK7nDq0' from origin 'http://localhost:5000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

E é aqui que nos deparamos com o erro de CORS. Nós tentamos acessar o servidor da porta 3000 a partir da porta 5000 no navegador, e a partir da versão 3 do Socket.IO, ele não permite que essa conexão seja feita, pois a origem da URL do navegador é diferente da origem da URL do servidor.

### Resolvendo o erro de CORS
Por padrão, o Socket.IO não permite que o nosso servidor seja acessado por uma diferente origem, o que fornece uma segurança maior ao servidor. Mas se há uma origem na qual podemos confiar, podemos permitir o seu acesso. O que é exatamente o nosso caso, pois sabemos que nossa aplicação também é servida pela URL http://localhost:5000, ou seja, queremos permitir acesso a essa origem.

Para fazer isso, vamos focar nossas atenções para a seguinte linha de código do arquivo servidor.js:
```
const io = new Server(servidorHttp);
```

Neste código, estamos criando o servidor Socket.IO. A classe Server do Socket.IO pode receber um segundo parâmetro com configurações adicionais ao servidor. Vamos alterar o código para o seguinte:
```
const io = new Server(servidorHttp, {
  cors: {
    origin: "http://localhost:5000",
  },
});
```

Com este código, estamos dizendo que o servidor pode permitir acessos vindos da URL http://localhost:5000, mesmo que o servidor tenha sido criado na porta 3000. Atenção: é importante que a URL da propriedade origin não termine com uma /, caso contrário, ainda haverá erro de CORS.

Salvando o arquivo e atualizando a página de login no navegador (que está aberta na porta 5000), já devemos ver o erro sumir do console do navegador! E as funcionalidades do Socket.IO já devem voltar a funcionar normalmente.

A propriedade origin também pode ser um array com diversas origens que queiramos dar acesso:
```
const io = new Server(servidorHttp, {
  cors: {
    origin: ["http://localhost:5000", "http://localhost:5001"],
  },
});
```

Nós trabalhamos apenas com URLs locais, mas o mesmo passo a passo seria realizado caso o WebSockets estivesse sendo utilizado em um aplicação com um domínio de verdade na internet.

Você pode ler mais informações sobre como lidar com CORS no servidor, na página Handling CORS da documentação! Além disso, você também pode acessar a página Client Initialization para consultar as diferentes formas de conectar o cliente com o servidor.