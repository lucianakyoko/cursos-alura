# Anotações do curso de ORM com Node.js: avançando nas funcionalidades do Sequelize

---

Para começar:
- ```npm install```
- ```npx sequelize-cli db:migrate```
- ```npx sequelize-cli db:seed:all```
- ```npm run dev```

----

## soft delete e privacidade de dados
Enquanto implementávamos o soft delete você pode ter se perguntado se a estratégia, que envolve algo similar a “fingir que excluí um registro sem efetivamente excluí-lo do banco”, pode comprometer de certa forma alguma política de privacidade de dados de usuário.

Afinal de contas, usuários que utilizam os recursos de exclusão de uma aplicação - por exemplo, para excluir um cadastro, um e-mail ou um post em uma rede social - consideram que o registro em questão é sempre apagado sem a possibilidade de ser resgatado.

Ao mesmo tempo, existem diversos regulamentos públicos e específicos a determinados mercados, que podem exigir, por exemplo, que dados excluídos por usuários sejam mantidos por determinado tempo antes de serem excluídos pelo sistema em definitivo.

Assim, uma forma de manter a transparência do processo poderia ser a inclusão de cláusulas específicas sobre a exclusão de dados nos termos e políticas de privacidade do serviço. Além disso, usuários podem ter a opção de solicitar a exclusão imediata e permanente de alguns tipos de dados, mesmo que tenham sido “soft deleted”.

Outras ações que podem ser tomadas são:

- implementar criptografia e acesso limitado a dados que foram “soft deleted”;
- implementar um período de retenção para dados excluídos;
- implementar funcionalidades para que usuários possam recuperar dados excluídos.

---

## o que são escopos
Falando de produto, escopos definem a abrangência das funcionalidades.

Quando falamos de programação, existem diversos tipos de escopo. Por exemplo, em JavaScript podemos definir o escopo de uma variável - escopo global, de uma função etc. O escopo é como chamamos as regras que definem quão acessível ou “visível” uma informação (por exemplo, uma variável) está, dependendo da parte da aplicação. Um escopo pode ter identificadores, alguma instrução de código ou algoritmo.

No caso do Sequelize, podemos determinar o escopo padrão (defaultScope) que justamente define quais restrições e definições serão utilizadas na query por padrão (default). Além do escopo padrão podemos definir outros, enquanto fizer sentido para a aplicação, e dar a cada escopo um nome que será usado pelo Sequelize para identificá-lo.

Com isso é possível reutilizar código, definindo escopos para queries mais utilizadas e refinando estas queries através de palavras-chave como where, include etc.

---

## bibliotecas de validação
Existem diversas formas de incluir validações de campos em uma API Node.js.

Você sempre pode escrever seus métodos de validação do zero usando apenas JavaScript, porém, vamos seguir o famoso ditado em programação:

Não tente reinventar a roda!

Há diversas soluções prontas para problemas comuns em desenvolvimento, e validação é um deles.

Durante o curso vimos os métodos built in do próprio Sequelize para validação de campos de um modelo. “Por baixo dos panos”, o Sequelize utiliza a biblioteca de validação validator.js para criar seus métodos de validação internos.

A biblioteca validator.js pode ser utilizada de forma independente e você pode conferir o link do repositório para aprender mais sobre como ela funciona.

Outra biblioteca de validação bastante conhecida na comunidade Node.js é a joi. Para uso com TypeScript, uma opção é a lib Zod.

---

## constraints
A documentação do Sequelize utiliza o termo constraint, que podemos traduzir livremente como “restrição” ou “limitação”.

Constraints são como regras que regem as tabelas; são usados para limitar de que forma os dados podem ser inseridos em uma coluna ou tabela e garantir a integridade e confiabilidade dos dados que estão em um banco. Eles podem ser aplicados tanto em colunas individuais como de forma geral para toda a tabela.

Eles podem ser definidos diretamente no modelo, por exemplo, unique:true é um constraint que serve para garantir que o nome ou CPF em Pessoa seja sempre único:
```
cpf: {
  type: DataTypes.STRING,
  allowNull: false,
    unique: true
},
```

Para o exemplo acima funcionar, a tabela deve ser criada com Sequelize a partir desse modelo, já existir no banco com essa constraint ou ser atualizada através de uma migração com o método addConstraint.

Se não for o caso, você pode utilizar o método findOrCreate, que verifica se o registro existe no banco antes de fazer qualquer outra ação.

Existe uma diferença entre validações, que são feitas pelo Sequelize, em JavaScript, antes de qualquer query ser enviada para o banco, e constraints, que são regras definidas no SQL - tanto que podem ser definidos usando a sintaxe do SQL, como no caso da constraint NOT NULL abaixo:
```
CREATE TABLE pessoas
(
ID int(6) NOT NULL,
NOME varchar(25) NOT NULL,
EMAIL varchar(20)
);
```

Diferente das validações, na verificação de constraints uma query é executada, e quem devolve o erro para o JavaScript é o SQL.

São constraints em SQL:

- NOT NULL - garante que não exista nenhum valor NULL na coluna;
- UNIQUE - garante que não existam valores iguais em uma coluna;
- PRIMARY KEY - identifica cada linha em uma tabela através de um valor único (junção de NOT NULL e UNIQUE);
- FOREIGN KEY - identifica um valor único em outra tabela como chave;
- CHECK - garante que todos os valores em uma coluna satisfazem uma condição específica;
- DEFAULT - determina um valor padrão caso nenhum valor seja informado;
- INDEX - para criar índices e facilitar o acesso a determinados conjuntos de dados.

---

