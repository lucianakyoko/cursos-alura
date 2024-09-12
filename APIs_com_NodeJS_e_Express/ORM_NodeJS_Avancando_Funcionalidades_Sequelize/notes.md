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

## o que são mixins
Podemos resumir mixins em: classes que contêm métodos que podem ser utilizados por outras classes, sem a necessidade de herança direta. Dito de outra forma: um mixin fornece métodos que implementam um certo comportamento em objetos, sem poder ser utilizado sozinho, mas sim para adicionar esse comportamento a outras classes.

No Sequelize, temos uma diferença entre escopos de modelo, que são aplicados em chamadas estáticas ao modelo (como no exemplo que fizemos no vídeo, Pessoa.scope('todos').findAll()), e escopos de associação, que são uma regra, ou um conjunto de atributos que são automaticamente aplicados em instâncias do modelo (como em Pessoa.associate = function(models) {...}).

Escopos de associação se comportam da mesma forma que os escopos de modelo, no sentido que ambos aplicam palavras-chave como WHERE em chamadas ao banco; mas os mixins são métodos que existem somente nas instâncias dos modelos, por exemplo Pessoa.getPessoasMatriculadas.

A lista de métodos criados automaticamente com as instâncias de modelo são:

- addModel()
- addModels()
- countModels()
- createModel()
- getModels()
- hasModel()
- hasModels()
- removeModel()
- removeModels()
- setModels()

Lembrando que “Model” e “Models”, aqui, referem-se ao nome do modelo! Lembre-se também que o Sequelize cria os nomes automaticamente mas não entende muito bem o singular e plural em português, mas você pode definir nomes personalizados para seus mixins, como fizemos em nosso código.

---

## utils e helper functions
Esta é uma estratégia comum para armazenar funções utilitárias comuns para que sejam utilizadas em outras partes da API.

Entre os usos mais comuns de “helper functions” ou funções auxiliares/utilitárias, estão:

- Validações de dados;
- Formatação de dados de saída;
- Conversão entre tipos de dados (por exemplo, formatos de data);
- Conversão de strings (por exemplo, de string para número como fizemos na aula);
- Geração de tokens ou sequências de caracteres aleatórios.
- A estratégia de centralizar estas tarefas mais simples e comuns em um diretório próprio visa deixar o código mais organizado e reutilizável.

Vale notar que o uso dessa estratégia para separar funções auxiliares deve ser feita com cuidado, para evitar que partes específicas da aplicação que pertencem a camadas específicas acabem indo parar dentro de utils junto com as funções mais simples.

---

## eager loading e lazy loading
Quando fazemos consultas em um banco e organizamos seus resultados através da API, é importante termos em mente os conceitos de lazy loading e eager loading. Ambos os termos são usados normalmente em inglês, mas podemos traduzir bem livremente como “carregamento preguiçoso” e “carregamento ansioso”.

Lazy e eager são duas estratégias que podem ser aplicadas em qualquer contexto que envolva carregamento de dados. Elas funcionam de forma um pouco diferente no front-end e você pode conferir um exemplo neste artigo sobre [lazy loading em Angular](https://www.alura.com.br/artigos/como-lazy-loading-pode-melhorar-desempenho-aplicacao-angular).

Trabalhando no contexto de uma API REST como a que estamos construindo, utilizar a estratégia eager loading significa que todos os dados associados a um determinado recurso serão carregados quando é feita uma requisição ao recurso. No nível do SQL, isso significa o uso de cláusulas JOIN.

Assim, podemos concluir que a estratégia de lazy loading fará o contrário, carregando dados associados apenas quando necessário e solicitado.

Como nosso foco nesse projeto é o uso do Sequelize, é interessante entendermos como estas duas estratégias são utilizadas pelo ORM.

### Lazy loading
No Sequelize, a estratégia de lazy loading é implementada através dos métodos automáticos criados com as associações entre modelos. Por exemplo:
```
const estudante = await Pessoa.findOne({
  where: {
    nome: "Roberta Estudante"
  }
});
console.log('nome:', estudante.nome);
console.log('ativo:', estudante.ativo);

const matriculas = await estudante.getMatriculas();
console.log('matrículas de estudante:', matriculas);
```

Dessa forma, os dados associados são buscados no banco através de uma segunda consulta, apenas quando solicitado pelo programa.

### Eager loading
Para implementar a estratégia de eager loading usando Sequelize, é possível utilizar uma as propriedades do objeto options, include:
```
const estudante = await Pessoa.findOne({
  where: {
    name: "Roberta Estudante"
  },
  include: Matricula
});

console.log('nome:', estudante.nome);
console.log('matriculas:', estudante.matricula);
```

---

## ordem de execução do SQL
Agora que estamos acrescentando alguma complexidade às queries que o Sequelize vai passar para o SQL, é interessante saber que existe uma ordem de execução para os operadores e cláusulas.

No caso de queries de SELECT, a ordem lógica é a seguinte:

- FROM: pega as tabelas onde estão os dados
- WHERE: filtra os dados
- GROUP BY: agrega os dados
- HAVING: filtra os dados agregados
- SELECT: retorna os resultados
- ORDER BY: ordena os resultados
- LIMIT: limita a quantidade de resultados

Cada query começa encontrando os dados, filtrando e ordenando. Essa ordem pode fazer com que certos resultados sejam acessíveis ou não em dado momento. Por exemplo, a cláusula WHERE é executada antes de GROUP BY, então não podemos depender de dados retornados pelo GROUP BY para então passar WHERE.

Porém, os DBMS (Database Management Systems ou sistemas de gerenciamento de banco de dados), como MySQL, PostgreSQL, MsSQL, entre outros, utilizam database engines, ou algo como “motores de bancos de dados” numa tradução mais literal, para executar as queries. Esses engines, na prática, reorganizam a ordem lógica acima para otimizar as queries e deixá-las mais rápidas e com melhor performance, enquanto essa reorganização não modificar os resultados da query. Os database engines também fazem algumas verificações para garantir que a query faça sentido como um todo antes de fazer essa reorganização e executar qualquer consulta.

Assim, embora exista uma ordem lógica na execução de uma query SELECT, e seja uma boa prática nos basearmos nela, na prática não temos realmente como saber qual é a ordem que será efetivamente utilizada, pois isso vai depender de como cada engine vai calcular a forma mais otimizada de execução da query.