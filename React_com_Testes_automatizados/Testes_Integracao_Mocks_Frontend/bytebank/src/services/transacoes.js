import api from './api';

export async function buscaTransacoes() {
  try {
    const resp = await api.get('/transacoes');
    return resp.data;
  } catch (err) {
    return [];
  }
}

export async function salvaTransacao(novaTransacao) {
  try {
    const resp = await api.post('/transacoes', novaTransacao);
    return resp.status;
  } catch (err) {
    return 'Erro na requisição';
  }
}
