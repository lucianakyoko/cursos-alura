# ANOTAÇÕES - REACT: PRATICANDO REACT COM JAVASCRIPT

--- 

<p align="center">
  <a href="#-aula-1">Aula 1</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-2">Aula 2</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-3">Aula 3</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-4">Aula 4</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-5">Aula 5</a> 

</p>

---

## AULA 01 - PRIMEIROS PASSOS
  Projeto no [Figma](https://github.com/alura-cursos/cinetag/archive/refs/heads/arquivos-iniciais.zip)

### Estrutura para declarar rotas:
O componente BrowserRouter é responsável por informar a nossa aplicação que teremos um roteamento de componentes a seguir, o Routes é o próprio roteador e o Route é a rota em específico.

```
<BrowserRouter>
  <Routes>
    <Route path=”/” element={<Home />} />
  </Routes>
</BrowserRouter>
```

### CSS com módulos
Um módulo CSS é um arquivo CSS no qual todos os nomes de classe têm escopo local por padrão. Dessa maneira, você pode reutilizar nomes de classes em arquivos diferentes sem acontecer conflitos. Por exemplo: eu posso usar a classe container em vários componentes e pra cada container ter um estilo diferente.

O React por padrão suporta esse tipo de CSS sem precisar instalar, utilizando o padrão para nome de arquivos [nome].module.css

---

## AULA 02 - CRIANDO COMPONENTES
### Props
**Props** são propriedades de uma classe ou função JavaScript que podem ser passados aos seus componentes filhos. É possível enviar como “prop” diferentes tipos de dados e até mesmo outros componentes. É fundamental na criação de componentes por ser o meio de comunicação entre eles.

###  props.children
A props.children (propriedade filha) é uma propriedade especial do React que contém qualquer elemento filho definido no componente. Ela é usada para exibir o que você inclui entre as tags de abertura e fechamento ao chamar um componente.

A [documentação](https://reactjs.org/docs/composition-vs-inheritance.html) do React diz que você pode usar props.children em componentes que são genéricos, que não tem filhos pré-determinados, flexibilizando o uso do componente.
---

## AULA 03 - DEFININDO CONTEXTOS
### contextualizando contexts
O Context (em português, contexto) fornece uma maneira de passar dados pela árvore de componentes sem ter que passar props manualmente em todos os níveis.

Geralmente, quando estamos desenvolvendo um projeto em React, os dados são passados de por meio de props, de componente pai para filho.

Esse uso pode ser complicado para alguns tipos de propriedades que são exigidas por muitos componentes dentro de um aplicativo, como no nosso caso em que gostaríamos de mostrar quais filmes foram favoritados seja na página inicial ou na página de favoritos.

 A estrutura para iniciar um contexto é a seguinte: ```const MeuContexto = createContext();```

 Cada objeto Context vem com um componente Provider React que permite que os componentes que estão usando esse contexto façam alterações nele.
 ```
 <MeuContexto.Provider value={/* algum valor */}>
 ```

 Após abranger o componente com o provider, você consegue acesso ao componente utilizando o hook useContext(MeuContexto).

Resumidamente, o contexto fornece uma maneira de compartilhar valores como esses entre componentes sem ter que passar explicitamente um prop por todos os níveis da árvore.

### Hook
Um Hook (em português, gancho) é uma função especial que te permite utilizar recursos do React. Você pode detectar um hook pelo início de seu nome, em que aparece o termo use.


---

## AULA 04 - EVOLUINDO AS ROTAS
### Parâmetros da URL
A estrutura da criação de um parâmetro de URL dinâmico é o sinal de dois pontos e o nome desse parâmetro. Dessa maneira, foi criada uma rota dinâmica e podemos acessar as músicas pelo número do seu id.

### useParams
O hook useParams é um hook da biblioteca react-router-dom, e segundo sua [documentação](O hook useParams é um hook da biblioteca react-router-dom, e segundo sua documentação, ele retorna um objeto de valores/chaves que foram passados como parâmetros dinâmicos da URL atual. Para usá-lo, inicialmente, precisamos construir uma rota:), ele retorna um objeto de valores/chaves que foram passados como parâmetros dinâmicos da URL atual. Para usá-lo, inicialmente, precisamos construir uma rota:
```<Route path="videos/:id/" element={<Player />} />```

No exemplo acima, o parâmetro enviado é o id, que virou é uma rota reservada por causa do : na frente. Com o parâmetro dentro da URL, o roteador React não corresponderá literalmente à rota acima. Agora, corresponderá dinamicamente a páginas com o padrão “videos/:id”, sendo o id o valor que você quiser inserir, como: “videos/1”.

### Nested Routes
[Nested Routes](https://reactrouter.com/en/v6.3.0/getting-started/overview#nested-routes) (em português, rotas aninhadas) é um recurso do React Router que auxilia na criação do projeto, evitando códigos de layout duplicados e complicados. Com ele, você acopla componentes que se repetem entre as páginas em uma rota, levando em conta alguma parte da URL que é repetida entre todas elas.


---

## AULA 05 - EXTERNALIZANDO DADOS
