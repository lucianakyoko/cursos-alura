import axios from 'axios'
import { ArmazenadorToken } from '../utils/ArmazenadorToken';

const http = axios.create({
  baseURL: 'http://localhost:8080/'
})

// Adiciona um interceptador nas requisições
http.interceptors.request.use(function (config) {
  // Vamos adicionar o token no cabeçalho SE ele existir
  const token = ArmazenadorToken.accessToken
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
    console.log('Token foi adicionado ao cabeçalho')
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

const rotasIgnoradasPelosErros = [
  'auth/login',
  'auth/refresh',
];

const tentaRenovarToken = async () => {
  const token = ArmazenadorToken.refreshToken
  return axios.get('http://localhost:8080/auth/refresh', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(resposta => {
    ArmazenadorToken.definirTokens(
      resposta.data.access_token, 
      resposta.data.refresh_token)
  })
};

const lidarComErro401 = async (erro) => {
  await tentaRenovarToken()
    .then(() => http(erro.config))
  return Promise.reject(erro)
};

// adicionar um interceptador da resposta
http.interceptors.response.use(
  (response) => response,
  function (error) {
    if (!rotasIgnoradasPelosErros.includes(error.config.url) 
      && error.response.status === 401) {
      return lidarComErro401(error) 
    }

    return Promise.reject(error);
  });
  
export default http