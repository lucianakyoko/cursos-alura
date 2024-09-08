const notaFinal = 6;
const faltas = 2;
const advertencias = 0;


if(notaFinal < 7 && faltas > 4) {
  console.log('Reprovado. Boas festas');
} else {
  console.log('Não foi reprovado por faltos');
}

if(faltas >= 2 && !advertencias) {
  console.log('Recebe bônus');
} else {
  console.log('Não recebe bônus');
}

