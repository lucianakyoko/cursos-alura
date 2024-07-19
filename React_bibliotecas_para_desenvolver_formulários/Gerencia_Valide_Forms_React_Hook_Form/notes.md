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

## por dentro do register
[documentacao React](https://pt-br.legacy.reactjs.org/docs/forms.html)

Quando criamos componentes como campos de entrada no React, temos dois caminhos a seguir, ou criamos os componentes controlados ou não controlados. A documentação do React recomenda o uso de componentes controlados, pois com eles a gente consegue ter o controle do estado do componente, e nesse caso dos dados do formulário.

Mas imagine que você tenha um formulário grande e complexo, com vários campos. Você teria que criar um estado para cada campo e controlar muitos estados em uma aplicação pode ser bem problemático. Então é aí que surge o React Hook Form, e a solução que essa biblioteca disponibiliza para a gente é genial.

Estou falando do register, que é um método que lida com toda tarefa de controlar o formulário. O register recebe como parâmetro o nome do campo e um objeto de opções. E como retorno a gente consegue obter formas de manipular e ter acesso aos valores dos campos de entrada de nosso formulário.

Por exemplo, poderíamos usar o register da seguinte forma:
```
const { onChange, onBlur, name, ref } = register('nome'); 
        
<Input
  onChange={onChange} // assina o evento de onChange
  onBlur={onBlur} // assina o evento de onBluor
  name={name} // assina a prop name
  ref={ref} // assina uma referencia com o ref
/>
```

O que é equivalente a
```
<input {...register('nome')} />
```

Entre as opções que podemos passar como parâmetro para o register estão:

max : O valor máximo que podemos passar para o campo de entrada;
min : O valor mínimo que podemos passar para o campo de entrada;
disabled : Destiva o campo se o seu valor for true;
onChange : Uma função que pode ser invocada sempre que o formulário mudar. Boa para debuggar sua aplicação;
onBlur : Outra função usada para debuggar seu código quando o foco não estiver mais no campo em questão;
E muitas outras.

O método register lida com toda essa lógica por debaixo dos panos e você não precisa criar vários estados para os campos de seus formulários.

---

## você no controle
Em muitas situações na nossa vida como pessoas desenvolvedoras, quando precisamos criar um site, uma landing page ou página para algum serviço, não é vantajoso criar algo bem do início, bem do zero mesmo. Por exemplo, uma página de vendas que irá ficar no ar por apenas 30 dias, ou então uma landing page de divulgação de um evento que ficará online durante o evento.

Esses produtos geralmente precisam ser criados de forma rápida e eficiente, e isso pode fazer com que muita vezes seja melhor usar uma biblioteca de componentes com componentes prontos do que criar tudo do zero e não mão, linha de código por linha de código.

Mas vimos que componentes de bibliotecas externas geralmente são controlados, e o react hook form prefere os componentes não controlados. Mas como as pessoas que criaram essa biblioteca sabiam da possibilidade de eventualmente ser preciso usar componentes controlados eles criaram o [Controller](https://react-hook-form.com/docs/usecontroller/controller).

O Controller é um componente da API do React Hook Form que permite com que possamos trabalhar com componentes controlados de bibliotecas externas como o MUI, Tailwind CSS components, etc.

Então, caso você esteja trabalhando com uma biblioteca de componentes, com componentes prontos e controlados, é muito recomendado que você use o Controller. Por exemplo:

```
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { TextField, Checkbox } from "@material-ui/core"

interface IFormInputs {
  TextField: string
  MyCheckbox: boolean
}

function App() {
  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: {
      MyCheckbox: false,
    },
  })
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="MyCheckbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      />
      <input type="submit" />
    </form>
  )
}
```

No exemplo acima, usa-se o Controller para renderizar o componente Checkbox do MUI. A gente precisa da prop control, que será quem irá gerenciar as informações desse componente e passá-las para o useForm. Com isso temos acesso ao estado desse componente e seus valores.

E para renderizar o Checkbox usamos o método render com uma função de callback. Como parâmetro dessa função temos o fiel, que é um objeto que irá funcionar semelhante ao register, e com isso conseguimos controlar o componente Checkbox.

[Documentação](https://react-hook-form.com/docs/usecontroller/controller)

---