## Preparando o ambiente
O json-server está listado como dependência no package.json.
* fazer npm install dentro pasta admin, 

O comando que executamos durante a aula para subir o servidor, json-server --watch db.json, deve ser realizado dentro da pasta do projeto a admin, caso contrário o comando não vai ser reconhecido.

Outra informação importante é que para funcionar localmente ao invés de rodarmos o comando json-server --watch db.json igual é feito na aula, temos que rodar o comando com npx na frente:

npx json-server --watch db.json

Caso queira utilizar o comando sem o npx na frente é preciso instalar o json-server de forma global:

npm install -g json-server

E depois para subir o servidor fazemos json-server --watch db.json como é feito na aula.

---

## Para saber mais: Promise.All
Já sabemos como o callback hell dificulta nossa vida quando estamos falando de manutenção e complexidade de código, como nesse exemplo abaixo, onde temos várias funções auxiliares uma dentro da outra para executar o movimento de um personagem:

```
movePersonagem(‘100’, ‘Esquerda’, function() {
  movePersonagem(‘800’, ‘Direita’, function() {
    movePersonagem(‘200’, ‘Esquerda’, function() {
      movePersonagem(‘10’, ‘Direita’, function() {
        movePersonagem(‘60’, ‘Esquerda’, function() {
        })
      })
    })
  })
})
```

O callback hell acaba sendo necessário nesse caso pois desse modo garantimos que a segunda função só vai ser disparada quando a primeira for concluída e assim por diante, já que nesse cenário de exemplo estamos trabalhando com funções assíncronas para movimentar o personagem.

Vimos também que uma alternativa para deixar o código mais “limpo” é utilizar uma Promise. Com o retorno de um objeto de promessa, podemos encadear o .then() garantindo a sequência da execução.

```
movePersonagem(‘100’, ‘Esquerda’)
  .then(() => movePersonagem(‘800’, ‘Direita’))
  .then(() => movePersonagem(‘200’, ‘Esquerda’))
  .then(() => movePersonagem(‘10’, ‘Direita’ ))
  .then(() => movePersonagem(‘60’, ‘Esquerda’ ))
```

Esse cenário onde fazemos várias requisições que dependem uma da outra é bem comum, e nesse cenário podemos fazer uso do método .all da Promise. Passando cada uma das funções dentro de um array como argumento daPromise.all, conseguimos executar todas as funções em ordem sem precisar encadear vários.then()`

```
Promise.all([
  movePersonagem(‘100’, ‘Esquerda’),
  movePersonagem(‘800’, ‘Direita’),
  movePersonagem(‘200’, ‘Esquerda’),
  movePersonagem(10, ‘Esquerda’),
  movePersonagem(‘60’, ‘Esquerda’)
])
.then(...)
```

O Promise.all vai executar todas as chamadas na ordem e devolver uma resposta que então poderá ser utilizada no .then.

## Instalando browser-sync
`npm install -g browser-sync`

para executar:
`cd CRUD-com-JS-assincrono`
`browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html`

## sobre o JavaScript runtime
O `setTimeOut()` é uma instrução da WebApi, logo ele é mandado para a callback que é executado apos os dois `console.log()` que são executados primeiro pois são comandos nativos da linguagem:

```
  console.log('1');
  setTimeout(() => console.log('2'), 1000);
  console.log('3')
```
