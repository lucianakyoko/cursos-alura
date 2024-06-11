# Anotações do curso - PostgreSQL

---

Fazer a instalação do PostgreSQL:
1. Acessar [página oficial](http://https//www.postgresql.org/)
2. clicar em ***Download the installer***
3. neste curso usamos a versão 12.9
4. executar o wizard de intalação
5. adicionar uma senha

---

Abrir o ***SLQ Shell (psql)***:
1. na primeira linha estará escrito **Server [localhost]**. Você deve apertar "Enter" sequencialmente para navegar entre as pastas a seguir:
  "Server [localhost]: > Database [postgres]: > Port [5432]: > Username [postgres]: > Password for user postgres:"
2. digitar a senha configurada no momento da instalação e dar enter

---

Abrir ***pgAdmin ***:
1. Ele vai carregar e abrir no seu navegador. 
2. Ele vai pedir para você colocar uma senha, dar "OK".

---

## Observação importante:
 Sempre que digitar um comando no prompt de comandos do SQL Shell (psql), você deve finalizar com ; e apertar a tecla "Enter" para confirmar o comando. Só assim ele será executado.

---

## Criar um novo Banco de dados:
Para criar um novo banco:
- dentro do terminal:
  digitar o comando: ```CREATE DATABASE <nome do banco>```

- dentro do pgAdmin:
  clicar com o botão direito sobre o item **Databases** e selecionar a opção **create** e depois **database**

---

Para visualizar os bancos de dados já estão no nosso postgres, podemos usar o comando ```\l```. Quando apertamos "Enter", aparece a seguinte tabela:

```
List of databse
| Name      | Owner    | Encoding | Collate                | Ctype                  | Access privileges                        |
|-----------|----------|----------|------------------------|------------------------|------------------------------------------|
| alura     | postgres | UTF8     | Portuguese_Brazil.1252 | Portuguese_Brazil.1252 |                                          |
| postgres  | postgres | UTF8     | Portuguese_Brazil.1252 | Portuguese_Brazil.1252 |                                          |
| template0 | postgres | UTF8     | Portuguese_Brazil.1252 | Portuguese_Brazil.1252 | =c/postgres + <br> postgres=CTc/postgres |
| template1 | postgres | UTF8     | Portuguese_Brazil.1252 | Portuguese_Brazil.1252 | =c/postgres + <br> postgres=CTc/postgres |
```

---

## Deletar um banco de dados:
Para deletar um banco de dados:
- pelo terminal:
  digitar o comando ```DROP DATABASE <nome do banco>```

- pelo pgAdmin:
  clicar com o botão direito do mouse sobre o banco que deseja deletar e selecionar a opção **deletar**

---

## Criar tabela:
[lista de types](https://www.postgresql.org/docs/12/datatype.html)
[lista de campos de textp](https://www.postgresql.org/docs/12/datatype-character.html)
[tipos de date e time](https://www.postgresql.org/docs/12/datatype-datetime.html)

Dentro do pgAdmin abrir o **Query tool**
- e colocar os dados que desejamos, exemplo:
```
CREATE TABLE aluno(
    id SERIAL,
        nome VARCHAR(255),
        cpf CHAR(11),
        observacao TEXT,
        idade INTEGER,
        dinheiro NUMERIC(10,2),
        altura REAL,
        ativo BOOLEAN,
        data_nascimento DATE,
        hora_aula TIME,
        matriculado_em TIMESTAMP
);
```
- selecionar toda a query que acabamos de criar e clicar em **Execute query**
- se criada com sucesso, aparecerá a mensagem parecida:
```
CREATE TABLE

Query returned successfully in 111 msec.
```

Para testar: 
  - dar o comando: dentro da query tool: ```SELECT * FROM aluno;```
  - selecionar a query e clicar em **executar query**
com isso no output aparecerá a tabela que criamos.

---

## Incluir um registro na tabela:
[tabelas de exemplo](https://www.postgresql.org/docs/8.1/sql-insert.html)

- rodar o comando no query tools do pgAdmin: ```INSERT INTO nome_da_tabela()VALUES()```

Exemplo:

```
INSERT INTO aluno (
    nome,
    cpf,
    observacao,
    idade,
    dinheiro,
    altura,
    ativo,
    data_nascimento,
    hora_aula,
    matriculado_em
) VALUES (
    'Diogo',
    '12345678901',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac dui et nisl vestibulum consequat. Integer vitae magna egestas, finibus libero dapibus, maximus magna. Fusce suscipit mi ut dui vestibulum, non vehicula felis fringilla. Vestibulum eget massa blandit, viverra quam non, convallis libero. Morbi ut nunc ligula. Duis tristique purus augue, nec sodales sem scelerisque dignissim. Sed vel rutrum mi. Nunc accumsan magna quis tempus rhoncus. Duis volutpat nulla a aliquet feugiat. Vestibulum rhoncus mi diam, eu consectetur sapien eleifend in. Donec sed facilisis velit. Duis tempus finibus venenatis. Mauris neque nisl, pulvinar eu volutpat eu, laoreet in massa. Quisque vestibulum eros ac tortor facilisis vulputate. Sed iaculis purus non sem tempus mollis. Curabitur felis lectus, aliquam id nunc ut, congue accumsan tellus.',
    35,
    100.50,
    1.81,
    TRUE,
    '1984-08-27',
    '17:30:00',
    '2020-02-08 12:32:45'
);
```

- selecionar toda a query que acabamos de criar e clicar em **executar query**
Uma mensagem parecida como essa aparecerá:
```INSERT 0 1

Query returned successfully in 58 msec.
```

Para testar, podemos selecionar a query que já criamos anteriormente  ```SELECT * FROM aluno;``` e clicar em  **executar query**
Com isso podemos verificar que foi adicionado à tabela todos os dados que acabamos de criar.


---

## Alterar valor na tabela:
[Sintaxe de update](https://www.postgresql.org/docs/12/sql-update.html)

```
UPDATE [ ONLY ] table_name [ * ] [ [ AS ] alias ]
    SET { column_name = { expression | DEFAULT } |
          ( column_name [, ...] ) = [ ROW ] ( { expression | DEFAULT } [, ...] ) |
          ( column_name [, ...] ) = ( sub-SELECT )
        }
                [ WHERE condition | WHERE CURRENT OF cursor_name ]
```

- vamos selecionar a nossa tabela com o comando ```SELECT * FROM ``` e utilizar o ```WHERE``` para filtrar apenas os dados que serão alterados. Isso evita que haja o update em todos os registros do banco.
Para o nosso exemplos, usaremos o **id** como filtro. Atualmente temos apenas uma entrada, mas quando houver vários registros na tabela, esse comando, ao ser executado, apresentará apenas os dados do "id" declarado.

```
SELECT *
    FROM aluno
WHERE id = 1
```

Agora que filtramos os dados que queremos alterar, podemos utilizar o ```UPDATE nome_da_tabela``` para atualizar a tabela, e para informarmos os campos que modificaremos, usamos o ```SET```. No nosso exemplo, mudaremos o valor de todos os campos para fixar melhor a sintaxe, sendo a mesma do ```INSERT```. 
Então copiaremos todos os campos para dentro do SET e atribuiremos novos valores para cada um deles.

```
UPDATE aluno
    SET nome = 'Nico',
    cpf = '10987654321',
    observacao = 'Teste',
    idade = 38,
    dinheiro = 15.23,
    altura = 1.90,
    ativo = FALSE,
    data_nascimento = '1980-01-15',
    hora_aula = '13:00:00',
    matriculado_em = '2020-01-02 15:00:00'
WHERE id = 1;    
```

**Atenção**: Não esqueça de colocar um = antes de atribuir um novo valor.

Selecionando o código do UPDATE e clicando no botão de executar, recebemos a mensagem de sucesso na atualização, e com o código SELECT * FROM aluno; vemos que a tabela com os novos dados.

---

## Deletar registro da tabela:
[sintaxe do DELETE](https://www.postgresql.org/docs/current/sql-delete.html)

```
DELETE FROM [ ONLY ] table_name [ * ] [ [ AS ] alias ]
    [ USING from_item [, ...] ]
    [ WHERE condition | WHERE CURRENT OF cursor_name ]
```

Conferindo os exemplos, podemos ver duas aplicações mais comuns desse comando. Na primeira, o ```DELETE FROM nome_da_tabela``` é aplicado com o filtro ```WHERE nome_da_coluna```, que pode ser igual ou diferente a um valor. No outro exemplo, foi utilizado o ```DELETE FROM nome_da_tabela```, o campo a ser excluído e o resultado de uma ```SELECT``` já filtrada.
```
DELETE FROM films WHERE kind <> 'Musical';

DELETE FROM films
  WHERE producer_id IN (SELECT id FROM producers WHERE name = 'foo');
```

Vamos aplicar esse comando ao nosso banco de dados, onde temos o registro do "Nico" para entendê-lo melhor. Para deletar esse dado, é importante utilizarmos o filtro, como aprendemos na aula passada, evitando a exclusão do registro errado. Dessa vez filtraremos por nome = 'Nico'.

```
SELECT *
    FROM aluno 
    WHERE nome = 'Nico';
```

Caso utilizássemos outro valor para o nome, não haveria nenhum retorno, porque só temos registro do "Nico". Então sempre que for excluir um dado, utilize o SELECT antes para confirmar se o seu filtro está correto. Após confirmado, basta trocar o SELECT * por DELETE e executar o código para realizarmos a exclusão.

Se utilizarmos novamente o SELECT * FROM para pesquisarmos por "Nico", não teremos retorno, já que ele era o único dado inserido na tabela, portanto agora ela ficou vazia. Por isso precisamos de um filtro, porque se apenas executarmos o DELETE FROM nome_da_tabela, todos os nossos registros serão apagados, e geralmente você só precisa deletar um registro em específico.

