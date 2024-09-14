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

---

## explorando cookies no front-end
### Entendendo o document.cookie
Como você já aprendeu, o objeto global document no front-end fornece diversas propriedades e métodos que nos auxiliam no desenvolvimento. Uma das propriedades é a document.cookie, que é uma string que armazena todos os cookies guardados no navegador.

Se você imprimir document.cookie no console do navegador, vai obter uma string que segue a seguinte sintaxe:
```
"<nomeDoCookie1>=<valorDoCookie1>; <nomeDoCookie2>=<valorDoCookie2>; <nomeDoCookie3>=<valorDoCookie3>"
```

Um cookie, assim como um objeto do JavaScript, armazena um par chave/valor. Na string guardada por document.cookie, cada cookie é separado por um ponto e vírgula (;), e a chave e o valor de cada cookie é separado por um sinal de igual (=).

Caso não haja nenhum cookie armazenado no navegador, document.cookie retorna uma string vazia.

### Definindo um novo cookie
Para definir um novo cookie no navegador, você pode utilizar um código como o seguinte:
```
document.cookie = "nomeDoCookie=valorDoCookie;path=/";
```

Ao ler o código, talvez você pense: “Ué, mas essa atribuição não vai sobrescrever os cookies que já estão armazenados no navegador?”

Respondendo sua pergunta: não, pois document.cookie não é uma string convencional do JavaScript. “Por baixo dos panos”, ao atribuir um novo valor para document.cookie, o JavaScript entende que queremos adicionar um novo cookie. Além disso, podemos acrescentar apenas um cookie por vez com essa sintaxe.

Note que você também pode adicionar configurações em relação a esse cookie que irão definir seu comportamento, ou como ele deve ser guardado no navegador. Essas configurações são chamadas de atributos. Um novo atributo é sempre precedido por um ponto e vírgula (;) na string que atribuímos a documento.cookie.

Ao final desta atividade, há links com mais informações sobre os atributos que podemos passar para os cookies.

Nós também podemos reescrever o valor de um cookie já existente ou até mesmo reescrever as informações adicionais, basta utilizarmos a mesma sintaxe:
```
document.cookie = "nomeDoCookie=novoValor";
```

No código acima, reescrevemos o cookie nomeDoCookie com o valor novoValor, e também removemos qualquer atributo adicional que pudesse estar junto com o cookie anteriormente (por exemplo, ;path=/).

### Obtendo o valor de um cookie
Agora que já sabemos como ler todos os cookies armazenados e como definir um novo, como podemos acessar o valor de um cookie específico?

Para isso, podemos fazer manipulações puras com JavaScript na string retornada por document.cookie. Para demonstrar esse processo, vamos utilizar a seguinte string como exemplo:
```
"cookie1=valor1; cookie2=valor2; cookie3=valor3"
```

Digamos que você queira obter o valor do cookie que tem o nome cookie2. Para isso, você pode utilizar o método split das strings do JavaScript para criar um array de strings, separadas por um ponto e vírgula seguido de um espaço ("; ").

E no novo array criado, você pode utilizar o método find de arrays, em conjunto com o método startsWith de strings, para buscar pela string que inicia com "cookie2=".

Primeiro, vamos analisar o array retornado por document.cookie.split("; "):
```
["cookie1=valor1", "cookie2=valor2", "cookie3=valor3"]
```

Agora, aplicando o método find no array obtido, podemos obter especificamente a string do cookie2, com o seguinte código:
```
document.cookie
  .split("; ")
  .find((cookie) => cookie.startsWith("cookie2="))
```

Após obter a string "cookie2=valor2", podemos acessar o valor do cookie ao utilizar novamente o método split de arrays, separando a chave e o valor do cookie pelo sinal de igual (=). Com isso, obteremos um array com a chave na posição 0 e o valor na posição 1.

Assim, podemos obter o valor do cookie, conforme é mostrado a seguir:
```
document.cookie
  .split("; ")
  .find((cookie) => cookie.startsWith("cookie2="))
  ?.split("=")[1];
```

Note que ao final do código acessamos o método split por meio da sintaxe ?.split em vez de apenas .split. Caso você não conheça, o ?. é o operador de Encadeamento opcional do JavaScript.

Esse operador é utilizado para prevenir especificamente o famoso erro de tentar acessar uma propriedade de null ou undefined. Nós utilizamos ele, nesse caso, pois o retorno do método find pode ser undefined, que é justamente quando o método não encontra nenhum item no array que satisfaz a condição passada. Não é nossa situação atual, mas poderia ser se estivéssemos procurando pelo nome de um cookie que não existe.

Assim, finalmente o código irá retornar o valor do cookie2, que é valor2!

### Removendo um cookie
Para remover um cookie específico (por exemplo, o cookie3), também atribuímos uma string para document.cookie, com um código como na sequência abaixo:
```
document.cookie = "cookie3=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
```

O código acima sobrescreve o cookie3 ao adicionar o atributo expires=Thu, 01 Jan 1970 00:00:00 GMT. Esse atributo especifica a data de expiração do cookie, e a definimos para seu menor valor possível aceito, que é a data de 1º de Janeiro de 1970. Ao especificar esse atributo para uma data que já passou, o cookie é removido automaticamente de document.cookie.

---

## middlewares globais e namespaces
No último vídeo, você aprendeu a registrar um middleware em um namespace específico. Mas digamos que você queira realizar uma verificação para todas as páginas do seu sistema. Nesse caso, você precisaria registrar um middleware em todos os namespaces da sua aplicação, ou seja, um middleware global. Como você faria isso?

Na versão 2 do Socket.IO você alcançaria esse feito registrando um middleware diretamente no namespace principal. Confira o código abaixo e os seus comentários:
```
// Versão 2 do Socket.io

io.use((socket, next) => {
  // Este seria um middleware global na versão 2 do Socket.IO
  next();
});

io.of("/namespace-personalizado").use((socket, next) => {
  // Este middleware seria executado após o middleware global
  next();
});
```

Ou seja, o método io.use registraria um middleware global, e até mesmo uma conexão direcionada a um namespace personalizado teria que passar pelo middleware global.

Entretanto, a partir da versão 3 do Socket.IO, esse não é mais o caso. Agora, um middleware registrado no namespace principal é executado apenas pelo cliente que tentar acessá-lo diretamente. Confira os novos comentários no código abaixo:
```
// A partir da versão 3 do Socket.io

io.use((socket, next) => {
  // Este middleware é executado apenas quando o cliente tenta se conectar diretamente ao namespace principal
  next();
});

io.of("/namespace-personalizado").use((socket, next) => {
  // Quando o cliente tenta se conectar a este namespace personalizado, ele passa por este middleware, mas não pelo middleware do namespace principal
  next();
});
```

Nas versões mais recentes, podemos dizer que a separação entre os namespaces se torna mais consolidada. Então, como fazemos agora para registrar um middleware global, que se aplica a todos os namespaces?

Confira duas diferentes abordagens para resolver esse problema:

1) Registre o middleware manualmente em cada namespace:

Confira o seguinte código:
```
function middlewareGlobal (socket, next) {
  // verificações a serem feitas...
  next();
};

io.use(middlewareGlobal);
io.of("/namespace-personalizado").use(middlewareGlobal);
```

Ao declarar a função middleware separadamente, podemos utilizá-la como callback do método use de todos os namespaces.

2) Use o evento new_namespace:

O evento new_namespace é emitido sempre que um novo namespace é criado. Assim, podemos escutar esse evento para registrar o middleware a cada novo namespace criado. Confira o código abaixo:
```
const middlewareGlobal = (socket, next) => {
  // verificações a serem feitas...
  next();
};

// ainda precisamos registrar o middleware manualmente no namespace principal
io.use(middlewareGlobal);

io.on("new_namespace", (namespace) => {
  namespace.use(middlewareGlobal);
});

// declare os namespaces personalizados após registrar o ouvinte de "new_namespace"
io.of("/namespace-personalizado");
```

É importante que os novos namespaces sejam criados após registrar o ouvinte do evento new_namespace. Se um namespace for criado antes desse ouvinte, o middleware não será registrado nele.

Por esse mesmo motivo, note que precisamos registrar o middleware global manualmente no namespace principal, já que ele é criado antes do ouvinte do evento new_namespace.