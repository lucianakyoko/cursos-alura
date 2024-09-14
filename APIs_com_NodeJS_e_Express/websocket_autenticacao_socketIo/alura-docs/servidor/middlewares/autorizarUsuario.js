import jwt from 'jsonwebtoken';

export default function autorizarUsuario(socket, next) {
  const tokenJwt = socket.handshake.auth.token;
  try {
    jwt.verify(tokenJwt, process.env.SEGREDO_JWT);
    next();
  } catch (erro) {
    next(erro);    
  }
}