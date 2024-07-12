# Anotações do curso - React: criando formulários com Formik e yup

---

[Projeto inicial](https://github.com/alura-cursos/3650-formik/tree/projeto-base)
[Layout - Figma](https://www.figma.com/file/DGIzbfXEi27oiKzI0nGMIV/Freelando-%7C-WebApp-com-React?type=design&mode=design)

---

Comando para subir servidor: ```npm run dev```

---

## Instalação da biblioteca
### O que é o Formik?
[Documentação Formik]( http://formik.org)

O slogan do site promete: "Construa formulários em React sem as lágrimas". Observaremos durante o curso se isso realmente acontecerá! Além disso, o texto de apresentação afirma que o Formik é a biblioteca de formulários de código aberto (open source) mais popular do mundo para React e React Native.

Podemos clicar no botão "Get Started" logo abaixo do texto de apresentação para saber como iniciar com essa biblioteca.

Essa página começa com uma explicação sobre o que o Formik pretende resolver:
Formik é uma pequena biblioteca que ajuda você com as 3 partes mais chatas na construção de formulários: 1. Obter e retirar valores do estado do formulário 2. Validação e mensagens de erro 3. Tratamento do envio do formulário

### Instalando a biblioteca
Agora, vamos procurar na documentação a explicação sobre como instalar essa biblioteca. No sumário à direita da tela, vamos clicar no quarto tópico: "Installation".

Essa página indica trê maneiras de fazer essa instalação: com o NPM (Node Package Manager), com o Yarn ou através da tag <script>.

Todas as bibliotecas instaladas no nosso projeto foram instaladas com NPM. Então, vamos seguir as instruções da documentação e copiar o seguinte comando: ```npm install formik --save```

Em seguida retornamos ao VS Code e abrimos o terminal, clicando em "Terminal > New terminal" no menu superior. Vamos colar o comando que copiamos nesse terminal e pressionar "Enter". A instalação será feita automaticamente!

Agora que já conhecemos um pouco sobre o Formik e o instalamos em nosso projeto, vamos começar a utilizá-lo para refatorar o formulário do Freelando.

---

## Formik
Pessoas desenvolvedoras que utilizam React em seus projetos frequentemente se deparam com a tarefa de criar formulários interativos. Gerenciar estado, validação, erros e envio de dados pode ser trabalhoso e consumir tempo.

A biblioteca Formik surge como uma solução poderosa, simplificando e otimizando o desenvolvimento de formulários. Com ela, você tem os seguintes benefícios:

Criar formulários com menos código: diminua a repetição e concentre-se na lógica da sua aplicação.
Validação: implemente validações personalizadas.
Experiência aprimorada: tenha uma experiência de desenvolvimento mais fluida e produtiva.
Comunidade ativa: aprenda com uma comunidade ativa e documentação extensa para suporte e aprendizado.

---

## Render prop
Em um formulário contendo com campos de digitação construído como inputs do HTML ainda há a necessidade de obter de maneira manual a inserção dos valores salvos no campo de digitação. Mas como podemos ter acesso a esses valores?

O componente <Formik> do Formik permite que você passe uma função como filho, o que é comumente conhecido como uma render prop. Essa abordagem é uma técnica poderosa em React que permite a composição de componentes de forma flexível, permitindo que os componentes pais repassem lógica para os componentes filhos. Exemplo:
```
<Formik initialValues={{nome: “”}}>
(formik => {
//formulário
})
/>
```

Quando você passa uma função como filho para o <Formik>, essa função é chamada com um objeto contendo várias utilidades e informações relacionadas ao formulário, como valores do formulário, funções de manipulação de eventos (como handleChange e handleSubmit), estado de validação, entre outros. No caso do nosso exemplo, podemos usar o parâmetro para acessar os valores do Formik, como formik.values.nome ou formik.handleChange.

---

##  componentes do formulário

Formik surge como uma biblioteca poderosa em React, simplificando o gerenciamento de estado e validação em formulários. Para utilizar ao máximo essa ferramenta, podemos também aplicar os componentes prontos disponibilizados por ela.

Um dos principais componentes do Formik é o componente <Form>. Usado para envolver e gerenciar um formulário React. Ao utilizá-lo, ele automaticamente cuida de rastrear os valores do formulário, lidar com eventos de envio e fornecer funções de manipulação de formulário como handleChange, handleSubmit, entre outras.

Além dele, temos o componente <Field>, uma ferramenta essencial para lidar com campos individuais em formulários React gerenciados pelo Formik. Ele simplifica o processo de rastreamento de valores e mudanças em campos de entrada, gerenciamento de estado, validação de entrada e encapsulamento de lógica de campo.

Dessa maneira, não precisamos mais utilizar o parâmetro do render prop. Ao definir o tipo e o nome do campo no Field, ele já faz a iniciativa de gerenciar o estado.

Todos esses componentes devem ser envolvidos pelo <Formik>: é o componente de nível superior. Ele é usado para envolver todo o componente de formulário e fornecer as funcionalidades principais da biblioteca, como rastreamento de estado, validação de formulário e manipulação de envio. É responsável por coordenar toda a lógica do Formik dentro do seu aplicativo.

Ao utilizar todos esses componentes em conjunto, você se beneficia de um gerenciamento de estado centralizado, abstração de lógica de formulário, facilidade de uso e manutenção, e uma experiência de desenvolvimento mais eficiente para criar formulários em aplicações React.

---

## Hook do Formik
Entre os recursos do Formik, o useFormikContext se destaca como uma ferramenta essencial para acessar o estado e as funções do Formik em qualquer componente descendente. Mas o que é o useFormikContext?

O useFormikContext é um hook customizado que fornece acesso ao contexto do Formik. Isso significa que você pode acessar as informações e funcionalidades do Formik a partir de qualquer componente dentro do formulário, sem precisar passá-las manualmente como props. Para isso, ele fornece as seguintes propriedades:

formik: Retorna um objeto com o estado e as funções do Formik.
errors: Retorna um objeto com os erros de validação do formulário.
touched: Retorna um objeto com os campos que foram tocados pelo usuário.
isSubmitting: Retorna um booleano que indica se o formulário está sendo submetido.
submitForm: Função para submeter o formulário.
setFieldValue: Função para definir o valor de um campo no formulário.
values: Retorna um objeto com os valores de todos os campos do formulário.
Ele é especialmente útil em cenários como:

Componentes reutilizáveis: Se você precisa de um componente que pode ser usado em diferentes formulários, o hook facilita o acesso ao estado e funções do Formik sem a necessidade de props específicas.
Formulários complexos: Em formulários com muitos campos e lógica complexa, o hook ajuda a organizar o código e evitar a repetição de código.
Acesso a informações do Formik: Se você precisa acessar informações do Formik em um componente que não está diretamente relacionado ao formulário, o hook fornece uma maneira conveniente de fazer isso.
Um ponto importante é que esse hook só funciona dentro do contexto de um componente Formik. Se você tentar usá-lo fora desse contexto, receberá um erro.

---

## reutilização do Formik
É comum ter vários formulários em um projeto, e o Formik permite usar vários componentes Formik sem problemas. Dessa maneira cada formulário fica encapsulado em seu próprio componente, facilitando a organização e a manutenção do código e as validações e o estado de cada formulário são independentes, evitando conflitos.

Para usar o Formik em outros formulários você deve:

Criar um componente Formik para cada formulário: Implemente a lógica de validação, estado e manipulação de dados específica para cada formulário.
Importar os componentes Formik onde necessário: Inclua os componentes em seu layout principal ou em outros componentes.
Passar as props necessárias: Cada componente Formik recebe props como o schema de validação, valores iniciais e funções de callback.

##  Yup?
O Yup é uma biblioteca JavaScript para validação de dados em diversos contextos, como formulários, APIs e validação de entrada de usuário em geral. Ele oferece uma maneira intuitiva e flexível de definir regras de validação complexas, tornando os dados recebidos pelo usuáro mais padronizados para salvar em sua base de dados.

Ele possui diversas funcionalidades como a validação de tipos, onde podemos definir o tipo de dado que pode ser enviado naquele local. Também há a validação de formato, onde podemos especificar o formato dos dados, como por exemplo, o e-mail e CEP.

Não somente isso, com o Yup podemos construir validações complexas e personalizadas, com combinações diferentes. Além de ter a possibilidade de definir mensagens de erro claras e informativas para cada tipo de validação que falhar.

O Yup funciona com diversas bibliotecas populares, como React, Vue.js, Angular e outras. Bora conhecer melhor ele?

---

## validação de e-mail
O método yup.email() é uma ferramenta para validar endereços de e-mail em JavaScript. Com o auxílio dessa funcionalidade podemos garantir que os endereços de e-mail coletados sejam válidos e confiáveis e identificar o problema para o usuário com a possibilidade de imprimir mensagens de erro personalizadas.

Ele verifica se um valor inserido segue o formato padrão de um endereço de e-mail, garantindo que os dados coletados sejam válidos e confiáveis, utilizando uma série de regras para verificar a estrutura de um endereço de e-mail:

Presença de caracteres específicos: Verifica se o valor contém os caracteres '@', '.' e pelo menos um caractere antes de '@'.
Formato do nome de usuário: O nome de usuário antes de '@' pode conter letras, números, pontos, sublinhados e hífens.
Formato do domínio: O domínio após '@' deve conter pelo menos um ponto e pode conter letras, números, pontos, sublinhados e hífens.
Tamanho máximo: O endereço de e-mail completo não pode ter mais de 254 caracteres.
```
const schema = Yup.object({
  email: Yup.string().email("Email invalido").required("Email é obrigatório"),
});

const data = {
  email: "joaosilva@email.com",
};

try {
  await schema.validate(data);
  // Email válido
} catch (error) {
  // Exibir mensagem de erro para o usuário
}
```

O Yup.email() nesse caso fornece mensagens de erro personalizadas caso o valor inserido não seja válido:

"Email inválido": O valor não segue o formato padrão de um endereço de e-mail.
"Email é obrigatório": O campo de email está vazio.
É importante considerar o contexto de seu projeto. Em alguns casos, você pode precisar de validações mais complexas, como verificar se o endereço de e-mail realmente existe ou se possuí um domínio específico.

---
