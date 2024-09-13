const socket = io();

export function emitirCadastrarUsuario(dados) {
  socket.emit('cadastrar_usuario', dados);
}

socket.on('cadastro_sucesso', () => alert('Cadastro realizado com sucesso!'))
socket.on('cadastro_erro', () => alert('Erro no cadastro!'))
socket.on('usuario_ja_existente', () => alert('Usuario já existe.'))