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


