const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}

function exibeInfoEstudante(objEstudante, infoEstudante) {
  return objEstudante[infoEstudante];
}

console.log(estudante.pet); //undefined
console.log(estudante['pet']); //undefined


console.log(estudante['nome']); //José Silva
console.log(estudante['cpf']); // 12312312312

console.log(exibeInfoEstudante(estudante, 'nome')); //José Silva
console.log(exibeInfoEstudante(estudante, 'cpf')); // 12312312312
