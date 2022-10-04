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