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

## Como seria esse rodar no servidor?
Basicamente o seu código vai ser baixado em um desses servidores(AWS, Heroku, a Vercel), vai ter uma máquina que vai ler o seu código, tal como a minha máquina que está rodando esse projeto aqui agora. E lá vai rodar o comando ```yarn build && yarn start```

Ao rodar esse comando no terminal, ele fará o build do projeto e fará algumas otimizações. Se abrirmos o localhost:3000, aparentemente continua tudo igual, e se dermos um view page source na página, está tudo do mesmo jeito, estão aqui os arquivos Next. Eu posso até fechar e abrir de novo: ```next start```, ```started server on```.

Note que basicamente agora, se viermos na nossa home e alterarmos algo, ele não muda mais de acordo com as alterações que fazemos. Ou seja, ele está só pegando a versão já gerada e jogando-a para o nosso usuário. É isso que vai acontecer no servidor.

No momento do build, é mostrado no terminal que tudo está sendo gerado como estático.
Mesmo os servidores, é mais barato rodarmos os arquivos de forma estática. Arquivos de forma estática seria pegar somente o HTML, o CSS e o JavaScript e servir. Então o usuário acessa uma URL, o servidor interpreta que teve a requisição e manda só um arquivo HTML estático. Você não tem o processamento do servidor de gerar o arquivo e depois mandar, que é uma coisa que acontece muito.

O que o Next está fazendo parece Server Render, mas vai gerar um monte de arquivos estáticos, ele está gerando um monte de arquivo estático para nós. Ou seja, temos um build, que gera os arquivos estáticos e o servidor do próprio Next, otimizado para rodar o Next, que roda isso. É isso que está acontecendo.

## Next Export
Vamos criar um comando chamado “export”:, no meu “package.json”, e eu vou dizer que esse “export”:, quando eu rodar npmr export, é um atalho para “next build && next export”. Basicamente eu estou fazendo um atalho para rodar isso aqui.

Repara que ao rodar o ```npm export``` surgiu uma pasta “out”, à esquerda e dentro dela tem o “index.html”, o “faq.html” e a página “404.html”. Ele também tem esse monte de “chunks”, esse monte de arquivos JavaScript. Tudo que está aparecendo aqui que o Next gera, está aparecendo aqui também.

Conseguimos copiar o path para esse arquivo na minha máquina e colar isso no navegador, então “/Users/mariosouto/dev/alura/01-nextjs-course/out/index.html” e ele abriu. E se clicarmos para ir para o FAQ, ele quebra porque desse jeito aqui só os arquivos estáticos mesmo ele não está 100% preparado para rodar, precisaria minimamente ter algum outro servidor rodando.

Utilizamos para fins de teste o servidor http-server:
```npx http-server ./out -c-1```

## Sobre o Next.js
Uma aplicação web criada com Next.js:
 - Possibilita Server Side Rendering (SSR). O Next.js consegue pré-renderizar o HTML para cada requisição
 - Possibilita geração de conteúdo estático (Static Site Generation - SSG). O Next.js consegue pré-renderizar o HTML durante o build que será reutilizado em todas as requisições.
 - Tem melhor SEO. O SSR e SSG facilitam o escaneamento dos motores de busca, como resultado a aplicação tem uma melhor nota de SEO.

## Recursos extras
```
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

## Organização de projeto
Como começar a estruturar um projeto React? com NextJS, Styled Components.
Dev Soutinho
https://youtu.be/mJK5oGixSYo

## Pasta public
  Os arquivos dentro da pasta public estarão disponíveis como recursos do website e poderão ser acessados diretamente pela URL, seguidos do caminho relativo do arquivo à raiz da pasta public.

## Robots.txt
Um arquivo robots. txt informa aos rastreadores do mecanismo de pesquisa quais URLs podem ser acessados no seu site. Esse recurso é usado principalmente para evitar a sobrecarga do site com solicitações e não funciona como um mecanismo para manter uma página da Web fora dos resultados da pesquisa do Google.

## Arquivos estáticos
Arquivos estáticos e imagens devem ser colocadas dentro da pasta public. Para referenciar o arquivo dentro dessa pasta, devemos começar o caminho com “/” e também colocar a extensão no final.

## getStaticProps
o getStaticProps surge para você fazer sites estáticos, sites que você vai publicar dentro do GitHub Pages, num bucket do S3 da Amazon ou até mesmo no seu servidor customizado.
É na mesma pegada da pasta “out” aqui, ou seja, sempre que você usar o getStaticProps, pensa que o conteúdo que você está trabalhando nunca vai ser alterado, por mais que o conteúdo da API mude. Você vai precisar fazer um novo build do site para isso aqui mudar. Eu vou mostrar mais na prática.

## Algumas siglas importantes
  - **SSG**: Static Site Generation
  - **SSR**: Server Side Rendering
  - **ISG**: Incremental Static Generation

## Busca de dados
Considerando o seguinte cenário:
Uma empresa lançará um novo produto e você será responsável por montar o site de apresentação e venda.

O site será composto por 2 páginas: a página inicial e um painel de controle.

A página inicial terá os seguintes requisitos:

Ser atrativa visualmente para os clientes;
Ter bom SEO para aparecer nas pesquisas dos motores de busca;
Ter um baixo tempo de carregamento;
Descrever o produto;
Redirecionar para a parte de compra (que será desenvolvido por outra equipe);
Uma vez pronta, serão necessários pequenos ou quase nenhum ajuste.
O painel de controle terá os seguintes requisitos:

Mostrar os dados de venda atualizados;
A informação deve ser personalizada para cada cargo (vendedor, administrador, patrocinador etc);
Não deverá ser visto pelos motores de busca nem pelos clientes;
O tempo de carregamento não é prioridade.
Após analisar os requisitos, você percebeu que o Next.js fornece as ferramentas necessárias para atendê-los bem.

Neste cenário, a estratégia de busca de dados ideal para a página inicial e do painel de controle, respectivamente será o SSG e SSR, pois o ponto forte do SSG é a entrega rápida de conteúdos estáticos, então ele é a melhor estratégia para a página inicial. Com o SSR, você poderá construir um painel de controle personalizado e atualizado para cada requisição.

## Next e Google Analytics
O local que coloraremos o código do Analytics do Google será no arquivo _app.js dentro do componente <Head> (next/head). Desta forma pegará todas as nossas páginas.

Porém, não basta apenas copiar o código e colar. precisamos realizar o seguinte ajuste:
exemplo:

```
<Head>
  {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-2QZDPX3BLK"></script>
  <script 
    dangerourslySetInnerHTML={{
      __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(argments);
          }
          gtag('config', 'G-2QZDPX3BLK');
      `
    }}
  />
  </script>
</Head>
```

## Referências da aula 04
getStaticProps (Static Generation): https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation

useEffect: https://pt-br.reactjs.org/docs/hooks-reference.html#useeffect

Web.dev - Web Vitals: https://web.dev/i18n/pt/vitals/

getServerSideProps (Server-side Rendering): https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering

Jamstack: https://jamstack.org/

SSG - Static Site Generation

SSR - Server Side Rendering

ISG - Incremental Static Generation

## next.config.js
Alguns ajustes são importantes no projeto:
  - **trailing slash**, que é você ter ou não ter uma barra no final de todas as URLs do seu projeto, ou até mesmo fazer redirects.

O arquivo ```next.config.js``` vai servir basicamente para botarmos configurações gerais de como o Next deve funcionar com o nosso projeto.

Dentro do arquivo next.config.js, vamos colocar o seguinte código:
```
module.exports = {
  trailingSlash: true,
}
```
No localhost:3000, olhando na parte do “Confira as principais dúvidas” podemos ver que o FAQ agora tem sempre essa barra no final, e se ele não tiver, ele força, ele vai sempre botá-la aqui: ```http://localhost:3000/faq/``` 

Essa barra se faz necessário pois configuramos o Analytics no projeto, muitas pessoas que trabalham com análise de Analytics preferem que por padrão o site tenha essa barra ou ele não tenha essa barra

## Redirects
Dentro do arquivo next.config.js, vamos colocar o seguinte código:
```
module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/perguntas',
        destination: '/faq',
        permanent: true,
      }
    ]
  }
}
```
E vamos restartar o nosso servidor.

Bom o código acima diz: Sempre que acessarmos a rota /perguntas, o distino é a /faq
Perceba agora que se digitarmos ```http://localhost:3000/perguntas``` na barra do navegador, ele redirecioná para ```http://localhost:3000/faq/``` 