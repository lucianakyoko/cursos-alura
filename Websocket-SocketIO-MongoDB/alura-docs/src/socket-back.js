import io from "./servidor.js";

const documentos = [
  {
    nome: "JavaScript",
    texto: "Texto de javascript..."
  },
  {
    nome: "Node",
    texto: "Texto de node..."
  },
  {
    nome: "Socket.io",
    texto: "Texto de Socket.Io..."
  }
];

io.on("connection", (socket) => {
  console.log('Um cliente se connectou! ID:', socket.id);

  socket.on('selecionar_documento', (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento); 

    const documento = encontrarDocumento(nomeDocumento);

    if(documento) {
      devolverTexto(documento.texto)
    };
  });

  socket.on('texto_editor', ({texto, nomeDocumento}) => {
    const documento = encontrarDocumento(nomeDocumento);
    if(documento) {
      documento.texto = texto;
      socket.to(nomeDocumento).emit('texto_editor_cliente', texto)
    };

  });
});

function encontrarDocumento(nome) {
  const documento = documentos.find(documento => documento.nome === nome);

  return documento;
}