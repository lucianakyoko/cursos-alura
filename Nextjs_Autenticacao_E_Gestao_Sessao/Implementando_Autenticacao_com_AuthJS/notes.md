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

## BCrypt e credenciais armazenadas
Quando falamos de Credentials Provider no NextAuth, estamos nos referindo à possibilidade de autenticar usuários diretamente através de credenciais como nome de usuário e senha. Isso pode parecer uma opção prática, mas traz consigo algumas complexidades e riscos de segurança. Você já parou para pensar na responsabilidade que é gerenciar senhas de forma segura? Armazenar e proteger senhas de maneira adequada exige uma infraestrutura robusta e um entendimento profundo de práticas de segurança.

Além disso, ao usar credenciais como método de autenticação, nós assumimos a responsabilidade total por garantir a segurança desses dados. Isso inclui proteger as credenciais contra vazamentos e garantir que a verificação das senhas seja realizada de forma segura e eficiente.

E por que mudar a estratégia para JWT?

Quando configuramos o Credentials Provider no NextAuth, a recomendação é mudar a estratégia de sessão para usar JWT, pois ele oferece uma maneira flexível e segura de transmitir informações entre partes como um objeto JSON que você pode assinar e/ou criptografar.

Usar JWT permite que a sessão do usuário seja validada independentemente do servidor ou da sessão em si ser armazenada em um banco de dados. Isso significa que, após o login, o servidor gera um token JWT que contém todas as informações necessárias para identificar o usuário. Esse token é enviado ao cliente e usado para manter o estado da sessão. Em cada requisição subsequente, esse token é enviado de volta ao servidor, que verifica sua validade. Essa abordagem reduz a necessidade de consultas constantes a um banco de dados para verificar o estado da sessão, o que pode melhorar o desempenho e a escalabilidade da aplicação.

Se JWT é um assunto novo pra ti, que tal dar uma lida no artigo O que é JSON Web Tokens? que o Neilton escreveu? Super recomendo a leitura para se aprofundar no assunto.

Entendendo o bcrypt e o processo de comparação de senhas

Quando você executa o código bcrypt.compareSync(credentials.password, foundUser.password), está utilizando o bcrypt para verificar se a senha fornecida pelo usuário corresponde à senha hash armazenada no banco de dados. O processo é mais complexo do que parece à primeira vista: O bcrypt, primeiro, descriptografa o hash da senha armazenada para extrair o sal (salt, em inglês) usado originalmente (o sal é um dado aleatório que é adicionado à senha antes de criar o hash). Em seguida, ele aplica esse mesmo sal à senha que está sendo verificada e cria um novo hash. Se esse novo hash corresponde ao hash armazenado, a senha é confirmada como correta. Esse método garante que cada hash seja único, mesmo que as senhas sejam idênticas, devido ao uso de sais diferentes.

Criando um hash de senha com bcrypt

Ao olharmos para o código bcrypt.hashSync(formData.get('password'), 10), estamos vendo a criação de um hash para uma senha usando bcrypt. O primeiro argumento é a senha que você deseja "hashar", e o segundo argumento, o número 10, é chamado de "custo" ou "fator de custo" e representa o quão intensivo em recursos e tempo será o processo de hashing. O fator de custo é, na verdade, uma medida de quantas vezes a hash será processada sob o algoritmo bcrypt. Um fator de custo de 10 significa que a hash será processada através de 2^10 (ou 1024) rodadas de hashing. Aumentar o fator de custo torna a geração do hash e a verificação da senha mais lentas, o que é uma característica desejada para dificultar ataques de força bruta.

Por que usar métodos assíncronos?

Você deve ter notado que utilizamos métodos síncronos durante o curso, mas o bcrypt também oferece variantes assíncronas desses métodos, como bcrypt.compare() e bcrypt.hash().

Em aplicações de mundo real, especialmente aquelas que operam em um ambiente de servidor, como aplicações Node.js, bloquear o loop de eventos (que é o que métodos síncronos fazem) pode levar a uma degradação significativa no desempenho. Métodos assíncronos, em contrapartida, permitem que as operações de computação intensiva sejam processadas em segundo plano, permitindo que o servidor continue respondendo a outras requisições. Isso melhora a escalabilidade e a eficiência da aplicação, mantendo a experiência do usuário suave e responsiva.

[artigo citado](https://www.alura.com.br/artigos/o-que-e-json-web-tokens)


---

## FileReader
O que faz o FileReader?

Basicamente, ele lê o conteúdo de arquivos (que pode ser qualquer coisa, desde textos até imagens e sons) armazenados no computador do usuário, diretamente no navegador. O legal é que ele faz isso de forma assíncrona, ou seja, enquanto o arquivo está sendo lido, o usuário pode continuar interagindo com a aplicação sem travamentos ou lentidão.

No nosso componente, quando um usuário seleciona um arquivo de imagem, a função handleFileChange é disparada. Essa função cria uma instância do FileReader e define o que fazer quando a leitura do arquivo termina, através de reader.onloadend. O método readAsDataURL(file) é chamado para iniciar a leitura do arquivo. O que ele faz é ler o arquivo e codificá-lo em uma string base64, permitindo que você use esse resultado (disponível em reader.result após a leitura) como fonte para a imagem, através do estado imgSrc. Isso permite que a imagem seja exibida instantaneamente como uma prévia no navegador.