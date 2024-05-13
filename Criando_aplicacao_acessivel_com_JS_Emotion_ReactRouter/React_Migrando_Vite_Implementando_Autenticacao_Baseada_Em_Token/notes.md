# Anotações do Curso - React: migrando para o Vite e implementando autenticação baseada em Token
---

Para iniciar a api-freelando: 
- ```npm start```
- Acessar o endereço: ```localhost:8080/api#/default```

---

### Swagger
O Swagger e o Postman são ferramentas amplamente utilizadas para testar e documentar APIs.

**Swagger** -> é uma ferramenta para documentar APIs de forma clara e organizada. Ele permite que desenvolvedores possam entender e testar os endpoints disponíveis na API. Com o Swagger, é possível criar uma documentação interativa, que permite que outras pessoas possam entender facilmente como a API funciona e quais são as opções disponíveis. 
[documentação](https://swagger.io/)

---

### tipos de autenticação
Você está usando um aplicativo de compras online e já tem uma conta registrada nesse aplicativo e está tentando acessar a página de pagamento para finalizar a compra. Você recebe uma mensagem de erro dizendo que não está autenticado e não pode acessar a página de pagamento e não sabe o que está acontecendo, não conseguindo prosseguir com a compra.

O aplicativo usa autenticação baseada em token. Isso significa que você precisa estar autenticado para acessar a página de pagamento. Para se autenticar, você precisa fazer login no aplicativo e receber um token de autenticação. Esse token é armazenado no navegador do seu dispositivo e é usado para autenticar você em cada solicitação subsequente que você faz ao servidor. Ao tentar acessar a página de pagamento, o servidor verifica se você tem um token de autenticação válido. Se não tiver, você é redirecionado para fazer login novamente e receber um novo token.

**diferentes tipos de autenticação**
- **Autenticação baseada em sessão**: essa forma de autenticação usa cookies para rastrear a sessão do usuário. Quando um usuário faz login em uma aplicação, um cookie é armazenado no navegador do usuário. O servidor usa esse cookie para rastrear a sessão do usuário e manter o usuário autenticado durante a sessão. A principal desvantagem é que a sessão pode expirar se o usuário ficar inativo por um período de tempo ou se o cookie for excluído.

- **Autenticação baseada em certificado**: essa forma de autenticação usa certificados digitais para verificar a identidade do usuário. O servidor pode exigir que o usuário apresente um certificado digital para autenticação. A principal vantagem é que é difícil falsificar um certificado digital. A principal desvantagem é que a configuração e gerenciamento de certificados digitais pode ser complicado.

- **Autenticação multifator**: essa forma de autenticação exige que o usuário forneça várias formas de autenticação para acessar a aplicação, geralmente algo que o usuário sabe (como uma senha) e algo que o usuário tem (como um token de segurança). A principal vantagem é que é mais difícil para um invasor comprometer a segurança do usuário. A principal desvantagem é que pode aumentar a sobrecarga do usuário e tornar o processo de autenticação mais complicado.

A escolha do método de autenticação depende do tipo de aplicação e do nível de segurança exigido. É importante entender as diferentes opções disponíveis para escolher a melhor para a sua aplicação.

Artigos interessantes/ importantes:
- [Tipos de Autenticação: Senha, Token, JWT, Dois Fatores e Mais](https://www.alura.com.br/artigos/tipos-de-autenticacao?_gl=1*wyo9dw*_ga*MTI4OTcxMTkxMy4xNjc5MzMxNDMy*_ga_1EPWSW3PCS*MTcwNTUwNDQxMi40OC4xLjE3MDU1MDQ0OTguMC4wLjA.*_fplc*VEJNYTRUOUt2TWh4Yk4xS1IlMkJ2cWNpVmpUVHlvV2xCdlF0OVpmQjh5YWdyRko5cFFJeXMyUXVPOGNWMjFEeG11JTJCWXZVNE5mTWxUM0plemdoVmclMkYzb0hRNFdCOWhwMmxlcXYlMkJUZTlrT2hZOEt3bVlGV3lneTl2dmdsTHA4cUElM0QlM0Q.)
- [Autenticação, autorização e segurança no front-end](https://www.alura.com.br/artigos/autenticacao-autorizacao-seguranca-no-front-end?_gl=1*1o14u5p*_ga*MTI4OTcxMTkxMy4xNjc5MzMxNDMy*_ga_1EPWSW3PCS*MTcwNTUwNDQxMi40OC4xLjE3MDU1MDQ0OTguMC4wLjA.*_fplc*VEJNYTRUOUt2TWh4Yk4xS1IlMkJ2cWNpVmpUVHlvV2xCdlF0OVpmQjh5YWdyRko5cFFJeXMyUXVPOGNWMjFEeG11JTJCWXZVNE5mTWxUM0plemdoVmclMkYzb0hRNFdCOWhwMmxlcXYlMkJUZTlrT2hZOEt3bVlGV3lneTl2dmdsTHA4cUElM0QlM0Q.)

---

### Session Storage x Local Storage
Você está desenvolvendo uma aplicação web que precisa armazenar dados localmente no navegador do usuário. Por exemplo, um aplicativo de notas que permite que os usuários criem, editem e excluam suas anotações.

Os usuários desse aplicativo precisam poder acessar suas notas mesmo depois de fechar a janela do navegador e abrir novamente mais tarde. No entanto, você não quer depender de um servidor para armazenar as notas, pois isso pode levar a atrasos devido à latência da rede e sobrecarga do servidor.

Uma maneira para resolver isso é armazenar as notas localmente no navegador do usuário usando o armazenamento local ou de sessão.

- **Armazenamento local (Local Storage)**: é um objeto global no navegador que permite armazenar dados no disco rígido do usuário. Os dados armazenados usando o armazenamento local permanecem disponíveis mesmo depois que o navegador é fechado e reiniciado. Os dados são armazenados em pares chave-valor e podem ser acessados usando JavaScript. Uma das principais vantagens do armazenamento local é que ele suporta uma grande quantidade de dados (até 10 MB por domínio) e é relativamente fácil de usar.

- **Armazenamento de sessão (Session Storage)**: armazena dados apenas durante a sessão do usuário. Os dados armazenados usando o armazenamento de sessão são mantidos em memória e são excluídos quando o navegador é fechado. O armazenamento de sessão também usa pares chave-valor e pode ser acessado usando JavaScript. Uma das principais vantagens do armazenamento de sessão é que ele é mais seguro do que o armazenamento local, pois os dados são excluídos quando o navegador é fechado.

---

### Json Web Tokens
Em várias aplicações precisamos garantir que apenas usuários autenticados possam acessar as informações do aplicativo e fazer alguma ação. Além disso, o sistema precisa garantir que as informações dos usuários sejam protegidas durante a transmissão de dados. Uma maneira pra resolver isso é usar JSON Web Tokens (JWTs) para autenticar usuários e proteger as informações do aplicativo.

JWTs são uma forma segura de autenticar usuários e proteger as informações do aplicativo. Eles são um padrão aberto (RFC 7519) que define um formato compacto e autocontido para transmitir informações de forma segura entre partes como JSON. As informações podem ser verificadas e confiáveis porque são assinadas digitalmente. Os JWTs podem ser usados em uma variedade de aplicativos, incluindo sites e aplicativos móveis. Eles são fáceis de implementar e oferecem segurança e conveniência aos usuários finais.

Leitura do artigo: [ O que é JSON Web Tokens?](https://www.alura.com.br/artigos/o-que-e-json-web-tokens?_gl=1*vq0vww*_ga*MTI4OTcxMTkxMy4xNjc5MzMxNDMy*_ga_1EPWSW3PCS*MTcwNTU4NDc1MS41NC4xLjE3MDU1ODk1MzIuMC4wLjA.*_fplc*WHFHeHgyczglMkZtM1hMQ2VUMkVvMGUlMkJka3JuOGZHYWg4QWtYREU0ZzZvdVRGSTQzTUxYbDNlQjdTTGxYb3ViYjhCQnJHVSUyRnhJTWx4cjJXRDZwTlFjMFIwQzlZSXRuZTBEZlBuTXJjQndiMDE4TWlhOG9qaERVZFZDUzdqbkl3JTNEJTNE)

---

### logout no backend
Basicamente, ele é um token de acesso que é enviado pelo cliente (no nosso caso, o frontend) para o servidor (backend) em cada requisição. Como se fosse o crachá que eventualmente é utilizado dentro das empresas.

O servidor valida esse token e, se ele for válido, permite que a requisição seja processada. Se não for válido, o servidor retorna um erro.

Quando o usuário faz logout no frontend, é importante que o token seja invalidado, para que ele não possa mais ser utilizado para fazer requisições. Para isso, podemos simplesmente deletar o token da memória do navegador como fizemos dentro do Freelando.

Vale lembrar que mesmo que o token seja deletado do lado do frontend, ele ainda pode ser válido no lado do backend. Por isso, é importante que o backend também tenha um mecanismo para lidar com o logout de forma apropriada.

Uma maneira comum de lidar com o logout em APIs autenticadas com Bearer Tokens é definir um tempo de vida para os tokens. Assim, quando o usuário faz logout, o backend pode simplesmente invalidar o token anterior e não aceitar mais requisições com ele.

Outra abordagem é usar uma lista negra de tokens. Quando o usuário faz logout, o token é adicionado a essa lista, e o backend verifica se o token está nessa lista antes de processar a requisição.

