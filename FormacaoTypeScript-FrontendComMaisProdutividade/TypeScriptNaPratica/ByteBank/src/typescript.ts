let valor: number = 3000;
let nome: string = 'oi'
valor = 12
let isPago: boolean | number = false;
let qualquer: any = 'bla'
qualquer = 12
isPago = 12

// Arrays:
const lista = []
lista.push('cachorro',22, true, [])

const listaNumero: number[] = [];
listaNumero.push(13, 15.3, 88)


//Tipos personalizados (type alias):
type Transacao = {
  tipoTransacao: TipoTransacao;
  data: Date;
  valor: number;
}

// Enum
enum TipoTransacao {
  DEPOSITO = 'Depósito', 
  TRANSFERENCIA = 'Transferência', 
  PAGAMENTO_BOLETO = 'Pagamento de Boleto'
}

const novaTransacao: Transacao = {
  tipoTransacao: TipoTransacao.DEPOSITO,
  data: new Date(),
  valor: 0,
}
