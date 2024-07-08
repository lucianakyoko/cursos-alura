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
