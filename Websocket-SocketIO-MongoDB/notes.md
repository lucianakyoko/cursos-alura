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