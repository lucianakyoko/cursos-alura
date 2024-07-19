# Anotações do Curso de React: testes de integração e mocks no Front-end

---

[Projeto inicial](https://github.com/alura-cursos/bytebank-v2/tree/df08aa8579bc6b9964dc1f7a08a22c64cafa983e)

---

- Para rodar o projeto, dar o comando ```npm start``` no terminal

- Para rodar o teste: ```npm run test```

---

## Memory Router
O <MemoryRouter/> é um dos recursos mais importantes do react router-dom para quem deseja testar as rotas de uma aplicação. Ele dá um controle muito grande sobre as rotas, pelo fato de não estar vinculado a pilha de histórico de navegação como o <BrowserRouter/>, dando mais liberdade para acessar o local que desejar.

---

## React Router v5
Para quem desenvolve a mais tempo ou por alguma razão precisa utilizar uma versão mais antiga do React Router para suas aplicações, saiba que a maneira de escrever testes mudou um pouco de lá para cá. Por exemplo, com o React Router v5 era necessário instalar uma biblioteca chamada history para permitir gerenciar com mais facilidade o histórico da aplicação.

Se ficou curioso e quiser saber mais sobre como os dev’s ancestrais faziam, vou deixar o link de um exemplo muito interessante de como os testes eram feitos para essa versão logo abaixo:
[Testing Library and React Router v5](https://testing-library.com/docs/example-react-router/#testing-library-and-react-router-v5)

[Documentação](https://github.com/remix-run/history#documentation)

---

## testes de integração no Front-end
Quando falamos em Testes de Integração, devemos ter em mente o objetivo por trás de realizar tal tipo de teste. De forma geral, os testes de integração testam duas ou mais unidades de código para garantir que não exista nenhuma quebra daquilo que já foi testado anteriormente. Devido a isso, é recomendado que os testes de integração sejam feitos após os testes de unidades, para compreender se essas unidades trabalham bem juntas.

Por exemplo, imagine que você trabalha em um site de E-commerce, e precisa testar como a parte da aplicação do cliente (Front-end) se comunica e interage com a parte da aplicação do servidor (Backend). A parte do cliente se comunica de um jeito e a do servidor, um banco de dados por exemplo, se comunica de outra forma totalmente diferente. Então depois de escrever testes para as partes separadas, você poderia criar um teste de integração para verificar como essas duas partes trabalham em conjunto. Em aplicações Front-End, testes de unidade e testes de integração são muito semelhantes, a diferença é que nos testes de integração podemos testar fluxos bem maiores, como páginas, por exemplo.

Observando apenas o lado do Front-end, podemos escrever testes de integração para nossas aplicações, principalmente no React. No React, onde cada componente é uma função, ou seja, uma unidade, podemos escrever testes que avaliem como eles interagem uns com os outros.

Por exemplo, ainda imaginando o site de E-commerce, você poderia testar se ao adicionar um produto a lista de compras, esse produto realmente poderá ser visto e acessado por lá. E se você imaginar que a lista de compras pode ser acessada em uma outra página, por exemplo, você também conseguiria testar a integração entre as rotas de sua aplicação. Pois, ao adicionar um produto a lista de compras espera-se que ele possa ser acessado nesta rota. Mesma coisa você poderia imaginar se fosse o carrinho da seção de finalizar a compra.

---

## boas práticas de testes
[50 melhores práticas de testes com JavaScript](https://github.com/goldbergyoni/javascript-testing-best-practices/blob/master/readme-pt-br.md);

---

## Hooks do Jest
[Documentação Jest](https://jestjs.io/docs/api#afterallfn-timeout)
Sabia que o Jest também tem seus próprios hooks? É isso mesmo! Esses hooks, ou ganchos, são funções que executam um trecho de qualquer código em certa etapa do “ciclo de vida” dos testes. Você pode imaginar que um ciclo de vida é basicamente um determinado momento antes ou depois da execução do seu teste.

Esses hooks servem perfeitamente quando precisamos limpar algum dado que tenhamos criado ao iniciar um teste, ou executar alguma tarefa ou configuração repetitiva. Vamos conhecer alguns deles?

beforeAll : Serve para executar algo antes da execução de todos os testes;
beforeEach: Serve para executar algo antes da execução de cada um dos testes iniciar;
afterAll: Serve para executar algo após a finalização de todos os testes;
afterEach: Serve para executar algo após a finalização de cada um dos testes.
Cada um desses hooks deve ser executado recebendo uma função de callback, ou seja:
```
beforeAll(() => {}); // antes de todos os testes;
beforeEach(() => {}); // antes de cada um dos testes
afterAll(() => {}); // depois de finalizar todos os testes
afterEachAll(() => {}); // depois de finalizar cada um dos testes
```

Em nossa aplicação, poderíamos usar o beforeEach para limpar o mock de chamada a api antes de cada teste, dessa forma:
```
beforeEach(() => {
    api.get.mockClear();
  });
```

Ah, e só um detalhe, os hooks não podem ser chamados dentro de um test, sempre se lembre de chamá-los fora! Ok?

---

##  biblioteca react-hooks

Sabia que até pouco tempo atrás se testava hooks do React de forma diferente? Existe uma biblioteca para isso, a react-hooks, que até o momento em que foi produzido este curso ainda não possui suporte para a versão 18 do React.
[link](https://github.com/testing-library/react-hooks-testing-library)

---

##  falsos positivos nos testes
Dizemos que um código está coberto por testes quando ao executarmos os nossos testes suas linhas são executadas. Mas não se engane, mesmo que um código possua 100% de cobertura de testes isso não significa que ele está 100% testado.

É muito fácil gerar o que chamamos de falsos positivos enquanto testamos nosso software. Por exemplo, podemos ter um arquivo onde uma funçãoA utiliza uma funçãoB internamente, porém só a função A é exportada e testada
```
//falsoPositivo.js
const funcaoB () {
    // executa algo
}

const funcaoA () {
    funcaoB()
    return 'texto qualquer'
}

export default funcaoA
```

```
 //falsoPositivo.test.js
test('retorna um texto qualquer', () => {
   expect(funcaA()).toEqual(expect.any(String))
}
``` 

Se rodarmos os testes veremos que o relatório de cobertura nos mostra que o arquivo falsoPositivo.js foi testado 100%, mas na verdade só estamos testando a funcaoA e claramente não testamos nada sobre a funcaoB, não temos nenhum testes para garantir que ela funciona como deveria ou até um teste para verificar se ela foi chamada.

Então não se deixe enganar por relatórios de cobertura de teste. O que você como pessoa desenvolvedora deve fazer é garantir que seus testes se assemelhe o máximo possível com a forma que seu software ou aplicação será utilizado.

---

##  cobertura de código
Pode ser que você encontre em literaturas sobre testes o termo Cobertura de código (code coverage), e pode pensar que cobertura de código e Cobertura de testes (test coverage) são a mesma coisa. Afinal, são ou não são a mesma coisa? Para esclarecer, precisamos entender o que é cada um.

**Cobertura de código x Cobertura de testes**
É uma medida quantitativa que visa medir a eficácia dos testes perante os requisitos testados, determinando se os casos de testes cobrem os requisitos testados. Com ela é possível identificar códigos mal escritos, supérfluos, que não são testados e facilita o aumento da cobertura de testes já que podemos descobrir com essa métrica cenários que não estão sendo explorados.

Já a cobertura de testes é uma medida qualitativa que visa medir a eficácia dos testes perante os requisitos testados, determinando se os casos de testes existentes cobrem os requisitos que estão sendo testados.

E como isso se relaciona com o quanto meu código está testado ou não?

Em resumo, podemos dizer que uma cobertura de código alta não garante que o código será livre de defeitos, sendo mais objetiva mas sem dizer o quão realmente testado o nosso software é, enquanto que a cobertura de testes é mais subjetiva e dá um pouco mais de informação.

**Artigos para leitura**
- [Um pouco sobre cobertura de código e cobertura de testes](https://medium.com/liferay-engineering-brazil/um-pouco-sobre-cobertura-de-c%C3%B3digo-e-cobertura-de-testes-4fd062e91007)

- [Test Coverage](https://www.martinfowler.com/bliki/TestCoverage.html)

- [Code Coverage vs Test Coverage; Subjectivity and Usefulness](https://danashby.co.uk/2019/02/14/code-coverage-vs-test-coverage/)
---

## GitHub Actions
Você sabe o que é o Github Actions? É uma plataforma de integração contínua e entrega contínua, o famoso CI/CD que permite automatizar a sua compilação, testar, rodar comandos de pipeline.

O Github Actions permite executar fluxos de trabalho, que são processos automatizados que são executados quando acionado por um evento no repositório como um push ou pull request. Além disso, o Github actions fornece máquinas virtuais Linux, Windows e MacOS para executar estes fluxos de trabalhos.