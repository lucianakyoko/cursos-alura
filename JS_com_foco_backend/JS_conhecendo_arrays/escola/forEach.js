const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// notas.forEach(function(nota) {
//   somaDasNotas += nota;
// })

// notas.forEach(nota => somaDasNotas += nota);

notas.forEach(somaNotas);
function somaNotas(nota) {
  somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`a media das notas é ${media}`);
