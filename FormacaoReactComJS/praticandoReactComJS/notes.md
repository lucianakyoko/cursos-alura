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

---

## AULA 04 - EVOLUINDO AS ROTAS

---

## AULA 05 - EXTERNALIZANDO DADOS
