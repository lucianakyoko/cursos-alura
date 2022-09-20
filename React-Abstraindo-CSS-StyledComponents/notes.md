## Instalação do Styled-Components
Essa biblioteca nos ajuda a ter menos código quanto temos componentes muito simples além de evitar os conflitos com nomes de classes.

```
npm install --save styled-components
```

## Reset CSS
Em praticamente toda aplicação que vamos criar é necessário sobrescrever as configurações de estilos do navegador. Dessa forma garantimos uma experiência padronizada em todos os navegadores onde as pessoas podem acessar nossa aplicação.

Dentro do ```Styled Componenets``` utilizamos o método createGlobalStyle para conseguirmos aplicar esse reset CSS. Essa função nos retorna um novo componente estilizado que não possui as restrições de escopo para o CSS que aplicamos nele.
Normalmente quando criamos um componente estilizado as regras de CSS que aplicamos nele estão guardadas dentro do escopo daquele componente, dessa forma sabemos que elas não irão interferir com CSS de outros componentes. No caso do ```createGlobalStyle``` essa proteção é retirada e assim o CSS dele tem acesso global.

## Boas práticas com CSS
Durante essa aula retiramos um estilo inline de um componente e fizemos a herança de um componente estilizado como forma de ajustar esse detalhe para os componentes que precisavam dele.

Os problemas que temos e por que devemos evitar estilos:
 - Se utilizamos estilos inline a tendência do nosso projeto é ter muito código CSS duplicado, o que dificulta a manutenção do projeto. Devemos lembrar sempre do principio de não se repetir ou DRY ( dont repeat yourself)
 - Devemos evitar estilos inline pois eles não são reutilizáveis e acabamos tendo código mais rígido. Se precisarmos fazer alguma alteração no layout precisaremos fazer um a um no caso dos inline, ao invés de ter um único lugar para alterar.

## Problemas de Perfornmance
Sempre que possível devemos evitar colocarmos a declaração de componentes dentro do método ```render``` dentro de componente baseados em classes e no caso de componentes funcionais não devemos declarar um componente dentro do outro.

Isso porque, caso um componente seja declarado dentro do método render ou dentro de um outro componente funcional ele será re-declarado a cada nova renderização e o React não conseguirá fazer cache desse componente, o que pode atrasar e muito a renderização da página.

Por isso, lembre-se de declarar seus componentes e ```styled components``` fora dos métodos de renderização do React.