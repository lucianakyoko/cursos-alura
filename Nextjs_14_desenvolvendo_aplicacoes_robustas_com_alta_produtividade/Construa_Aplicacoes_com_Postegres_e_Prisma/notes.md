# Anotações do curso - Next.js: construa suas aplicações com Postgres e Prisma

---

## Arquivos iniciais
[Repo](https://github.com/alura-cursos/3498-next-14-ssr-codeconnect-parte-2);
[posts.json](https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts.json)
[404](https://github.com/alura-cursos/3498-next-14-ssr-codeconnect-parte-2/blob/aula-4/src/app/error/404.png)
[500](https://github.com/alura-cursos/3498-next-14-ssr-codeconnect-parte-2/blob/aula-2/src/app/error/500.png)
[docker-compose.yaml](https://gist.github.com/viniciosneves/b4628877edbc78e890ab61eb23eaad49#file-docker-compose-yaml)
[seed.js](https://gist.github.com/viniciosneves/4c687fd38f6783f7d5394af584bf516e#file-3498-seed-js)
[Figma](https://www.figma.com/file/k2uVg4mzbUmXMwHFQKzfLr/CodeConnect--%7C-Forma%C3%A7%C3%A3o-Next?node-id=622%3A6254&mode=dev)

---

## Execução do Docker Compose:
- Criar o arquivo ```docker-compose-ymal``` na raiz do projeto e colar o conteúdo do link acima dentro do arquivo criado.
- No terminal digitar o comando: ```docker compose up -d```: esse comando irá ***levantar*** o ambiente de desenvolvimento. A flag **-d** fará com que o terminal não fique preso nesse comando. O próprio docker irá cuidar de manter o Postgres rodando.
- dar enter: Quando pressionarmos a tecla "Enter", ele começará a fazer o download, preparar e baixar tudo que precisa para executar nosso Postgres. Quando terminar, ele exibirá uma mensagem informando que tudo está correto.

Agora que temos nossa infraestrutura para o ambiente de desenvolvimento funcionando, com o Docker e o container sendo executados, podemos evoluir nosso projeto. A primeira coisa que faremos é configurar o Prisma.

## Instalando o Prisma:
- no terminal digitar o comando: ```npx prisma init```: Pedimos para o npx executar um script do Prisma e o script vai receber esse parâmetro init, que vai iniciar a nossa preparação do nosso ambiente Prisma.
Esse comando deve trazer como resultado a mensagem abaixo no terminal:
```
✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run npx prisma db pull to turn your database schema into a Prisma schema.
4. Run npx prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
```

O comando que acabamos de dar, cria um generator dentro da pasta prisma, que é uma forma do Prisma criar o nosso client, e mais para frente vamos começar a fazer isso, e ele inseriu também um datasource, que é o nosso banco de dados.

Repare, já foi indicado na linha 9 que o provider é um Postgres, ou seja, por padrão, o Prisma já vem preparado para o Postgres. E a URL desse banco de dados, ele está vindo de uma variável de ambiente chamada DATABASE_URL.

Ele também criou automaticamente o arquivo ```.env```. Esse arquivo será responsável por armazenar todas as variáveis de ambiente personalizadas, além dos padrões do Node. E o Prisma já incluiu uma URL de banco de dados (DATABASE_URL) para nós.

Aqui, muito cuidado e atenção. No nosso cenário, nesse momento, essa variável de ambiente tem uma URL para uma conexão com o banco de dados local. Então, como aqui tem coisa local, o exemplo que ele gerou aqui até um exemplo que não funciona, que é um johndoe com random password:
```
DATABASE_URL="postgresql://johndoe: randompassword@localhost:5432/mydb?schema=public"
```

Não tem problema comitarmos, porque é um ambiente seguro. É o nosso ambiente de desenvolvimento e não tem problema nenhum de isso estar público lá no GitHub.

Porém, quando mandarmos isso para a produção, esse .env não pode, de maneira nenhuma, conter os dados de acesso ao nosso banco. Senão, qualquer pessoa vai entrar no GitHub, pegar essa conexão e poderá manipular e fazer o que quiser com o banco de dados.

---

## Criando models
- Dentro do arquivo schema.prisma, adicionar o trecho de código abaixo:
```
model User {
  id Int @id @default(autoincrement())
  name String
  username String @unique
  avatar String
  Post Post[]
}

model Post {
  id Int @id @default(autoincrement())
  cover String
  title String
  slug String @unique
  body String
  markdown String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  authorId Int
  author User @relation(fields: [authorId], references: [id])
}
```

Feito isso, precisamos transformar isso agora em tabelas do nosso banco de dados.

---

## Transformando em tabelas
Precisamos conectar no nosso DATABASE_URL, dentro do nosso .env, esse valor tem que apontar para o nosso Docker que está rodando localmente.
- dentro do arquivo .env adicionar o código: ```DATABASE_URL="postgresql://postgres@localhost:5432/mydb"```. A primeira coisa é que o nosso usuário não é John Doe, o nosso usuário será postgres e sem senha. E não precisamos indicar o esquema public, podemos deixar o URL desse jeito.

Temos o nosso DATABASE_URL configurado corretamente, com o usuário postgres, @localhost na porta 5432, sendo que não é mydb o nosso banco de dados.

Onde podemos pegar o nome correto do nosso banco de dados? No nosso Docker Compose. Na estrutura de projetos do lado esquerdo, vamos no docker-compose.yaml e temos na linha 17 uma variável de ambiente chamada Postgres_DB que diz qual é o banco de dados que será criado por padrão quando o Docker levantar esse Docker Compose. O nome do nosso banco de dados é codeconnect_dev.

Então, codeconnect_dev. Vamos substituir no .env o mybd por codeconnect_dev. Isso é suficiente para conectar e fazer com que as coisas se interliguem.
```DATABASE_URL="postgresql://postgres@localhost:5432/codeconnect_dev"```

Agora podemos pedir para o Prisma de fato executar isso.
- Abrimos o terminal. Vamos instalar o Prisma no nosso projeto que ainda não temos, npm i prisma.
```npm i prisma```

Ele irá instalar e salvar no package.json. E agora ele estará corretamente.

- Agora, solicitamos ao Prisma que execute e crie essa migration. Mas o que significa migration? Ele vai configurar e traduzir nossos modelos para uma linguagem compreensível pelo Postgres e, consequentemente, criar a aplicação. Em outras palavras, estamos indicando que nós, como desenvolvedores, não precisaremos intervir diretamente no Postgres.

Quem vai fazer isso é o Prisma. Desde a manipulação dos dados quanto mesmo a criação das tabelas. Então, quando pedimos para o npx executar o script de Prisma, pedindo para ele rodar as migrações e passamos um nome, porque, no nosso caso, a primeira Migration é a Migration inicial.

Estamos criando as primeiras tabelas. Mas o banco de dados pode evoluir e ir ganhando novos modelos, ganhando novos campos e o Prisma vai saber o que ele tem que fazer para manter tudo atualizado.
```npx prisma migrate dev --name init```

Então, se executarmos esse comando, o Prisma vai começar a executar o que precisa, está executando os comandos.

Como deu tudo certo, o retorno no terminal está escrito na cor verde, o banco de dados está sincronizado com o seu schema, podemos começar mesmo a inserir e ler dados dentro desse banco.

Mas como fazemos para ter certeza absoluta que o Prisma realmente criou essas tabelas lá? Vamos abrir um software que se chama DBeaver. Se você ainda não conhece ele ou se você ainda não instalou, deixamos bem explicado no preparando o ambiente como é que temos que fazer para baixar e instalar essa aplicação.

E o que vamos fazer? Desejamos criar agora uma nova conexão. Repare, não conseguimos dar um zoom muito grande, mas ele tem um ícone que está uma tomada com um ícone de mais na parte superior esquerda, que é exatamente uma nova conexão com o banco de dados. Informamos que esse banco de dados é Postgres selecionando essa opção, e clicamos em "Next".

O campo "host" é o localhost, está certo, a porta 5432 está correta, o banco de dados não é o Postgres, é aquele mesmo que está no nosso Docker Compose. Podemos pegar de lá, voltamos no VS Code, no Docker Compose, fechamos o terminal, copiamos na linha 17 o nosso codeconnect_dev, voltamos no DBeaver, colamos no campo "Database" para ficar bem correto e clicamos em Finish, que ele vai finalizar essa conexão.

Se esta é a primeira vez que você está fazendo isso, provavelmente ele fará o download do conector do Postgres, mas apenas na primeira vez. No meu caso, como já o fiz anteriormente, ele nem solicitou nada. Agora podemos explorar a parte do banco de dados. Ele já exibiu o codeconnect_dev.

Vamos abrir o schema do lado esquerdo, public, tabelas e lá está nossa tabela de posts, corretamente com os campos ID, cover, title, slug, body, markdown e todos os outros que adicionamos. O mesmo ocorre com a tabela de User, que contém os campos ID, name, username e avatar.

E reparem que tem uma outra tabela chamada _prisma_migrations, que tem uma estrutura própria, e inclusive tem até dados de uma migration que foi executada, ou seja, a nossa migration inicial. É através dessa tabela que o Prisma vai saber o que ele tem que fazer ou o que ele já fez de migration relacionadas ao nosso modelo.

---

## Node e variáveis de ambiente
No mundo Node.js, as variáveis de ambiente são nossas melhores amigas para manter as coisas seguras e práticas. Estou falando de configurar URLs, chaves secretas, senhas... essas coisas que a gente não muda toda hora.

No Node, é tranquilo trabalhar com variáveis de ambiente. Elas estão ali, prontas para uso, graças ao objeto env que mora no process, um objeto global que o Node disponibiliza.

Ah, uma dica: as pessoas desenvolvedoras costumam escrever o nome das variáveis em CAIXA ALTA, beleza? Isso é mais para um teste rápido. Na vida real, ou melhor, nas aplicações de verdade, a gente usa outras formas para definir esses valores. Como o arquivo .env que manipulamos em aula:
```

DB_HOST=localhost
DB_USER=admin
DB_PASSWORD=password

```

Só não esquece de manter esse arquivo longe dos olhos maldosos, especialmente do GitHub. Uma opção é adicionar o .env ao .gitignore para não compartilhar sem querer informações sensíveis (como os dados de acesso ao banco de produção!).

---

## Gerando o Prisma client
Agora que já executamos nossas migrations e o Prisma criou as tabelas no nosso banco de dados, podemos, de fato, conectar o Next ao Postgres, diretamente, usando o Prisma. 

Como estamos delegando a responsabilidade de escrever SQL para o próprio Prisma, precisamos executar uma instrução para informá-lo que a base está pronta, o banco de dados está atualizado e ele pode gerar o client e tudo que for necessário para o client funcionar, pois está tudo certo do nosso lado.

Há um detalhe importante: essa geração do Prisma Client deve ser feita ou refeita sempre que houver uma alteração no banco de dados.

No nosso caso, foi a primeira alteração e o que fizemos foi criar a estrutura de banco de dados. Agora que está tudo mapeado, nossa model está correta, o Postgres já recebeu as tabelas, vamos criar esse client.

- No terminal, dar o comando: ```npx prisma generate```. Esse comando lerá nossa estrutura e gerará as consultas e tudo que for necessário para que o Prisma funcione corretamente.

Após a execução do comando, o terminal informa que tudo foi gerado corretamente e que agora podemos importar o Prisma Client, que é uma classe, instanciá-la e tudo ficará perfeito. Vamos fazer isso.

Primeiro, copiamos a sugestão de código do próprio terminal, para evitar a fadiga de digitar tudo de novo:
```
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```

Copiamos essa instrução, fechamos o terminal e, na nossa estrutura de pastas, dentro do Prisma, criamos um novo arquivo chamado db.js, que representará nosso banco de dados.

Colamos o código que copiamos do terminal, com a única diferença de, ao invés de chamar o Prisma Client de prisma, chamamos de db. Por fim, na última linha, adicionamos um export default db.


db.js
```
import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

export default db
```

Com isso, estamos criando uma única instância do Prisma Client. Agora, se qualquer parte da nossa aplicação precisar se conectar ao banco, é só importar esse db e tudo funcionará perfeitamente.

Agora que geramos nosso client e o instanciamos e disponibilizamos via export default, podemos ir para o nosso componente Next e realizar uma troca: fazer com que a nossa fonte de dados, agora, passe a ser o Postgres, ao invés de fazer aquelas chamadas HTTP da API.

## Obtendo os Posts do Postgres
Após configurar toda a nossa infraestrutura, agora podemos remover nossa primeira integração via Fetch com a API REST e substituí-la pelo nosso Prisma Client. 

Voltamos para o VS Code. Dentro do projeto, temos uma pasta "src > app" com um arquivo chamado page.js. Entramos nele.

No último curso, extraímos a função getAllPosts, responsável por obter esses dados. Como isso já está encapsulado para a nossa página, pouco importa de onde eles estão vindo, desde que venham no formato esperado.

Conforme verificamos na linha 19 desse arquivo, a nossa página espera que o nosso array de posts venha numa propriedade chamada data, e espera a página anterior e a próxima, que são prev e next: const { data: posts, prev, next } = await getAllPosts(currentPage). Essa é a estrutura que precisamos retornar.

Então, vamos limpar tudo que está dentro de getAllPosts para substituir o método.

Código de getaAllPosts deletado do arquivo page.js
```
async function getAllPosts (page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if (!response.ok) {
    logger.error('Ops, alguma coisa correu mal')
    return []
  }
  logger.info('Posts obtidos com sucesso')
  return response.json()
}
```

A primeira coisa que vamos fazer dentro do getAllPosts agora é inserir um bloco trycatch, para começarmos a programar defensivamente.

Após ter colocado o bloco trycatch, vamos chamar o logger.error no catch. Ou seja, se algo deu errado, podemos explicitar o que aconteceu passando uma mensagem de "Falha ao obter posts", por exemplo, e um objeto de erro como segundo argumento, o error. Isso resulta em: logger.error('Falha ao obter posts', { error }).

Para fazer com que a nossa aplicação funcione, ou seja, ela não quebre e, por exemplo, exiba que não tem post nenhum, podemos fazer um return do nosso objeto com a propriedade data, que é um array vazio, e podemos passar prev, que será nulo, assim como next. Então: return { data: [], prev: null, next: null }.

No caso de sucesso, podemos copiar esse return, porque será muito parecido, exceto pelo data, que não será um array vazio, mas um array de posts: return { data: posts, prev: null, next: null }.

E como vamos fazer para, utilizando o nosso Prisma Client, consumir esses dados.

Primeiro, vamos chamar o db. O VS Code sugere o db que está dentro da pasta "prisma", e é esse mesmo que queremos, então o selecionamos. O import é feito automaticamente: import db from "../../prisma/db".

Vamos adicionar um ponto . após o db, e teremos algumas sugestões de autocomplete. Tem algumas coisas que podemos fazer com o db que vão além de obter dados, mas o que queremos nesse momento é acessar o nosso módulo post. Então, db.post.

Agora vamos dizer o que queremos fazer. Nesse cenário, o que queremos fazer é passar uma instrução SQL. Como queremos pegar quantos posts conseguirmos, podemos chamar o método findMany, ou seja, pegar todos que estiverem no banco de dados.

Por padrão, não passamos parâmetro nenhum para esse método. O que ele vai fazer é acessar o banco e buscar todos esses dados. Note que o retorno é uma promessa, ou seja, um PrismaPromise, de que ele vai tentar obter esses dados.

Acreditando que essa promessa será cumprida, podemos guardar esse retorno em algum lugar. Podemos criar uma constante chamada posts, que vai receber o db.post.findMany(), mas vamos aguardar por essa resposta com await. Isso resulta em const posts = await db.post.findMany().

```
async function getAllPosts (page) {
    try {
      const posts await db.post.findMany() =
      return { data: posts, prev: null, next: null }
        
    } catch (error) { 
      logger.error('Falha ao obter posts, { error })
      return { data: [], prev: null, next: null }
    }
}
```

Nesse cenário, pegamos os dados, guardamos em uma variável chamada posts, e retornamos na mesma estrutura que a API REST retornava: data com os valores, prev para a página anterior, next para a página posterior.

Como ainda não estamos controlando a paginação, sendo esse um assunto para tratarmos mais adiante, vamos testar se a conexão vai funcionar ou se vai dar algum erro. Então, salvamos o arquivo.

## Rodando a aplicação
Até esse momento, não estávamos executando a nossa aplicação Next, então, vamos colocá-la para rodar.

Abrimos o terminal local e entramos no diretório onde está o projeto. No caso do instrutor, o projeto está na área de trabalho, então rodou o comando cd Desktop/ com code-connect, que é o nome do projeto:
```cd Desktop/code-connect/```

Em seguida, rodamos o seguinte comando para subir o nosso servidor Next:
```npm run dev```

Ao terminar a execução, o retorno nos indicará a porta de execução do servidor. Clicamos no link http://localhost:3000 para abrir.

Com isso, uma nova janela do navegador se abre e carrega o nosso projeto. Não há nada na página além do fundo preto e a logo do CodeConnect no canto superior esquerdo, mas não há nenhum erro do Next, pelo menos.

Vamos clicar na página com o botão direito e selecionar a opção "Inspecionar". O console nos diz que vieram atributos extras do lado do servidor.

Vamos observar o nosso arquivo de log (error.log) no VS Code para verificar se está tudo certo como deveria. Ele está limpo, então está tudo certo.

O que aconteceu aqui foi que chamamos a função e ela não retornou post nenhum, pois não temos posts cadastrados no nosso banco de dados. A nossa tabela de posts está limpa. Se voltarmos ao nosso DBeaver, dentro da tabela de Posts, na aba de Data, verificaremos que ela está vazia.

O que temos que fazer é povoar esses dados de alguma forma. É muito comum em uma aplicação desse tipo querermos que desde o início existam dados disponíveis, sejam dados reais que vão ser utilizados em produção, por exemplo, ou dados fictícios que podem ser usados para testes ou para o próprio desenvolvimento.

Para montar essa estrutura de dados já inseridos no banco de dados, existe uma funcionalidade do Prisma que se chama Seed, que significa "semear" os dados da nossa aplicação.

---

##  Seed de dados
Agora precisamos semear o nosso banco de dados com as informações - seja de autor, seja de post - que precisamos neste momento.

### Instrução para o Seeding
[Documentação Prisma](https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding)
Na documentação do Prisma, há uma seção específica sobre Seeding (semeadura), abordando como configuramos e montamos a estrutura que vai semear esses dados.

A primeira sugestão é criar uma instrução para o próprio Prisma, dentro do arquivo package.json, sobre o que ele deve executar quando o comando prisma db seed for executado.

Devemos adicionar uma entrada no package.json chamada prisma, que é um objeto, contendo um comando chamado seed que vai executar um arquivo .js.

```
"prisma": {
  "seed": "node prisma/seed.js"
},
```

Atenção: a documentação possui instruções tanto para TypeScript quanto para JavaScript. Estamos usando o JS puro, então precisamos selecionar os códigos corretos para isso.

Na linha 10, onde acaba a nossa instrução de script, vamos colar o que copiamos da documentação. Esse prisma executa um seed, que é o nome do comando que o prisma vai procurar, que contém uma instrução: pedir para o node executar um arquivo chamado seed.js, que está dentro de uma pasta chamada prisma.

Vamos criar esse arquivo, então. Podemos copiar seed.js do código e colar no nome de um novo arquivo criado dentro da pasta "prisma", que está na raiz do nosso projeto.

### Arquivo seed.js
Vamos voltar para a documentação, porque ela tem um exemplo de como semear o nosso banco de dados.

O exemplo de prisma é parecido com o nosso, exceto pelos campos, que são um pouco diferentes. Mais abaixo na página, verificamos que o exemplo de arquivo seed.js tem uma função main() criando usuários e posts e, no final, executa esse main().
Documentação do Prisma - seed.js
```
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      posts: {
        create: {
          title: 'Check out Prisma with Next.js',
          content: 'https://www.prisma.io/nextjs',
          published: true,
        },
      },
    },
  })

  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
      posts: {
        create: [
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma',
            published: true,
          },
          {
            title: 'Follow Nexus on Twitter',
            content: 'https://twitter.com/nexusgql',
            published: true,
          },
        ],
      },
    },
  })
  console.log({ alice, bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
```

Vamos copiar todo o código do arquivo seed.js da documentação e colá-lo no nosso arquivo seed.js no VS Code. No entanto, não queremos criar esses usuários alice e bob que estão no exemplo, então vamos limpar, deixando apenas um create com um objeto vazio na busca pela usuária ana.

Repare que esse código tem uma função upsert(), que é um pouco diferente. Basicamente, ela quer dizer que ou ele vai atualizar ou ele vai inserir esse usuário no banco de dados, dependendo do resultado da nossa cláusula de busca. Essa busca será feita a partir do campo Username, o campo único na nossa tabela. Então vamos substituir email por username.

Atenção: Para executar essa função e ela funcionar corretamente, sem erros, temos que fazer essa consulta em cima de um campo único.

seed.js
```
async function main() {
    const ana await prisma.user.upsert({
        where: username: 'alice@prisma.io'
        update: {},
        create: {},
    })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
```

### Semeando os dados
[Gist](https://gist.github.com/viniciosneves/4c687fd38f6783f7d5394af584bf516e)
Agora precisamos digitar um monte de dados relacionados a Ana e aos posts. Para evitar toda essa digitação, disponibilizamos a massa de dados que vamos utilizar neste Gist, para você copiar e colar no seu código.

No começo desse Gist, temos a criação da Ana Beatriz. Começaremos por ela. Vamos copiar, retornar ao nosso seed.js e colar esses dados logo abaixo do main():
```
async function main() {

    const author = {
        name: "Ana Beatriz",
        username: "anabeatriz_dev",
        avatar: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png",
    };
}
```

Podemos trocar o username dado em const ana, que não é alice.prisma, mas o author.username - esseusername que está definido na linha 8, que pegamos da nossa massa de dados. Então: where: { username: author.username }.

E o que queremos fazer? Se for update, não queremos fazer nada, porque se a Ana Beatriz já está cadastrada no banco de dados, vamos deixá-la como está. Se não, vamos passar o nosso author para a instrução de create.
```
const ana = await prisma.user.upsert({
        where: { username: author.username },
        update: {},
        create: author,
})
```

Além disso, além de criar a Ana, podemos criar uma massa de dados de posts. Vamos usar uma estrutura separada para isso, porque você pode querer manipular essa estrutura, criando os seus posts e os seus autores. Então, para ficar mais legível, vamos trazer o array de posts, disponibilizado no nosso Gist.

Esse array de JSON começa na linha 7 e termina na 104 do Gist. Vamos copiar e colar no VS Code, logo depois de fazer o upsert da ana. Depois, vamos pedir para o VS Code formatar o documento.
```
const posts = [
            {
                    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
                    "title": "Introdução ao React",
                    "slug": "introducao-ao-react",
                    "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
                    "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
                    "authorId": ana.id
            },
            {
                    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/css-grid-na-pratica.png",
                    "title": "CSS Grid na Prática",
                    "slug": "css-grid-na-pratica",
                    "body": "Aprenda a criar layouts responsivos com CSS Grid. Este post aborda desde a definição de grid até a criação de layouts complexos de forma simples e eficaz.",
                    "markdown": "```css\n.grid-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n}\n```",
                    "authorId": ana.id
            },
            {
                    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/vuejs-para-iniciantes.png",
                    "title": "Vue.js para Iniciantes",
                    "slug": "vuejs-para-iniciantes",
                    "body": "Vue.js é um framework progressivo para a construção de interfaces de usuário. Este guia inicial cobre as funcionalidades essenciais do Vue.",
                    "markdown": "```javascript\nnew Vue({\n  el: '#app',\n  data: {\n    message: 'Olá Vue!'\n  }\n})\n```",
                    "authorId": ana.id
            },
            {
                    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/dicas-de-acessibilidade-web.png",
                    "title": "Dicas de Acessibilidade Web",
                    "slug": "dicas-de-acessibilidade-web",
                    "body": "Explorando a importância da acessibilidade na web, este post oferece dicas práticas para tornar seus sites mais acessíveis a todos os usuários.",
                    "markdown": "```html\n<a href=\"#\" aria-label=\"Saiba mais sobre acessibilidade\">Saiba mais</a>\n```",
                    "authorId": ana.id
            },
            {
                    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-typescript.png",
                    "title": "Introdução ao TypeScript",
                    "slug": "introducao-ao-typescript",
                    "body": "Este post é um guia introdutório ao TypeScript, explicando como ele aumenta a produtividade e melhora a manutenção do código JavaScript.",
                    "markdown": "```typescript\nfunction greeter(person: string) {\n  return 'Hello, ' + person;\n}\n```",
                    "authorId": ana.id
            },
            {
                    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/otimizacao-de-performance-no-react.png",
                    "title": "Otimização de Performance no React",
                    "slug": "otimizacao-de-performance-no-react",
                    "body": "Discutindo técnicas avançadas para otimizar a performance de aplicações React, este post aborda conceitos como memoização e lazy loading.",
                    "markdown": "```javascript\nconst MemoizedComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});\n```",
                    "authorId": ana.id
            },
            {
                    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/explorando-flexbox-no-css.png",
                    "title": "Explorando Flexbox no CSS",
                    "slug": "explorando-flexbox-no-css",
                    "body": "Este post detalha o uso do Flexbox para criar layouts responsivos e flexíveis no CSS, com exemplos práticos para um entendimento fácil.",
                    "markdown": "```css\n.flex-container {\n  display: flex;\n  justify-content: space-around;\n}\n```",
                    "authorId": ana.id
            },
            {
                    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/angular-primeiros-passos.png",
                    "title": "Angular: Primeiros Passos",
                    "slug": "angular-primeiros-passos",
                    "body": "Ideal para iniciantes, este post introduz o Angular, um poderoso framework para desenvolvimento de aplicações web, com um exemplo básico.",
                    "markdown": "```typescript\n@Component({\n  selector: 'my-app',\n  template: '<h1>Olá Angular</h1>'\n})\nexport class AppComponent { }\n```",
                    "authorId": ana.id
            },
            {
                    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/gerenciamento-de-estado-com-redux.png",
                    "title": "Gerenciamento de Estado com Redux",
                    "slug": "gerenciamento-de-estado-com-redux",
                    "body": "Abordando um dos aspectos cruciais no desenvolvimento de aplicações React, este post ensina como gerenciar o estado de forma eficiente com Redux.",
                    "markdown": "```javascript\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'ACTION_TYPE':\n      return { ...state, ...action.payload };\n    default:\n      return state;\n  }\n};\n```",
                    "authorId": ana.id
            },
            {
                    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/sass-simplificando-o-css.png",
                    "title": "Sass: Simplificando o CSS",
                    "slug": "sass-simplificando-o-css",
                    "body": "Este post explora como o pré-processador Sass pode simplificar e melhorar a escrita de CSS, através de variáveis, mixins e funções.",
                    "markdown": "```scss\n$primary-color: #333;\nbody {\n  color: $primary-color;\n}\n```",
                    "authorId": ana.id
            },
            {
                    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/webpack-um-guia-para-iniciantes.png",
                    "title": "Webpack: Um Guia para Iniciantes",
                    "slug": "webpack-um-guia-para-iniciantes",
                    "body": "Aprenda a configurar o Webpack, uma poderosa ferramenta de empacotamento de módulos, neste guia passo a passo para iniciantes.",
                    "markdown": "```javascript\nmodule.exports = {\n  entry: './path/to/my/entry/file.js'\n};\n```",
                    "authorId": ana.id
            },
            {
                    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/construindo-spa-com-vuejs.png",
                    "title": "Construindo SPA com Vue.js",
                    "slug": "construindo-spa-com-vuejs",
                    "body": "Este post oferece um tutorial detalhado sobre como construir uma Single Page Application (SPA) eficiente e interativa usando o framework Vue.js.",
                    "markdown": "```javascript\nnew Vue({\n  el: '#app',\n  data: {\n    message: 'Bem-vindo à sua SPA Vue.js!'\n  }\n});\n```",
                    "authorId": ana.id
            }
    ];
```

Repare que dentro dessa massa de dados que trouxemos, o authorId vai ser o ana.id. Esse ana é o resultado do nosso upsert, onde inserimos ou atualizamos a Ana, que é a nossa autora.

Agora, temos que fazer uma iteração. Para isso, vamos chamar o posts.forEach(). Vamos passar uma função assíncrona para ele, com async () => {}. Teremos acesso ao post, ou seja, vamos percorrer todos eles, e faremos um await do nosso prisma.post.upsert() - ou seja, vamos aguardá-lo.

Esse upsert vai receber um objeto, e vamos começar a construi-lo de forma muito parecida com a da documentação.

Nossa cláusula de where vai ter um objeto, e o campo único do post é o slug. Então: where: { slug: post.slug }.

Repare que IntelliSense, o autocomplete do VS Code, está sendo feito, por debaixo dos panos, pela extensão do Prisma que instalamos em um vídeo anterior, junto do prisma generate. Ou seja, o Prisma toma todo esse cuidado com a tipagem.

Voltando para a nossa cláusula de where, vamos procurar pelo slug e olhar para o post.slug. Ou seja: vamos pegar o slug do post da vez e verificar se já existe algum no banco de dados.

Se for o caso, vamos passar um update. Se for um update, não queremos fazer nada além de manter o original no banco de dados. Mas, se ele não existir, queremos criar. E, para o create, passamos o post em si, cuja classe estamos percorrendo.

```
posts.forEach(async (post) => {
        await prisma.post.upsert({
                where: { slug: post.slug },
                update: {},
                create: post
        })
})
```

Agora podemos adicionar um pouco de informação para nós, pessoas que estão desenvolvendo esse código.

Na linha 16, depois de criar a Ana e antes do const posts, vamos chamar um console.log de 'Author created' (autor criado), que foi a Ana, e vamos passar como segundo parâmetro a própria ana:
```console.log('Author created', ana)```

No final do código, apenas antes de main(), vamos fazer outro console.log dizendo 'Seed OK', porque criamos um número indeterminado de posts e não queremos poluir o nosso console.
```
console.log('Seed OK')
```

Repare que estamos usando o console porque isso não vai ser executado dentro do contexto da nossa aplicação.

### Executando e testando o seed
Vamos abrir agora outro terminal no VS Code e digitar o comando que consultamos na documentação:
```npx prisma db seed```

O prisma db seed vai procurar no package.json a instrução que acabamos de definir. Nela, estamos dizendo que vamos pedir para o Node executar o seed.js que está dentro da pasta prisma, ou seja, o arquivo que acabamos de escrever.

Agora vamos executar o comando e verificar se isso vai funcionar do jeito que esperávamos ou se vamos ter que lidar com algum erro.

Ao pressionar "Enter", o console diz: "Estou rodando o comando seed". Depois, imprime "Author created", conforme o nosso console.log, e os dados da Ana. No final temos o "Seed OK", ou seja, aparentemente não tivemos erro.

Podemos fechar o terminal. Antes de passar para o DBeaver para verificar se os dados estão lá, repare que a última parte do arquivo é o que trouxemos da documentação:
```
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
```

A documentação sugeriu a criação de uma função assíncrona chamada main, onde escrevemos todo o nosso upsert, e na linha 129, chamamos essa função e fazemos um .then para desconectar do banco e, se der algum erro, fazemos um .catch com o console.error do que aconteceu, nos desconectamos do banco e saímos do processo Node.

Se formos ao DBeaver agora, dentro da tabela de Posts, na aba de Data, observaremos os 12 posts que trouxemos da nossa estrutura. Agora podemos confirmar se a nossa aplicação vai exibir esses dados.

De volta ao terminal local, vamos executar o comando npm run dev novamente apenas para garantir que o servidor está rodando.

De volta ao navegador, na página do CodeConnect, vamos recarregar a página. Tomamos um erro do Next dizendo: "Não foi possível ler propriedades de undefined; estou tentando ler avatar".

O Next especifica: "No componente CardPost/index, você está fazendo post.author.avatar, e não existe author". Ou seja: o Prisma não trouxe o autor do post.

Repare que na nossa página raiz (arquivo page.js no VS Code), onde fizemos o db.post.findMany, em nenhum momento dissemos para o Prisma que queríamos incluir esse autor.

Então, além de corrigir esse erro, temos que melhorar a experiência do usuário. Afinal, enquanto estamos desenvolvendo, visualizar o erro na página é legal. Mas para a pessoa usuária fica apenas uma tela preta. Não enviamos nenhuma informação para a pessoa que está lendo aquele blog de que algo deu errado.

---

##  Melhorar experiência para o usuário
[Documentação Next.js](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
Pensando na experiência das pessoas leitoras do nosso blog, o CodeConnect, vamos criar uma página de erro personalizada.

A documentação do Next.js possui uma seção específica sobre como tratar erros de tempo de execução, ou seja, erros que acontecem enquanto a aplicação está rodando. Basicamente, é nisso que precisamos prestar atenção enquanto pessoas desenvolvedoras Next.

### Criando uma página de erro
No VS Code, dentro da nossa estrutura do App Router (pasta "src > app"), podemos criar páginas específicas para os erros que ocorrerem.

Por exemplo, temos a pasta "posts" e temos a pasta raiz no projeto. Se ocorrer um erro específico na página de post, podemos mostrar uma página de erro para isso, e ela ficara na pasta "posts". Se ocorrer algum erro mais generalizado, vamos para a pasta raiz e pegamos a página de erro no nível mais alto.

O ponto importante é que, dentro da pasta "app", ele vai procurar um arquivo chamado error.js. Vamos criá-lo.

Há mais um detalhe sobre isso, baseado na documentação. Na versão do JS, encontramos um exemplo de arquivo error.js. Na primeira linha desse código, a instrução número 1 diz: componentes de erro precisam ser componentes do lado do cliente ('use client' // Error components must be Client Components).

Ou seja, esses componentes são diferentes do que estávamos fazendo até agora. Tanto que, na linha 3 do exemplo, temos um useEffect, um código React - como já sabemos, com base nas nossas formações anteriores.

Vamos copiar esse exemplo de código e colar no VS Code, no arquivo error.js que criamos dentro de "app".

Vamos fazer algumas mudanças.

Esse código está tentando fazer uma recuperação se algum erro acontecer, por meio do reset. Mas não queremos fazer o Try Again ("tentar de novo"), então vamos tirar toda a tag button do código, além do reset na função Error.

Podemos deixar o h2 com a mensagem "Something went wrong!" ("Algo deu errado"). A única coisa que vamos fazer é colocar um style para a fonte ficar branca e conseguirmos ler no nosso fundo escuro. Então, color: 'white'.
error.js
```
'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2 style=({color: 'white'})>Something went wrong!</h2>
    </div>
  )
}
```

Criamos o arquivo error.js com a mensagem de que algo deu errado, e também fizemos console.error. Esse é o console do navegador, porque está rodando do lado do cliente, e ele vai mostrar para a pessoa usuária o que foi esse erro.

Voltando ao CodeConnect no navegador, vamos fazer uma Inspeção. Vamos limpar o Console, na parte inferior da aba de inspeção, e recarregar a página.

A mensagem "Something went wrong!" é exibida em letras brancas no canto superior esquerdo da tela, ao lado da logo. Vários erros são impressos no console, então o nosso console.log está funcionando também.

O erro foi renderizado. Agora podemos tratá-lo e até colocar em uma página mais elegante.

### Tratando o erro
[Documentação Prisma](https://www.prisma.io/docs/orm/reference/prisma-client-reference)
Vamos migrar para a documentação do Prisma.

Quando temos um relacionamento entre modelos e queremos incluir o relacionamento, temos que passar uma propriedade chamada include para o nosso findMany, para dizer o que queremos incluir ou não.

Vamos voltar ao VS Code. No nosso cenário do page.js, que está na raiz do nosso "app", vamos passar um objeto para o findMany e chamar o include, que também vai receber um objeto.

Se pressionarmos "Ctrl + Espaço" dentro desse objeto, o VS Code consegue sugerir que um relacionamento que um post tem é o autor. Então, o que podemos incluir é o author. Então:

page.js
```
const posts = await db.post.findMany({
    include: {
        author: true
    }
})
```

Ou seja: para cada post que vier, incluimos o relacionamento com o autor.

Voltamos ao CodeConnect no navegador e já podemos observar os posts sendo exibidos! Podemos até recarregar a página para ter certeza.

Repare que ele está exibindo os posts corretamente, sem aquele erro de leituras de propriedade de undefined, porque agora, para cada post, a propriedade avatar está preenchida porque incluímos o nosso autor. O que o Prisma fez por debaixo dos panos foi selecionar o autor de cada post.

---

## ORMs
Bora falar de Object-Relational Mapping, mais conhecido como ORM, uma ferramenta essencial no desenvolvimento de software. A criação dos ORMs foi motivada pela necessidade de superar as diferenças entre os sistemas de banco de dados relacional e a programação orientada a objetos, que são duas formas bastante distintas de pensar sobre dados.

Um ORM serve como uma ponte entre esses dois mundos, permitindo que desenvolvedores manipulem o banco de dados usando a linguagem de programação de sua escolha (no nosso caso, JavaScript), sem ter que escrever consultas SQL complexas e sem se preocupar com as diferenças de tipos de dados. Isso não só economiza um tempo valioso, mas também diminui a probabilidade de erros que podem ocorrer ao traduzir manualmente entre esses dois sistemas.

Além disso, os ORMs promovem um código mais limpo e organizado, encorajando o uso de boas práticas de programação, como o princípio DRY (Don't Repeat Yourself) e a separação de preocupações. Isso é particularmente útil em projetos grandes e complexos, onde a manutenção do código pode se tornar um desafio.

Outro aspecto importante dos ORMs é a sua capacidade de abstrair as especificidades do banco de dados. Isso significa que o mesmo código ORM pode ser usado com diferentes sistemas de banco de dados com poucas ou nenhuma modificação, tornando as aplicações mais portáveis e flexíveis.

---

## Paginar Posts
Perceba, estamos listando todos os posts, sem exceção, por acaso só tem 12, mas imagine se tivessem 500 posts. Teríamos alguma dificuldade para exibir isso. O CodeConnect já era paginado, não podemos perder uma funcionalidade durante uma refatoração. Vamos resolver isso.

Primeira coisa que vamos fazer é ir lá no VS Code, vamos fechar aqui o que está aberto, vamos fechar nossa página de erro, inclusive a nossa página de erro já está com o desafio aplicado, vamos comentar as linhas do include e do author para testarmos.
```
const posts = await db.post.findMany({
 // include: {
 //  author: true
 //  }

)}
```

Voltamos ao navegador e percebemos que já está com a imagem do robô pensante aqui, tentando entender o que aconteceu, então já está resolvido o desafio no nosso projeto. Podemos descomentar as linhas de include e de author.

Neste ponto, está na hora de evoluirmos a nossa query, certo?

Quando estamos falando de SQL, obter dados SQL, podemos usar alguns campos para dizer quantas linhas queremos pegar e quantas linhas queremos saltar. Usamos essa técnica justamente para fazer a paginação.

Então se traduzirmos isso para a linguagem do Prisma, lá na nossa função no VS Code, getAllPosts(page), na primeira instrução do bloco try vamos criar uma constante e essa constante vai indicar quantos posts queremos por página, então vamos colocar aqui uma constante chamada perPage, ou seja, "por página" (para definir quantos posts queremos por página) e vamos inserir o valor de 6.

Estamos extraindo esse 6 para essa constante perPage para a informação ficar legível.

```const perPage = 6;```

Dentro do nosso objeto de configuração que passamos para o findMany() é possível fazer várias coisas diferentes, uma delas é dizer quantos itens queremos pegar.

Então vamos pegar a propriedade take, ou seja, queremos pegar 6, então queremos fazer o take: perPage.

```
async function getAllPosts (page) {
  try {

    const perPage = 6;
    
    const posts = await db.post.findMany({
      take: perPage,
      include: {
        author: true
      }
    })
```

Estamos construindo a nossa query informando que queremos pegar 6, então de todas que o Prisma encontrar, então o findMany, desde que pegue somente 6, pega os 6 primeiros resultados.

Vamos salvar, voltar no navegador, recarregar a página e agora sim ele está exibindo 6 posts!

E outra coisa que podemos ir evoluindo e expandindo na nossa query, é tendo em mente que o ORM abstrai o que o SQL vai fazer, podemos instruí-lo com esse pensamento. Teríamos como, por exemplo, em uma query dizer qual é a nossa ordenação, queremos ordenar os posts, então pensando nisso temos duas coisas para fazer nesse momento.

Primeiro, vamos olhar o nosso Prisma, esquema.prisma e relembrar os campos que temos lá, então um desses campos é o createdAt, ou seja, temos essa data de criação, então podemos usar esse campo para fazer essa ordenação, vamos experimentar?

Então, dentro do nosso objeto de configuração, vamos colocar aqui um orderBy e aí vamos passar aqui um outro objeto e aqui dentro ele tem todos os campos que poderíamos ordenar, são os campos disponíveis lá no nosso model de post e podemos dizer, por exemplo, que queremos ordenar por createdAt e podemos pôr essa ordenação do maior para o menor ou do menor para o maior, queremos desc, ou seja, decrescente, certo? Assim teremos os posts mais recentes primeiro, certo?

Então agora limitamos, ou seja, pegamos sempre seis itens, seis posts por página, ordenado pela data de criação, legal? Voltando lá no navegador, vamos carregar para ver se está tudo certo, continua tudo funcionando, a nossa listagem ainda está sendo feita e agora estamos evoluindo a nossa query.

O que temos que fazer agora é esses controles de navegação de página anterior, página a seguir, próxima página e isso temos que retornar para o nosso componente Home e o nosso método getAllPosts, ele tem que saber disso, ele tem que saber como paginar esses posts.

---

## queries poderosas com o Prisma
O Prisma ORM transforma o modo como interagimos com o banco de dados. Ao invés de escrever consultas SQL longas e propensas a erros, o Prisma nos permite usar construções de JavaScript para comunicar nossas intenções de forma clara. Isso não só melhora a legibilidade do código, mas também aumenta a produtividade ao permitir que nos concentremos na lógica da aplicação.

Vamos simular uma aplicação para gerenciar uma coleção de itens de memorabilia geek, como action figures, quadrinhos e jogos. Utilizaremos o Prisma para realizar operações complexas no banco de dados.

### create
Para adicionar um novo item à coleção, usamos o método create:
```

const novoItem = await prisma.item.create({
  data: {
    nome: 'Action Figure Spider-Man',
    descricao: 'Figura de ação do Spider-Man da série Marvel Legends.',
    categoria: 'Action Figure',
    preco: 29.99
  },
});
console.log(novoItem);
```

### findMany
Suponha que queremos encontrar todos os itens de uma categoria específica que têm um preço menor que um determinado valor. Podemos fazer isso facilmente com o Prisma:
```

const itensBaratos = await prisma.item.findMany({
  where: {
    AND: [
      { categoria: 'Quadrinhos' },
      { preco: { lt: 15 } }
    ]
  },
});
console.log(itensBaratos);
```

### update
Para atualizar um item na nossa coleção, utilizamos o método update. Suponha que queremos atualizar o preço de um item específico:
```

const atualizaItem = await prisma.item.update({
  where: {
    id: 1,
  },
  data: {
    preco: 19.99,
  },
});
console.log(atualizaItem);
```

### delete
Para remover um item da coleção, podemos usar o método delete:
```

const removeItem = await prisma.item.delete({
  where: {
    id: 1,
  },
});
console.log(removeItem);
```

### Boas práticas e algumas dicas
Use as migrations do Prisma: As migrações simplificam o processo de atualização do esquema do banco de dados, mantendo tudo sincronizado e seguro.

Aproveite a tipagem: Embora estejamos usando JavaScript, o Prisma oferece um nível de segurança com os tipos que nos ajuda a prevenir erros comuns de banco de dados.

Otimize as queries: O Prisma permite a realização de operações complexas com eficiência. No entanto, sempre revise suas queries para garantir que elas sejam otimizadas para performance.

O Prisma abre um mundo de possibilidades para devs com foco em aplicações eficientes. Ao seguir as práticas recomendadas e utilizar as capacidades avançadas do Prisma, podemos criar aplicações poderosas e ao mesmo tempo manter nosso código limpo e fácil de manter.

---

##  Deploy na Vercel
Carregamos a documentação da Vercel, especificamente a documentação de Storage (Armazenamento), do Postgres, e por último, uma para usar o ORM. Ela diz que para usarmos o Prisma, precisamos de duas variáveis de ambiente específicas.

```
url env("POSTGRES PRISMA URL")
// Uses direct connection. make sure to keep this to 'POSTGRES URL_NON_POOLING'
// or you'll have dangling databases from migrations
directUrl env("POSTGRES_URL_NON_POOLING")
```

Observe que o nosso .env local será totalmente ignorado na Vercel. Quem comandará nesse cenário será o próprio ambiente da Vercel. O .env só existirá no ambiente de desenvolvimento.

Vamos pegar os valores de URL e direct URL, e levá-los para o nosso projeto. Então, acessaremos o VSCode, no .env. Temos o Database_URL e precisamos ajustá-lo.

```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://postgres@localhost:5432/codeconnect_dev"
```

No schema.prisma, dentro do datasource db, que tem a nossa URL na linha 10, vamos colar o que veio da documentação da Vercel, retirar os comentários e agora temos essas duas variáveis que precisamos ajustar no nosso .env local: POSTGRES_PRISMA_URL e POSTGRES_URL_NON_POOLING.
```
datasource db {
  provider = "postgresql"
  url = env("POSTGRES_PRISMA_URL")
  directUrl = env("POSTGRES_URL_NON_POOLING")
}
```

Vamos copiar essas variáveis, voltar no .env, copiar, porque no ambiente local os dois terão o mesmo valor, e sobrescrever o nome. Não usaremos mais o DATABAS_URL, vamos ficar em sincronismo com o que a Vercel nos entregará.
```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

POSTGRES_PRISMA_URL="postgresql://postgres@localhost:5432/codeconnect_dev"
POSTGRES_URL_NON_POOLING="postgresql://postgres@localhost:5432/codeconnect_dev"
```

Além de ajustar essas variáveis de ambiente, precisamos executar os comandos do Prisma na Vercel. Então, como podemos fazer isso? No package.json, temos o comando build, que está na linha 7 e faz o next build.

Antes de fazer o build, podemos executar alguns comandos:

prisma generate, para executar e gerar o client do Prisma;
prisma migrate dev, para rodar todas as migrations;
prisma db seed.
Observem que estamos usando o &&, por ser um comando de bash.

```
 "build": "prisma migrate dev && prisma generate && prisma db seed && next build",
```

Primeiro ele vai executar o prisma generate, se tudo der certo ele passa para o próximo, se tudo der certo ele passa para o próximo, faz o seed e executa o next build. Isso deve ser necessário para a Vercel funcionar corretamente com o nosso build.

Vamos abrir o terminal, passar git add ., git commit -m 'parametros de build da vercel', git push origin main, e agora está tudo certo. Vamos conectar isso na Vercel para testarmos.

Voltamos para o navegador e na Vercel. Apertaremos "Add New > project" para adicionar um novo projeto. Ele vai instalar o que veio do GitHub, temos o code-connect de 22 minutos atrás, é esse que queremos, portanto, apertaremos "Import".

Ele já identificou que se trata de um Next.js, vamos pedir um deploy e ele começará o processo de building. Vamos deixar a aba aberta para acompanharmos o que está acontecendo durante esse build.

A primeira tarefa que ele realiza é instalar as dependências do projeto, depois entra na sequência de comando que fizemos. Então, gerou o Prisma Client corretamente e enviou um erro dizendo que não conseguiu se conectar com um banco de dados. De fato, não temos um banco de dados. Precisamos indicar para a Vercel que queremos um Postgres conectado a esse projeto.

Ao final da página, encontramos um botão "Go to Project" que nos redirecionará para a página do projeto. Dentro da página do projeto, existe uma aba chamada "Storage". Vamos apertar "Cretae" à frente de PostgreSQL. Observem que ele tem uma faixa gratuita dependendo do tamanho do banco, então nesse nosso cenário, vai dar tudo certo.

Vamos aceitar os termos e condições. Podemos usar o nome "code-connect-postges", já que neste momento o nome não importa. A variável de ambiente será provida pela própria Vercel. Por fim, apertaremos "Create & Continue".

Temos algumas opções de customização, mas vamos deixar tudo como padrão. Além disso, ele está usando um prefixo Postgres_URL que é exatamente o valor enviado da documentação.

Com o banco de dados criado, vamos solicitar um redeploy. Voltando na Vercel, acessaremos "Project", parte de projetos. Em "Deploy", encontraremos o último deploy e verificamos que deu erro. Podemos acessá-lo e apertar o botão de "Redeploy".

O build já começou, deixamos o Output, isto é, a saída do terminal, para veririficar se vai dar tudo certo. Outra vez, ele tentará instalar as dependências, gerar o client, tentar executar as migrations e popular o banco de dados.

As variáveis foram carregadas, o client foi gerado e as migrations executadas. Também indicou que tudo está sync, executou o seed e parece ter entrado no fluxo do build do Next.js. Basta aguardar um sinal verde para testarmos se tudo funcionou como queríamos.

Está fluindo bem, ele já gerou a página, tem um indicador do que é estático, do que é dinâmico, conseguiu concluir o build e vai começar a montar o deploy.

Conseguimos exatamente o que queríamos, ele fez o Deploy e a nossa aplicação está pronta. Vamos voltar na página do projeto, ele gerou um domínio: code-connect-one.vercel.app. Este domínio carregou corretamente. Os nossos posts foram carregados.

Podemos até experimentar a busca por S, que vai trazer uma paginação. Conseguimos passar de uma página para outra sem problemas. Porém, houve um delay nessas páginas, se tentamos acessar a página anterior, a mudança é instantânea, porque o Next.js faz o cache.

Com isso, fechamos o nosso ciclo que foi remover a API que consumíamos no início desse curso. Agora está tudo conectado no post, por isso temos uma aplicação Next Fullstack. 

---

## clausulas where complexas

Dentro do ecossistema Prisma, uma das funcionalidades mais poderosas é a construção de cláusulas WHERE para filtrar dados de forma precisa. O Prisma oferece uma interface flexível, o que nos permite lidar com condições complexas de forma elegante. Vamos explorar como podemos aproveitar ao máximo essa funcionalidade, com exemplos práticos para ilustrar a flexibilidade do Prisma na manipulação de consultas.

Filtragem básica
Imagine que temos uma tabela de usuários e queremos encontrar um usuário pelo seu email:

```

const usuario = await prisma.usuarios.findUnique({
  where: {
    email: 'fulano@exemplo.com',
  },
});
```

Esta é a forma mais simples de usar a cláusula WHERE: estamos especificando que queremos um registro que corresponda exatamente ao email fornecido. Bem parecido com o que fizemos no Code Connect.

Condições compostas
E se precisarmos de uma busca mais específica? Por exemplo, encontrar um usuário que tenha mais de 18 anos e que more em "Nova Friburgo":

```

const usuarios = await prisma.usuarios.findMany({
  where: {
    idade: {
      gt: 18,
    },
    cidade: Nova Friburgo',
  },
});
```

Aqui, usamos { gt: 18 } para especificar uma condição "maior que" (greater then, em inglês). O Prisma oferece vários operadores para lidarmos com condições mais complexas, se liga só aqui na [documentação](https://www.prisma.io/docs/orm/prisma-client/queries/filtering-and-sorting).

Utilizando OR e AND
Para consultas que exigem lógica "OU" ou "E", o Prisma tem uma abordagem bacana. Vamos buscar usuários que moram em "São Paulo" OU "Rio de Janeiro":

```

const usuarios = await prisma.usuarios.findMany({
  where: {
    OR: [
      { cidade: 'São Paulo' },
      { cidade: 'Rio de Janeiro' },
    ],
  },
});
```

E se quisermos encontrar usuários que morem em "São Paulo" E tenham sobrenome "Silva"? Vem comigo:
```

const usuarios = await prisma.usuarios.findMany({
  where: {
    cidade: 'São Paulo',
    sobrenome: 'Silva',
  },
});
```

Trabalhando com listas
Suponha que queremos encontrar usuários que possuam interesse em "tecnologia" ou "programação". Considerando que interesses seja um campo do tipo array, podemos fazer:

```
const usuarios = await prisma.usuarios.findMany({
  where: {
    interesses: {
      hasSome: ['tecnologia', 'programação'],
    },
  },
});
```

Buscas e relacionamentos
O Prisma também brilha ao lidar com relacionamentos. Se precisarmos encontrar usuários que publicaram pelo menos um post, podemos fazer assim:

```
const usuarios = await prisma.usuarios.findMany({
  where: {
    posts: {
      some: {},
    },
  },
});
```

E se quisermos encontrar usuários com posts que tenham mais de 100 curtidas?

```
const usuarios = await prisma.usuarios.findMany({
  where: {
    posts: {
      some: {
        curtidas: {
          gt: 100,
        },
      },
    },
  },
});
```

Reparou que podemos combinar várias coisas diferentes?

Negando condições
Finalmente, se precisarmos buscar por usuários que NÃO moram em "São Paulo", o Prisma nos permite usar o operador not de forma elegante:

```

const usuarios = await prisma.usuarios.findMany({
  where: {
    NOT: {
      cidade: 'São Paulo',
    },
  },
});
```

Cada um desses exemplos ilustra o poder do Prisma ao construir cláusulas WHERE. O Prisma transforma o processo de consulta em uma experiência mais declarativa, assim podemos focar na lógica de negócios em vez de nos perdermos em sintaxes complexas de query.
