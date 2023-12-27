# Anotações do curso: ORM com Node.js: desenvolvendo uma API com Sequelize e SQLite

---
### conectando com o Sequelize
com exceção do SQLite, todos os outros dialetos, como MySQL e Postgres, requerem o uso de um servidor próprio para banco de dados, seja em um host remoto, seja em um servidor local em seu computador (o localhost). Além disso, para conectarmos qualquer aplicação a um banco, há sempre algumas informações necessárias:

- Host (seja localhost ou a URI de um servidor remoto);
- Número da porta lógica, normalmente 3306 ou 3307 para MySQL, 5432 para Postgres etc.);
- Nome da database que contém as tabelas que queremos interagir, por exemplo, escola;
- Nome de user com permissões de acesso ao banco e a senha, por exemplo, seuuser e minhaSenhaForte@345096.

---
### conteúdo do models/index.js
O arquivo models/index.js é um dos arquivos gerados automaticamente pela ferramenta de linha de comando do Sequelize ao criarmos uma base de projeto com sequelize init.

Este arquivo é utilizado para gerar os objetos (com métodos e propriedades) necessários referentes a cada modelo usado no API, e o Sequelize faz isso executando o models/index.js em quatro passos:

1 - Verificar qual é o ambiente de execução e as credenciais de acesso ao banco correspondentes.  Já existe um código pronto para buscar o ambiente em um arquivo .env ou, na falta dele, assumir que o ambiente a ser utilizado é development:
```
  const env = process.env.NODE_ENV || 'development';
  const config = require(__dirname + '/../config/config.json')[env];
```

2 - Criar uma nova instância de Sequelize a partir dos dados de conexão:
```
let sequelize;
if (config.use_env_variable) {
 sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
 sequelize = new Sequelize(config.database, config.username, config.password, config);
}
```

3 - Percorrer a pasta models, indexar e executar o código de cada modelo dentro da pasta e salvar o objeto resultante na variável db:
```fs
 .readdirSync(__dirname)
 .filter(file => {
   return (
     file.indexOf('.') !== 0 &&
     file !== basename &&
     file.slice(-3) === '.js' &&
     file.indexOf('.test.js') === -1
   );
 })
 .forEach(file => {
   const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
   db[model.name] = model;
 });
```

4 - Indexar quais modelos estão associados entre si e os métodos correspondentes (iremos falar de associações durante este curso):
```
Object.keys(db).forEach(modelName => {
 if (db[modelName].associate) {
   db[modelName].associate(db);
 }
});
```

Assim, todos os models da API, seus métodos para interagir com a base de dados e propriedades são automaticamente indexados e gerados, ficando disponíveis para o restante da aplicação através de apenas um ponto de entrada (o index.js).

Podemos abrir o arquivo e analisar seu código, mas não é recomendado que ele seja diretamente alterado. É possível utilizar os modelos do Sequelize sem ele, porém ele facilita o processo de indexação dos modelos e de geração dos métodos necessários para interação com o banco para cada modelo.

---
### CLI do Sequelize
É possível utilizar diversos comandos para gerenciar o banco de dados, tais como:

| Comando | Descrição |
| --- | --- |
| sequelize db:migrate | Executa todas as migrações pendentes para atualizar o banco de dados |
| sequelize db:migrate:schema:timestamps:add | Atualiza uma tabela de migração para ter marcação de data/hora |
| sequelize db:migrate:status | Exibe o status de todas as migrações |
| sequelize db:migrate:undo | Reverte a migração mais recente do banco de dados |
| sequelize db:migrate:undo:all | Reverte todas as migrações executadas |
| sequelize db:seed | Executa um seeder específico |
| sequelize db:seed:undo | Deleta os últimos dados inseridos via seeds do banco de dados |
| sequelize db:seed:all | Executa todos os seeders |
| sequelize db:seed:undo:all | Deleta todos os dados inseridos via seeds do banco de dados |
| sequelize db:create | Cria um banco com uma configuração específica |
| sequelize db:drop | Exclui o banco de dados especificado na configuração |
| sequelize init | Inicia um projeto |
| sequelize init:config | Inicia as configurações |
| sequelize init:migrations | Inicia as migrações |
| sequelize init:models | Inicia os modelos |
| sequelize init:seeders | Inicia os seeders |
| sequelize migration:generate | Gera um novo arquivo de migração |
| sequelize model:generate | Gera uma model e sua migração [alias: model:create] |
| sequelize seed:generate | Gera um novo arquivo de seed |		

Além desses comandos, a CLI do Sequelize também permite criar usuários, gerar senhas criptografadas, atualizar configurações de banco de dados, entre outras tarefas. É uma ferramenta muito útil e complementa bastante o trabalho com o Sequelize ORM.

---

