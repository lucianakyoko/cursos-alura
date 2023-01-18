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