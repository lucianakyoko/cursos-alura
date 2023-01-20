# WEBSOCKETS: IMPLEMENTE COMUNICAÇÕES EM TEMPO REAL COM SOCKET.IO E MONGODB

---
## Aula 01 - Crianto o Alura Docs
<ul>
  <li>
    Diferenciar o protocolo HTTP do WebSockets: O protocolo HTTP trabalha com o modelo requisição-resposta, que não é adequado para aplicações quando queremos criar uma comunicação bidirecional e em tempo real entre cliente e servidor. Para esses casos, utilizamos o protocolo WebSockets.
  </li>
  <li>
    Criar um servidor Socket.IO com Express e conectar um cliente: Você pode sempre consultar o passo a passo da documentação, na seção Get Started.
  </li>
  <li>
    Escutar o evento de conexão do cliente: Utilizamos o método io.on(), que recebe como primeiro parâmetro o nome do evento (por exemplo, “connection”) e como segundo parâmetro uma função callback, que será executada assim que o evento for escutado.
  </li>
</ul>

---
## Aula 02 - Trabalhando com Socket.IO
<ul>
  <li>Emitir seu primeiro evento a partir do cliente: No front-end, utilizamos socket.emit() para emitir o evento "texto_editor" para o servidor, junto com o texto que foi digitado.</li>
  <li>Emitir um evento para vários clientes a partir do servidor: No back-end, com io.emit(), podemos emitir um evento para todos os clientes ou, com socket.broadcast.emit(), podemos emitir para todos os clientes, exceto o cliente que está emitindo o evento.</li>
  <li>Organizar melhor os arquivos por responsabilidade: No front-end, deixamos um arquivo responsável por lidar com as manipulações do HTML (documento.js) e outro responsável para lidar com as funções do Socket.IO (socket-front-documento.js).</li>
</ul>

---
## Aula 03 - Avançando na comunicação
<ul>
  <li>Agrupar clientes em salas do Socket.IO: Utilizamos o método join() (do inglês “juntar”) para isso, passando como parâmetro o nome da sala na qual queremos colocar o cliente. No nosso caso, os nomes das salas eram os nomes dos documentos.</li>
  <li>Emitir eventos para uma sala específica: Para isso, utilizamos o método to() (do inglês “para”), passando como parâmetro o nome da sala para a qual queremos emitir o evento.</li>
  <li>Enviar um dado de volta para o cliente com Reconhecimento: Utilizamos esse recurso quando o cliente emite um evento e espera receber dados de volta do servidor, imitando o modelo de requisição-resposta do HTTP. Para tal, passamos uma função como último parâmetro de emit(), a obtemos na função callback do lado do servidor e a executamos, passando como parâmetro o dado que interessa ao cliente.</li>
</ul>

--- 
## Aula 04 - Utilizando o MongoDb
<ul>
  <li>
    Criar um banco de dados e conectá-lo com o Alura Docs: Criamos um cluster, um banco de dados e uma coleção no MongoDB Atlas. Em seguida, utilizamos o driver do Node.js para conectar o projeto ao banco de dados. Assim, conseguiremos fazer o projeto interagir com o banco de dados para persistir as informações dos documentos.
  </li>
  <li>
    Obter dados do banco de dados: 
    Utilizamos o método findOne (do inglês “encontrar um”) das coleções do MongoDB para buscar por um documento específico. No nosso caso, passamos um objeto com a propriedade nome, e seu valor é o nome do documento a ser encontrado. Com esse método, conseguimos obter o texto salvo no banco de dados para exibir na página de documento.
  </li>
  <li>
    Alterar dados do banco de dados:
    Utilizamos o método updateOne (do inglês “atualizar um”) das coleções do MongoDB para editar um documento específico. O primeiro parâmetro é o de busca do documento, e o segundo parâmetro é um objeto que deve possuir propriedades específicas (por exemplo, $set), que irão indicar ao MongoDB como atualizar o documento. Com esse método, a Eduarda e a Juliana conseguem refletir as alterações dos textos dos documentos no banco de dados.
  </li>
</ul>