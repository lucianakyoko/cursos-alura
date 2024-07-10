# Anotações do curso - React JS: crie testes com Jest e Testing Library e garanta o funcionamento do Front-end

---

[Projeto inicial](https://github.com/alura-cursos/bytebank/archive/4024dc4c985498ba39def85d11e3c903eb6ca256.zip)
[Tipos de testes: quais os principais e por que utilizá-los?](https://www.alura.com.br/artigos/tipos-de-testes-principais-por-que-utiliza-los)
---

## outros tipos de testes

**Testes de Acessibilidade**
Testes de acessibilidade visam garantir que pessoas com deficiência possam utilizar suas aplicações sem muitos problemas. Eles são feitos de forma manual ou automatizada com o uso de softwares e outras ferramentas apropriadas, inclusive podem ser feitos até mesmo por pessoas com deficiência.

É muito importante garantir que suas páginas e aplicações sejam acessíveis para que todas as pessoas possam utilizá-las sem problemas. Além disso, páginas acessíveis são melhores rankeadas por motores de buscas. Algumas das ferramentas utilizadas para testes de acessibilidade são:

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/);
- [AChecker](https://achecker.ca/);
- [Jest Axe](https://github.com/nickcolley/jest-axe);
- [Pa11y](https://github.com/pa11y/pa11y-ci).

Para Saber mais sobre testes de acessibilidade recomendo a leitura deste artigo abaixo:
- [Teste de acessibilidade](https://qatainarareis.medium.com/teste-de-acessibilidade-b71085facb5c).

**Testes de Regressão Visual**
Outro tipo de teste não muito comum mas também importante é o de Regressão Visual. O que este tipo de teste faz é basicamente garantir que quando houver novas alterações nas funcionalidades de um sistema, o restante deste mesmo sistema continue funcionando normalmente.

Basicamente, o que uma ferramenta de testes deste tipo faz é tirar vários screeshots dos seus componentes e/ou suas telas e salvar essas referências em alguma pasta para validá-las futuramente. Algumas ferramentas de testes de regressão visual são:

- [Loki](https://loki.js.org/);
- [Percy](https://percy.io/);
- [Cypress](https://docs.cypress.io/guides/tooling/visual-testing).

Tem alguma dúvida ou conhece algum tipo de teste que não foi falado aqui? Compartilha com a gente no fórum!

---
 
## ferramentas de análise estática

**Editorconfig**
Além do ESLint e o Prettier já apresentados, existem outras ferramentas de análise estática, como o Editorconfig que acabou entrando em desuso pelo grande uso e aceitação do Prettier, mas que ainda é bastante usado principalmente por quem desenvolve a bastante tempo.

O Editorconfig é um arquivo de configuração para IDE’s, com o objetivo de facilitar a visualização de algumas configurações como espaçamento ou indentação. Para configurar o editorconfig, você precisa instalar uma extensão do editorconfig em sua IDE e depois criar um arquivo chamado .editorconfig em sua árvore de trabalho com as configurações desejadas, como essas abaixo:
```
# EditorConfig is awesome: <https://EditorConfig.org>

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = crlf
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false
```

**TypeScript**
O TypeScript além de ser um superset do JavaScript também pode ser uma importante ferramenta de análise estática. Claro, não é essa a função principal da linguagem, mas ela te ajuda de diversas formas e essa é mais uma delas. É importante conhecer a ferramenta e saber como ela pode ajudar na análise estática.

---

## métodos assíncronos
Ao falarmos sobre métodos de consulta, um que não foi usado em exemplos foi o findBy(). Isso acontece porque este método é um método assíncrono. O que significa isso?

Métodos assíncronos são utilizados para lidar com códigos assíncronos. Por exemplo, quando realizamos uma requisição a uma API, devemos esperar que ela resolva e nos devolva uma resposta. Os dados da resposta dessa requisição não chegam na mesma hora e por isso não são renderizados imediatamente. Por isso existem os métodos assíncronos que esperam que as promises sejam resolvidas e aí, sim, fazem a consulta.

Os métodos findBy() e findAllBy() funcionam dessa maneira. Eles são uma mistura de outros dois métodos do Testing Library que são o getBy() e o waitFor(). Este último é exatamente o método que espera resolver todas as promises para assim permitir a consulta com o getBy()

[Documentação Testing Library](https://testing-library.com/docs/dom-testing-library/api-async/)

---

## testes de Snapshot são melhores?
Uma dúvida comum que pode surgir quando estamos testando é: “Porque eu preciso realizar várias asserções quando um simples teste de snapshot resolveria tudo?”

A resposta é que os testes de snapshot sozinhos não são suficientes para testar os componentes de interface da sua aplicação. Eles são facilmente atualizados e precisam de um olhar humano para que alguém veja com cautela a renderização do componente.

Por isso, testes de snapshots são fortes aliados nos testes, mas só eles tornam as asserções dos testes frágeis. Sempre busque fazer testes de snapshot combinados com asserções fortes que realmente testam o componente.

---

## explorando o userEvent
O userEvent é uma biblioteca complementar para o Testing Library que fornece uma simulação mais avançada de interações do navegador do que o método integrado fireEvent

Por padrão, ao criar uma aplicação React com o create-react-app o userEvent já vem instalado. Mas se por acaso você quiser realizar a instalação você pode fazer via terminal com o comando:
```
npm install --save-dev @testing-library/user-event @testing-library/dom
```

Alguns dos métodos do userEvent são:

- click(): Dispara um evento de clique em um elemento;
- dblClick: Dispara um evento de double click em um elemento;
- type(): Escreve um texto dentro de um elemento de <input /> ou <textarea/>;
- keyboard(): Simula eventos de teclado;
- selectOptions(): Seleciona as opções especificadas de um <select /> ou <select multiple/>.

[Documentação](https://testing-library.com/docs/ecosystem-user-event)

---

