# Aula 01 - O desenvolvimento Front-end
## 7 princípios para construir web apps:
Quando trabalhamos com programação, muito se ouve que você tem que fazer um código performático (seu código tem que rodar bem, por exemplo). Mas a performance pela performance, ela não faz sentido.

Se você está otimizando alguma coisa, você precisa ter ciência de alguns pontos antes, que são os seguintes: 
  - Você precisa ter um acompanhamento disso, 
  - você precisa saber quanto você tem melhorando e 
  - você precisa ter noção do impacto que você está causando.

Apagar uma função, criar uma classe, criar menos variáveis... são difíceis de metrificar e são coisas complicadas de se entender. Então, no âmbito de web sites, como o Next, como ferramenta, vai nos ajudar nisso. Para isto, é importante compreender o que são **Web Vitals**.

**Web Vitals**: é um conjunto de métricas, em que elas se resumem basicamente 3 pontos que impactam muito a experiência das pessoas usando um site:
  - carregamento,
  - interatividade e
  - estabilidade visual

Isso inclui as seguintes métricas e seus respectivos limites:
  - **LCP (loading) - Largest Contentful Paint**: O seu site pode até não ser o mais rápido do mundo, o melhor do mundo, mas ele precisa conseguir atingir essa métrica do LCP, em um número bom. Imagine que o site, em termos de web e de performance, é considerado como se fosse um jornal, então a primeira parte dele é chamada de conteúdo above the fold. O ideal é que o seu site pré-carregue esse CSS junto ou um pouco mais que é a segunda parte. Quanto mais rápido você conseguir carregar isso, melhor vai ser a sua pontuação nessa métrica de LCP. Porque quando o seu usuário abrir o seu site, ele vai conseguir deslizar a tela e vai conseguir ver que a aplicação carregou.

  - **FID (Interactivity) - First Input Delay**: E com relação a ter alguma coisa próxima, é importante também essa questão de interatividade o first input delay, o quando que vai demorar para o seu usuário apertar um botão, para ele dar um clique em alguma coisa. Isso é uma coisa que o Google hoje em dia colocou um número, e você consegue medir isso em ferramentas.

  - **CLS (Visual Stability) - Cumulative Layout Shift**:  ele se resume bastante ao seu site não ter aquele comportamento que chamamos de “pipocar”, que é você abrir um site, e às vezes ele tem tanta propaganda, que geralmente é o que impacta isso, que ele vai descendo o conteúdo, e a pessoa acha que ela vai clicar em um botão de like, e de repente aparece uma propaganda e ela acaba clicando nela e isso impacta bastante na experiência do usuário.

## Estrutura de projeto I:
O Next.js, se posiciona, hoje em dia como o SDK da web, ou seja, é o kit desenvolvimento de software da web.


🔷 Para começar a criar a estrutura do projeto (nesta aula, utilizamos o manual setup do Next.js):
  - navegar até a pasta onde ficará o projeto, neste caso a pasta class01
  - rodar o comando npm initi -y dentro desta pasta
  - na sequência rodar o comando ```npm install next react react-dom```
  - após a instalação, abrir o package.json e colocar os scripts abaixo:
    ```
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
    }
    ```
  - na raiz do nosso projeto, criar uma pasta chamada **pages**
  - dentro dele, criamos um arquivo chamado **index.js**, que será a nossa home.
  - dentro de index.js, vamos colar o código disponível na própria documentação apenas para fins de teste:
    ```
    function HomePage() {
      return <div>Welcome to Next.js!</div>
    }

    export default HomePage
    ```
  - rodar o comando ```npm run dev```. pronto, a estrutura base está pronta.

🔷 Se quisermos criar mais uma página, eu crio um novo arquivo dentro da pasta pages, por exemplo, a página “sobre.js”, o nome é sempre o nome que queremos acessar na URL, então vai ser o **/sobre**/ que vamos criar agora. E tudo que precisamos fazer é ter essa mesma estrutura.

É importante notar que dentro da pasta pages, os arquivos deverão sempre serem exportados no formato padrão para funcionar.

O Next.js já traz dentro dele uma página 404. Para cair nesta página, basta acessar qualquer url que não esteja na pasta pages. 

🔷 Para criar um custom 404, basta criar dentro da pasta pages um arquivo chamando **404.js** e dentro dele colocar o seguinte código:
```
  export default function Custom404() {
    return <h1>404 - Page Not Found</h1>
  }
```

🔷 Para customizar algo mais geral da aplicação, como por exemplo:
  - persistir um layout entre outras páginas, ou seja, Os layouts e estados criados dentro deste componente estarão presentes em todas as páginas da aplicação.
  - manter o estado ao navegar pelas páginas
  - injetar dados adicionais nas páginas
  - adicionar um css global

Basta criar um arquivo dentro de pages chamado **_app.js** e dentro dele colocar a seguinte estrutura:
```
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp
```

## Estrutura de projeto II:
**Rotas dinâmicas**
Para criar uma rota dinâmica no Next.js (exemplo: slug, id, urls mais bonitos...), basta adicionar um colchetes (`[params]`).

Considere a seguinte página: ```pages/post/[id].js```
```
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post
```

Qualquer rota como /post/1, /post/abc, etc. será correspondida por pages/post/[pid].js. O parâmetro de caminho correspondente será enviado como um parâmetro de consulta para a página e será mesclado com os outros parâmetros de consulta.

Por exemplo, a rota /post/abc terá o seguinte objeto de consulta:
```
{ "pid": "abc" }
```

Da mesma forma, a rota /post/abc?foo=bar terá o seguinte objeto de consulta:
```
{ "foo": "bar", "pid": "abc" }
```

## Static Site Generation
(considerar a pasta class02/a2.1)
Compreender os diferentes tipos de build de projeto que temos no Next.j. Build é o artefato final, é o que você vai colocar em produção. Então, vamos entender um pouco mais sobre problemas e coisas importantes a serem consideradas na hora de gerar esse projeto.

Por exemplo, tem várias empresas que optam por ter um servidor rodando o Next Build, o Next Start e mantém rodando. E tem outras empresas que querem ter só a versão estática dos arquivos, elas só querem ter um monte de HTML e colocar no ar.  

**Static HTML Export**: 
  - é basicamente a forma de gerar um monte de arquivo estático,
  - é muito útil, porque é superfácil de você hospedar esse projeto em qualquer lugar. 

Note que existe na raiz do projeto, uma pasta chamada .next, essa pasta é gerada quando rodamos o comando ```npm run dev``` pela primeira vez. Sem essa pasta, o comando (que é o comando padrão que você roda para colocar um projeto Next no ar, no servidor de produção) ```npm run start``` não funciona.

No terminal diz que não conseguiu achar um production build nesse diretório. Então ele queria ter uma pasta “.next”, que foi a que nós apagamos, para ter um build. Se rodarmos o comando ```npm run build```, ele vai gerar essa estrutura base para conseguirmos trabalhar com o projeto e vai permitir rodar o comando ```npm run start```.  Esta forma de rodar um projeto Next, funciona, porém, ele depende de ter esse servidor.

Se você quiser ter a possibilidade de só ter os arquivos HTML estático e colocar em um GitHub Pages, por exemplo, não é o start que irá atender.

Pra isso, precisaremos rodar um novo comando. Na documentação do Next, ele pede pra colocar no nosso package.json o script: ```"build": "next build && next export"```, porém, como já existe um comando chamado build, vamos colocar como ```"export": "next build && next export"``` apenas pra não ficar duplicado.
Esse comando fará um build novo, vai tirar todos os HTMLs e CSSs para conseguirmos ter a versão simplificada sem o servidor, sem precisar rodar o Next Start para poder rodar o projeto. Ao rodar, então, o comando ```npm run export```, note que agora, o Next gerou uma pasta chamada 'out', e essa pasta “out” tem a versão mais simplificada só com as pastas mais simples.
Pra abrir o projeto, basta dar um  “Copy path” no index.html de dentro da pasta out e color o link no navegador. Pode notar que abriu o arquivo estático sem servidor sem nada. Mas clicando nos posts, note que ele não abre os posts.

Considerando os 7 princípios do Guillermo Rauch. No primeiro ponto ele fala que pre rendered pages não são opcionais. E ele fala que o pre-rendering não é somente para SEO, é sobre performance. Temos que considerar que roundtrips adicionais para pegar scripts, CSS, outras coisas, no futuro podem acabar tendo algum impacto com HTTP2, em resumo, temos um custo de baixar os arquivos que queremos pegar de uma página. Basicamente o lance é, quando usamos o React puro, trabalhamos com client side rendering. O que é isso? Basicamente vamos baixar o arquivo HTML, vamos baixar o arquivo JavaScript, o navegador vai executar o React e só depois o usuário vê o conteúdo na tela.
Isso não é bom para o usuário, porque demora muito até ele ter algo palpável. Quando o Guillermo Rauch fala do pre rendering, é de alguma forma fazermos essa parte da visualização acontecer um pouco antes, de preferência nessa primeira etapa, se fosse possível. E é aí que entra o tal do server side rendering. Então, basicamente, o navegador vai pedir o conteúdo, então ele vai começar a baixar o HTML, o navegador precisa ter o HTML, e sem rodar nenhum JavaScript, já aparece algo palpável para os usuários, tal como o nosso projeto.

Se dermos um inspect, ele basicamente não depende de JavaScript, porque se eu der um “View page source”, e procurar pelo meu nome, Mario Souto, já está no HTML.
E o CSS também já está embutido. Então é como se o Next tivesse pré-carregado todo o conteúdo que teria na nossa aplicação e já dar pronto para o usuário. Isso bate diretamente com melhorar a experiência de velocidade, bate com o Guillermo Rauch fala, essa parte de pré renderizar, ajuda em SEO, mas ajuda também ao usuário ver o conteúdo mais rápido. Claramente conseguimos ver que só de não ter que esperar o React processar a página, o usuário vê o conteúdo antes.

E bate também com a questão dos Web Vitals. Tínhamos aquela questão do largest contentful paint, então quanto mais rápido você conseguir mostrar a informação para o seu usuário, melhor. Então, essa forma de “buildar” o projeto com o Next, ela funciona para o nosso caso, tranquilamente.

**Ponto importante**: para conseguir simular de verdade, eu preciso ter uma estrutura, não é só navegar no arquivo estático, qualquer lugar que você publica (github pages etc.) ele tem só uma camada fina para exibir esse projeto estático. Uma vez compreendido o conceito do geral estático, eu vou criar um comando para rodar como se fosse no ambiente do GitHub Pages ou algum outro. Para emular isso, eu vou criar um comando novo que é o ”start-static”:, e nesse comando eu vou colocar ```”npx http-server ./export-static -c-1```.
Agora, ao rodar o comando ```npm run start:static```. Ele vai pegar essa pasta “out” e vai configurar algumas coisas, porque por mais que não estejamos rodando um npm start, quando você roda o estático, a ferramenta que permite que você faça isso, tem um servidor configurado para rodar, para poder receber as requisições e lidar com isso, devolver, não ficar esse caminho feio, ficar bonito quando acessamos usando o "Copy Path". Vamos abrir o “localhost:8080”. Então ele carregou a página, se eu clicar para navegar, ele navega para o post.

Porém, se usarmos o start:static do Next, você não consegue acessar diretamente uma página. Se você tenta acessar diretamente pela URL na barra do navegador, ele trava. Via navegação SPA ele consegue, clicando, ele sabe qual é a próxima página e consegue acessar. Mas se você acessar diretamente, esse pre-rendering não está perfeito ainda.

## geStaticPaths
 o getStaticPaths é uma função do Next.js que deve ser utilizada junto com o getStaticProps para indicar quais rotas dinâmicas devem ser pré-renderizadas durante o build.

A propriedade paths deve ser um array de objetos que contém a propriedade params ou um array vazio e fallback só pode receber os valores true, false ou "blocking".
 ```
 return {
    paths: [
      { params: { ... } }
    ],
    fallback: true
  };
 ```

Quando paths é um array vazio, nenhuma página será gerada durante o build.
 ```
 return {
  paths: [],
  fallback: true
};
 ```

A propriedade paths deve ser um array de objetos que contém a propriedade params ou um array vazio, e fallback só pode receber os valores true, false ou "blocking".
```
return {
  paths: [
    { params: { ... } }
  ],
  fallback: "blocking",
};
```

## Search Params
Ao navegar pela internet, você já deve ter acessado páginas nas quais a URL possuía o caractere ? seguido de algum texto. Esse texto é chamado de Search Params, ou parâmetros de busca.

Por exemplo, ao fazer uma busca no Google por "Next.js”, a URL muda de "https://www.google.com/" para "https://www.google.com/search?q=Next.js&texto-aleatorio-enorme".

A parte "/search" indica qual recurso estamos utilizando de "https://www.google.com" e tudo que vem depois do "?" é considerado um parâmetro de busca, que possui uma estrutura de chave-valor. Neste caso, o "q" é a chave e "Next.js" é o valor.

O texto aleatório enorme depois de "Next.js" são os outros parâmetros que o Google usa para nos apresentar os melhores resultados. Os parâmetros são separados pelo caractere "&" e respeitam a estrutura "chave=valor".

Que tal aprender como utilizar este recurso com o Next.js? Vamos implementar o código para que seja possível selecionar os posts por data através da URL "/posts?date=dia/mes/ano".


Uma das maneiras de implementar esse recurso é utilizando o roteador do Next.js. Dessa forma, conseguimos fazer a checagem de parâmetros do lado do cliente:

Crie o arquivo "index.js" dentro da pasta "/pages/post" do código fornecido para o vídeo 2.4 com o seguinte conteúdo:

```
// exemplo do lado do cliente
// a2.4/pages/posts/index.js
import { useRouter } from 'next/router';
import dados from '../../dados.json';

export default function Posts(props) {
  const router = useRouter();
  console.log(router.query);

// pegando o post que tem a data informada como parâmetro
const posts = dados.posts.filter((post) => post.date === router.query.date);

  return (
    <div>
       {posts.length > 0 ? (
          posts.map((post) => (
            <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre>
          ))
       ) : (
        <p>Nenhum post encontrado</p>
      )}
    </div>
  );
}
```

Os parâmetros de busca estarão disponíveis através de router.query.

Também é possível acessar os parâmetros pelo lado do servidor através do context de getServerSideProps:

```
// exemplo do lado do servidor
// a2.4/pages/posts/index.js
import dados from '../../dados.json';

export const getServerSideProps = (context) => {
  const posts = dados.posts.filter((post) => post.date === context.query.date);
  console.log(context.query);

  return {
    props: {
      posts,
    },
  };
};

export default function Posts(props) {
  return (
    <div>
      {props.posts.length > 0 ? (
        props.posts.map((post) => (
          <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre>
        ))
      ) : (
        <p>Nenhum post encontrado</p>
      )}
    </div>
  );
}
```

Dentro de dados.json temos as possíveis datas: "21/01/2022", "14/01/2022" e "08/01/2022". Acesse "http://localhost:3000/posts?date=14/01/2022" para buscar o post com a data "14/01/2022".


## Link Prefetch - Preve comportamento do usuario
(considerar a pasta class03/a3)

Por enquanto, no arquivo link-prefetch.js tem um parametro chamado ```prefetch={false}```:
```
<Link href="/"  prefetch={false}>
  <a>
    Home
  </a>
</Link>
```

Antes de mais nada, vamos rodar o comando ```npm run dev```. Tudo funciona normal até aqui. A mesma navegação SPA, que usamos até agora. Onde entra esse lance de prever o comportamento? Quando estamos acessando uma página na web, temos a tendência, de se eu carreguei a home, e o site tem um menu, é provável que eu vá para algumas dessas páginas.

E o que você pode fazer é tentar pré-carregar a próxima página, para o usuário ter uma sensação de que a latência tá negativa, ou seja, não demora para trocar de uma página para outra. Fica um comportamento semelhante ao que acontece nos apps um pouco, como se o site já tivesse pré-carregado a página ou se ele tivesse previsto que você ia navegar.

No Next é legal, porque não dá para testar esse recurso em modo de desenvolvimento. Conseguimos acompanhar as coisas que estão sendo baixadas na página, por meio dessa aba “Network” do console. Você vai abrir com “inspecionar elemento”, vai abrir nessa aba “Elements” e você clica em “Network”.
Clicou em “Network”, ele mostra tudo que está sendo baixado. Se eu carregar a página, repara que se eu clicar no “Sobre”, ele baixa os conteúdos da página.

Se eu abrir a “Home”, ele baixa o conteúdo do “index.js”. Então ele sempre baixa quando clicamos. Agora, olha que curioso, se eu “buildar” o projeto. Então vou colocar ```npm run build && npm run start```.

Eu vou colocar true, só para vocês verem. Quando eu abri a minha página, agora estou rodando no modo de produção. Aparentemente, nada de novo, se eu vier na página do “Link Prefetch”, só de termos o link dentro, só de termos esse comportamento, ele já tentou baixar o nosso projeto, tanto a “home”, quando a página “sobre”, por padrão.

Quando vamos para a sobre, ele não baixou mais nada, e se eu vier para a home, também não. Então isso é uma coisa boa do Next, e ruim também. Porque nem sempre você quer pré-carregar o link. Lembrando que só funciona para links internos do seu projeto, que o Next vai conseguir trabalhar. Acessamos uma página, ele baixou todas as outras. Então se você tiver um menu com 10 links, ele vai pré-baixar esses 10 links. Então isso não é interessante.

O que é interessante? Provavelmente você vai querer colocar esse Prefetch como false. Mas por quê? Porque nem sempre você vai querer fazer esse pré-download. Por mais que seja pouco, você pode analisar, se é a página mais acessada do seu site ou a página que os usuários mais navegam, você pode customizar.

Então por padrão, ele vem habilitado, é um recurso bem legal, mas se você começar a ter algum gargalo de performance, você começar a sentir que a home está baixando muito conteúdo, algo do gênero, você pode mudar essa abordagem para ficar tudo com prefetch false, ou seja, ele não vai fazer o prefetch, e quando rodarmos o projeto, ele não vai baixar o “index” e o “sobre”.

Vamos voltar novamente para false e rodar o comando ```npm run build && npm run start``` de novo.

Só que se eu passar o mouse em cima, você concorda que passar o mouse em cima, é quase que declarar a intenção de que quer mudar de página. Então ele baixa, tanto a “home”, quanto o “sobre”. Se clicarmos, ele navega e faz tudo corretamente.

  - Quando seu valor é false, o prefetch ocorre no evento de hover do link. O conteúdo da página de destino será carregado somente no evento de hover do link.
  - Seu valor padrão é true - Por padrão, o Next.js pré-carregará todas as páginas de destino dos links presentes na tela.
  - O prefetch pode afetar negativamente a performance do site. Caso as páginas pré-carregadas tenham muito conteúdo, é possível que o conteúdo mais importante da página chegue levemente atrasado.

## Dynamic Imports
É uma feature muito bacana, para você carregar pedaços da página sob demanda. Como assim? É o seguinte, eu consigo pegar como exemplo, o próprio YouTube. Se eu carregar a página, der um “F5”, repara que ele baixa primeiro o vídeo, depois ele baixa a parte do lado e depois ele baixa os comentários.

Está vendo que tem um delay para baixar as coisas? Conseguimos fazer isso com o React, trazendo para um caso simples, basicamente, tendo por exemplo, um state, e um check box, ou alguma chamada de API, algo do gênero. O importante é, se o valor for true, ele mostra o componente, senão, ele não mostra. Dá para pegarmos isso tranquilamente, consigo até mostrar para vocês como funciona.

Em alguns cenários, para otimizar mais as páginas, às vezes pegar alguns milissegundos, que vão impactar em performance, que vai impactar no Web Vitals, naquela parte do carregamento, você não vai recarregar nem esse trecho de HTML, ou às vezes, até mesmo alguma lib que esse código importa. Às vezes você só quer que carregue esse trecho de código inteiro, se você tiver realmente disparado o vídeo. Para conseguir ter esse controle fino do carregamento, não podemos pausar o import tradicional, que temos padrão.

Para utilizar o import dynamic:
```
import dynamic from 'next/dynamic';
```

Passar uma função que retorna esse import diferente. Então eu passo uma função que retorne esse import, que é o mesmo caminho que temos em cima, então 
```
const YouTubeVideo = dynamic(() => import(‘.../components/DynamicVideo’))
```

A diferença é que estamos separando, esse pedaço da aplicação, só carregamos quando essa tag estiver sendo mostrada na página. Então eu vou salvar, vou voltar para a página, carreguei, vamos ver se falta alguma configuração para fazermos.

Podemos ter uma aplicação inteira, quando você carrega a página, você baixa tudo que aquela página tem, e cada módulo pode carregar outros módulos, cada módulo faz import de outras coisas, ou separamos. Então você só vai baixar o restante desse módulo, essas 4 partes, se você baixar essa primeira. Se você não baixar, está tranquilo, não mostra nada.

## Next.js com TypeScript
(considerar a pasta class03/a3-typescript)

Para criar um projeto do zero, com TypeScript, só rodando esse comando 
```
npx create-next-app@latest --typescript.
```

Para converter um projeto que já existe para a versão com TypeScript
Bom, vale lembrar que o TypeScript é uma extensão de JavaScript, então ele é um superset da linguagem. Então, ele não modifica as coisas que o JavaScript já tem, ele só adiciona coisas novas, que basicamente podem ser removidas.

## API Routes
(considerar a pasta class04/a1.3)

 O Next, além de nos deixar fazer:
  - o Server-side, 
  - o getStatic, ter a página estática por padrão, 
  - o build esperto dele e tudo o mais, 
  
  ele também tem um recurso chamado de **API Routes**, que consiste basicamente em, se eu criar uma pasta dentro da pasta “pages” chamada de “API”, eu posso criar um arquivo “index.js”, e tudo que eu preciso fazer é export default function capturadorDeRequests().

  Se digitarmos na barra do navegador “localhost:3000/api”. Ele não teve resposta, ele ficou travado, ele está dando um loading no canto. Ele mostra no código: “API resolve without sending a response for /api, this may result in installed request”.

  Com as API Routes, basicamente, você consegue construir o json a partir do seu projeto frontend. Então no mundo, no dia a dia, sempre o seu navegador pede um conteúdo para um servidor através de uma URL, esse servidor pode ou não bater no banco de dados ou em uma outra API ou algo do gênero, ele pega essa resposta, formata de algum jeito e devolve para o navegador. É exatamente isso que está acontecendo.

  No nosso caso, como eu que estou subindo o projeto, eu sou o servidor. Então eu subo o projeto e eu acesso na minha própria máquina. Então o navegador pede para a minha porta localhost:3000, o conteúdo vai certo. Esse recurso do Next é muito poderoso, para caso você esteja desenvolvendo, por exemplo, algum projeto pessoal, e você queira ter alguma API fake para você bater e conseguir consultar. Para um projeto do dia a dia, caso você tenha algum dado que você quer expor, que você quer servir ou, por exemplo, você quer guardar algum token.

## API Routes com typescript
  Existem 2 formas de tipar os handlers de uma API Route:
   - 1) Tipando o handler diretamente com NextApiHandler.
   ```
   import type { NextApiHandler } from 'next';

  const handler: NextApiHandler = (req, res) => {
    res.status(200).json({ curso: 'next.js', instrutor: 'Dev soutinho' });
  };

  export default handler;
   ```

  - 2) Tipando as variáveis de requisição e resposta individualmente.
  ```
  import type { NextApiRequest, NextApiResponse } from 'next';

  export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ curso: 'next.js', instrutor: 'Dev Soutinho' });
  };
  ```

  Também é possível tipar a resposta da API utilizando generics.

  Com NextApiHandler devemos passar o ResponseData como generics da função:
  ```
  import type { NextApiHandler } from 'next';

  export type ResponseData = {
    curso: string;
    instrutor: string;
  };

  const handler: NextApiHandler<ResponseData> = (req, res) => {
    // res.status(200).json({ nome: 'Mario Souto' });
      res.status(200).json({ curso: 'next.js', instrutor: 'Mario Souto' });
    };

    export default handler;
  ```

Com NextApiRequest e NextApiResponse devemos passar ResponseData como generics de NextApiResponse.

```
import type { NextApiRequest, NextApiResponse } from 'next';

export type ResponseData = {
  curso: string;
  instrutor: string;
};

export default (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  // res.status(200).json({ nome: 'Mario Souto' });
  res.status(00).json({ curso: 'next.js', instrutor: 'Mario Souto' });
};
```


## Tipos de build da ferramenta

sempre é em tempo de build, nada que roda ali, vai estar rodando no ambiente do seu usuário, ou vai ter acesso a cookie ou algo do gênero. Sempre é no ambiente do seu servidor, que está “buildando” e gerando a biblioteca:
- **Static**:
  - Por padrão;
  - Só vai usar o next report, em casos onde TUDO é pré-renderizado;
  - getStaticProps: versão com menos recursos

- **SSG (Static Site Generation)**:
  - getStaticProps;
    - revalidate: true [npm run build && npm start];
  - Incremental Static Generation [npm run build && npm start];
    - fallback: true || 'blocking' e o getStaticPaths vem vazio ou com somente alguns itens.

- **SSR (Server Side Render)**:
  - getServerSideProps;
  - Se tiver dentro da pasta /api é uma API Route e é SSR.


## Sobre o Incremental Static Regeneration (ISR)
- Utiliza o getStaticProps com o atributo revalidate: A ativação do ISR se dá pela adição do atributo revalidate com um valor numérico inteiro ao retorno de getStaticProps.

- Une os benefícios da geração dinâmica e da estática: O cliente receberá a página instantaneamente, pois ela é gerada estaticamente. Caso o conteúdo precisa ser atualizado, a página será (re)construida do lado do servidor e posteriormente servida como estática.

- O atributo revalidate é o tempo em segundos que a página pré-renderizada ficará no cachê. Requisições feitas dentro do valor em segundos do atributo revalidate terão o retorno instantâneo da página cacheada.

## de onde vem as props da página?
Vimos as diferentes estratégias de pré-renderização de páginas que o Next.js nos fornece:  
  - Server Side Rendering, 
  - Static Site Generation, 
  - Incremental Static Regeneration e até mesmo o 
  - Client Side Rendering.

Para usar os primeiros 3 métodos, é preciso implementar as funções getServerSideProps, getStaticProps e getStaticProps com o atributo revalidate, respectivamente. O retorno dessas funções retorna um objeto com a propriedade props, que é magicamente passado para o componente da página.

Exemplo: no arquivo pages/index.js, podemos criar o componente:
```
function PaginaExemplo(props) {
  return <div>{JSON.stringify(props, null, 2)}</div>;
}

export const getServerSideProps= async () => {
  return {
    props: {
      curso: 'Next.js',
      instrutor: 'Dev Soutinho',
    },
  };
};

export default PaginaExemplo;
```

Aprendemos na prática que o objeto props retornado de getServerSideProps será o mesmo que o props passado de argumento para o componente PaginaExemplo. Entretanto, a forma que isso acontece não é explícita.

Durante o curso, vimos sobre algum arquivo específico do framework que referencia uma propriedade pageProps, que curiosamente pode ser entendido como "props da página". Esse arquivo é o _app.js!
```
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

A prop Component é o export default da página e o pageProps é o objeto props retornado de getServerSideProps.
Seguindo o exemplo do arquivo pages/index.js criado acima, temos:
  - Component: PaginaExemplo
  - pageProps: { curso: "Next.js", instrutor: "Dev Soutinho" }

Resumindo: para cada página da aplicação, o getStaticProps ou getServerSideProps são executados e o objeto props é encaminhado para o MyApp como pageProps.

O MyApp é executado e o objeto pageProps é passado para o export default da página como props.

##  ordem de execução
Descrobrimos que através do _app, o Next.js passa a informação de getStaticProps e getServerSideProps para o componente da página.

Como essas funções geram o conteúdo da página, é intuitivo pensar que elas precisam rodar antes que o componente da página. O _app.js precisa rodar antes do componente, porém depois da função que gera o conteúdo.

https://github.com/alura-cursos/curso-next-2-desafio