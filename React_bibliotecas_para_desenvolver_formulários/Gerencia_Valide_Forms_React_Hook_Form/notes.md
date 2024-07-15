# Anotações do Curso de React: gerencie e valide formulários com o React Hook Form

---

[Layout](https://www.figma.com/file/hsW25fAq36IDzzIxBtpgCd/Voll.med-%7C-React-Hook-Forms?type=design&node-id=57-1388&mode=design)

[Projeto inicial](https://github.com/alura-cursos/3652-react-forms)

[Documentação React Hook Form](http://react-hook-form.com/)

---

Para subir o projeto, rodar ```npm run dev``` no terminal

---

## formulários controlados e não controlados
Um dos motivos do React ser bastante utilizado e amado pela comunidade é o fato dele ser declarativo. E isso se dá muito pela forma que ele gerencia mudanças na nossa aplicação, ou seja, usando estados. A gente não precisa escrever um código que diga ao react “Faça isso” (linguagem imperativa), a gente declara um estado e pede para ele atualizar partes da nossa UI quando esse estado muda (linguagem declarativa).

Por exemplo, imagine que você crie o seguinte componente:

```
import React, { useState } from 'react';

function InputControlado() {
  const [valor, setValor] = useState('');

  const handleChange = (event) => {
    setValor(event.target.value);
  };

  return (
    <input
      type="text"
      value={valor}
      onChange={handleChange}
    />
  );
}

export default InputControlado;
```

Nesse input eu mantenho todo o controle de seu estado. Ele conhece o seu valor e sabe quando este valor muda, pois salvamos ele em um estado. Ele é o que chamamos de componente controlado.

Um componente controlado é um componente em que o seu estado é mantido por ele próprio. Esse estado é atualizado por meio de eventos, geralmente associados a campos de entrada, e os valores desses campos de entrada são sempre controlados pelo próprio componente.

Porém, em alguns casos você vai precisar trabalhar com componentes não controlados, por exemplo em formulários muito grandes em que fica inviável manter o estado de vários campos. É por isso que se usam bibliotecas como a biblioteca React Hook Form.

Vamos ver um exemplo de formulário não controlado

```
import React, { useRef } from 'react';

function InputNaoControlado() {
  const inputRef = useRef(null);

  const handleClick = () => {
    alert('Valor do input não controlado: ' + inputRef.current.value);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
      />
      <button onClick={handleClick}>Obter Valor</button>
    </div>
  );
}

export default InputNaoControlado;
```

Com o useRef a gente cria uma referência para nosso campo de entrada, e com isso conseguimos obter o seu valor atual diretamente do DOM. Formulários

Componentes não controlados são aqueles que mantém seu próprio estado interno, sendo necessário consultar o DOM usando uma referência sempre que quiser o seu valor atual quando precisar dele, pois ele não fica armazenado em estado do React. É uma abordagem que lembra mais a forma que o HTML nativo funciona.
O React Hook Form trabalha com componentes não controlados, mas também permite que possamos usar componentes controlados também. 

---

## High Order Functions
Quando a gente escreve código, é comum criarmos funções para realizar uma tarefa específica, geralmente algo repetitivo que tenhamos que duplicar ou repetir o código. Um bom exemplo disso é quando usamos a função map para interar sobre uma lista e renderizar um JSX quando trabalhamos com React.

Normalmente a gente iria repetir o mesmo bloco de código no HTML, mas com o map a gente itera sobre a lista e faz com que ela renderize o mesmo bloco de código apenas adicionando o que muda de forma dinâmica.

Exemplo:
```
import React from 'react';

function ListaDeItens({ itens }) {
  return (
    <ul>
      {itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

Sabe porque isso é possível? Porque o map é o que chamamos de High Order Function, ou em tradução livre, Função de Ordem Superior.
Funções de Ordem superior são funções que recebem uma função como argumento ou retornam uma função.
Você pode tá confuso quando a utilidade dessas funções, mas imagine o seguinte, você deseja filtrar todos os números pares de uma lista de números. Então escreve:

```
function filtraImpar(arr) {
  const arrayFiltrado = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arrayFiltrado.push(arr[i]);
    }
  }
  return arrayFiltrado;
}
console.log(filtraImpar(arr));
```

Com isso você consegue filtrar os números ímpares. Agora imagine que você deseja filtrar os números pares. Você criaria uma nova função assim?

```
function filtraPar(arr) {
  const arrayFiltrado = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arrayFiltrado.push(arr[i]);
    }
  }
  return arrayFiltrado;
}
console.log(filtraPar(arr));
```

Notou que a única coisa que mudou foi a lógica dentro do If? Você duplicou todo um bloco de código e a única diferença entre eles acaba sendo um ponto de exclamação. Seria melhor ter uma função que fizesse tudo que essas duas fazem, menos lidar com a parte da lógica que define se o número é par ou ímpar. E aí, a gente poderia criar outras funções que lidariam com a lógica de verificar se o número é par ou ímpar. Então poderíamos fazer:
```
// Função que aplica o filtro com base na função callback
function filtro(arr, callback) {
  const arrayFiltrado= [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) ? arrayFiltrado.push(arr[i]) : null;
  }
  return arrayFiltrado;
}

// Função que verifica se é ímpar
function ehImpar(x) {
  return x % 2 != 0;
}

// Função que verifica se é par
function ehPar(x) {
  return x % 2 != 0;
}
```

Agora gente pode chamar nossa função de filtro da seguinte forma:
```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

filterFunction(arr, ehImpar)
// [ 1, 3, 5, 7, 9, 11 ]

filterFunction(arr, ehPar)
// [ 2, 4, 6, 8, 10 ]
```

Poderíamos inclusive criar outras funções como filtro. Por exemplo, se quero saber os números de um array que são maiores que cinco, eu posso fazer:
```
// Função que verifica se um número é maior que cinco
function maiorQueCinco(x) {
  return x > 5;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

filterFunction(arr, maiorQueCinco)
// [ 6, 7, 8, 9, 10, 11 ]
```

---


