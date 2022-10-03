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

