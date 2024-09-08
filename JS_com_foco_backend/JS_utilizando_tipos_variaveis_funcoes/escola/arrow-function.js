const estudanteReprovou = (notaFinal, faltas) => {
  if(notaFinal < 7 && faltas > 4) {
    return true
  } else {
    return false;
  }
}

const exibeNome = nome => nome;

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));
console.log(exibeNome('Caroline'))

