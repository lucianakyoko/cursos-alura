const transacoes = JSON.parse(localStorage.getItem('transacoes'), (key, value) => {
    if (key === 'data') {
        return new Date(value);
    }
    return value;
}) || [];
export const TransacoesManager = {
    registrarTransacao: (novaTransacao) => {
        transacoes.push(novaTransacao);
    },
    getTransacoes: () => {
        return Array.from(transacoes);
    }
};
