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

## Convertendo dados
Observe o trecho de código a seguir:
```
  var requisicao = fetch("https://viacep.com.br/ws/01001000/json/")
    .then(resposta => resposta.json())
```
Ao fazer uma requisição para uma API com o fetch, é necessário converter os dados recebidos com o método .json(), pois os dados chegam em formato de bytes e precisamos transformar em outro formato para manipulá-los.

O corpo da resposta de uma requisição chega em formato de bytes. Desta forma o .json() transforma o corpo e retorna um json formatado. O formato JSON (JavaScript Object Notation) possui basicamente a mesma sintaxe que a de um objeto JS.

## Finally
  - **then** é quando a nossa promessa é resolvida, 
  - **catch** é quando a nossa promessa foi rejeitada.
  - **finally** é literalmente a sua tradução também, sendo "Finalmente". Independente da resposta dessa promessa, ele vai imprimir o que colocarmos.

## Arrow Functions
Dê uma olhada na estrutura do nosso código dentro do primeiro método .then dessa requisição: .then(resposta => resposta.json()). O conteúdo que está ali presente é uma função, mas construída de uma maneira diferente se torna uma arrow function. A versão ES6 do ECMAScript trouxe uma nova forma mais sucinta de trabalhar com funções chamada de Arrow Functions, por causa da sintaxe que lembra uma flecha: () =>.

Em uma função tradicional, caso você crie uma variável dentro dela, seu contexto é referente a função onde ela está. Para entender melhor: se você usar a palavra chave “.this”, você está se referindo a essa função em si.

Já em uma arrow function temos um contexto externo. Por exemplo, se essa arrow function for criada dentro de outra função seu contexto será aquela função que ela está dentro. Caso a função for aplicada fora de outra função, seu contexto será global, o código inteiro.

https://youtu.be/3EkS9-P3cIM

## Retornos de requisições
Quando estamos realizando uma requisição para a API, estamos trocando protocolos HTTP’s. HTTP é um protocolo, uma forma de conversa entre duas máquinas, que permite transferir hiper-texto de um lado a outro. Daí o nome Hyper Text Transport Protocol.

Uma requisição é composta de uma request (solicitação) e uma response (resposta). Request e Response são dois tipos de mensagem diferentes quando falamos de HTTP. A especificação HTTP diz exatamente o que podemos colocar dentro de cada um destes tipos de mensagem para que todos que "falem" o idioma HTTP consigam trocar informações corretamente.

Em uma response é retornado um response code (código de resposta) e um motivo, que dá significado ao código. A estrutura padrão desse código tem três dígitos, sendo o primeiro referente a classificação dele. Elas são:

1XX: Informativo – a solicitação foi aceita ou está em andamento;
2XX: Confirmação – a solicitação foi concluída ou entendida;
3XX: Redirecionamento – faltou alguma coisa na solicitação;
4XX: Erro do cliente – houve um erro na solicitação;
5XX: Erro no servidor – houve uma falha no servidor durante a solicitação.
Durante essa aula nós conhecemos um deles: quando consultado um CEP de formato inválido na API do ViaCEP ela nos retornará o código 400 (Bad Request).

Caso você queira saber mais sobre os tipos de código de resposta do protocolo HTTP recomendo a aplicação HTTP Cat que demonstra de forma descontraída as diferentes categorias que podemos encontrar. 

Além de todos esses conhecimentos novos, fizemos com sucesso uma requisição com os métodos das promises .then e .catch. 

https://www.alura.com.br/artigos/comecando-com-fetch-no-javascript

## Async Await
Esta é uma outra forma de trabalhar com promessas, ou seja, a estrutura utilizada para construir um código assíncrono abaixo foi a do .then, um método que as Promises disponibilizam:

```
const requisicao = fetch("https://localhost:5000/")
  .then(resposta => resposta.json())
  .then(respostaConvertida => console.log(respostaConvertida));
```

Esse código faz uma requisição pra uma API através de seu link em conjunto do método fetch e em seguida converte o resultado para JSON. Podemos reproduzir o mesmo código usando async await: 

```
async function geraRequisicao() {
  var requisicao = await fetch(“https://localhost:5000”);
  var respostaConvertida = await requisicao.json();
}
```

A declaração async function define uma função assíncrona e o operador await é utilizado para esperar por uma Promise. Dessa maneira, nossa requisição funcionará corretamente.

## Then ou Async Await?
Quando produzimos um código assíncrono com o uso do .then nós fazemos uso de callback dentro deles. O maior problema com callbacks é que eles não são bem dimensionados mesmo para códigos assíncronos moderadamente complexos, onde temos vários .then em seguida do outro. O código resultante geralmente se torna difícil de ler, fácil de quebrar e difícil de depurar. Isso é o que chamamos de callback hell.

Para resolver isso, foi desenvolvido outra forma de construir um código assíncrono: o async await, que funciona de forma semelhante ao then mas o código fica mais “bonito”. Esse “embelezamento” em códigos é o que chamamos de syntax sugar.

Em ciência da computação, syntax sugar ou açúcar sintático (em tradução literal), é a sintaxe dentro de uma linguagem de programação que foi concebido para tornar as coisas mais fáceis de ler ou expressar. Isso torna a linguagem "mais doce" para uso humano: as coisas podem ser expressas de forma mais clara, de forma mais concisa, ou em um estilo alternativo que alguns podem preferir.

O async/await apesar de ser uma opção mais "legível" ao .then() é importante frisar que não são logicamente equivalentes: 
- o **async/await** faz o processamento de forma sequencial, 
- Promises com **.then()** são processadas em paralelo, o que faz com que este método seja mais rápido. 

O async/await simplifica a escrita e a interpretação do código, mas não é tão flexível e só funciona com uma Promise por vez.

Ler artigo [“Async/await no JavaScript: o que é e quando usar a programação assíncrona?”](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar) 

## experiência do usuário
Dentro da área de experiência do usuário, os designers estudam as [heurísticas de Nielsen](https://www.alura.com.br/artigos/10-heuristicas-de-nielsen-uma-formula-pra-evitar-erros-basicos-de-usabilidade), que ajudam a projetar uma boa interface e por consequência uma ótima experiência de uso, durante o desenvolvimento desse projeto foi pensado em duas delas:

Prevenção de erros
Não é uma boa ideia deixar seu usuário errar sem explicar previamente o motivo do erro. Melhor do que isso, tente criar uma interface que permita ao usuário não errar. Para isso, aplicamos o mecanismo de auto completar o endereço de acordo com o CEP do usuário, evitando que os dados sejam enviados errados e ele não consiga receber seu pedido.

Ajude os usuários a reconhecerem, diagnosticarem e recuperarem-se de erros.
As mensagens de erros tem que ser claras e próximas do conteúdo ou ação que causou o erro. Por isso, aplicamos uma mensagem que aparece abaixo do campo de CEP caso o usuário digite ele incorretamente. Isso ajudará a detectar e resolver possíveis problemas.

Para ambas heurísticas, a solução foi aplicada com a manipulação do DOM. O Document Object Model (DOM) é uma interface de programação para os documentos HTML e XML. Representa a página de forma que os programas possam alterar a estrutura do documento, alterar o estilo e conteúdo. O DOM representa o documento com nós e objetos, dessa forma, as linguagens de programação podem se conectar à página. 