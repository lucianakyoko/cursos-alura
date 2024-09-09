const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante);
// console.log(stringEstudante);
// console.log(typeof stringEstudante);

// console.log(stringEstudante.nome);

const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante);

