# Anotações do curso: ORM com Node.js: desenvolvendo uma API com Sequelize e SQLite

---
### conectando com o Sequelize
com exceção do SQLite, todos os outros dialetos, como MySQL e Postgres, requerem o uso de um servidor próprio para banco de dados, seja em um host remoto, seja em um servidor local em seu computador (o localhost). Além disso, para conectarmos qualquer aplicação a um banco, há sempre algumas informações necessárias:

- Host (seja localhost ou a URI de um servidor remoto);
- Número da porta lógica, normalmente 3306 ou 3307 para MySQL, 5432 para Postgres etc.);
- Nome da database que contém as tabelas que queremos interagir, por exemplo, escola;
- Nome de user com permissões de acesso ao banco e a senha, por exemplo, seuuser e minhaSenhaForte@345096.