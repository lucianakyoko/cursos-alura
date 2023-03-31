# ANOTAÇÕES - REACT: DESENVOLVENDO EM REACT ROUTER COM JAVASCRIPT

--- 

<p align="center">
  <a href="#-aula-1">Aula 1</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-2">Aula 2</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-3">Aula 3</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-4">Aula 4</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-5">Aula 5</a> 

</p>

---

## 📌 AULA 1

[Protótipo](https://www.figma.com/file/nDTrIQxTu6aldQG0o0iAbj/Ol%C3%A1%2C-Mundo!---Projeto-React%3A-router?node-id=38%3A716) no Figma.

### documentação do react-router-dom
[React Router](https://reactrouter.com/en/6)

### Componentes do react-router-dom
Sem o componente BrowserRouter, não conseguimos utilizar os componentes Routes e Route do react-router-dom. Precisamos apenas de um BrowserRouter em nossa aplicação, e com ele também conseguimos utilizar o componente Link, por exemplo, que veremos nas próximas aulas.

O componente Routes é responsável por alternar entre diferentes rotas da nossa aplicação e recebe componentes Route como conteúdo.
O Routes funciona como um roteador de diferentes rotas, renderizando apenas uma delas. É possível ter mais de um componente Routes na nossa aplicação, dependendo do contexto, como você pode ver nessa seção da documentação.

## 📌 AULA 2 - SPA com react-router-dom
### useLocation e hooks
  O React tem seus próprios hooks nativos, como useState e useEffect, mas é comum que bibliotecas feitas para o React forneçam mais hooks para nós utilizarmos. Foi exatamente o nosso caso, onde utilizamos o hook useLocation do react-router-dom. Você pode revisar como funcionam os hooks do React.

### SPA e recursos nativos do JS
  Uma SPA (Single Page Application) é uma aplicação que acontece sempre na mesma página HTML, normalmente chamada de index.html. A “troca entre páginas” é feita puramente com o JS, ou por alguma ferramenta que abstrai o JS. No caso desse curso é a biblioteca react-router-dom, que no final das contas utiliza os próprios recursos do JS para realizar a navegação.

  Dessa forma, a navegação entre as rotas é muito mais rápida do que em sites tradicionais, que, onde a cada link que clicamos, devemos esperar uma nova requisição ao servidor, e a página do navegador é recarregada quando a nova página HTML está pronta para ser exibida. Já em uma SPA, a ideia é passar a sensação de que a pessoa usuária está em uma aplicação desktop.

  Alguns dos recursos nativos do JS que o react-router-dom utiliza por debaixo dos panos são o window.history e o window.location. O objetivo da biblioteca é melhorar a experiência de criação de uma SPA, abstraindo esses recursos nativos para métodos e componentes mais intuitivos e manuteníveis do que seria com JS puro.

  O React em conjunto com o react-router-dom não é a única forma de construir SPAs. Outros frameworks front-end, como Angular e Vue.js também utilizam os mesmos recursos nativos do JS para criar seus próprios ecossistemas de navegação.

### componente NavLink
  Utilizamos o hook useLocation para obter a rota atual e conseguir destacar o link ativo do menu. Porém, há uma forma alternativa de resolver esse mesmo problema, utilizando o componente NavLink do react-router-dom! 
  
  [Documentação](https://reactrouter.com/en/main/components/nav-link)



## 📌 AULA 3 - Rotas aninhadas
### pacote SVGR
  A sintaxe import { ReactComponent as NomeDoComponente } from 'caminho_do_componente'; é possível devido ao pacote SVGR, que já vem por padrão em um projeto React. Esse pacote permite que utilizemos um SVG como um componente React, assim não precisamos utilizá-lo como uma tag img.

  Para o meu caso, como usei o Vite para iniciar o projeto, foi necessário instalar o plugin: ```npm install vite-plugin-svgr```

  Ao final, foi necessário configurar o arquivo vite.config.js da seguinte forma:
  ```
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import svgr from 'vite-plugin-svgr'

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [ svgr(), react()]
  })
  ```

### rotas index e caminhos relativos
Quando queremos reaproveitar partes da nossa aplicação em apenas algumas rotas em vez de todas, utilizamos o recurso de rotas aninhadas, que são rotas filhas de uma mesma rota pai. Você pode ver sobre isso na [documentação](https://reactrouter.com/en/main/start/overview#nested-routes).

 Documentação sobre [rotas index](https://reactrouter.com/en/main/start/concepts#index-routes).
 
## 📌 AULA 4 - Rotas dinâmicas
[Artigo](https://www.alura.com.br/artigos/como-trabalhar-com-markdown) importante
## 📌 AULA 5

