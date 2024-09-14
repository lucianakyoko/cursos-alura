import { obterCookie } from "../utils/cookies.js";
import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

const socket = io('/usuarioss', {
  auth: {
    token: obterCookie('tokenJwt'),
  }
});

socket.on('connect_error', (erro) => {
  alert(erro);
  window.location.href ='/login/index.html';
});

function selecionarDocumento(nome) {
  socket.emit("selecionar_documento", nome, (texto) => {
    atualizaTextoEditor(texto);
  });
}

function emitirTextoEditor(dados) {
  socket.emit("texto_editor", dados);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nome) {
  socket.emit("excluir_documento", nome);
}

socket.on("excluir_documento_sucesso", (nome) => {
  alertarERedirecionar(nome);
});

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };
