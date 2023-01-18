import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function emitirTextoEditor(texto) {
  socket.emit('texto_editor', texto);
}

socket.on('texto_editor_cliente', (texto) => {
  atualizaTextoEditor(texto)
})

export {
  emitirTextoEditor
}