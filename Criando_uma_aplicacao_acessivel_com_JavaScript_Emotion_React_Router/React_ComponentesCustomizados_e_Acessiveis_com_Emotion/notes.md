# Anotações do curso: React: desenvolvendo componentes customizados e acessíveis com Emotion
---

Layout do projeto no Figma: [link](https://www.figma.com/file/DGIzbfXEi27oiKzI0nGMIV/Freelando-%7C-WebApp-com-React?type=design&node-id=244-8309&mode=design&t=wgm7xKhvAGvqu0yz-0)


Documentação do emotion: [link](https://emotion.sh/docs/flow#emotionstyled)

---

### Context API
No React a Context API você cria um repositório de informações onde todos os componentes da sua aplicação terão acesso, sem precisar passar as informações manualmente através das "props". É como criar uma espécie de "armazém" de dados que todos os componentes da sua aplicação podem acessar.

A Context API é uma ferramenta super útil para tornar o desenvolvimento de aplicações mais eficiente e fácil de gerenciar.

---

### react-grid-system
De forma resumida, é um sistema de grade baseado no sistema de colunas e linhas do BootStrap.

[documentação](https://www.npmjs.com/package/react-grid-system)

instalação:
```
npm install react-grid-system --save
```

### diferentes eventos do teclado
Eventos de teclado ocorrem quando uma tecla é pressionada ou liberada no teclado. Dentro do contexto do React, esses eventos são usados para gerenciar a interação do usuário com a interface.

Eventos específicos:

- onKeyDown: Este evento é acionado quando uma tecla é pressionada. Isso significa que, mesmo se o usuário mantiver a tecla pressionada por algum tempo, o evento será acionado apenas uma vez.

- onKeyDownCapture: Este é o mesmo que o onKeyDown, mas ele é acionado primeiro pelo evento capturador. Isso significa que ele será processado antes de chegar ao elemento-alvo.

- onKeyUp: Este evento é acionado quando uma tecla é liberada. Isso significa que o evento será acionado apenas uma vez, independentemente de quanto tempo a tecla tenha sido mantida pressionada.

- onKeyUpCapture: Este é o mesmo que o onKeyUp, mas ele é acionado primeiro pelo evento capturador. Isso significa que ele será processado antes de chegar ao elemento-alvo.

- onKeyPress*: Este evento é acionado quando uma tecla é pressionada e liberada. Isso significa que o evento será acionado repetidamente enquanto a tecla for mantida pressionada.
O evento onkeypress está marcado como depreciado em alguns navegadores. Alguns deles, como o Google Chrome, já não suportam mais esse evento.

A razão disso é que o evento onkeypress tinha algumas limitações e comportamentos inconsistentes em diferentes navegadores. Em vez disso, é recomendável usar os eventos onkeydown ou onkeyup para gerenciar a interação do usuário com o teclado em sua aplicação React.

Ao usar os eventos onkeydown ou onkeyup, você tem mais controle sobre a interação do usuário com o teclado e pode garantir que seu código seja compatível com diferentes navegadores.