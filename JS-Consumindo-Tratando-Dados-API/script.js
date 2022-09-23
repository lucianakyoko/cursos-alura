const consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
  .then(resposta => resposta.json())
  .then(res => {
    if(res.erro) {
      throw Error('Esse CEP não existe');
    } else {
    console.log(res)
    }
  })
  .catch(erro => console.log(erro))
  .finally(mensagem = console.log('processamento concluido'));

console.log(consultaCEP)