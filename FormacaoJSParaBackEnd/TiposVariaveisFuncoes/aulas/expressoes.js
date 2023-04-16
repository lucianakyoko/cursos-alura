//***** Declaração de função *****
function minhaFuncao(param) {
  // bloco de código
}
//minhaFuncao('param')


//***** expressão de função ****
const soma = function(num1, num2) {
  return num1 + num2
}
//console.log(soma(1, 1))


//***** Declaração de função x expressão de função *****
// diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo

//console.log(apresentacao())
function apresentacao() {
  return 'olá'
}

console.log(soma1(1, 1))
const soma1 = function(num1, num2) {
  return num1 + num2
}
