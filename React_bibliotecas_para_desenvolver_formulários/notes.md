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



