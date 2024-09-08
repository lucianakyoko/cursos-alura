const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, index) => {
  return medias[index] < 7;
});

console.log(reprovados)