// Tipos primitivos:
let valor = 3000;
let nome = '';
let isPago = false;
let qualquer = '';
qualquer = 23;
/*-------------------------------------*/
// Arrays:
const lista = [];
lista.push(13, 22.5, 22, 88, 1.58);
var tipoTransacao;
(function (tipoTransacao) {
    tipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    tipoTransacao["TRANFERENCIA"] = "Transfer\u00EAncia";
    tipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(tipoTransacao || (tipoTransacao = {}));
;
const novaTransacao = {
    tipoTransacao: tipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
};
/*-------------------------------------*/
