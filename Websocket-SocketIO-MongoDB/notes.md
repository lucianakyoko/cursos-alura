# WEBSOCKETS: IMPLEMENTE COMUNICAÇÕES EM TEMPO REAL COM SOCKET.IO E MONGODB

---

## Aula 01 - Crianto o Alura Docs
**Protocolo WebSockets**
Esse protocolo permite o desenvolvimento de aplicações que possuem comunicação em tempo real entre cliente e servidor. Por exemplo, em aplicações onde há um bate-papo em tempo real ou mesmo em jogos online.

**Comparando protocolo HTTP com Websockets:**
  * Protocolo HTTP: Modelo de requisição e resposta do protocolo HTTP. Temos o cliente de um lado e o servidor do outro, e sempre acontece uma requisição do cliente para o servidor e, após um tempo de operações, o servidor devolve uma resposta para o cliente.
    - Cliente sempre inicia a comunicação;
    - Cliente aguarda a resposta do servidor para cada requisição;
    - Servidor responde e encerra a comunicação.
  
  Caso o cliente precise de outra informação do é preciso iniciar uma nova comunicação e esses processos acontecerão novamente.


  * Protocolo Websockets: Nele não temos o modelo tradicional de requisição e resposta, teremos agora um modelo de comunicação baseado em eventos. Então, teremos o cliente de um lado e o servidor do outro.

  Como acontecem esses eventos? Basicamente, tanto o cliente quanto o servidor podem ficar "escutando" o tempo inteiro a emissão de algum evento. Por exemplo, o servidor pode acompanhar um evento de submissão de formulário, por exemplo, o servidor vai imediatamente capturar esse evento.

  É um modelo de comunicação mais dinâmico e imediato. Não tem aquele atraso que costuma ter o modelo de requisição e resposta. Outra coisa interessante é que sempre que o cliente se conectar ao servidor será criado um socket, uma conexão, para esse cliente e esse servidor. **Para cada cliente conectado no servidor teremos um socket ativo**.

  Outra diferença é que tanto o cliente quanto o servidor podem emitir eventos. É o que chamamos de comunicação bidirecional. Diferente do modelo HTTP onde o cliente sempre inicia a conexão, no WebSockets tanto o cliente quanto o servidor podem emitir eventos independentemente de o outro ter emitido algum evento antes.

    - Comunicação baseada em eventos;
    - Cliente se conecta ao servidor (socket);
    - Cliente ou servidor podem emitir um evento (comunicação bidirecional).
  
  O WebSockets é mais útil nos casos em que queremos essa interação em tempo real, como acontece nos games online, por exemplo. Para os outros casos, onde o modelo HTTP já está sendo utilizado, podemos manter o HTTP, pois ele supre as nossas necessidades.

**Criando Servidor:**
Para conseguirmos utilizar o protocolo WebSockets precisamos ter o servidor Node rodando.

- No terminal faremos o comando npm init -y, o "Y" serve para responder "sim" às perguntas que o terminal faz ao criarmos um novo projeto em Node: ```npm init -y```. Ao executar esse comando, foi criado o arquivo package.json na raiz do nosso projeto.
-  Feito isso, podemos instalar o Express, que utilizaremos para fazer um servidor Node básico. Vamos baixar a versão 4 do Express. ```npm install expres@4```
- No arquivo package.json, adicionaremos, logo antes da parte de scripts, mais uma configuração de uma propriedade type com valor module para conseguirmos utilizar os módulos do ECMAScript para usarmos palavras-chaves como import e export.
  ```
    "name": "alura-docs",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "type": "module",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
  ```
- Na pasta raiz do projeto criaremos uma nova pasta chamada "src". Dentro da pasta "src" criaremos um arquivo chamado servidor.js. Começaremos importando o Express.
  ```import express from "express";```
- Com isso, já conseguiremos criar um app do Express com a constante app recebendo express(). Em seguida vamos declarar a porta que vai receber process.env.porta ou 3000, colocaremos duas barras verticais (||) para indicar o "ou" do JavaScript.
  ```
  import express from "express";

  const app = express();
  const porta = process.env.porta || 3000;
  ```
- Agora podemos informar qual porta a app vai "escutar" com app.listen(), os parâmetros serão porta o segundo parâmetro será a função callback que pode executar um console.log() com uma template string informando que o servidor está escutando na porta, e faremos uma interpolação para inserir a constante porta ${porta}.
```
  import express from "express";

  const app = express();
  const porta = process.env.porta || 3000;

  app.listen(porta, () => console.log(`Servidor escutando na porta ${porta}`)
```
- Agora precisamos adicionar um script em package.json após o script test. Adicionaremos o script dev e o valor dele será uma string com o valor node src/servidor.js.
  ```
    "dev": "node src/servidor.js"
  ```
  ```
    {
    "name": "alura-docs",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "type": "module",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "dev": "node src/servidor.js"
    },
  ```

- Podemos salvar o projeto. Vamos abrir o terminal do VS Code e executar o comando npm run dev para executar esse script. ```npm run dev```. O retorno no terminal foi: ```Servidor escutando na porta 3000```

**Agora, vamos fazer o nosso servidor mostrar as páginas HTML que estão na pasta "public" do nosso projeto:**
Para isso, vamos fazer algumas configurações:
  - Primeiro, vamos escrever no início do arquivo servidor.js importando a url e o path:
    ```
    import express from "express";
    import url from "url";
    import path from "path";

    const app = express();
    const porta = process.env.porta || 3000;

    app.listen(porta, () => console.log(`Servidor escutando na porta ${porta}`)
    ```
  - Em seguida, abaixo de const porta vamos pegar o caminho atual para navegar até o diretório da pasta "public". Usaremos url.fileURLToPath, que é um método do módulo URL, com o parâmetro import.meta.url.
    ```
    const caminhoAtual = url.fileURLToPath(import.meta.url);
    ```
    Isso vai nos dar exatamente o caminho atual de onde estamos até o servidor.js. Queremos navegar até a pasta "public", então escreveremos em seguida um const diretorioPublico que vai receber path.join onde passaremos como primeiro parâmetro o caminhoAtual e o segundo parâmetro será uma string subindo dois níveis a partir do caminho atual "../..". No primeiro par de pontos vamos sair do arquivo atual e ir para o diretório atual, que é a pasta "src", e no segundo par de pontos vamos subir mais um nível e ir para a pasta raíz do projeto.
  - Estando na pasta raiz, queremos navegar para a pasta "public": "../..", "public").
    ```
    const caminhoAtual = url.fileURLToPath(import.meta.url);
    const diretorioPublico = path.join(caminhoAtual, "../..", "public");
    ```
  - E, ao chegar no diretório "public" podemos fazer app.use passando express.static como parâmetro e o parâmetro de static será o diretorioPublico.
    ```
    const caminhoAtual = url.fileURLToPath(import.meta.url);
    const diretorioPublico = path.join(caminhoAtual, "../..", "public");
    app.use(express.static(diretorioPublico));
    ```
    Com esta última linha, app.use(express.static(diretorioPublico)), queremos informar que desejamos que o Express utilize o diretório público de forma estática e vamos poder disponibilizá-los no navegador.
  - Vamos salvar o arquivo que ficou assim:
    ```
    import express from "express";
    import url from "url";
    import path from "path";

    const app = express();
    const porta = process.env.porta || 3000;

    const caminhoAtual = url.fileURLToPath(import.meta.url);

    const caminhoAtual = url.fileURLToPath(import.meta.url);
    const diretorioPublico = path.join(caminhoAtual, "../..", "public");
    app.use(express.static(diretorioPublico));

    app.listen(porta, () => console.log(`Servidor escutando na porta ${porta}`)
    ```
  - Agora vamos pausar o servidor e executá-lo novamente. ```npm run dev```

**Para resolver o problema de ter que reiniciar o servidor sempre que fazemos alguma alteração no nosso projeto.**
Para isso, utilizaremos a biblioteca nodemon, que vai nos ajudar a reiniciar o servidor automaticamente.
  - Rodaremos o comando: ```npm install nodemon@2 -D```
  - Ao executar o comando o nodemon foi instalado. Podemos conferir no fim do arquivo package.json que o nodemon está instalado como dependência de desenvolvimento.
    ```
    "devDependencies": {
    "nodemon": "^2.0.20"
    }
    ```
  - Por fim, para utilizar o nodemon de fato, vamos alterar o script dev, nele trocaremos "node" por "nodemon":
    ```
     "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/servidor.js"
    },
    ```

**Utilizando o Socket.IO:**
Para utilizar o protocolo Web Sockets usaremos a biblioteca [Socket.IO](https://socket.io/).
 - primeira coisa a fazer é abrir o terminal integrado, pausar o servidor e instalar a versão 4 do Socket.IO. ```npm install socket.io@4```
 - Em seguida, vamos abrir o código do arquivo servidor.js para importar algumas coisas que precisaremos, uma delas é o módulo http do Node. ```import http from "http";``` Precisaremos desse módulo para fazer um servidor HTTP.
 - Criaremos ele antes de app.listen. O servidorHttp recebe http.createServer() que receberá o app como parâmetro.
 - Uma coisa importante, que o Socket pede que façamos é em vez de escrever app.listen no nosso código escrevemos servidorHttp.listen:
  ```
  const servidorHttp = http.createServer(app);

  servidorHttp.listen(porta, () =>
    console.log(`Servidor escutando na porta ${porta}`)
  ```
- Feito isso, vamos importar o Server do próprio Socket.IO: ```import { Server } from "socket.io";```
- No fim do arquivo servidor.js utilizaremos o server da seguinte forma, const io recebe new Server() com o servidorHttp como parâmetro. ```const io = new Server(servidorHttp);```
  Essa constante io vai dar métodos do Socket que poderemos utilizar no nosso desenvolvimento. O primeiro deles será o io.on() esse "on" significa justamente "escutar" algum evento. O primeiro parâmetro que usaremos no io.on() será uma string chamada connection e o segundo parâmetro será uma função callback que será executada quando o servidor escutar o evento connection.

O protocolo WebSockets é baseado em eventos nos quais tanto o servidor quanto o cliente podem emitir eventos. Ou seja, assim que algum cliente emitir um evento chamado connection o servidor escutará esse evento e vai executar o que está dentro dessa função callback. Vamos inserir nessa função um console.log() que exibirá a informação "Um cliente se conectou!".

```
const io = new Server(servidorHttp);

io.on("connection", () => {
  console.log("Um cliente se conectou!");
}); 
```

- Podemos salvar o nosso código e reiniciar o servidor com o comando: ```npm run dev```.
- Para termos certeza de que o código está funcionando, precisamos fazer o cliente se conectar lá no lado do front-end. Para fazer isso, precisamos usar o Socket.IO do lado do front-end também. Precisamos usá-lo na página documento.html. na [documentação](https://socket.io/pt-br/get-started/chat#integrating-socketio) encontraremos um bloco de código pronto para isso. No tópico que trata sobre integração do Socket.IO, é o terceiro bloco de código:
  ```
    //bloco de código da documentação Socket.IO

    <script src="/socket.io/socket.io.js"></script>
    <script>
      var socket = io();
    </script>
  ```
- Vamos selecionar e copiar apenas a primeira linha da tag <script> para aplicá-la na página documento.html: ```<script src="/socket.io/socket.io.js"></script>```
- Vamos para o VS Code, abriremos o arquivo documento.html e, no final desse arquivo, logo antes do fechamento da tag </body> vamos colar a linha que copiamos.
  ```
  <script src="/socket.io/socket.io.js"></script>
  </body>
  ``` 
Essa tag ```<script>``` vai fornecer algumas variáveis que o Socket vai disponibilizar para usarmos no lado do front-end. Para usar essas variáveis, vamos criar um arquivo JavaScript para isso. Dentro da pasta "public" criaremos um arquivo chamado documento.js.

- Voltando para documento.html, abaixo da tag script que colamos vamos inserir uma nova tag script e o src dela será documento.js. É assim que fazemos no front-end para ligar um arquivo JavaScript com um arquivo HTML. Nessa tag também vamos adicionar um atributo chamado type com o valor module para conseguirmos usar os módulos do ECMAScript do lado do front-end.
  ```
    <script src="/socket.io/socket.io.js"></script>
    <script src="documento.js" type="module"></script>
  </body>
  ```
- Pronto, já conectamos os arquivos. Agora, por conta do script que pegamos na documentação, seremos capaz de escrever a seguinte linha de código em documento.js: ```const socket = io();```

E podemos salvar esse arquivo. Quando essa linha de código for executada, o Socket vai conectar a pessoa que entrou nesse arquivo HTML com o nosso servidor JavaScript.

Quando ele conectar, esperamos que o cliente emita um evento chamado connection. Esse é o funcionamento interno do Socket.IO, assim que uma conexão é feita, o evento connection será emitido pelo cliente. E esperamos que o servidor escute e execute nosso console.log().

**WebSockets e Socket.IO:**
O protocolo WebSockets foi implementado em 2011 e é suportado por praticamente todos os navegadores modernos. A documentação na [MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/WebSockets_API) fornece mais detalhes sobre o protocolo e como você pode escrever aplicações WebSockets utilizando JavaScript puro.

A biblioteca Socket.IO, permite que trabalhemos com o protocolo WebSockets de forma mais facilitada. Você pode conferir nessa seção as vantagens que ela fornece, como essas abaixo:
  - **Long-polling do HTTP usado como reserva**: caso o navegador não tenha suporte ao protocolo WebSockets, o Socket.IO trocará automaticamente para o modo long-polling do HTTP. Esse modo não é tão eficiente quanto o WebSockets, mas funciona de forma semelhante, e mantém uma conexão ativa entre o cliente e o servidor por um determinado período de tempo, sendo melhor que o modelo requisição-resposta tradicional do HTTP.
  - **Reconexão automática**: caso algum cliente não consiga se conectar ao servidor, o Socket.IO tentará periodicamente conectá-lo novamente, o que vai aumentar o tamanho desse período a cada tentativa.
  - **Buffer de pacotes**: quando um cliente é desconectado, seus pacotes de dados são guardados e, quando o cliente for reconectado, eles serão enviados automaticamente.

---

## Aula 02 - Trabalhando com Socket.IO
**DevTools:**
O DevTools permite às pessoas desenvolvedoras realizar diversas ações: acessar e modificar os códigos HTML e CSS de um site; um console próprio para rodar código JavaScript; depuração; análise de rede e performance e muito mais!

**Obtendo id do socket:**
  - Agora, vamos abrir o arquivo servidor.js. No io.on a função callback pode nos trazer alguns parâmetros do evento, por exemplo, o socket. E no console.log() podemos escrever o seguinte "(Um cliente se conectou! ID:, socket.id)". Concatenando com socket.id.
  ```
  const io = new Server(servidorHttp);

  io.on("connection", (socket) => {
    console.log("Um cliente se conectou! ID:", socket.id);
  });
  ```

  O socket será disponibilizado por cada conexão feita com o cliente. Esse socket tem várias informações, uma delas é o id.

  - Vamos salvar o arquivo, voltar ao navegador e atualizar a página do documento. Agora o terminal do VS Code está exibindo a mensagem com o id, que é um identificador único com vários caracteres aleatórios: ```Um cliente se conectou! ID: bkAzHsrlaxrPU0c2AAAB```

  - Vamos criar um novo arquivo dentro da pasta "src". Nomearemos esse novo arquivo de socket-back.js. E no servidor.js vamos recortar o seguinte trecho de código:
    ```
    io.on("connection", (socket) => {
      console.log("Um cliente se conectou! ID:", socket.id);
    });
    ```
  
  - e vamos exportar a constante io escrevendo abaixo dela o código export default io no fim do arquivo servidor.js.
  ```
  const io = new Server(servidorHttp);

  export default io;
  ```

  - Vamos salvar o arquivo e ir para o socket-back.js. Nele vamos colar o código que recortamos e com o cursor em io podemos usar o atalho "Ctrl + Espaço" para importar io de servidor.js. Lembrando de preencher com .js no final do nome do arquivo na linha de importação que foi criada automaticamente.
  ```
  import io from "./servidor.js"

  io.on("connection", (socket) => {
    console.log("Um cliente se conectou! ID:", socket.id);
  });
  ```

  - Em seguida, em package.json teremos que mudar o ponto de partida da nossa aplicação. O nodemon está observando apenas o servidor.js, teremos que trocar para socket-back.js;
  ```
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/socket-back.js"
  },
  ```

  Agora sim, o socket-back.js será o ponto de partida da nossa aplicação. Podemos salvar o package.json. Ele vai importar o io do servidor e utilizar o código normalmente.

  Como fizemos uma alteração no package.json precisaremos reiniciar o servidor.
  ```
  Servidor escutando na porta 3000

  Um cliente se conectou! ID: 8rXwF&PDbM1AXynkAAAB

  Um cliente se conectou! ID: ZIksWOqxq9GoNzSZAAD
  ```

**Emitindo eventos:**
Com os arquivos separados podemos iniciar o desenvolvimento da comunicação entre clientes do Socket.IO.
  - Para isso, vamos ao arquivo JavaScript relacionado a página de documento do HTML, o documento.js (dentro do pacote "public").
  ```
    //documento.js
    const socket = io();
  ```

    Por enquanto, estamos aplicando somente o const socket = io(), sendo o que estabelece a conexão entre cliente e servidor. Entretanto, nesse mesmo arquivo, podemos interagir com os elementos do HTML, mais especificamente com o campo de texto.

  - Se podemos interagir com esse elemento, podemos capturar os valores que os clientes estão digitando no campo de texto. Para tal, abriremos o documento.html e localizaremos a tag do HTML que representa o campo de texto que visualizamos na tela.

    ```
    <!DOCTYPE html>
    <html lang="pt-BR">

    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

      <title>Documento</title>
    </head>

    <body class="mt-3">
      <header>
        <h1 class="display-4 mb-4 text-center" id="titulo-documento">Documento sem título</h1>
      </header>

      <main class="w-75 mx-auto">
        <textarea id="editor-texto" class="form-control mb-4" style="height: 400px; resize: none;"></textarea>

        <div class="d-flex justify-content-between">
          <a href="index.html" class="btn btn-primary">Voltar</a>
          <button id="excluir-documento" class="btn btn-outline-danger">Excluir documento</button>
        </div>
      </main>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"></script>

      <script src="/socket.io/socket.io.js"></script>
      <script src="documento.js" type="module"></script>
    </body>

    </html> 
    ```
  - Focaremos na tag textarea localizada na linha 21:
    ```
    //documento.html
    //código omitido

    <main class="w-75 mx-auto">
        <textarea id="editor-texto" class="form-control mb-4" style="height: 400px; resize: none;"></textarea>

    //código omitido
    ```

  - Estamos interessados(as) no atributo id da tag textarea. Vamos copiar o valor do id, precisaremos dele para capturarmos esse elemento com JavaScript. ```editor-texto```
  - Com o valor do id copiado, voltaremos ao documento.js. ```const socket = io();```
  - Para capturar aquele elemento usando JavaScript, digitamos const textoEditor que receberá (=) o document.getElementById() (código específico do front-end, não precisamos nos preocupar) passando como parâmetro o "editor-texto". Este nome é do id do elemento HTML que desejamos localizar.
    ```
    const socket = io();
    const textoEditor = document.getElementById("editor-texto");
    ```
  - Com isso, temos o elemento HTML armazenado em uma constante do JavaScript. Agora, vamos escrever textoEditor.addEventListener(), sendo "keyup" o primeiro parâmetro do método.
    ```
    //código omitido

    textoEditor.addEventListener("keyup",)
    ```
  - O segundo parâmetro será uma função callback executada sempre que o usuário soltar uma tecla ao digitar no campo de texto. Note que isso é um conceito de eventos do front-end, e precisamos tomar cuidado para não confundirmos com os conceitos de eventos do Socket.IO.
    ```
    //código omitido

    textoEditor.addEventListener("keyup", () => {

    })
    ```
    Isso porque no front-end existem eventos HTML (soltar e pressionar uma tecla, clicar, etc). O evento que inserimos é o keyup, sendo quando o usuário solta a tecla no elemento de texto editor. Ou seja, quando um usuário soltar uma tecla executaremos o código correspondente a função callback (segundo parâmetro).

  - Para testarmos isso, colocamos no escopo da função callback o console.log("Soltou tecla!").
    ```
    //documento.js
    //código omitido

    textoEditor.addEventListener("keyup", () => {
        console.log("Soltou tecla!");
    })
    ```
  - Código completo:
    ```
    //documento.js

    const socket = io();

    const textoEditor = document.getElementById("editor-texto");

    textoEditor.addEventListener("keyup", () => {
      console.log("Soltou tecla!");
    });
    ```
  - Ao executarmos o console.log() do lado do front-end, o texto não será exibido no terminal do VS Code. Na verdade, a mensagem será mostrada no console do navegador.

  - Voltando ao arquivo documento.js, daremos um console.log na tecla que foi solta, ou melhor, no texto atualizado no campo de texto. Para isso, ao invés de "Soltou tecla!" colocamos "textoEditor.value".
  ```
  //documento.js

  const socket = io();

  const textoEditor = document.getElementById("editor-texto");

  textoEditor.addEventListener("keyup", () => {
    console.log("textoEditor.value");
  });
  ```

- Após alterar, salvamos o arquivo. Agora, atualizamos a página do navegador e no campo de texto vamos digitar "qualquer coisa". Observe que conforme escrevemos, cada caractere foi exibido no console do navegador, com o texto atualizado do front-end.

Isso significa que temos essa informação disponível para nós no front-end e podemos enviá-la para o back-end. A partir disso, entrará o Socket.IO.

**que dados posso enviar?**
Você aprendeu como emitir o seu primeiro evento no Socket.IO com o método emit()!

Para isso, utilizamos esse método do lado do cliente, para em seguida poder escutá-lo do lado do servidor com o método on().

Também vimos que os eventos do Socket.IO podem carregar dados no segundo parâmetro do método emit(). No nosso caso, enviamos o texto do editor, um dado do tipo string. Mas além desse, quais outros tipos de dados eu posso enviar junto com os eventos?

O Socket.IO permite que qualquer dado serializável do JavaScript possa ser enviado junto com um evento. Um dado serializável é um dado que pode ser convertido em um determinado formato e, posteriormente, pode ser convertido de volta para sua forma original. Chamamos a recuperação do dado de desserialização.

O JavaScript possui os métodos nativos JSON.stringify() e JSON.parse() para, respectivamente, serializar e desserializar diversos tipos de dados, como os tipos primitivos, arrays e objetos. Alguns tipos de dados, como undefined, Function, Symbol, Infinity, NaN, entre outros, não são serializados corretamente com estes métodos, pois não são dados aceitos no formato JSON.

Acesse a documentação do [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
) para estudar mais sobre quais tipos de dados podem ser serializados!

Podemos falar que, “por debaixo dos panos”, os métodos JSON.stringify() e JSON.parse() são utilizados pelo Socket.IO ao enviar e receber os dados carregados pelos eventos! Dessa forma, não precisamos utilizá-los manualmente para a maioria dos tipos de dados.

Entretanto, uma atenção especial deve ser tomada para os tipos Map e Set do JavaScript. Eles não são serializados corretamente se utilizarmos JSON.stringify(), mas possuem métodos próprios para serialização.

Um objeto Map pode ser serializado e desserializado com o seguinte código:
```
const mapa = new Map();
const mapaSerializado = [...mapa.entries()];
const mapaOriginal = new Map(mapaSerializado);
```

De forma semelhante, um objeto Set pode ser serializado e desserializado com o seguinte código:
```
const set = new Set();
const setSerializado = [...set.keys()];
const setOriginal = new Set(setSerializado);
```

O tipo [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) também merece atenção especial. Ao enviar um objeto Date como dado de um evento, ele será convertido para sua representação em string (por exemplo, 2022-11-03T19:11:54.073Z).

Então, ao receber esse dado do outro lado da comunicação, ele deve ser convertido de volta para o tipo Date. Para fazer isso, utilizamos o construtor Date(), passando a representação em string da data como parâmetro, como no exemplo a seguir:
```
const dataStr = "2022-11-03T19:11:54.073Z";
const data = new Date(dataStr);
```
Confira essas informações na seção [Emitting Events](https://socket.io/docs/v4/emitting-events/) da documentação!


**Do servidor para os clientes**
Já conseguimos pegar informações do front-end e exibir no back-end. Conforme alguém digitar no documento, o texto digitado vai aparecer no terminal do VS Code, do lado do servidor.

Agora, queremos enviar de forma simultânea essa informação para todo mundo que estiver conectado naquela página de documento. Vamos fazer isso agora.

No VS Code, podemos abrir o arquivo socket-back.js. Agora queremos fazer o servidor pegar informação do texto que estamos recebendo como parâmetro da função callback e emitir para todos os outros clientes.

- Para fazer isso, podemos escrever io.emit() passando por exemplo o evento texto_editor_clientes e em seguida passando o texto como parâmetro.

  ```
  socket.on("texto_editor", (texto) => {
    io.emit("texto_editor_clientes", texto);
  });
  ```
- Vamos salvar o arquivo com esse código para vermos o que vai acontecer. Imediatamente quando o servidor escutar um evento vindo do front-end, ele vai emitir de volta para todos os clientes.

- Para verificar se isso está funcionando, vamos adicionar a seguinte linha de código no documento.js para escutar do lado do cliente, socket.on(). O primeiro parâmetro será texto_editor_clientes e o segundo será uma função callback:

  ```
  socket.on("texto_editor_clientes", (texto) => {

  })
  ```

- Então, não importa se estamos no lado do front-end ou de back-end, a estrutura de escutar um evento e de emitir é praticamente a mesma.

- Em seguida, vamos inserir um console.log(texto) para verificar se agora aparecerá para todos os navegadores que estão conectados nesta mesma página.
  ```
  socket.on("texto_editor_clientes", (texto) => {
  console.log(texto);
  })
  ```
- Vamos salvar o código e voltar ao navegador para verificar se está funcionando.

- Colocarei as duas abas do navegador com a página documento lado a lado. Assim conseguiremos simular duas pessoas acessando o documento. Vou deixar também o console do navegador aberto nas duas abas, assim poderemos verificar se o console.log() vai aparecer.

- Agora precisamos pegar essa informação e atualizar a interface para que esse texto apareça no campo de texto de todo mundo que esteja conectado nesta página.

- Um ponto importante é que faz sentido que a pessoa que escreveu "Olá" envie esse texto para todas as pessoas, mas não queremos que esse texto seja enviado para ela mesma. Como ela também está conectada no servidor esse texto foi enviado para ela via console.log(), mas não é necessário.

- Uma forma de evitar isso é voltarmos ao código do arquivo socket-back.js e em vez de escrever io.emit podemos escrever socket.broadcast.emit para emitir esse evento para todos os cliente menos para o cliente que está conectado nesse socket.

```
socket.on("texto_editor", (texto) => {
  socket.broadcast.emit("texto_editor_clientes", texto);
});
```

- É interessante perceber que o servidor está sempre ciente de qual cliente está conectado em cada socket. No momento em que escrevemos socket.broadcast.emit ele é inteligente o suficiente para enviar essa informação para todo mundo, menos para o cliente deste socket.

- Vamos salvar o arquivo e atualizar o navegador para testar essa alteração.

- Agora, ao escrever no campo de texto da página do documento, o texto não está aparecendo no console da janela em que estou escrevendo, mas aparece no console da outra janela. Está funcionando corretamente.

**Atualizando a interface**
Agora vamos inserir um código no front-end para atualizar exibindo o texto na interface das outras pessoas.

  - No arquivo documento.js, dentro de socket.on(), em vez de dar um console.log() vamos escrever que textoEditor.value recebe texto.
    ```
      socket.on("texto_editor_clientes", (texto) => {
        textoEditor.value = texto;
      });
    ```
    Agora ele vai atualizar o valor na interface com o texto que estamos recebendo como parâmetro.

  - Podemos salvar o arquivo e atualizar o navegador para testar.

  - Agora, ao escrever no campo de texto de uma janela, o texto aparece em tempo real na outra janela e vice-versa. Já estamos vendo a magia do WebSocket acontecer.


**Organizando arquivos**
Agora vamos melhorar a organização dos arquivos do nosso projeto.

Podemos ver que em documento.js temos um código que utiliza funções do código mas, ao mesmo tempo, manipula elementos do documento.html e também estamos usando eventos do DOM. O código está um tanto misturado. É uma boa prática separar a parte de funções do HTML e a parte de funções do socket.

- Para começar, criaremos um novo arquivo na pasta "public". Nomearemos esse arquivo como socket-front-documento.js.

- Em documento.js vamos recortar a primeira linha e colar no socket-front-documento.js: ```const socket = io();```

- Em seguida, no documento.js como não teremos mais acesso ao socket não conseguiremos mais escrever socket.emit nem socket.on.

- Para resolver esse problema, primeiro vamos recortar a linha do socket.emit para uma função que criaremos em socket-front-documento.js e nesta função receberemos o texto como parâmetro. Lembrando de exportar a função para usarmos no documento.js:
  ```
  const socket = io();

  function emitirTextoEditor(texto) {
    socket.emit("texto_editor", texto);
  }

  export { emitirTextoEditor };
  ```

- Voltando para documento.js podemos chamar a função emitirTextoEditor e passaremos textoEditor.value como parâmetro.
  ```
  textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor(textoEditor.value);
  });

  socket.on("texo_editor_clientes", (texto) => {
  textoEditor.value = texto;
  });
  ```

- Agora, vamos organizar o socket.on. Podemos recortar o bloco de código dele para colar no socket-front-documento.js.
  ```
  const socket = io();

  function emitirTextoEditor(texto) {
    socket.emit("texto_editor", texto);
  }

  socket.on("texo_editor_clientes", (texto) => {

  });

  export { emitirTextoEditor };
  ```

- E deixaremos o código textoEditor.value = texto guardado em uma função chamada atualizatextoEditor() no arquivo documento.js. Também exportaremos essa função:
  ```
  function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
  }

  export { atualizaTextoEditor };
  ```

- Podemos voltar ao socket-front-documento.js e chamar essa função no socket.on:
  ```
  socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto);
  });
  ```

Essa é basicamente uma refatoração que fizemos para separar responsabilidades dos arquivos. Vejamos como ficaram os nossos arquivos:
```
//Código do arquivo socket-front-documento.js:

import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function emitirTextoEditor(texto) {
  socket.emit("texto_editor", texto);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

export { emitirTextoEditor };
```

```
//Código do arquivo documento.js:

import { emitirTextoEditor } from "./socket-front-documento.js";

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
  emitirTextoEditor(textoEditor.value);
});

function atualizaTextoEditor(texto) {
  textoEditor.value = texto;
}

export { atualizaTextoEditor };
```

Agora podemos salvar o código, atualizar a página do navegador e ao testar verificamos que continua funcionando corretamente.

Com isso, temos uma melhor separação de responsabilidades. Em documento.js temos código que interage com o HTML e em socket-front-documento.js temos o código responsável pelos eventos do socket.

**eventos com mesmo nome?**
Entendemos como fazer um cliente emitir um evento para o servidor e, em seguida, fazer o servidor enviar um novo evento para vários outros clientes. Utilizamos o seguinte código em socket-back.js:
```
io.on("connection", (socket) => {
  socket.on("texto_editor", (texto) => {
    socket.broadcast.emit("texto_editor_clientes", texto);
  });
});
```

E se eu te disser que, nesse lado do servidor, também poderíamos ter emitido um evento chamado "texto_editor"? Saiba que isso não geraria conflito no código!

O código ficaria assim:
```
io.on("connection", (socket) => {
  socket.on("texto_editor", (texto) => {
    socket.broadcast.emit("texto_editor", texto);
  });
});
```

Mas também precisaríamos alterar o nome do evento em socket-front-documento.js, trocando "texto_editor_clientes" por "texto_editor":
```
socket.on("texto_editor", (texto) => {
  atualizaTextoEditor(texto);
});
```

Como já vimos antes, o protocolo WebSockets permite que tanto o cliente quanto o servidor possam emitir eventos. Um detalhe importante é que quando um dos lados da comunicação emite um evento, apenas o outro lado pode escutá-lo.

Ou seja, se o cliente emitir um evento chamado "texto_editor", apenas o servidor escutará essa emissão. Da mesma forma, se o servidor também emitir um evento com o mesmo nome "texto_editor", apenas os clientes escutarão essa emissão.

Dessa forma, é possível que você identifique algum código onde isso aconteça. A pessoa desenvolvedora pode escolher que dois eventos diferentes tenham o mesmo nome se ela julgar que eles são intrínsecos, ou que um seja uma “continuação” do outro.

No nosso caso, faria sentido. Pois, para que o texto do editor seja enviado por um cliente, chegue ao servidor, e seja enviado de volta para outros clientes, essa informação “viaja” pelos dois eventos que criamos. Ou seja, o evento emitido pelo servidor pode ser visto como a continuação do evento emitido pelo cliente.

Mas caso você queira evitar qualquer confusão na leitura do código, você pode deixar todos os eventos com nomes diferentes, como estou fazendo ao longo do curso!

**evento disconnect:**
Você sabia que existe um evento chamado “disconnect” (do inglês “desconectar”) que pode ser escutado tanto do lado do cliente quanto do servidor? Para praticar e entender melhor a conexão entre cada cliente e servidor, vamos explorar esse evento:
  - Quando um cliente é desconectado:
    
    No arquivo socket-back.js, dentro da função callback do evento “connection”, podemos adicionar o seguinte código:
      ```
      socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!
        Motivo: ${motivo}`);
      });
      ```
    Você sabe que, quando um cliente se conecta ao servidor, um evento “connection” é emitido pelo cliente e pode ser escutado por io.on(). De forma semelhante, quando um cliente é desconectado, por exemplo, quando sai da página ou a atualiza, ele emite um evento chamado “disconnect”, que pode ser escutado por socket.on() no lado do servidor.

    Se você atualizar a página de documento no navegador, deve aparecer uma mensagem como essa no terminal do VSCode:
    ```
    Cliente "9i2Fhbhe_SY4KHC0AAAB" desconectado!
    Motivo: transport close
    ```

    Perceba que o motivo de desconexão também pode ser obtido como parâmetro da função callback do evento.

    E se você manteve a linha console.log("Um cliente se conectou! ID:", socket.id); no seu código, deve aparecer logo abaixo uma mensagem como essa: ```Um cliente se conectou! ID: L0TRoI-WR7w-mUH5AAAF```

    Ou seja, com isso vemos que um socket é mantido para cada cliente que se mantém na página, e deixa de existir quando essa conexão é encerrada de alguma forma, seja atualizando ou saindo da página. Mesmo que seja a mesma pessoa no mesmo navegador, um novo socket é criado para cada vez que a página é carregada.

    Caso queiramos guardar as informações de cada pessoa que acessa a aplicação, independente de desconexões, elas devem ser armazenadas de outra forma, como no próprio navegador ou em um banco de dados, por exemplo.
  
  - Quando o servidor é desconectado:
    Também podemos escutar no lado cliente se o servidor foi desconectado de alguma forma. Em socket-front-documento.js, podemos adicionar o seguinte código:
    ```
    socket.on("disconnect", (motivo) => {
      console.log(`Servidor desconectado!
      Motivo: ${motivo}`);
    });
    ```

    Se você mantiver o navegador aberto na página de documento e encerrar o servidor, receberá a seguinte mensagem no console do navegador:
    ```
    Servidor desconectado!
    Motivo: transport close
    ```

    Você pode ler mais sobre esses eventos e os diferentes motivos de desconexão nas seções [The Socket instance (server-side)](https://socket.io/docs/v4/server-socket-instance/#disconnect) e [The Socket instance (client-side)](https://socket.io/docs/v4/client-socket-instance/#disconnect) da documentação. Essas páginas também contêm informações de outros eventos das instâncias socket tanto no lado do front-end quanto no lado do back-end, caso queira se aprofundar!

---

## Aula 03 - Avançando na comunicação
Neste ponto ao escrever algo no documento de Node, esse texto também vai aparecer no documento de JavaScript. Está havendo uma interferência entre os documentos. Não queremos isso.

Precisamos obter a informação de qual documento está sendo acessado para poder enviar apenas para os clientes que também estão nesse documento e não ter essa interferência de informações em documentos variados.

Voltando ao VS Code, podemos verificar no socket-back.js que estamos enviando para todo mundo justamente na linha de código socket.broadcast.emit. É nesta linha que precisaremos mudar nosso código para mandar apenas para os clientes que estão em determinado documento.

  - Primeiro, precisamos pegar o nome do documento em que o cliente se conectou.

  - Faremos isso no arquivo documento.js. Antes de const textoEditor vamos criar a constante parametros, que serão os parâmetros da URL, ele vai receber new URLSearchParams(), essa é uma classe do próprio front-end. E passaremos window.location.search como parâmetro.

  - Em seguida, const nomeDocumento vai receber parametros.get("nome"). Esse nome é o parâmetro que é passado pela URL, no documento de JavaScript o endereço que aparece na URL do navegador é /documento.html?nome=JavaScript.
    ```
    const parametros = new URLSearchParams(window.location.search);
    const nomeDocumento = parametros.get("nome");
    ```
  - Agora, podemos corrigir um detalhe na página. Onde aparece "Documento sem título" podemos exibir o nome do documento. Para isso, vamos checar no documento.html qual é o elemento que está mostrando esse texto e pegaremos o id dele.
  ```
   <header>
    <h1 class="display-4 mb-4 text-center" id="titulo-documento">Documento sem título</h1>
  </header>
  ```

  - O elemento que queremos é um h1 com id igual a titulo-documento. Vamos copiar esse id. ```titulo-documento```

  - Voltando no arquivo documento.js escreveremos o código para capturar esse título a partir desse id.

  - Se, por algum motivo, esse parâmetro não for passado na URL vamos colocar no local usando duas barras verticais e inserir "Documento sem título" caso o nome do documento não esteja definido.
  ```
  const textoEditor = document.getElementById("editor-texto");
  const tituloDocumento = document.getElementById("titulo-documento");

  tituloDocumento.textContent = nomeDocumento || "Documento sem título";
  ```

  - Ao atualizar a página podemos ver que onde antes exibia "Documento sem título" agora aparece "JavaScript". E se entrarmos na página do documento de Node vai aparecer o título "Node".

  - Agora, vamos pegar essa informação do nome da página e enviar para o servidor. Assim, o servidor saberá para quais clientes enviar corretamente o texto.

  - Faremos isso no socket-front-documento.js. Abaixo de const socket vamos escrever socket.emit e o nome do evento será selecionar_documento, porque assim que alguém selecionar um documento, entrar na página, vamos emitir esse evento. ```socket.emit("selecionar_documento")```

  - Mas ainda queremos passar o nome do documento como segundo parâmetro, e o nome do documento está em outro arquivo. Para conseguir pegar esse nome, vamos criar uma função chamada selecionarDocumento e dentro dessa função faremos o socket.emit passando nome como segundo parâmetro.
    ```
    function selecionarDocumento(nome) {
      socket.emit("selecionar_documento", nome);
    }
    ```
  - Vamos também exportar a função selecionarDocumento para usá-la em documento.js.

  - No documento.js, logo abaixo de tituloDocumento, vamos escrever selecionarDocumento e vamos importar essa função de socket-front-documento.js, passando o nomeDocumento como parâmetro.
    ```
    tituloDocumento.textContent = nomeDocumento || "Documento sem título";

    selecionarDocumento(nomeDocumento);
    ```
  
  - Em seguida, para escutar esse evento do lado do back-end, vamos em socket-back.js e escreveremos socket.on("selecionar_documento") e incluiremos uma função callback e daremos um console.log() em nome para ver se está funcionando corretamente.:
    ```
    io.on("connection", (socket) => {
      console.log("Um cliente se conectou! ID:", socket.id);

      socket.on("selecionar_documento", (nomeDocumento) => {
        console.log(nomeDocumento);
    });
    ```
  - Podemos salvar o arquivo. Voltar para o navegador e atualizar a página. Após atualizarmos a página do documento JavaScript no navegador, a informação do nome deve ser enviada para o servidor. Agora o nome apareceu no terminal integrado do VS Code.
    ```
    Um cliente se conectou! ID:UbJCjlfbaEfxy2yyAAAF

    JavaScript
    ```
  - Vimos que está funcionando corretamente. Então vamos substituir o console.log() por socket.join. "Join" em português significa "juntar". Dentro desse join vamos passar o nome do documento.
    ```
    socket.on("selecionar_documento", (nomeDocumento) => {
      socket.join(nomeDocumento);
    });
    ```
  
  - Esse método join(), que é específico do Socket.IO vai pegar o cliente que está conectado nesse socket e colocar em uma sala com o nome do documento.
    ```
    "Sala" é basicamente um conceito do Socket.IO onde ele vai agrupar conexões, vai agrupar clientes.
    ```

  - Então, sempre que uma pessoa entrar no documento de JavaScript, por exemplo, estará entrando numa sala do Socket.IO chamada JavaScript.

  - Para verificarmos que isso realmente funciona, no arquivo socket-back.js podemos comentar a linha do código socket.broadcast.emit e no lugar dele escrever socket.to("JavaScript").emit ("texto_editor_clientes, texto").
    ```
    socket.on(texto_editor", (texto) => {
    // socket.broadcast.emit("texto_editor_clientes", texto);

    socket.to("JavaScript").emit ("texto_editor_clientes, texto");
    });
    ```
  - Quando esse código for executado, espero que o texto seja enviado para todos os clientes que estão dentro do documento JavaScript. Vamos ver se isso está funcionando e depois refinaremos o código para enviar apenas para os documentos corretos.

  - Vamos salvar o código e abrir as páginas do navegador. Se estamos na sala de Node, o texto que escrevermos deverá ir para quem está na sala de JavaScript. Mas se alguém estiver na sala de JavaScript e escrever algo, esse texto não não vai para a sala de Node. É o que está acontecendo, isso prova o conceito de salas do Socket.IO.

**obtendo parâmetros da URL**
Você aprendeu no vídeo anterior a obter os parâmetros da URL no lado do front-end! Vamos explorar um pouco mais as funções e variáveis que utilizamos?

  - Primeiramente, nós nos aproveitamos da classe URLSearchParams, que pode ser instanciada para criar um objeto que conterá informações da URL.

  - Existem diferentes tipos de dados válidos que podemos passar como parâmetro de URLSearchParams() para criar uma nova instância; como por exemplo uma string, um array de arrays ou um objeto. Os três exemplos abaixo são equivalentes:
    ```
    // string como parâmetro
    const parametros = new URLSearchParams("?nome=maria&sobrenome=eduarda");

    // array de arrays como parâmetro
    const parametros = new URLSearchParams([
      ["nome", "maria"],
      ["sobrenome", "eduarda"],
    ]);

    // objeto como parâmetro
    const parametros = new URLSearchParams({
      nome: "maria",
      sobrenome: "eduarda"
    });
    ```

  - Note que, ao passar uma string, ela deve seguir o mesmo padrão dos parâmetros passados em uma URL: os parâmetros são separados por & e a chave e o valor de cada parâmetro são separados por =. E especificamente no caso do URLSearchParams(), a interrogação ? no início da string é opcional.

  - Mas no vídeo passamos o valor window.location.search como parâmetro de URLSearchParams(). De onde ele vem?

  - Window é um objeto global que contém várias propriedades e métodos do front-end. Uma dessas propriedades é a location, que é um objeto que possui métodos e propriedades relacionados à URL atual. E uma de suas propriedades é a search, que nos dá justamente uma string dos parâmetros da URL.

  - Assim, se você estiver em http://localhost:3000/documento.html?nome=JavaScript no navegador, o valor de window.location.search será "?nome=JavaScript".

  - Logo, chegamos ao código escrito em vídeo:
    ```
    const parametros = new URLSearchParams(window.location.search);
    ```
  
  - Agora que a constante parametros é uma instância de URLSearchParams, ela possui métodos como get(), has(), entries(), entre outros. Então, adicionamos o seguinte código:
    ```
    const nomeDocumento = parametros.get("nome");
    ```
  
  - Perceba que o método get() recebe o nome do parâmetro da URL e retorna seu valor. Assim, ainda usando a URL http://localhost:3000/documento.html?nome=JavaScript como exemplo, o código parametros.get("nome") irá nos retornar a string "JavaScript".

**Enviando para as salas corretas:** 
agora podemos escolher para quais sockets enviaremos determinada informação. No momento, estamos enviando apenas para as pessoas que estão conectadas na sala de JavaScript. Vamos corrigir isso.

- Primeiro, vamos alterar o código do arquivo socket-back.js. Em vez de socket.to("JavaScript") vamos pegar o nome da sala e não esse valor estático, então deixaremos: socket.to("nomeDocumento").

- Vamos obter a informação do nome do documento como parâmetro da função callback do evento texto_editor:
  ```
  socket.on(texto_editor", (texto, nomeDocumento) => {
  // socket.broadcast.emit("texto_editor_clientes", texto);

  socket.to("JavaScript").emit ("texto_editor_clientes, texto");
  });
  ```

- Agora precisamos receber esse parâmetro nomeDocumento do lado do front-end. Vamos em socket-front-documento.js e inserir um terceiro parâmetro no socket.emit da função emitirTextoEditor.
  ```
  function emitirTextoEditor(texto) {
  socket.emit("texto_editor", texto, nomeDocumento);
  ```

- Essa é uma das formas que usamos para enviar múltiplas informações para um evento. Por fim, vamos incluir nomeDocumento como parâmetro da função emitirTextoEditor.
  ```
  function emitirTextoEditor(texto, nomeDocumento) {
  socket.emit("texto_editor", texto, nomeDocumento);
  ```

- Em seguida, no arquivo documento.js, onde estamos chamando a função emitirTextoEditor, vamos passar o nomeDocumento como segundo parâmetro.
  ```
  textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor({textoEditor.value, nomeDocumento);
  });
  ```

- Podemos salvar o projeto e atualizar as páginas do navegador para testar se está funcionando.

- Agora, com as janelas lado a lado, uma no documento de JavaScript e outra no documento de Node, podemos ver que se escrevermos no documento de Node o texto não aparecerá no documento de JavaScript e vice-versa.
  Mas se as duas páginas estiverem no mesmo documento, veremos os textos sendo atualizados na página. Está funcionando como esperado.

- Agora vamos fazer uma melhoria no código.
  É algo que eu recomendo quando queremos enviar múltiplas informações através de um evento. No caso, estamos recebendo múltiplos parâmetros, o Socket.IO permite que façamos isso, mas eu prefiro passar apenas um objeto contendo esses parâmetros.

- Começaremos em documento.js, no código de emitirTextoEditor. Em vez de enviar dois parâmetros (textoEditor.value e nomeDocumento), vamos colocar chaves antes e depois dessa informação, pressionar alguns "Enters" para o código ficar mais legívelcom um parâmetro abaixo do outro.

- A primeira propriedade desse objeto será texto e seu valor será textoEditor.value e a segunda propriedade será nomeDocumento e o valor será o próprio nome do documento.
  ```
  textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor({
      texto: textoEditor.value,
      nomeDocumento,
    });
  });
  ```

- Em seguida, em socket-front-documento.js, na função emitirTextoEditor, podemos substituir texto, nomeDocumento por dados:
  ```
  function emitirTextoEditor(dados) {
    socket.emit("texto_editor", dados);
  }
  ```

- No arquivo socket-back.js. Ao redor de texto, nomeDocumento vamos colocar chaves e desestruturar objeto para pegar diretamente das propriedades texto e nomeDocumento. Podemos também excluir a linha do socket.broadcast.emit que havíamos comentado anteriormente, pois não vamos mais utilizá-la.
  ```
  socket.on(texto_editor", ({ texto, nomeDocumento }) => {
  socket.to("JavaScript").emit ("texto_editor_clientes, texto");
  });
  ```

Gosto dessa abordagem de passar um objeto porque assim não precisamos depender, por exemplo, da ordem dos parâmetros.

Podemos salvar o projeto e a aplicação deverá continuar funcionando corretamente no navegador.

Estamos melhorando a aplicação, mas ainda temos um problema: os textos não estão ficando salvos em lugar nenhum, se atualizarmos a página o texto será apagado. No próximo vídeo veremos como começar a resolver esse problema.


**possibilidades de emissão:**
Vimos como o servidor pode agrupar clientes em diferentes salas do Socket.IO, para posteriormente emitir eventos para salas específicas. Você pode ler mais sobre isso na seção Rooms da documentação.

Nos vídeos, escrevemos o seguinte código:
```
io.on("connection", (socket) => {
  socket.on("selecionar_documento", (nomeDocumento) => {
    socket.join(nomeDocumento);
  });

  socket.on("texto_editor", ({ texto, nomeDocumento }) => {
    socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
  });
});
```

Um detalhe importante é que a função socket.to("nome_da_sala").emit("nome_do_evento") emite o evento para todos os clientes de uma determinada sala, exceto para o cliente conectado ao socket.

Mas se quiséssemos emitir um evento para todos os clientes de uma sala, independente se um deles é o que está conectado ao socket, utilizaríamos: io.to("nome_da_sala").emit("nome_do_evento") (troca de socket para io). O código ficaria assim: ```io.to(nomeDocumento).emit("texto_editor_clientes", texto);```

O servidor (ou um socket) também pode emitir para mais de uma sala, repetindo o método to():
```
io.on("connection", (socket) => {
  // código omitido...

  socket.on("texto_editor", ({ texto, nomeDocumento }) => {
    // servidor emitindo
    io.to(nomeDocumento).to("JavaScript").emit("texto_editor_clientes", texto);

    // socket emitindo
    socket.to(nomeDocumento).to("JavaScript").emit("texto_editor_clientes", texto);
  });
});
```

Ou então passando para o to() um array com os nomes das salas:
```
io.on("connection", (socket) => {
  // código omitido...

  socket.on("texto_editor", ({ texto, nomeDocumento }) => {
    // servidor emitindo
    io.to([nomeDocumento, "JavaScript"]).emit("texto_editor_clientes", texto);

    // socket emitindo
    socket.to([nomeDocumento, "JavaScript"]).emit("texto_editor_clientes", texto);
  });
});
```

Vale ressaltar que todos esses códigos acontecem apenas do lado do back-end. As salas do Socket.IO são uma funcionalidade apenas do servidor, e no lado do front-end não há como saber quais clientes estão em quais salas.

Além disso, os clientes também podem entrar em diversas salas do Socket.IO. Com isso, no lado do servidor, podemos emitir eventos para clientes que estão, por exemplo, nas salas "sala1", "sala2", mas que não estão na "sala3", com auxílio do método except() (que significa “exceto”, do inglês):
```
io.to(["sala1", "sala2"]).except("sala3").emit("nome_do_evento");
```

O método except() também pode ser usado em conjunto com outras formas de emissão, como io.emit(), socket.broadcast().emit(), etc. Confira alguns exemplos no código abaixo:
```
// envia para todos os clientes, exceto os que estão na sala "sala_excluida"
io.except("sala_excluida").emit("nome_do_evento");

// envia para todos os clientes, exceto para o que está em `socket` e os que estão na sala "sala_excluida_1" e "sala_excluida_2"
io.on("connection", (socket) => {
  socket.broadcast.except(["sala_excluida_1", "sala_excluida_2"]).emit("nome_do_evento");
});
```

Com esses conhecimentos a mais, você já conhece várias das formas de se emitir eventos no Socket.IO. Aproveite para conferir a [Emit cheatsheet (Folha de dicas de Emissões)](https://socket.io/docs/v4/emit-cheatsheet/) da documentação, ela também serve como uma boa consulta.


**Guardando os dados localmente**
Se atualizarmos ou sairmos da página os textos são apagados, então vamos pensar como podemos guardar os textos.

Começaremos criando uma lista com dados do JavaScript no servidor Node.js. Assim estaremos preparando o terreno para evoluir nossa aplicação e posteriormente utilizar banco de dados.

Vamos abrir o VS Code no arquivo socket-back.js e vamos colocar os dados dos documentos nesse arquivo justamente porque quando a Eduarda ou a Juliana entrarem em algum documento poderemos capturar o texto desse documento e mandar para elas no front-end.

Começaremos criando uma constante no início do arquivo socket-back.js. Será a constante documentos e ela vai receber um array, uma lista de objetos onde cada objeto vai representar as informações do documento.
  ```
  import io from "./servidor.js";

  const documentos = [

  ];
  ```

Criaremos três objetos, um para cada documento da nossa aplicação, com propriedade nome e texto:
```
import io from "./servidor.js";

const documentos = [
  {
    nome: "JavaScript",
    texto: "texto de javascript...",
  },
  {
    nome: "Node",
    texto: "texto de node...",
  },
  {
    nome: "Socket.io",
    texto: "texto de socket.io...",
  },
];
```

Podemos salvar o arquivo. Então, no momento em que o servidor escutar o evento selecionar_documento queremos buscar o texto desse documento e enviar de volta para os clientes.

Para isso, dentro da função callback do selecionar_documento vamos adicionar o seguinte código para recebermos retorno de uma função que ainda vamos criar, o nome dessa função será encontrarDocumento. E essa função precisará receber o nomeDocumento para saber qual documento buscar.

```
 socket.on("selecionar_documento", (nomeDocumento) => {
    const documento = encontrarDocumento(nomeDocumento);

    socket.join(nomeDocumento);
```

Agora podemos criar essa função encontrarDocumento lá no final do arquivo.

A função encontrarDocumento vai receber o parâmetro nome e faremos uma lógica de programação, escrevendo que a constante documento recebe documentos, a lista que criamos no início do arquivo socket-back.js, documentos.find(documento). O find() é um método do JavaScript para encontrar um item específico de uma lista. E nesse método passaremos uma função callback.

Vamos retornar o documento que recebemos o nome como parâmetro. Vamos retornar uma condição que será avaliada como verdadeira para o método find().

Retornaremos documento.nome triplo igual (===) a nome, ou seja, se o documento que estivermos avaliando nessa lista tiver exatamente a propriedade nome igual ao nome que recebemos como parâmetro, essa condição será avaliada como verdadeira. E o retorno do método find() vai cair na constante documento. Em seguida, retornaremos o documento encontrado dentro da função.

```
function encontrarDocumento(nome) {
  const documento = documentos.find((documento) => {
    return documento.nome === nome;
  });

  return documento;
}
```

Podemos incluir um console.log(documento) para verificar se conseguimos realmente capturar esse documento.

 socket.on("selecionar_documento", (nomeDocumento) => {
    const documento = encontrarDocumento(nomeDocumento);

    console.log(documento);

    socket.join(nomeDocumento);

Vamos salvar o projeto. Podemos deixar o terminal integrado do VS Code aberto e vamos para a janela do navegador.

Atualizei a página em que está o documento JavaScript e podemos ver que o terminal do VS Code já imprimiu um objeto: ```{nome: 'JavaScript', texto: 'texto de javascript...'}```

{nome: 'JavaScript', texto: 'texto de javascript...'}


**Enviando de volta para o cliente**
Já conseguimos guardar os textos de cada documento de forma local. E também conseguimos acessar essas informações assim que o documento é selecionado.

No socket-back.js inserimos um console.log(documento). Mas agora precisamos enviar o texto desse documento de volta para o cliente no front-end.

A primeira solução que veremos é com algo que já conhecemos: emitir eventos.

O servidor pode emitir um evento de volta para o front-end com o texto do documento.

No arquivo socket-back.js, para fazer uma tratativa de erro, vamos escrever, abaixo de const documento, uma condição if (documento). Dentro desse if escreveremos o código para emitir o texto do documento para o front-end.

Podemos apagar o console.log(documento) pois não vamos mais usá-lo.

Usaremos o if (documento) porque se o método find() não encontrar nenhum documento, vai retornar "undefined". Então, para evitar qualquer bug na aplicação, faremos essa tratativa.

Podemos escrever socket.emit. Até agora, fizemos apenas o servidor emitir eventos para os clientes. Neste caso, queremos emitir de volta apenas para o cliente que está neste socket.

O nome do evento será texto_documento e o dado que esse evento vai carregar será documento.texto:
```  
  socket.on("selecionar_documento", (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = encontrarDocumento(nomeDocumento);

    if (documento) {
      socket.emit("texto_documento", documento.texto);
    }
  });
```

Salvando esse arquivo, agora podemos escutar esse evento do lado do front-end.

No arquivo socket-front-documento.js, escreveremos acima de socket.on("texto_editor_cliente"). Escreveremos socket.on("texto_documento"), o segundo parâmetro será uma função callback que recebe o texto como parâmetro. E daremos um console.log(texto) para verificar se o cliente está obtendo esse texto de volta.

```
socket.on("texto_documento", (texto) => {
  console.log(texto);
});

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});
```

Vamos salvar o projeto e ir para a página do JavaScript no navegador, lembrando de deixar o console do navegador aberto.

Ao atualizarmos o navegador, o console já está exibindo a seguinte informação: ```texto de javascript...```

E o mesmo está acontecendo na página de Node, o console está exibindo a frase "texto de node...". Está funcionando corretamente. Mas queremos atualizar a interface em vez de atualizar com o console.log().

Voltando ao VS Code, no código de socket-front-documento.js vamos apagar o console.log(texto) e usar a função atualizaTextoEditor() com texto como parâmetro.

```
socket.on("texto_documento", (texto) => {
  atualizaTextoEditor(texto);
});
```

Podemos salvar e testar no navegador.

Na página do documento JavaScript apareceu a frase "texto de javascript..." no campo de texto da página. Na página do Node apareceu "texto de node..."

Para aparecer no documento Socket.io vamos corrigir no código de socket-back.js. Onde colocamos nome: "Socket.IO" o "io" deve ser com letra minúscula e apenas o primeiro "S" maiúsculo:
```
//código omitido

  {
    nome: "Socket.io",
    texto: "texto de socket.io...",
  },
//...
```

Após essa correção, podemos salvar e agora sim está aparecendo. É importante conferir se os nomes estão corretos e verificar as maiúsculas e minúsculas.

A segunda solução também é interessante e usaremos um recurso do Socket.IO.

No arquivo socket-back.js estamos verificando se o documento existe e fazendo o socket.emit para enviar de volta ao cliente desse socket.

Primeiro, vamos comentar a linha do código socket.emit que está abaixo do if (documento).

A segunda forma é receber mais um dado na função callback. Por enquanto chamaremos esse dado de callback e ele será uma função que vamos executar dentro de if (documento) e passaremos documento.texto como parâmetro do callback.

```
  socket.on("selecionar_documento", (nomeDocumento, callback) => {
    socket.join(nomeDocumento);

    const documento = encontrarDocumento(nomeDocumento);

    if (documento) {
        //socket.emit("texto_documento", documento.texto);

      callback(documento.texto);
    }
  });
```

Essa função callback será um dado como qualquer outro, que pode ser recebido como parâmetro dos eventos do Socket.IO.

Já podemos salvar o arquivo socket-back.js. Em seguida, vamos para o código de socket-front-documento.js e passaremos uma função callback como parâmetro no evento selecionar_documento. Dentro dessa função receberemos o texto com atualizaTextoEditor(texto):

```
const socket = io();

function selecionarDocumento(nome) {
  socket.emit("selecionar_documento", nome, (texto) => {
    atualizaTextoEditor(texto);
  });
}
```

Após fazer isso, podemos ignorar o código que escrevemos anteriormente, vamos comentar as linhas do socket.on referente ao evento texto_documento que fizemos na primeira solução.
```
// socket.on("texto_documento", (texto) => {
//  atualizaTextoEditor(texto);
// });
```

Inclusive, nosso código ficou com uma escrita mais sucinta. Podemos salvar o projeto e testar no navegador. O texto continua aparecendo no campo de texto de cada documento. Está funcionando.

Recapitulando, temos a função callback que foi declarada do lado do front-end mas foi executada do lado do back-end.

Essa estratégia que utilizamos é um pouco parecida com o modelo de requisição e resposta do protocolo HTTP, onde o cliente solicita o texto de um documento. O cliente vai emitir o evento selecionar_documento, o servidor vai fazer operações para encontrar o documento e vai mandar de volta o texto desse documento para o front-end.

Esse é um recurso que o próprio Socket.IO denomina como Acknowledgements que, em português, significa "reconhecimentos". Usam esse nome porque, basicamente, quando emitimos um evento do cliente para o servidor, esperamos o servidor reconhecer esse evento. Assim que o evento é reconhecido, o servidor retorna alguma informação para o front-end.

A princípio, nomeamos a função como callback, mas agora daremos um nome mais descritivo para ela. No arquivo socket-back.js vamos selecionar a palavra callback, pressionar o atalho "F2" e renomeá-la para devolverTexto. E, por fim, podemos apagar a linha de socket.emit que havíamos comentado anteriormente.

```
  socket.on("selecionar_documento", (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = encontrarDocumento(nomeDocumento);

    if (documento) {
      devolverTexto(documento.texto);
    }
  });
```

Em socket-front-documento.js também vamos apagar as linhas do socket.on("texto_documento") que deixamos comentadas.

**Salvando os textos:**
Precisamos inserir o código para salvar os texto justamente onde estamos "escutando" o evento texto_editor.

No socket-back.js, vamos inserir const documento recebendo encontrarDocumento(nomeDocumento). E, se esse documento realmente existir, documento.texto receberá texto. E, por fim, vamos incluir o socket.to dentro do if também.

```
  socket.on("texto_editor", ({ texto, nomeDocumento }) => {
    const documento = encontrarDocumento(nomeDocumento);

    if (documento) {
      documento.texto = texto;

      socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
  });
});
```

Interessante notar que a linha documento.texto = texto só vai funcionar por causa da forma que o JavaScript funciona com objetos. No momento em que o documento é retornado pelas função encontrarDocumento teremos uma referência para o objeto documento. E no momento em que escrevemos que documento.texto recebe texto, o documento que está lá na lista local será alterado.

Isso acontece graças ao comportamento do JavaScript em relação aos dados primitivos.

Podemos salvar o projeto e testar no navegador.

Vamos atualizar a página do navegador, escrever no campo de texto a frase: "novo texto de javascript". Ao atualizarmos a página novamente, o texto continua no campo. O mesmo comportamento acontece nos documentos de Node e de Socket.IO.

Isso está funcionando graças ao servidor Node.js estar funcionando. Se o servidor cair, os textos vão se perder e voltarão aos valores originais. Não é isso que a Eduarda e a Juliana querem.

**Reconhecimento do Socket.IO**
Nos últimos vídeos, você aprendeu que quando um cliente envia um evento para o servidor e espera receber um dado de volta, podemos utilizar o recurso de Reconhecimento (ou Acknowledgment, em inglês) do Socket.IO, que imita o modelo de requisição-resposta do HTTP.

Com base nessa explicação, considere o seguinte código no front-end:
```
socket.emit("nome_usuario", "Evaldo", (dadosUsuario) => {
  console.log(dadosUsuario);
});
```

Sendo assim, o código que devemos colocar no back-end para imprimirmos dadosUsuario no front-end, considerando que a função obterDadosUsuario retorna os dados do usuário corretamente:
```
io.on("connection", (socket) => {
  socket.on("nome_usuario", (nome, devolverDados) => {
    const dadosUsuario = obterDadosUsuario(nome);

    devolverDados(dadosUsuario);
  });
});
```

Obtemos a função do último parâmetro do método emit() do lado do front como o último parâmetro da função callback de on(). Neste código, ela foi nomeada como devolverDados, e é executada posteriormente, passando dadosUsuario como parâmetro. Assim, o código escrito no front-end, de fato, utilizará os dados que vieram do back-end.


---

## Aula 4 - Utilizando o MongoDB
**Criando um banco de dados:**
Vamos utilizar um banco de dados para guardar de forma segura os dados de cada documento do Alura Docs. Usaremos o MongoDB, um banco de dados não-relacional, que suprirá as necessidades do nosso projeto. Neste curso, optaremos pelo MongoDB Atlas, o serviço em nuvem do MongoDB.

  **MongoDB Atlas** - No navegador, vamos acessar o site do [MongoDB Atlas](https://www.mongodb.com/atlas). No canto direito superior, temos os botões "Sign in" para fazer o login e "Try Free" para criar uma conta.

  Caso você não tenha uma conta no MongoDB, você pode clicar em "Try Free" e fazer o seu cadastro.

  Clicando em "Sign in", o site nos redirecionará a uma nova página com três opções de login: pela conta do Google, pelo GitHub ou pelo endereço de e-mail. No caso, podemos entrar com a própria conta do Google.

  **Cluster** - Após realizar o login, vamos reparar que a página inicial do MongoDB Atlas possui diversas informações! Na parte central da tela, temos o texto "Create a database" (Crie um banco de dados), seguido do botão "Build a database" (Construir um banco de dados). Vamos clicar nele.

  Na nova tela, precisamos escolher entre três opções:
  - Serverless (sem servidor)
  - Dedicated (dedicado)
  - Shared (compartilhado).

  Estamos interessados na terceira opção, que é gratuita e supre as necessidades do nosso sistema. Então, vamos clicar no botão "Create" da opção "Shared" para criar um cluster. No MongoDB, o cluster é a estrutura que poderá armazenar vários banco de dados.

  Na sequência, vamos definir algumas configurações para a criação do cluster. Na seção "Cloud Provider & Region", temos três opções de provedores: AWS, Google Cloud ou Azure. Vamos manter selecionada a "AWS". Quanto à região, marcaremos "São Paulo".

  Em seguida, vamos expandir a seção "Cluster name" e alterar o nome do cluster de "Cluster0" para "AluraCluster".

  Ao final da tela, podemos clicar no botão "Create Cluster".

  No canto esquerdo inferior da tela, surgirá um pequeno cartão indicando que o cluster está sendo provisionado. Quando esse processo for finalizado, teremos a mensagem "Your cluster has finished provisioning" na cor verde.

  **Etapas de segurança** - Enquanto o cluster é criado, seremos levados para uma nova página para configurar duas etapas de segurança.

  A primeira etapa é a definição de um usuário e uma senha para conseguirmos ter acesso ao cluster e seus bancos de dados. Vamos preencher os campos da seguinte forma: ```Username: alura``` ```Password: 123```

  Depois, clicaremos no botão "Create User", logo abaixo desses campos. Vale lembrar que, em um ambiente de produção, utilizaríamos uma senha mais segura. Inclusive, à direita do campo "Password", temos o botão "Autogenerate Secure Password" para gerar uma senha segura automaticamente.

  A segunda etapa é a definição de quem terá acesso aos nossos bancos de dados. Nessa seção, há um pequeno formulário em que podemos adicionar endereços IP à lista de acesso. Nele consta:

  - o campo "IP address" (endereço IP)
  - o campo "Description" (descrição)
  - o botão "Add Entry" (adicionar registro)
  - o botão "Add My Current IP Address" (adicionar meu endereço de IP atual).

  Vamos clicar no botão "Add My Current IP Address" para incluir o nosso endereço de IP atual à lista, que aparecerá logo abaixo do formulário:
  | IP Adress List | Description |
  | --- | --- |
  | 168.227.18.122/32 | My IP Address |
  | 0.0.0.0/0 |  |

  O endereço 0.0.0.0/0 permitirá que nosso banco seja acessado por qualquer endereço de IP. Às vezes, quando reiniciamos o computador e tentamos nos conectar ao banco de dados novamente, ocorrem erros de conexão. Adicionando o endereço 0.0.0.0/0, evitamos esse tipo de problemas.

  Em seguida, vamos clicar no botão "Finish and Close" ao final da tela. Uma janela pop-up aparecerá nos parabenizando por finalizar a configuração de regras de acesso. Basta clicarmos no botão "Go to Databases", no canto direito inferior, para navegar até a página em que nosso cluster foi criado.

  **Banco de dados e coleções** - Na lateral esquerda da interface, há um painel de navegação. Atualmente, estamos na seção "Databases". Na parte central da tela, há uma área denominada "Database Deployments", onde temos o título "AluraCluster". À direita desse título, vamos clicar no botão "Browse Collections" (navegar pelas coleções).

  No MongoDB, as coleções são análogas às tabelas de um banco de dados relacional. Por enquanto, não temos nenhum banco de dados e nenhuma coleção. No centro da tela, há dois botões:
  - Load a Sample Dataset (carregar amostra de dados)
  - Add My Own Data (adicionar meus próprios dados)

  Ao clicar no segundo botão, aparecerá uma janela pop-up para inserirmos o nome do nosso primeiro banco de dados. Vamos chamá-lo de "alura-websockets". Além disso, já podemos criar uma coleção dentro do banco de dados. No caso, essa coleção será o conjunto de documentos do Alura Docs, então vamos chamá-la de "documentos":

  - Database name: alura-websockets
  - Collection name: documentos

  Em seguida, vamos clicar no botão "Create" no canto direito inferior.

  **Documentos** - O MongoDB atualizará a página e nos mostrará as coleções disponíveis. Na parte central da tela, temos uma área denominada "AluraCluster". Em sua lateral esquerda, há um painel com a lista de banco de dados. No caso, temos o "alura-websockets" e, dentro dele, a coleção "documentos" — que está aberta na parte direita da tela.

  Um banco de dados pode conter várias coleções e uma coleção pode conter vários registros, chamados de documentos.

  Coincidentemente, os itens do Alura Docs também são chamados de documentos, então cada documento no MongoDB representará um documento do Alura Docs.

  A seguir, vamos adicionar cada um dos nossos documentos na coleção. À direita da página, clicaremos no botão "Insert document" (Inserir documento). Aparecerá uma nova janela pop-up no centro da tela. Na primeira linha, temos a propriedade _id, cujo valor são vários caracteres aleatórios: ```_id: 6357fedbdfbef788f7298645```

  À direita dessa linha, notamos que o tipo selecionado é ObjectId. O MongoDB gera automaticamente um ID para cada registro de uma coleção.

  Na segunda linha, vamos adicionar um campo chamado "nome" com valor "JavaScript", do tipo "String":
  ```
  _id: 6357fedbdfbef788f7298645
  nome: "JavaScript"
  ```

  À esquerda da segunda linha, vamos clicar no botão com símbolo de "+" e selecionar "Add field after nome" para adicionar outro campo após "nome". Na terceira linha, adicionaremos o campo "texto" com valor "texto do javascript do mongoDB", do tipo "String" também:
  ```
  _id: 6357fedbdfbef788f7298645
  nome: "JavaScript"
  texto: "texto do javascript do mongoDB"
  ```

  Estamos adicionando manualmente esse registro só para checar se posteriormente conseguimos conectar ao nosso código e obter esse dado no nosso projeto.

  Vamos clicar no botão "Insert" no canto inferior direito. Feito isso, conseguimos inserir à coleção nosso primeiro documento, com as propriedades _id, nome e texto.

  **Recapitulando** - criamos:
  - um cluster que pode guardar bancos de dados;
  - nosso primeiro banco de dados (alura-websockets);
  - nossa primeira coleção (documentos);

**Conectando o banco ao projeto**
Vamos conectar o banco de dados do MongoDB Atlas com o nosso projeto. Assim, posteriormente, conseguiremos pegar dados diretamente desse banco de dados.

Existe mais de uma forma de realizar essa conexão. Talvez você já conheça o Mongoose, por exemplo. Neste curso, vamos usar o MongoDB Driver, do Node.js, uma solução nativa do MongoDB.

  - **MongoDB Driver**
  No navegador, vamos acessar a documentação do [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/current/) para aprender como configurar nosso projeto com MongoDB Atlas, utilizando MongoDB Node Driver.

  Um dos tópicos dessa página é o [Quick Start](https://www.mongodb.com/docs/drivers/node/current/quick-start/), em que temos um link para acessar a seção "Quick Start". Clicando nele, abriremos uma página com instruções de como conectar nosso projeto ao MongoDB Atlas.

  Vamos até o tópico "Add MongoDB as a Dependency" (adicionar MongoDB como uma dependência), onde temos o seguinte bloco de código: ```npm install mongodb@4.11```

  Vamos copiá-lo, pois o usaremos em breve.

  É possível que já existam versões mais recentes. Recomendamos que você utilize a mesma versão do instrutor para evitar problemas de compartibilidade.

  No VS Code, abriremos o terminal integrado e pausaremos o nosso servidor, para instalar uma nova dependência. Em seguida, executaremos o comando que copiamos há pouco.

  Essa dependência é o Driver do MongoDB, que nos fornecerá vários métodos para conectar nosso código ao banco de dados online. Terminada a instalação, podemos abrir o arquivo package.json para conferir que o MongoDB foi instalado corretamente, na versão 4.11:
  ```
  // ...

  "dependencies": {
      "express": "^4.18.2",
      "mongodb": "4.11",
      "socket.io": "^4.5.3"
  }

  // ...
  ```

  - **Conexão com a aplicação**
  Na pasta "src", criaremos um arquivo chamado dbConnect.js, que conterá as configurações para conectar nosso código com o MongoDB Atlas. Primeiramente, vamos importar o MongoClient do mongodb para ter um cliente para conectar com o banco de dados: ```import { MongoClient } from "mongodb";```

  Em seguida, vamos declarar a constante cliente, que receberá uma nova instância de MongoClient():
  ```
  import { MongoClient } from "mongodb";

  const cliente = new MongoClient("");
  ```
  Como parâmetro, devemos passar a string de conexão, fornecida pelo próprio banco de dados. Para encontrá-la, vamos voltar ao MongoDB Atlas, no navegador. No painel à esquerda, clicaremos no item "Database" para acessar a página que mostra os nossos clusters.

  À direita do título "AluraCluster", vamos clicar no botão "Connect". Uma nova janela pop-up surgirá na tela, com quatro opções de conexão:
  - Connect with the MongoDB Shell
  - Connect your application
  - Connect using MongoDB Compass
  - Connect with VS Code

  Pressionaremos a segunda opção, para conectar nossa aplicação.
  Na sequência, temos mais dois passos de configuração. No primeiro passo, podemos definir opções de driver e sua versão. Vamos manter o que já está selecionado, isto é, Node.js na versão 4.1 ou mais recente:

  ```
  Driver: Node.js
  Version: 4.1 or later
  ```

  No segundo passo, temos um bloco de código com a nossa string de conexão! No canto direito desse bloco, há um botão para copiá-la. Voltando ao arquivo dbConnect.js no VS Code, vamos inserir a string de conexão no nosso código. Lembre-se de que ela deve estar entre aspas duplas:
  ```
  import { MongoClient } from "mongodb";

  const cliente = new MongoClient(
    "mongodb+srv://alura:<password>@aluracluster.lp6gdyc.mongodb.net/?retryWrites=true&w=majority"
  );
  ```

  É preciso fazer uma pequena alteração. A string de conexão sempre começa com mongodb+srv://. Em seguida, temos o nome do usuário, seguido de dois pontos. No nosso caso, alura:. Depois, é preciso informar a senha. Vamos substituir o trecho <password> pela senha que configuramos no vídeo passado, 123:
  ```
  import { MongoClient } from "mongodb";

  const cliente = new MongoClient(
    "mongodb+srv://alura:123@aluracluster.lp6gdyc.mongodb.net/?retryWrites=true&w=majority"
  );
  ```

  Nossa string de conexão já está pronta.
  Na sequência, vamos desenvolver um bloco try/catch. O catch receberá erro como parâmetro e o exibirá no console:

  ```
  import { MongoClient } from "mongodb";

  const cliente = new MongoClient(
    "mongodb+srv://alura:123@aluracluster.lp6gdyc.mongodb.net/?retryWrites=true&w=majority"
  );

  try {

  } catch (erro) {
      console.log(erro);
  }
  ```

  No bloco try, vamos inserir await cliente.connect() para adiantar algumas configurações de conexão e checarmos de antemão se realmente conseguimos conectar com sucesso:
  ```
  // ...

  try {
      await cliente.connect();

  } catch (erro) {
      console.log(erro);
  }
  ```

  Depois, vamos declarar a constante db, que receberá cliente.db(). Como parâmetro, passaremos o nome do nosso banco de dados:
  ```
  // ...
  try {
      await cliente.connect();

      const db = cliente.db("alura-websockets");

  } catch (erro) {
      console.log(erro);
  }
  ```

  "db" é uma abrevitura para "database", que significa "banco de dados" em inglês.

  Já selecionamos o banco de dados, agora podemos buscar uma coleção nele, usando o método .collection() e passando o nome da coleção como parâmetro. Vamos salvar o resultado na constante documentos:
  ```
  // ...
  try {
      await cliente.connect();

      const db = cliente.db("alura-websockets");
      const documentos = db.collection("documentos");

  } catch (erro) {
      console.log(erro);
  }
  ```

  Vamos inserir um console.log() ao final do bloco try para confirmar no console que a conexão foi bem-sucedida:
  ```
  // ...
  try {
      await cliente.connect();

      const db = cliente.db("alura-websockets");
      const documentos = db.collection("documentos");

      console.log("Conectado ao banco de dados com sucesso!");

  } catch (erro) {
      console.log(erro);
  }
  ```

  Se o código no bloco try não conseguir conectar com o nosso banco de dados e nossas coleções, haverá um erro e entraremos no bloco catch. Vamos salvar nosso código e, em seguida, importá-lo no arquivo servidor.js:
  ```
  import express from "express";
  import url from "url";
  import path from "path";
  import http from "http";
  import { Server } from "socket.io";

  import "./dbConnect.js";

  // ...
  ```
  Após salvar essa alteração, vamos abrir o terminal integrado e rodar o servidor novamente: ```npm run dev```

  A execução pode ser um pouco mais demorada dessa vez, pois o código está se conectando com o banco de dados online. Como retorno, teremos a seguinte mensagem no terminal: "Conectado ao banco de dados com sucesso!"

  Para nos certificar que o código está funcionando devidamente, simularemos um erro. No arquivo dbConnect.js, vamos alterar a string de conexão e passar uma senha incorreta propositalmente. Em vez de 123, vamos inserir 12345:
  ```
  import { MongoClient } from "mongodb";

  const cliente = new MongoClient(
    "mongodb+srv://alura:12345@aluracluster.lp6gdyc.mongodb.net/?retryWrites=true&w=majority"
  );

  try {
    await cliente.connect();

    const db = cliente.db("alura-websockets");
    const documentos = db.collection("documentos");

    console.log("Conectado ao banco de dados com sucesso!");

  } catch (erro) {
    console.log(erro);
  }
  ```

  Ao salvar o arquivo, o servidor será reiniciado automaticamente e teremos um erro no terminal. Na primeira linha da descrição, é explicado que houve um problema na autenticação: "MongoDDBerverError: bad auth : Authentication failed"

  Confirmamos que nosso código está funcionando como esperado! Portanto, vamos corrigir a senha informada na string de conexão para solucionar esse erro de autenticação.

  Por fim, vamos fazer as últimas alterações no arquivo dbConnect.js. Atualmente, a constante documentos existe somente no escopo do bloco try, então não conseguimos exportar essa coleção. Como solução, vamos declarar a variável documentosColecao antes do bloco try e apenas atribuir um novo valor a ela dentro do bloco try:
  ```
  import { MongoClient } from "mongodb";

  const cliente = new MongoClient(
    "mongodb+srv://alura:123@aluracluster.lp6gdyc.mongodb.net/?retryWrites=true&w=majority"
  );

  let documentosColecao;

  try {
    await cliente.connect();

    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");

    console.log("Conectado ao banco de dados com sucesso!");

  } catch (erro) {
    console.log(erro);
  }
  ```
  Agora, conseguimos exportar a coleção ao final de dbConnect.js, para usá-la posteriormente em outros arquivos:
  ```
  import { MongoClient } from "mongodb";

  const cliente = new MongoClient(
    "mongodb+srv://alura:123@aluracluster.lp6gdyc.mongodb.net/?retryWrites=true&w=majority"
  );

  let documentosColecao;

  try {
    await cliente.connect();

    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");

    console.log("Conectado ao banco de dados com sucesso!");
  } catch (erro) {
    console.log(erro);
  }

  export { documentosColecao };
  ```
  Após salvar essas alterações, podemos checar no terminal integrado que o servidor continua funcionando perfeitamente.

**Driver Node.js e Mongoose**
Na página [MongoDB Drivers](https://www.mongodb.com/docs/drivers/) da documentação do MongoDB, você pode conferir drivers específicos para diferentes linguagens de programação lidarem com o banco de dados. Neste curso estamos utilizando o [driver do Node.js](https://www.mongodb.com/docs/drivers/node/current/) para conectar o nosso projeto ao [MongoDB Atlas](https://www.mongodb.com/atlas), o serviço em nuvem do MongoDB para armazenar bancos de dados.

Como solução alternativa, você também pode conectar o seu projeto ao MongoDB Atlas utilizando o mongoose, uma biblioteca criada por terceiros, que permite que você crie modelos para os objetos que virão do banco de dados, uma solução adequada para projetos que seguem o padrão MVC. Caso queira se aprofundar no mongoose, acesse a [documentação](https://mongoosejs.com/). 

**Obtendo dados do banco**
No VS Code, vamos abrir o arquivo socket-back.js e analisar nosso código atual.
  **Nova implementação do método encontrarDocumento()** - nós executamos o método encontrarDocumento(nomeDocumento) para selecionar um elemento da lista local e salvamos o retorno na constante documento. Agora que provisionamos um banco de dados, vamos modificar a implementação desse método para selecionar um documento do banco!

Primeiramente, vamos apagar a constante documentos, que representa a lista local de documentos que não usaremos mais:
```
import io from "./servidor.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("selecionar_documento", (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = encontrarDocumento(nomeDocumento);

    if (documento) {
      devolverTexto(documento.texto);
    }
  });

  socket.on("texto_editor", ({ texto, nomeDocumento }) => {
    const documento = encontrarDocumento(nomeDocumento);

    if (documento) {
      documento.texto = texto;

      socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
  });
});

function encontrarDocumento(nome) {
  const documento = documentos.find((documento) => {
    return documento.nome === nome;
  });

  return documento;
}
```

Em seguida, vamos até o final do arquivo, para alterar a implementação do método encontrarDocumento(). De início, vamos remover documentos.find():
```
// ...

function encontrarDocumento(nome) {
  const documento = 

  return documento;
}
```

Agora, vamos importar a coleção documentosColecao do arquivo dbConnect.js, que desenvolvemos no vídeo passado. Conforme digitamos documentosColecao após o sinal de igual, o VS Code vai sugerir a autoimportação. Pressinando a tecla "Enter", a importação será inserida automaticamente no início do arquivo:
```
import { documentosColecao } from "./dbConnect.js";
import io from "./servidor.js";

// ...

function encontrarDocumento(nome) {
  const documento = documentosColecao

  return documento;
}
```

O documentosColecao representa uma coleção do MongoDB, então possui métodos próprios do MongoDB. Um deles é o findOne(), que busca um registro na coleção. Em inglês, find one significa "encontrar um".

Como parâmetro, passaremos um objeto que contém as características do documento que pretendemos encontrar. No caso, queremos o documento cuja propriedade nome tem o valor do parâmetro nome, recebido em encontraDocumento():
```
// ...

function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({
        nome: nome
    })

  return documento;
}
```

Assim, vamos buscar o documento que tem o campo nome (que configuramos no MongoDB Atlas) e seu valor deve ser igual ao recebido por parâmetro nesse método.

O JavaScript permite a redução a sintaxe da seguinte forma:
```
// ...

function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({
        nome
    })

  return documento;
}
```

Esse código basta para o MongoDB realizar a requisição. Sabemos que o retorno será uma promise do JavaScript, então é preciso fazer algumas adaptações no resto do código.

Vamos voltar à parte onde estamos escutando o evento selecionar_documento. Na linha em que declaramos a constante documento, vamos inserir a palavra-chave await antes de encontrarDocumento(), pois sabemos que o retorno será uma promise que contém os dados do documento que queremos:
```
// ...

socket.on("selecionar_documento", (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
        devolverTexto(documento.texto);
    }
});

// ...
```

O compilador indicará um erro na palavra await, porque para usá-la a função callback deve ser assíncrona. Portanto, na declaração da função, escreveremos a palavra-chave async:
```
// ...

socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
        devolverTexto(documento.texto);
    }
});

// ...
```

Vamos incluir um console.log() para exibir o documento e verificar se realmente conseguimos captá-lo do MongoDB Atlas:
```
// ...

socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    console.log(documento);

    if (documento) {
        devolverTexto(documento.texto);
    }
});

// ...
```

**Testando** Na sequência, acessaremos o Alura Docs no navegador. Ao abrir um documento, esperamos que seja feita uma requisição para o banco de dados. Então, vamos clicar no documento "JavaScript", pois já cadastramos um registro com esse nome no banco.

Na interface do Alura Docs, temos o título "JavaScript" centralizado no topo e o seguinte conteúdo: "texto de javascript do mongoDB".

Conferindo o terminal do VS Code, notamos que o console.log() também funcionou. Recebemos um objeto com as três propriedades que configuramos no banco de dados:
```
Conectado ao banco de dados com sucesso!
Servidor escutando na porta 3000
Um cliente se conectou! ID: 8GZRtUD6RDNUYI4RAAAB
{
    _id: new ObjectId("6357f0dbdfbef788f7298645"),
    nome: 'JavaScript',
    texto: 'texto de javascript do mongoDB'
} 
``` 

**Cadastrando os demais documentos** Para finalizar, vamos cadastrar os documentos "Node" e "Socket.io" no banco de dados. No MongoDB Atlas, vamos acessar o "alura-websockets" e consultar a coleção "documentos".

Atualmente, temos apenas um registro: o documento "JavaScript". Quando passamos o cursor sobre ele, temos a opção "Clone document" para clonar esse registro, vamos clicar nela.
```
Mais adiante, refinaremos esse processo de criação e remoção de documentos. Por ora, vamos apenas fazer clones para agilizar o cadastro dos três documentos do projeto do Alura Docs.
```
Uma janela pop-up aparecerá no centro da tela, com as propriedades _id, nome e texto. Vamos adaptar o segundo e o terceiro item para condizer com os documentos do Alura Docs:
```
_id: 6358155586c89ddfcf63d6fb
nome: "Node"
texto: "texto de node do mongoDB"
```

Ao clicar no botão "Insert", o MongoDB adicionará esse documento à coleção. Vamos fazer mais um clone para adicionar o terceiro documento, "Socket.io":
```
_id: 6358157286c89ddfcf63d6fc
nome: "Socket.io"
texto: "texto de socket.io do mongoDB"
```

Agora, teremos três registros na coleção "documentos".

Voltando à interface do Alura Docs, podemos acessar o documento "Node" e teremos o seguinte conteúdo aparecendo na tela: "texto de node do mongoDB"

Clicando no documento "Socket.io", o resultado será o seguinte: "texto de socket.io do mongoDB"

Ou seja, estamos conseguindo consultar os dados do banco de dados com sucesso, com o método interno findOne().

**Alterando dados do banco** 
Já conseguimos obter informações do banco de dados e disponibilizá-las na interface do Alura Docs. Se Eduarda ou Juliana entrar no documento "JavaScript", por exemplo, lerá o conteúdo "texto de javascript do mongoDB".

Contudo, ainda não é possível alterar esse texto. Precisamos programar esse recurso para que a modificação seja salva no banco de dados.

**Reorganização de arquivos** - O arquivo socket-back.js está ficando muito extenso, então vamos criar outro arquivo para armazenar os métodos de operações no banco de dados, como o encontrarDocumento().

Dentro da pasta "src", criaremos o arquivo documentosDb.js. Vamos recortar o método encontrarDocumento() do socket-back.js e colá-lo nesse novo arquivo. Ao final, vamos exportá-lo para que outros arquivos possam utilizá-lo:
```
function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({
    nome,
  });

  return documento;
}

export { encontrarDocumento }
```

Voltando ao arquivo socket-back.js, na linha em que declaramos a constante documento, posicionaremos o cursor exatamente antes do abre parênteses em encontrarDocumento(nomeDocumento), pressionaremos "Ctrl + Espaço" e importaremos essa função do outro arquivo:
```
import { documentosColecao } from "./dbConnect.js";
import { encontrarDocumento } from "./documentosDb.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
      devolverTexto(documento.texto);
    }
  });

  // ...

});
```

Note que não precisamos mais da coleção documentosColecao em socket-back.js. Podemos recortar a importação no início desse arquivo e colá-la em documentosDb.js, já que é neste arquivo que usaremos essa coleção:
```
import { documentosColecao } from "./dbConnect.js";

function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({
    nome,
  });

  return documento;
}

export { encontrarDocumento }
```

Vamos salvar todas as alterações. O Alura Docs continuará funcionando como antes, apenas fizemos uma reorganização de arquivos, antes de prosseguir os estudos.

**Alterando dados** - No arquivo socket-back.js, vamos alterar o código na parte em que recebemos o evento texto_editor, quando um usuário digita no campo de texto:
```
// ...

socket.on("texto_editor", ({ texto, nomeDocumento }) => {
    const documento = encontrarDocumento(nomeDocumento);

    if (documento) {
        documento.texto = texto;

        socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
});
```

Atualmente, a constante documento recebe encontrarDocumento(nomeDocumento). Em vez disso, ela receberá atualizaDocumento(). Para atualizar um documento, precisamos do nome dele para buscá-lo no banco de dados e do novo texto que queremos definir no banco. Então, como parâmetros, passaremos nomeDocumento e texto:
```
// ...

socket.on("texto_editor", ({ texto, nomeDocumento }) => {
    const documento = atualizaDocumento(nomeDocumento, texto);

    if (documento) {
        documento.texto = texto;

        socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
});
```

**Método atualizaDocumento()** - A função atualizaDocumento() ainda não existe. A seguir, vamos desenvolvê-la no arquivo documentosDb.js, depois do método encontrarDocumento():
```
import { documentosColecao } from "./dbConnect.js";

function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({
    nome,
  });

  return documento;
}

function atualizaDocumento(nome, texto) {

}

export { encontrarDocumento }
```

Vamos declarar a constante atualizacao e, dessa vez, utilizaremos o método interno updateOne() do MongoDB:
```
// ...

function atualizaDocumento(nome, texto) {
    const atualizacao = documentosColecao.updateOne();
}

export { encontrarDocumento }
```

O método updateOne() buscará um documento e o atualizará, de acordo com o que passarmos. Semelhante ao findOne(), o primeiro parâmetro será um objeto com as características do registro que queremos buscar na coleção:
```
// ...

function atualizaDocumento(nome, texto) {
    const atualizacao = documentosColecao.updateOne({
        nome
    });
}

export { encontrarDocumento }
```

O segundo parâmetro também será um objeto, que indicará qual atualização deve ser feita no documento. Depois de encontrar o documento cuja propriedade nome é igual ao parâmetro nome, queremos definir o texto desse documento. Para fazer essa definição, usaremos o $set.

Em inglês, set significa "definir".

O valor do $set será um objeto também, porque queremos definir nosso documento como um objeto com a propriedade texto igual ao texto que recebemos por parâmetro também:
```
// ...

function atualizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne(
    {
      nome,
    },
    {
      $set: {
        texto,
      },
    }
  );
}
```

O MongoDB verificará que o documento no banco de dados é um objeto também e que estamos passando um objeto e mesclará os dois. Já que passamos a propriedade texto, ele atualizará o texto. As demais propriedades serão mantidas.

Depois do updateOne(), basta retornar a constante atualizacao:
```
// ...

function atualizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne(
    {
      nome,
    },
    {
      $set: {
        texto,
      },
    }
  );

  return atualizacao;
}
```

Vale ressaltar que, depois de fazer as operações, o updateOne() não retorna o documento que foi alterado, mas informações da operação de atualização!

Por fim, vamos exportar a função atualizaDocumento:
```
// ...

function atualizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne(
    {
      nome,
    },
    {
      $set: {
        texto,
      },
    }
  );

  return atualizacao;
}

export { encontrarDocumento, atualizaDocumento };
```

Vamos salvar o arquivo documentosDb.js e voltar ao socket-back.js, no trecho em que usamos o atualizaDocumento().

Primeiramente, vamos importar a função. Basta posicionar o cursor exatamente antes do abre parênteses em atualizaDocumento(), pressionar "Ctrl + Espaço" e aceitar a importação, que será inserida no início do arquivo automaticamente:
```
import { atualizaDocumento, encontrarDocumento } from "./documentosDb.js";
import io from "./servidor.js";

// ...
```

Como a maioria dos métodos do MongoDB, o updateOne() retorna uma promise. Para resolvê-la, vamos inserir a palavra-chave await antes da chamada do atualizaDocumento(). Além disso, precisamos definir a função callback como assíncrona:
```
// ...

socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const documento = await atualizaDocumento(nomeDocumento, texto);

    if (documento) {
        documento.texto = texto;

        socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
});
```

Para manter nosso código consistente, vamos mudar o nome da variável de documento para atualizacao:
```
// ...

socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);

    if (documento) {
        documento.texto = texto;

        socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
});
```

Ademais, vamos comentar o restante do código dessa função, a partir do bloco if, já que não vamos utilizá-lo por enquanto:
```
// ...

socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);

    //  if (documento) {
    //      documento.texto = texto;

    //   socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
});
```

Agora, usaremos o console.log() para exibir a atualização e verificar o que acontece quando tentamos redefinir o texto de um documento:
```
// ...

socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);

    console.log(atualizacao);

    //  if (documento) {
    //      documento.texto = texto;

    //   socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
});
```

Depois, vamos salvar as alterações e deixar o terminal integrado aberto. Na interface do Alura Docs, vamos abrir o documento "JavaScript". Atualmente, seu conteúdo é:

texto de javascript do mongoDB

Como teste, vamos simplesmente pressionar o Enter para pular uma linha.

Voltando ao VS Code, a última informação impressa no terminal integrado é o seguinte objeto:
```
{
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1
}
```

A propriedade acknowledged: true indica que nossa operação foi reconhecida pelo servidor. O que mais nos interessa é a propriedade modifiedCount: 1, que nos informa quantos documentos foram alterados na coleção do MongoDB depois da operação updateOne(). No caso, modificamos apenas um documento.

No Alura Docs, vamos alterar do documento "JavaScript" novamente, acrescentando mais conteúdo:
 - texto de javascript do mongoDB
 - texto a mais

No MongoDB Atlas, vamos clicar no botão "Refresh" no canto direito superior da coleção "documentos". Após atualizar, repararemos que o conteúdo modificado no Alura Docs também foi alterado na coleção:
```
_id: ObjectId('6357fodbdfbef288f7298645')
nome: "JavaScript"
texto: "texto de javascript do mongoDB
        texto a mais"
```

Conseguimos verificar na prática que o código está funcionando como esperávamos!

Voltando do VS Code, vamos descomentar o trecho comentado e fazer algumas alterações. No bloco if, em vez de documento, colocaremos atualizacao.modifiedCount:
```
// ...

socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);

    console.log(atualizacao);

    if (atualizacao.modifiedCount) {
        documento.texto = texto;

        socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
});
```

Caso a operação falhe e não altere nenhum documento, a propriedade modifiedCount será igual a 0 e o código deve ignorar esse bloco if. Caso a operação seja bem-sucedida, modifiedCount terá valor igual a 1 e executaremos o bloco.

No bloco if, vamos remover a linha documento.texto = texto, pois diz respeito à alteração da lista local, que não existe mais. Ou seja, manteremos apenas a emissão para as salas do Socket.IO:
```
// ...

socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);

    console.log(atualizacao);

    if (atualizacao.modifiedCount) {
        socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
});
```

Para finalizar, podemos apagar o console.log() do evento texto_editor e também o do evento selecionar_documento, pois serviam apenas para testes. O arquivo finalizado ficará assim:
```
import { atualizaDocumento, encontrarDocumento } from "./documentosDb.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);

  socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
      devolverTexto(documento.texto);
    }
  });

  socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);

    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
  });
});
```

Uma vez salvo, vamos testar todas as funcionalidades que implementamos no Alura Docs até agora, para nos certificar de que continua funcionando.

**Testando** - Para simular que Juliana e Eduarda estão editando documentos simultaneamente, acessaremos o Alura Docs em duas janelas diferentes do navegador. Vamos posicionar uma janela à esquerda para representar a tela da Eduarda e outra à direita para a tela da Juliana. Em ambas, abriremos o documento "Node".

Na tela de Juliana (à direita), vamos editar o conteúdo do documento: 
 - texto de node do mongoDB
 - texto da Juliana aqui...

Note que a alteração também aparece na tela de Eduarda! Nosso sistema está funcionando como esperado.

Vale ressaltar que essas alterações não interferem em outros documentos. Na tela de Juliana, vamos abrir o documento "Socket.IO" e alterar seu conteúdo:
  - texto de socket.io do mongoDB
  - novo texto aqui...

Podemos atualizar a página ou até acessar o "documento Socket.io" pela janela de Eduarda, não teremos nenhum problema.

Além disso, atualizando a coleção "documentos" no MongoDB Atlas, reparamos que todas as alterações foram salvas no banco de dados também!

