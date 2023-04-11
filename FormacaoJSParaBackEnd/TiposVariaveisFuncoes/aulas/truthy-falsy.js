// ***** Boolean *****
const usuarioLogado = true;
const contaPaga = false;

// ***** Truthy ou Falsy *****
/*
  0 => false
  '' => false
  1 => true
*/

// console.log(0 == false)
// console.log('' == false)
// console.log(1 == true)
// console.log('1' == true)

// ***** Null e Undefined *****
/*
  null => vazio ou nada
  undefined => valor indefinido
*/

let varUndefined; //o espaço da variavel está guardada na memória, porem, não está sendo atribuida nenhum valor 
let varNull = null; // o espaço da variavel está guardada na memória, e, está sendo atribuida valor vazio


let numero = 3;
let texto = 'Alura';

console.log(typeof numero)
console.log(typeof texto)
console.log(typeof varUndefined)
console.log(typeof varNull)