import { atualizaTextoEditor } from "./documento.js";

const socket = io();

export function emitirTextoEditor(texto) {
  socket.emit('texto_editor', texto);
}

socket.on('texto_editor_clientes', (texto) => {
  atualizaTextoEditor(texto);
});

