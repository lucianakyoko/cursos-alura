const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [numerosPares, numerosImpares];
const numeros1 = [...numerosPares, ...numerosImpares];
// console.log(numeros1)

// const num1 = 1
// const num2 = 2
const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];
console.log(num1, num2, outrosNumeros)

const [nome1 = 'Nanda'] = [1];
console.log(nome1);

const pessoa = {
  nome: 'Lais',
  idade: 25
};

const pessoaComTelefone = {
  ...pessoa,
  telefone: 123456456
}
console.log(pessoaComTelefone)

// const nomePessoa = pessoa.nome;
const { nome } = pessoa
const { idade } = pessoa
console.log(idade)


// function imprimeDados(dados) {
//   const {nome, idade} = dados
//   console.log(nome, idade)
// }
// imprimeDados(pessoa)

function imprimeDados({nome, idade}) {
  console.log(nome, idade)
}

imprimeDados(pessoa)