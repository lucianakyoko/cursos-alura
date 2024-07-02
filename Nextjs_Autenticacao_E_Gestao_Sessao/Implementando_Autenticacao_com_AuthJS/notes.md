# Anotações do curso - Next.js: implementando autenticação com Auth.js

---

[Projeto inicial](https://github.com/viniciosneves/3739-next-auth/archive/refs/heads/main.zip)
[Ícones](https://github.com/alura-cursos/3739-next-auth/tree/aula-5/src/components/icons)
[Layout - Figma](https://www.figma.com/file/nuentXtVhIsyKr91W8ZJnO/CodeConnect--%7C-Forma%C3%A7%C3%A3o-Next-%28Autoriza%C3%A7%C3%A3o-e-Autentica%C3%A7%C3%A3o%29?type=design&node-id=378-6319&mode=design)

1. Instalar dependências: ```npm i```
2. Garantir que o docker esteja executando o nosso container do postgres: ```docker compose up -d```
3. Executar as migrations e o seeder: ```npx prisma migrate dev && npx prisma generate && npx prisma db seed```
4. Executar a aplicação e garantir que temos tudo direitinho e conectado: ```npm run dev```

---

## OAuth mais a fundo
O que é OAuth?

Basicamente, é um protocolo de autorização usado para permitir que um serviço interaja com outro em nome de um usuário. Ao invés de seu aplicativo pedir a senha do usuário diretamente, ele pede um token de acesso. Esse token é como um crachá temporário que diz "este aplicativo tem permissão para acessar minhas informações até aqui, mas não além disso".

Como funciona?

Pense em quando você quer acessar uma nova aplicação e ela oferece a opção de se logar usando o Google ou Facebook. Você escolhe um desses serviços, faz o login e o serviço confirma para a aplicação que você é quem diz ser. O serviço, como Google ou Facebook, é o que chamamos de Provedor de Identidade. Ele cuida de toda a parte pesada da autenticação e apenas envia um token de volta ao aplicativo que solicitou a informação, confirmando sua identidade sem compartilhar sua senha real.

Fluxos de concessão

Existem diferentes maneiras de implementar o OAuth, conhecidas como fluxos de concessão. Por exemplo, o fluxo de código de autorização é como um sistema de verificação em duas etapas. Primeiro, o usuário é redirecionado para o serviço onde faz login. Após o login, o serviço redireciona de volta para a aplicação com um código especial. Este código é então trocado por um token de acesso. É seguro e robusto, ideal para aplicativos que rodem em um servidor ou no backend.

Por que devemos entender como o OAuth funciona?

Bem, além de ser uma maneira segura de lidar com autenticações e autorizações, o OAuth facilita a vida do usuário. Eles podem usar contas existentes para acessar seu serviço, eliminando a necessidade de memorizar outra senha. Além disso, entender OAuth é essencial para integrar seu aplicativo com uma miríade de APIs externas que são importantes para a expansão de funcionalidades no mundo conectado de hoje.

[Leitura do artigo](https://www.alura.com.br/artigos/oauth2-nodejs)

---

## ambientes com .env
Hoje vamos desbravar o mundo dos arquivos .env e .env.local no desenvolvimento de aplicações com Next.js. Já se perguntou como gerenciar configurações que mudam de ambiente para ambiente sem bagunçar todo o seu código? Ou como manter segredos de API longe de olhos curiosos? A resposta está nos arquivos de ambiente, e vamos explorar isso agora.

O que é um arquivo .env?

Ele é um arquivo simples de configurações, onde você pode definir variáveis de ambiente. As variáveis de ambiente são essenciais para gerenciar configurações que variam entre diferentes ambientes de desenvolvimento, teste e produção. Por exemplo, você pode ter uma URL de API que muda se você está desenvolvendo localmente ou se sua aplicação está rodando em produção.

Agora, por que usar o .env em projetos Next.js?

Ele permite que você separe configurações que não são sensíveis e são comuns a todos os ambientes, como URLs de APIs públicas ou configurações padrão que não mudam. Estas são variáveis que você não se importa de expor em seu repositório de código, já que não comprometem a segurança.

E o .env.local, qual é a dele?

Aqui entram as informações sensíveis. Pensando em segurança, você não quer que suas chaves de API, segredos de OAuth e senhas estejam acessíveis a qualquer um que dê uma espiada no seu repositório de código. O .env.local entra em cena para guardar essas informações preciosas. Este arquivo não é versionado, ou seja, ele nunca é enviado para o seu repositório de controle de versão - no nosso caso, o GitHub. Cada desenvolvedor ou ambiente de produção terá sua própria coleção de variáveis de ambiente com as configurações específicas e sensíveis necessárias.

Quais são as boas práticas ao usar arquivos .env?

Primeiro, nunca, jamais, em hipótese alguma, versione seu .env.local ou qualquer arquivo que contenha informações sensíveis. Adicione-o ao “.gitignore”. Segundo, mantenha os arquivos .env o mais limpos e organizados possível. Separe as variáveis de forma lógica, e comente as seções se necessário, para tornar claro o propósito de cada variável. E terceiro, sempre verifique as variáveis de ambiente antes de usá-las em seu código, para evitar erros devido a configurações ausentes.

Curiosidade

Sabia que o Next.js automaticamente carrega as variáveis de ambiente de seus arquivos .env na inicialização? Isso significa que não há necessidade de usar bibliotecas adicionais (como o nodeenv, por exemplo) para gerenciar essas variáveis. E mais, as variáveis de ambiente definidas nos arquivos .env são substituídas pelas definidas em .env.local se elas existirem, permitindo que você tenha uma configuração base e depois a personalize localmente sem alterar o arquivo principal - exatamente como fizemos em aula.

--- 

##  entendendo o que é sessão
Em termos simples, uma sessão é um período de interação entre o usuário e a aplicação que é mantido pelo servidor. Imagine que cada sessão é como uma conversa entre dois bons amigos (o usuário e o servidor). Durante essa conversa, ambos precisam se lembrar do que foi dito anteriormente para que a conversa faça sentido. Para a aplicação, manter o estado dessa "conversa" é essencial, pois a web, por natureza, é stateless — ou seja, cada requisição é independente e não tem memória das interações anteriores.

Como o servidor identifica o usuário?

Aqui entram os mecanismos de sessão. Quando você se loga em uma aplicação, o servidor cria um registro único desta sessão. Mas como ele se lembra dessa sessão específica na próxima vez que você fizer uma requisição? Será que o servidor tem uma memória infalível? Não, exatamente. Ele usa um pequeno e poderoso aliado chamado “cookie”.

Qual é o papel do cookie nisso tudo?

O cookie é como um crachá de identificação que você recebe em um evento. Toda vez que você interage com o servidor (ou volta ao evento), você mostra seu crachá. No mundo online, quando você se autentica, o servidor envia um cookie para o seu navegador, que armazena esse cookie e o envia de volta ao servidor com cada requisição subsequente. Esse cookie contém um identificador único da sua sessão, permitindo que o servidor recupere o estado da sua "conversa" e continue de onde vocês pararam.

Aqui na nossa jornada, quando implementamos a autenticação usando NextAuth com o provedor GitHub, cada vez que um usuário se loga, o NextAuth cuida de estabelecer essa sessão. Utilizamos o método getServerSession para recuperar dados do usuário logado diretamente do servidor, garantindo que a sessão esteja válida e que os dados do usuário sejam os esperados. Esse método verifica o cookie de sessão, confirma sua validade e, em seguida, recupera os dados associados àquela sessão, facilitando a gestão de autenticação de maneira eficiente.

---
