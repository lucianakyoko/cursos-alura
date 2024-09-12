import io from "./servidor.js";

const documentos = [
  {
    nome: 'JavaScript',
    texto: 'Texto de JavaScript...'
  },
  {
    nome: 'Node',
    texto: 'Texto de Node...'
  },
  {
    nome: 'Socket.io',
    texto: 'Texto de Socket.io...'
  }
];

io.on('connection', (socket) => {
  console.log('um cliente se conectou! ID: ', socket.id);

  socket.on('selecionar_documento', (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);
    const documento = encontrarDocumento(nomeDocumento);
    if(documento) {
      devolverTexto(documento.texto)
    }
  })

  socket.on('texto_editor', ({ texto, nomeDocumento }) => {
    const documento = encontrarDocumento(nomeDocumento);
    if(documento) {
      documento.texto = texto;
      socket.to(nomeDocumento).emit('texto_editor_clientes', texto);
    }
  });
});

function encontrarDocumento(nome) {
  const documento = documentos.find((documento) => {
    return documento.nome === nome;
  });

  return documento;
}