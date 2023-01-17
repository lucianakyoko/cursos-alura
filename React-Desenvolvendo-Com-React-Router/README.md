# REACT: DESENVOLVENDO EM REACT ROUTER COM JAVASCRIPT

---

## Aula 01 - Criando o "Olá Mundo"
<ul>
  <li>
    <h4>Instalar o react-router-dom</h4>
    <p>Utilizamos o comando npm install react-router-dom@6 que pegamos da própria documentação para instalar a versão 6.</p>
  </li>
  <li>
    <h4>Utilizar os componentes BrowserRouter, Routes e Route do react-router-dom;</h4>
    <p>Dentro do BrowserRouter, conseguimos utilizar os outros componentes da biblioteca. O Routes alterna entre diferentes rotas e o Route renderiza um determinado componente (com o atributo element) em um determinado caminho (com o atributo path).</p>
  </li>
  <li>
    <h4>Criar uma rota para um caminho que não existe.</h4>
    <p>Adicionando uma Route com o path='*', podemos renderizar uma página de 404, caso a URL acessada não corresponda a nenhuma das outras rotas.</p>
  </li>
</ul>





## Aula 02 - SPA com React-Router-Dom
<ul>
  <li>Diferenciar o comportamento de sites tradicionais e de SPAs: Sites tradicionais são compostos por várias páginas HTML, e uma requisição é realizada para o servidor do site sempre que queremos ir para uma nova página. Já as SPAs (Single Page Applications) são compostas por uma única página HTML, e seu conteúdo é alterado dinamicamente pelo JavaScript.</li>
  <li>Utilizar o componente Link do react-router-dom: Ele mantém o comportamento de uma SPA, impedindo que a página do navegador recarregue.</li>
  <li>Utilizar o hook useLocation: Com ele, podemos obter informações da rota que estamos atualmente.</li>
  <li>Utilizar o componente NavLink do react-router-dom: Com ele, temos acesso direto à informação do link estar ativo ou não</li>
</ul>

