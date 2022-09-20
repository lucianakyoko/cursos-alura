## Instalação do Styled-Components
Essa biblioteca nos ajuda a ter menos código quanto temos componentes muito simples além de evitar os conflitos com nomes de classes.

```
npm install --save styled-components
```

## Reset CSS
Em praticamente toda aplicação que vamos criar é necessário sobrescrever as configurações de estilos do navegador. Dessa forma garantimos uma experiência padronizada em todos os navegadores onde as pessoas podem acessar nossa aplicação.

Dentro do ```Styled Componenets``` utilizamos o método createGlobalStyle para conseguirmos aplicar esse reset CSS. Essa função nos retorna um novo componente estilizado que não possui as restrições de escopo para o CSS que aplicamos nele.
Normalmente quando criamos um componente estilizado as regras de CSS que aplicamos nele estão guardadas dentro do escopo daquele componente, dessa forma sabemos que elas não irão interferir com CSS de outros componentes. No caso do ```createGlobalStyle``` essa proteção é retirada e assim o CSS dele tem acesso global.

