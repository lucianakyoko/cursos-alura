# Anotações do Curso de Next.js: construindo com Server Actions

---

[Projeto inicial](https://github.com/alura-cursos/3734-code-connect)

[ícones](https://github.com/alura-cursos/3734-code-connect/tree/aula-5/src/components/icons)


[Figma](https://www.figma.com/file/k2uVg4mzbUmXMwHFQKzfLr/CodeConnect--%7C-Forma%C3%A7%C3%A3o-Next?node-id=733%3A10658&mode=dev)

---

## Preparando o ambiente
1. Instalar dependências projeto acima com ```npm i```

2. Garantir que o docker esteja executando o nosso container do postgres: ```docker compose up -d```

3. Executar as migrations e o seeder:
```npx prisma generate && npx prisma migrate dev && npx prisma db seed```

4. Executar a aplicação e garantir que temos tudo direitinho e conectado:
```npm run dev```

---

## Migration para comentários
Vamos mergulhar no código? É hora de elevar o Code Connect para o próximo nível. Nosso foco estará na parte de comentários, permitindo que as pessoas usuários comentem nos posts e respondam a outros comentários. Estamos prestes a iniciar uma jornada repleta de conceitos fascinantes.

O projeto já está baixado e em execução. O terminal está rodando o comando npm run dev, e o Docker está operando o Postgres. Temos um contêiner em execução para o Postgres, nosso banco de dados. Tudo está funcionando conforme esperado. Ao acessarmos o localhost na porta 3000, por exemplo, a lista completa de posts é exibida. Além disso, podemos clicar em um card para ver os detalhes específicos de um post. Essa funcionalidade foi desenvolvida no curso anterior e agora vamos expandir e adicionar o recurso de comentários.

**Analisando a estrutura:**
No Figma, ao observarmos a parte inferior, identificamos dois níveis de comentários. Primeiramente, um comentário pode ser diretamente associado a um post, onde um usuário comenta diretamente em um post específico. Esse comentário será controlado por uma modal. No entanto, há um segundo detalhe: podemos responder a um comentário. Portanto, teremos comentários vinculados a posts e comentários vinculados a outros comentários. Vamos elaborar essa estrutura.

**Adicionando o modelo Comment:**
No VS Code, já temos no arquivo schema.prisma todos os nossos modelos, incluindo User e Post. Agora vamos adicionar um novo modelo: o Comment.
```
model Commment {

}
```

Podemos começar da mesma forma que fizemos com o Post, definindo um id como inteiro e marcando-o como @id. Ele terá um valor padrão de auto-incremento.
```
model Commment {
    id Int @id @default(autoincrement())
}
```

Em seguida, adicionamos um campo text do tipo String, e um campo createdAt do tipo DateTime com um valor padrão now(). Além disso, criamos um campo updatedAt também do tipo DateTime e adicionamos a anotação @updatedAt para que o Prisma atualize esse valor sempre que um comentário for atualizado.
```
model Commment {
    id Int @id @default(autoincrement())
    text String
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
}
```

Um comentário estará associado a um post e terá um autor, ou seja, um user. Para indicar esse relacionamento, utilizamos a referência ao user. Para isso, criamos um campo authorId como inteiro e definimos o relacionamento com author e User usando a anotação @relation(). Especificamos os campos que apontam para user, que é authorId, e as referências, que é o id do usuário.
```
model Commment {
    id Int @id @default(autoincrement())
    text String
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    authorId Int
    author User @relation(fields: [authorId], references: [id])
}
```

Agora precisamos estabelecer o relacionamento inverso. No modelo User, indicamos que ele possui comments, que será um array de Comment.
```
model User {
    id Int @id @default(autoincrement())
    name String
    username String @unique
    avatar String
    Post Post[]
    comments Comment[]
}
```

Em seguida, replicamos o mesmo processo para o modelo Comment, definindo um campo postId como inteiro e estabelecendo o relacionamento post com o id do post.
```
model Comment {
    id Int @id @default(autoincrement())
    text String
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    authorId Int
    author User @relation(fields: [authorId], references: [id])
    postid Int
    post Post @relation(fields: [postId], references: [id])
}
```
Em seguida, no modelo Post, além de indicar o autor, adicionamos o campo comments, que será um array de Comment. Dessa forma, o relacionamento entre os modelos está corretamente estabelecido.
```
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
    comments Comment[]
}
```

**Estabelecendo relacionamentos:**
Agora, vamos criar um relacionamento de autor. Isso, porque, um comentário pode responder a outro comentário. Existem várias maneiras de modelar isso, e neste cenário vamos criar uma coluna chamada parentId dentro do modelo Comment. Essa coluna será do tipo inteiro e usaremos um ponto de interrogação indicando que ela pode ser nula, ou seja, um comentário pode ou não estar respondendo a outro. O objetivo desse parentId é identificar o comentário pai, estabelecendo uma hierarquia.
```
model Comment {
    id Int @id @default(autoincrement())
    text String
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    authorId Int
    author User @relation(fields: [authorId], references: [id])
    postid Int
    post Post @relation(fields: [postId], references: [id])
    parentId Int?
}
```

Assim, podemos criar um relacionamento dentro do modelo Comment com ele mesmo: comments Comment[]. Para configurar esse relacionamento, primeiro indicamos o relacionamento ascendente, ou seja, quem é o pai desse comentário. Então, definimos que o parent aponta para um Commnet? que pode ser nulo ? (não existir). Então, utilizamos a anotação @relation() especificando os campos que apontam para o parentId e id do comentário.

```
model Comment {
    id Int @id @default(autoincrement())
    text String
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    authorId Int
    author User @relation(fields: [authorId], references: [id])
    postid Int
    post Post @relation(fields: [postId], references: [id])
    parentId Int?
    parent Comment? @relation(fields: [parentId], references: [id])
    comments Comment[]
}
```

Em seguida, no relacionamento comments, declaramos que ele também é um @relation().
```
model Comment {
    id Int @id @default(autoincrement())
    text String
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    authorId Int
    author User @relation(fields: [authorId], references: [id])
    postid Int
    post Post @relation(fields: [postId], references: [id])
    parentId Int?
    parent Comment? @relation(fields: [parentId], references: [id])
    comments Comment[] @relation()
}
```

Porém, o Prisma nos alerta que esse relacionamento auto-referencial está ambíguo, pois há mais de um Comment envolvido. Para resolver isso, damos um nome para esse relacionamento antes de passar os campos. Podemos utilizar CommentChildren, por exemplo.
```
model Comment {
    id Int @id @default(autoincrement())
    text String
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    authorId Int
    author User @relation(fields: [authorId], references: [id])
    postid Int
    post Post @relation(fields: [postId], references: [id])
    parentId Int?
    parent Comment? @relation("CommentChildren", fields: [parentId], references: [id])
    comments Comment[] @relation()
}
```

Em seguida, atribuímos o mesmo nome para os comments na linha 48. E para manter a coesão, chamamos o relacionamento de children.

```
model Comment {
    id Int @id @default(autoincrement())
    text String
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    authorId Int
    author User @relation(fields: [authorId], references: [id])
    postid Int
    post Post @relation(fields: [postId], references: [id])
    parentId Int?
    parent Comment? @relation("CommentChildren", fields: [parentId], references: [id])
    children Comment[] @relation("CommentChildren")
}
```

Dessa forma, um comentário pode ter vários filhos ou pode ser filho de outro comentário, estabelecendo um relacionamento auto-referencial.

Com o relacionamento estabelecido, podemos agora adicionar um novo campo ao modelo Post: o campo likes, que será um contador de quantos likes o post recebeu. Como ainda não implementamos a autenticação do usuário, por enquanto teremos apenas um contador simples. Definimos o campo likes como inteiro, com um valor padrão de zero. Ou seja, por padrão, um post tem 0 likes.
```
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
    comments Comment[]
    likes Int @default(0)
}
```
Após evoluirmos nosso esquema, vamos ao terminal, paramos a execução do npm run dev e solicitaremos ao Prisma que execute as migrações utilizando o comando npx prisma migrate dev --name seguido do nome da migração. O terminal sugere o nome comments-and-likes, vamos confirmar.
```
npx prisma migrate dev --name comments-and-likes
```
O Prisma então se conectará ao Postgres e atualizará o banco de dados, criando as tabelas e colunas necessárias.

Com a migração concluída e o esquema atualizado, estamos prontos para persistir os dados e avançar no desenvolvimento do CodeConnect.

---

## Server Actions
Avançamos com nosso banco de dados, utilizando o Prisma como ORM, e evoluímos nosso modelo, executando os comandos necessários para migrar e atualizar nosso banco de dados. Agora, podemos prosseguir com o lado do Next.js, começando pela criação de nossa primeira action do servidor.

**Criando os arquivos**
Para organizar nossas ações, vamos criar uma nova pasta chamada actions dentro de src. No VS Code, clicamos com o botão direito e selecionamos "New Folder", nomeando-a como actions. Dentro dessa pasta, criaremos um novo arquivo chamado index.js para conter nossas actions.

**Criando a action**
No contexto da nossa primeira action, vamos considerar um cenário envolvendo o incremento de likes. Para isso, vamos criar uma função assíncrona chamada incrementThumbsUp(), que receberá um objeto post como parâmetro, representando o post que desejamos incrementar o número de likes.
```export async function incrementThumbsUp(post) {

}
```

Dentro da função, utilizaremos operações assíncronas do Prisma para atualizar o número de likes no banco de dados. Primeiro, importamos o DB do Prisma. Em seguida, usamos o método update para atualizar o post específico com base no id fornecido. Começamos definindo a cláusula where, garantindo que estamos atualizando apenas o post desejado.
```
import db from "../..prima/db";

export async function incrementThumbsUp(post) {
    
    await db.post.update({
        whre: {
            id: post.id
        },
    })
}
```

Em seguida, especificamos os dados que queremos atualizar, neste caso, o objeto data, que é esperado pelo próprio Prisma, e o campo likes. Utilizamos o operador de incremento increment para incrementar o número de likes em um.
```
import db from "../..prima/db";

export async function incrementThumbsUp(post) {
    
    await db.post.update({
        whre: {
            id: post.id
        },
        data: {
            likes: {
                increment: 1
            }
        }
    })
}
```

Dessa forma, nossa função recebe um post como parâmetro e atualiza o número de likes no banco de dados. Vale ressaltar que o id corresponde ao id do post específico, e data, aos dados que serão atualizados, no caso, a coluna de likes. Essa é uma server action que o Next.js saberá como integrar com nossos componentes."

Para deixar claro que estamos lidando com ações do lado do servidor, podemos adicionar um comentário no início de nosso arquivo, na linha 1, antes de qualquer importação. Podemos usar aspas simples ou duplas para indicar 'use server' ou simplesmente 'server'.
```
'use server'

import db from "../..prima/db";

export async function incrementThumbsUp(post) {
    
    await db.post.update({
        whre: {
            id: post.id
        },
        data: {
            likes: {
                increment: 1
            }
        }
    })
}
```

Isso informa explicitamente ao Next.js que essas são server actions. Agora, com o banco de dados atualizado e uma action que o atualiza, precisamos conectar esses elementos para indicar quando o componente chamará a ação. Antes, porém, há alguns ajustes que precisamos fazer no CodeConnect.

**Realizando os ajustes**
Vamos começar implementando um link para a página inicial no componente aside. Isso nos poupará de ter que digitar a URL manualmente sempre que quisermos voltar para a página inicial.

No VS Code, dentro da pasta components/Aside, vamos acessar o arquivo index.jsx. Nele, temos uma imagem no componente aside. Vamos envolver essa imagem da logo em um componente <Link> do Next.js, definindo o href como a raiz do projeto.

Neste ponto, precisamos lembrar de também fazer a importação do componente <Link>.

```
import Image from 'next/image'
import styles from './aside.module.css'

import logo from './logo.png'
import Link from 'next/link'

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            {/* <img src="/logo.png" alt="Logo da Code Connect" /> */}
            <Link href="/">
                <Image src={logo} alt="Logo da Code Connect"/>
            </Link>
        </aside>
    )
}
```

Ao salvar, voltar ao navegador e clicar na logo "Code Connect", somos redirecionados para a home. Está funcionando como esperávamos.

Além disso, precisamos adicionar ações clicáveis dentro do componente CardPost. Atualmente, todo o CardPost é um link, o que não é ideal. De volta ao VS Code, dentro da pasta components/CardPost, acessaremos o arquivo index.jsx.

Nele, dentro de CardPost, temos um componente <Link> que envolve o restante do código. Vamos corrigir isso da seguinte forma: primeiro, copiaremos o href, por volta da linha 8, e após a tag <p>, que contém post.body, por volta da linha 21, chamaremos o componente <Link> do Next.js. Ele conterá o texto "Ver detalhes" e o href que copiamos anteriormente, que serve para redirecionar para os detalhes do post.
```
<p>{post.body}</p>
<Link href={`/posts/${post.slug}`}>Ver detalhes</Link>
```
Feito isso, podemos remover a tag <Link> com o href que englobava o código.

Depois de fazer esses ajustes, podemos salvar e verificar no navegador se os links estão funcionando corretamente. Note que o texto "Ver detalhes" aparece em cada card como um link clicável, então está funcionando conforme o esperado.

Agora, podemos nos concentrar nas próximas ações necessárias, como implementar a contagem de likes e os comentários em cada post

---

## Prisma - Migrations e Relations
**Migrations**
O Prisma oferece duas principais formas de lidar com migrações: prisma migrate dev e prisma migrate prod. Vamos descomplicar esses comandos e entender o que cada um faz e suas diferenças.

**prisma migrate dev**
Utilizado principalmente em ambiente de desenvolvimento, esse comando:

Cria novas migrações a partir de mudanças no schema Prisma.
Aplica automaticamente as migrações no banco de dados.
Gera arquivos SQL para cada migração.
É ideal para iterar rapidamente sobre o modelo de dados sem a preocupação imediata com a produção.

**prisma migrate prod**
Focado em ambientes de produção, este comando:

Não gera novas migrações.
Precisa que as migrações sejam geradas antecipadamente (via prisma migrate dev ou manualmente).
Aplica as migrações pendentes no banco de dados de produção de forma segura.
A principal diferença entre os dois modos é que prisma migrate prod é projetado para ser usado em um pipeline de CI/CD, garantindo que as migrações aplicadas sejam revisadas e testadas antes de serem aplicadas em produção.

**Relationships**
Vamos direto ao ponto: relacionamentos no Prisma ORM. O Prisma suporta uma ampla gama de relacionamentos, incluindo um-para-um, um-para-muitos e muitos-para-muitos. A declaração desses relacionamentos é feita diretamente no arquivo de schema Prisma, usando uma sintaxe clara e concisa.

**Relacionamento um-para-um**
No Prisma, um relacionamento um-para-um é representado por duas tabelas que têm uma referência direta entre si. Aqui está um exemplo prático:
```

model User {
  id        Int @id @default(autoincrement())
  profile   Profile?
}

model Profile {
  id      Int @id @default(autoincrement())
  userId  Int @unique
  user    User @relation(fields: [userId], references: [id])
}
```
Neste exemplo, cada User pode ter no máximo um Profile, e cada Profile está associado a exatamente um User.

**Relacionamento um-para-muitos**
Um relacionamento um-para-muitos é talvez o tipo mais comum de relacionamento. Ele permite que um registro em uma tabela esteja associado a múltiplos registros em outra tabela. Veja como isso é feito:
```

model Post {
  id       Int @id @default(autoincrement())
  title    String
  authorId Int
  author   User @relation(fields: [authorId], references: [id])
}

model User {
  id    Int @id @default(autoincrement())
  posts Post[]
}
```

Neste caso, um User pode ter vários Posts, mas cada Post está vinculado a apenas um User. Exatamente como fizemos no Code Connect.

Relacionamento muitos-para-muitos
Relacionamentos muitos-para-muitos requerem uma tabela de junção ou intermediária e o Prisma simplifica a criação desses relacionamentos:
```

model Post {
  id      Int      @id @default(autoincrement())
  title   String
  tags    Tag[]    @relation("PostToTag")
}

model Tag {
  id      Int      @id @default(autoincrement())
  name    String
  posts   Post[]   @relation("PostToTag")
}

// Tabela de junção explícita
model PostToTag {
  post    Post @relation(fields: [postId], references: [id])
  postId  Int
  tag     Tag @relation(fields: [tagId], references: [id])
  tagId   Int
  @@id([postId, tagId])
}
```

Com esse modelo, Posts e Tags podem ter várias instâncias associadas entre si, através de uma tabela de junção chamada PostToTag.

**Auto relacionamento**
Vamos mergulhar mais fundo no nosso model de Comment:

```
model Comment {
  id         Int       @id @default(autoincrement())
  text       String
  createdAt  DateTime  @default(now())
  updatedAt  DateTime  @updatedAt
  authorId   Int
  author     User      @relation(fields: [authorId], references: [id])
  postId     Int
  post       Post      @relation(fields: [postId], references: [id])
  parentId   Int?
  parent     Comment?  @relation("CommentChildren", fields: [parentId], references: [id])
  children   Comment[] @relation("CommentChildren")
}
```

Aqui, cada comentário pode ser pai de outros comentários (children) e, ao mesmo tempo, ser filho de um comentário (parent). Esse padrão é essencial para criar uma árvore de comentários, permitindo uma estrutura de discussão aninhada.

O campo parentId é opcional (Int?), indicando que um comentário pode não ter um comentário pai (ou seja, é um comentário de primeiro nível). A relação @relation("CommentChildren") é usada para vincular parent a children, demonstrando o uso de uma relação nomeada para auto relacionamentos.

Outros casos de uso

Auto relacionamentos não se limitam a comentários em posts. Eles podem ser aplicados em várias outras situações, como:

Categorias e subcategorias: Em uma loja online, por exemplo, onde categorias de produtos podem ter subcategorias.
Estrutura organizacional: Para representar a hierarquia de funcionários dentro de uma empresa, onde cada funcionário pode ter subordinados.
Árvores de decisão: Em sistemas de recomendação ou de suporte à decisão, onde cada nodo pode levar a outros nodos baseados em decisões ou respostas.
O auto relacionamento adiciona uma camada de profundidade e complexidade ao modelo de dados. Ele permite que estruturas recursivas sejam representadas em um banco de dados relacional, sem a necessidade de tabelas adicionais para gerenciar a hierarquia.

Essas estruturas são comuns em aplicações modernas, especialmente onde a interação do usuário e a organização de conteúdo são complexas e aninhadas. A capacidade de modelar tais relações diretamente no banco de dados simplifica o desenvolvimento e a manutenção dessas aplicações.

Como uma pessoa desenvolvedora é super importante ter um bom conhecimento sobre modelagem de dados. 