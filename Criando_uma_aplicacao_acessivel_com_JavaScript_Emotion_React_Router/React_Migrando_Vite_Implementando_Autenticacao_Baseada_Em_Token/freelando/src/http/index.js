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


export default http