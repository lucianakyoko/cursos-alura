import io from "./servidor.js";

io.on("connection", (socket) => {
  console.log('Um cliente se connectou! ID:', socket.id);

  socket.on('texto_editor', (texto) => {
    socket.broadcast.emit('texto_editor_cliente', texto)
  })
});
