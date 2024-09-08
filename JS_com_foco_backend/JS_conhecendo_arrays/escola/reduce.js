const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(listaNotas) {
  // const somaDasNotas = listaNotas.reduce((acumulador, nota) => {
  //   return acumulador + nota;
  // }, 0);

  const somaDasNotas = listaNotas.reduce((acc, nota) => acc + nota, 0);
  const media = somaDasNotas / listaNotas.length;
  return media
}

console.log( 'Sala JS', calculaMedia(salaJS));
console.log('Sala Java', calculaMedia(salaJava));
console.log('Sala Python', calculaMedia(salaPython));
