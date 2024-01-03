// Tipos primitivos:
let valor:number= 3000;
let nome: string = '';
let isPago: boolean = false;
let qualquer: any = '';
qualquer = 23;

/*-------------------------------------*/

// Arrays:
const lista: number[] = [];
lista.push(13, 22.5, 22, 88, 1.58);

/*-------------------------------------*/

// Tipos personalizados (Type Alias):
// type Transacao = {
//   tipoTransacao: string;
//   data: Date;
//   valor: number;
// }

// const novaTransacao: Transacao = {
//   tipoTransacao: '',
//   data: new Date(),
//   valor: 0
// }

/*-------------------------------------*/

// Enum:
type Transacao = {
  tipoTransacao: tipoTransacao;
  data: Date;
  valor: number;
}

enum tipoTransacao {
  DEPOSITO = 'Depósito',
  TRANFERENCIA = 'Transferência',
  PAGAMENTO_BOLETO = 'Pagamento de Boleto'
};

const novaTransacao: Transacao = {
  tipoTransacao: tipoTransacao.DEPOSITO,
  data: new Date(),
  valor: 0
}



/*-------------------------------------*/

