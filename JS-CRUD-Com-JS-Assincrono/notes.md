## Preparando o ambiente
Durante o desenvolvimento deste projeto, utilizaremos o json-server para simular um servidor e consumir dados.

O json-server está listado como dependência no package.json que é o arquivo onde encontramos todas as bibliotecas externas que estamos usando no projeto, então ao fazer ```npm install``` dentro pasta admin, que é a pasta do projeto(vamos ver essa parte em video) é feito o download do json-server automaticamente.

A que se notar que o comando que executamos durante a aula para subir o servidor, json-server --watch db.json, deve ser realizado dentro da pasta do projeto a admin, caso contrário o comando não vai ser reconhecido.

Outra informação importante é que para funcionar localmente ao invés de rodarmos o comando ```json-server --watch db.json``` igual é feito na aula, temos que rodar o comando com npx na frente:

```npx json-server --watch db.json```

Caso queira utilizar o comando sem o npx na frente é preciso instalar o json-server de forma global:

npm install -g json-server

E depois para subir o servidor fazemos json-server --watch db.json como é feito na aula.

## CallBack Hell
É o código que cria o inferno das funções auxiliares(callback hell) ou pirâmide da ruina(pyramid of doom), que acaba dificultando não só o entendimento do código, mas também sua manutenção caso a personagem precise fazer novas movimentações no cenário.

Uma alternativa para deixar o código mais “limpo” é utilizar uma Promise. Com o retorno de um objeto de promessa, podemos encadear o .then() garantindo a sequência da execução.
Por exemplo:
```
movePersonagem(‘100’, ‘Esquerda’)
  .then(() => movePersonagem(‘800’, ‘Direita’))
  .then(() => movePersonagem(‘200’, ‘Esquerda’))
  .then(() => movePersonagem(‘10’, ‘Direita’ ))
  .then(() => movePersonagem(‘60’, ‘Esquerda’ ))
```

Esse cenário onde fazemos várias requisições que dependem uma da outra é bem comum, e nesse cenário podemos fazer uso do método .all da Promise. Passando cada uma das funções dentro de um array como argumento da Promise.all, conseguimos executar todas as funções em ordem sem precisar encadear vários.then()`:

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

##  ordem de execução
```
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3')
```

a saída do código acima é:
```
1
3
2
```
O setTimeOut() é uma instrução da WebApi, logo ele é mandado para a callback queue e executado após os dois console.log() que são executados primeiro pois são comandos nativos da linguagem.