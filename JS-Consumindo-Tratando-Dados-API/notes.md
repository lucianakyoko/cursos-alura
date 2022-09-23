# Anotações: 
 Task Queue, Call Stack, Event Loop

## Síncrono vs Assíncrono
  - Síncrono: uma tarefa é concluída após a outra
  - Assíncrono: há tarefas executadas em "segundo plano"

## Leitura síncrona
```
function mandarMensagem() {
console.log(“Estou aprendendo a programar.”);
}
console.log(“O javascript é legal.”);
mandarMensagem();
console.log(“Eu gosto de HTML e CSS.”);
```
Com o event loop reproduzindo esse código através do empilhamento de ações na call stack, a ordem que poderemos visualizar essas frases no console é:
  - O javascript é legal.
  - Estou aprendendo a programar.
  - Eu gosto de HTML e CSS.
O código será lido linha por linha e o console.log de dentro da função será impresso quando a função for chamada, ou seja, entre a frase “O javascript é legal” e a “Eu gosto de HTML e CSS”.

## como o JavaScript funciona?
No cotidiano da pessoa desenvolvedora front-end suas tarefas envolvem desenvolver vários tipos de funções: as que acontecem a partir de alguma ação do usuário, as que carregam dados externos (geralmente recebidos através de uma API), entre outras.

Por padrão o JavaScript funciona de modo síncrono, executando as tarefas linha a linha. Funções como as descritas anteriormente podem atrasar essa execução por terem um tempo de espera relativo a fatores externos (como o usuário ou a API). Para isso não afetar o nosso projeto, temos o que é chamado de programação assíncrona.

A assincronicidade em programação é o ato de executar uma tarefa em “segundo plano”, para a execução das outras tarefas menores acontecerem enquanto a maior está sendo carregada, sem interromper o código. O javascript tem o comportamento de executar uma coisa por vez, mesmo se transformarmos trechos de código em assíncrono. Mas como funciona isso?

Podemos destrinchar o fluxo de execução de tarefas em JavaScript em três partes: Event Loop, Call Stack e Task Queue. O Event Loop é um ciclo que monitora e executa as ações que mandamos para o JavaScript. O processo de leitura do código só é finalizado quando não existem mais ações a serem executadas. A call stack é um mecanismo que organiza como irá funcionar o script quando existem muitas funções: qual função está sendo executada, quais estão sendo chamadas dentro de alguma função, etc. Por fim, a task queue é a fila de tarefas assíncronas. Se algo precisa ocorrer em segundo plano ou mais tarde, é nessa fila que ele será adicionado e executado mais tarde.

https://cursos.alura.com.br/extra/alura-mais/o-que-e-javascript--c1311
https://www.alura.com.br/artigos/hoisting-no-javascript

## Callbacks
 Callbacks são, basicamente, funções enviadas como parâmetro para outras funções. Podemos chamar de callback funções que são passadas como parâmetro para outras funções, como por exemplo a função ```mandaMensagem()``` que é enviada como parâmetro para a função ```setTimeOut```, dessa maneira: ```setTimeOut(mandaMensagem, 5000)```.
 
 Geralmente, callbacks são executados quando alguma operação é concluída ou quando um evento específico ocorre. Callbacks são assíncronos, portanto são funções que são ativadas por algum fator pré-determinado, podendo ser um tempo específico, a partir de uma ação do usuário, depois da conclusão de alguma coisa.


## API - Interface de Programação de Aplicações
API - permite que dois componentes de software se comuniquem. Chamamos esses dois lados de cliente e servidor. A API fica no meio fazendo a conexão. O cliente faz uma solicitação para essa API, ela faz os trâmites e pede ao servidor para retornar a resposta.

Uma API é um mecanismo que permite que duas partes de um software se comuniquem usando um conjunto de definições e protocolos. Sua arquitetura geralmente é explicada em termos de cliente e servidor. A aplicação que envia a solicitação é chamada de cliente e a aplicação que envia a resposta é chamada de servidor.

 ## Fetch API
 O método Fetch é assíncrono e tem como parâmetro obrigatório a URL da API.

 ## Promise
 Promise - é uma promessa de que algo vai acontecer. Como retorno, ela pode ser resolvida ou rejeitada.

Anatomia de uma promisse é composta de uma função com os parâmetros Resolve e Reject. Resolve e Reject são, dois Callbacks da função da Promise.
```
const entrega = new Promise(function(resolve, reject) {
  if(recebeu == true) {
    resolve('Ana recebeu a encomenda')
  } else {
    reject('Não foi possível receber a encomenda)
  }
})
```
Se essa promessa foi resolvida, ela vai ser chamada de função Resolve e enviará uma mensagem ou fará alguma ação que você definiu que fosse acontecer.

Na maioria dos casos, não construímos uma Promise do zero. Ela é gerada a partir de algo síncrono que, no caso, é o nosso Fetch API. Ele está fazendo uma Promise por trás dos panos que foi gerada através da nossa requisição.

Pode acontecer de a requisição demorar para carregar. Então, ao invés de dar um valor final de erro, ele gera uma promessa, e no futuro teremos o resultado da requisição.

  - Fulfilled: quer dizer que está completa
  - Reject
  - Pending: quer dizer que ainda não concluiu.

**métodos das Promises**
Retorna outras Promises.
Esses métodos são: o Then, o Catch e o Finally. Eles nos permitirão mostrar na tela todo esse valor do que estamos recebendo