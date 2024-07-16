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

