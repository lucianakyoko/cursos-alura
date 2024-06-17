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
