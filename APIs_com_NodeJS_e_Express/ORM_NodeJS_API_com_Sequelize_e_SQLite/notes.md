# Anotações do curso: ORM com Node.js: desenvolvendo uma API com Sequelize e SQLite

### Subir servidor:
```
npm run dev
```


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

### MVC e outras arquiteturas
Nesta aula vamos usar o modelo MVC para construir a arquitetura necessária para nossa API. O MVC começou a ser desenvolvido nos anos 1970, assim como a linguagem SQL, e ambos estão em uso até hoje.

Desde sua criação, o MVC foi sendo adaptado para trabalhar com novos contextos, porém seus conceitos base continuam valendo:

O model faz a manipulação dos dados;
O controller age como intermediário entre o modelo e as camadas de visualização;
O view trata do output das informações.
O surgimento de novas tecnologias e novas necessidades levou (e tem levado) ao surgimento de diversos outros padrões. Porém, apesar de suas limitações, o MVC continua sendo largamente usado em desenvolvimento web e mesmo arquiteturas mais modernas utilizam models e controllers em contextos similares. Além disso, a maior parte das linguagens mais usadas no mercado possuem algum tipo de framework MVC, como Django (Python), Ruby on Rails (Ruby) e o Spring MVC (Java).

A premissa de separação de responsabilidades do MVC costuma ser um dos primeiros conceitos que aprendemos em arquitetura de software. É fundamental praticarmos e entendermos bem esta separação para conseguir identificá-la e aplicá-la ao aprendermos e praticarmos outros padrões de desenvolvimento. Por ser um padrão muito conhecido, o MVC pode ser utilizado em times de diversos níveis de experiência.

De forma geral, o MVC ainda é um padrão importante e pode ser utilizado como base para o desenvolvimento de aplicações escaláveis. Além disso, compreender os conceitos do MVC é de extrema importância ao adotarmos outras arquiteturas.

Vale lembrar que, como costumamos dizer na programação, “não existe bala de prata”. Certos tipos de aplicação podem se beneficiar do modelo MVC, inclusive pela familiaridade dos times com o padrão. Porém, certas soluções e requisitos de projeto vão exigir outras tecnologias e outros padrões.

**O MVC no front-end**
Embora ainda seja amplamente utilizado no desenvolvimento de APIs, a evolução do front-end e o desenvolvimento de bibliotecas e frameworks, como Angular, React e Vue, fez com que o uso do MVC no front-end tenha sido em grande parte substituído por outros padrões de arquitetura que respondem melhor às necessidades específicas do front-end, como a arquitetura baseada em componentes e os micro front-ends.

---

### services e repositories
Nesta aula estamos implementando uma camada extra de separação entre o model e o controller, que chamamos de services. Services é uma das camadas principais adicionadas ao MVC básico para aumentar a modularidade da aplicação e deixá-la mais desacoplada e testável.

A camada de serviços é responsável por implementar a lógica das regras de negócio e age como intermediária entre controlador e camada de dados. Dessa forma, regras como validações, lógicas de cálculos e interações entre entidades ficam separadas da camada que maneja as requisições (o controller) e o model fica responsável apenas pela interação com os dados.

Esta camada pode ser implementada de diversas maneiras, sendo uma delas em conjunto com outra camada de abstração chamada Repository, que não implementamos neste curso.

Assim como Services centralizam e separam regras de negócio, O padrão Repository (repositório) é comumente usado para separar a camada de dados do restante da aplicação. Isso contribui para a manutenção da aplicação, uma vez que permite que a fonte dos dados seja substituída sem impactar o código das outras camadas.

Repositórios são normalmente implementados como abstrações da camada de dados utilizando classes ou interfaces. Assim, detalhes a respeito do acesso aos dados podem ser encapsulados, fazendo com que várias fontes de dados possam ser utilizadas sem que o restante da aplicação tenha que “se envolver” com estes detalhes. O uso dos repositórios também facilita os testes através do uso de mock functions para garantir que a lógica das regras de negócio funcione independente da base de dados.

O padrão Repository trabalha em conjunto com outras camadas de abstração bastante utilizadas na chamada arquitetura limpa (clean architecture), como Domains e Use Cases. 
Claro que toda vez que acrescentamos uma camada de abstração e modularidade ao código também adicionamos um certo grau de complexidade. Por isso, é importante ter em mente que, embora padrões como Services e Repository sejam muito úteis para desenvolvermos aplicações desacopladas e organizadas, precisamos sempre analisar se são necessárias de acordo com a complexidade da nossa aplicação.

---

### arrow function e contexto
Nesta aula fizemos uma alteração nas rotas pessoas para executar o método correspondente no controlador PessoaController.

De:
```
  router.get('/pessoas', pessoaController.pegaTodos);
```
Para:
```
  router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));
```

Embora pareça uma alteração pequena, é importante entendermos o que está acontecendo nesse trecho do código para evitarmos um problema muito comum em JavaScript: bugs causados por perda de contexto.

No primeiro exemplo de código, é importante lembrar que pessoaController.pegaTodos é um método estático, ou seja, quando definimos um método como static, ele não está “preso” a nenhuma instância específica da classe (no caso, PessoaController) e sim à própria classe.

Na prática, métodos estáticos não podem ser utilizados a partir de um objeto específico, por exemplo, criado a partir de new PessoaController(params). Eles estão diretamente ligados à classe à qual pertencem; ou seja, não pertencem ao contexto de um objeto e nem dependem disso para serem executados.

No segundo exemplo, fizemos alterações no código para adicionar a camada de Services ao projeto. Assim, cada controlador deve interagir com seu próprio serviço, por isso os métodos de PessoaController deixam de ser estáticos e passam a “depender” de um objeto específico, que carrega todas as informações referentes à entidade Pessoa.

Por isso, neste momento, o método pegaTodos() deixa de ser static (pertencente à classe), pois precisa do contexto fornecido por um objeto - no caso, o objeto instanciado a partir de new PessoaController(PessoaServices).

Assim, para executar o método pegaTodos com sucesso, o JavaScript precisa que o controlador seja instanciado recebendo seu serviço correspondente:
```
  const pessoaController = new PessoaController();
```

O método pessoaController.pegaTodos, então, é passado como callback function com uma arrow function, recebendo os parâmetros de requisição e resposta vindos de router.get. Arrow functions herdam automaticamente o contexto de onde foram criadas e não têm seu próprio “contexto de invocação”.

```router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));```