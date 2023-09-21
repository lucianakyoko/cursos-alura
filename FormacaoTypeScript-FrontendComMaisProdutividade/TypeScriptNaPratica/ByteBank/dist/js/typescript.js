let valor = 3000;
let nome = 'oi';
valor = 12;
let isPago = false;
let qualquer = 'bla';
qualquer = 12;
isPago = 12;
// Arrays:
const lista = [];
lista.push('cachorro', 22, true, []);
const listaNumero = [];
listaNumero.push(13, 15.3, 88);
// Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0,
};
