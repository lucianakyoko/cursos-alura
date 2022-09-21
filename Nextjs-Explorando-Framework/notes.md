## passHref
O atributo passHref do NextLink força a passagem do href para seus componentes filhos. Ou seja, o href passado para o Link é implicitamente passado para o LinkEstilizado. Por isso que o href está presente na tag <a> do HTML e não precisamos escrever.
```<LinkEstilizado href={href}>```

O valor default do ```passHref``` é false, então, após executar o passo 5 você verá que a tag <a> não possui mais o ```href```. A tag está no documento e as suas estilizações provavelmente ainda estarão lá, mas a funcionalidade de navegação não funciona mais. Portanto, a acessibilidade e SEO da sua página serão prejudicados.

Segundo a documentação sobre o Link do Next.js, o passHref é mandatório quando o filho do NextLink é um componente que envolve uma tag <a>, como é caso do LinkEstilizado e qualquer outro componente de navegação dos frameworks citados no início.

É muito comum a utilização de bibliotecas e/ou frameworks como o styled-componentes, Material UI e Chakra UI na construção de interfaces gráficas. Essas ferramentas fornecem seus próprios componentes de âncora (tag <a> do HTML), mas seus propósitos são apenas aplicar a estilização.

Sendo assim, é comum a composição do componente <Link> do Next.js com os componentes dos frameworks citados anteriormente, gerando um novo componente que possui tanto a funcionalidade de navegação quanto a estilização desejada.

Vamos simular a utilização de um desses frameworks e entender mais sobre o passHref mencionado no vídeo anterior.

1) Crie o componente LinkEstilizado, que irá apenas trocar a cor do texto do link para vermelho.

OBS: Este componente foi criado baseado no exemplo da documentação. Não se preocupe com o React.forwardRef nesse momento, pois ele e os atributos ```onClick href``` e ```ref``` são necessários para que o Next.js consiga implementar a navegação SPA corretamente.

```
import React from 'react';

const LinkEstilizado = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref} style={{ color: 'red' }}>
      {children}
    </a>
  );
});

export default LinkEstilizado;
```

2) Substitua a tag <a> dentro do Link criado no vídeo anterior pelo componente <LinkEstilizado>.

```
// Componente Link
import NextLink from 'next/link';
import LinkEstilizado from '../LinkEstilizado';

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href}>
      <LinkEstilizado {...props}>{children}</LinkEstilizado>
    </NextLink>
  );
}
```

3) Rode o servidor com yarn dev.

4) Abra o DevTools do seu navegador e inspecione a tag <a>.

5) Retire o atributo passHref do componente Link, salve e inspecione novamente a tag <a> no documento.

## Referências da aula
[Guillermo Rauch](https://twitter.com/rauchg)
[7 principles of rich web applications - Guillermo Rauch](https://rauchg.com/2014/7-principles-of-rich-web-applications)
[Como a internet funciona](https://www.submarinecablemap.com/)
[Onde ficam os servidores?](https://jachoos.net/amazon-web-services-locations/)
[Problemas, SEO e Web Vitals](https://web.dev/vitals/)
[JamStack Arquivos estáticos](https://jamstack.org/)
[Performance Web I: otimizando o front-end](https://www.alura.com.br/curso-online-otimizacao-performance-web?gclid=CjwKCAiA78aNBhAlEiwA7B76pyarbX78QH2cLA9zcfvbwKHd9JFQJCkShSEAF5TU9oq0RGE_iGN09hoCmusQAvD_BwE)