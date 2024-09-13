 const socket = io();

 export function emitirAutenticarUsuario(dados) {
  socket.emit('autenticar_usuario', dados);
 }

 socket.on('autenticao_sucesso', () => {
  alert('Usuário autenticado com sucesso!');
  window.location.href='/';
});

socket.on('autenticacao_erro', () => alert('Erro na autenticação.'));

socket.on('usuario_nao_encontrado', () => alert('Usuário não encontrado.'));
