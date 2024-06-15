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

SELECT * FROM aluno;

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
	'12345678912',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac dui et nisl vestibulum consequat. Integer vitae magna egestas, finibus libero dapibus, maximus magna. Fusce suscipit mi ut dui vestibulum, non vehicula felis fringilla. Vestibulum eget massa blandit, viverra quam non, convallis libero. Morbi ut nunc ligula. Duis tristique purus augue, nec sodales sem scelerisque dignissim. Sed vel rutrum mi. Nunc accumsan magna quis tempus rhoncus. Duis volutpat nulla a aliquet feugiat. Vestibulum rhoncus mi diam, eu consectetur sapien eleifend in. Donec sed facilisis velit. Duis tempus finibus venenatis. Mauris neque nisl, pulvinar eu volutpat eu, laoreet in massa. Quisque vestibulum eros ac tortor facilisis vulputate. Sed iaculis purus non sem tempus mollis. Curabitur felis lectus, aliquam id nunc ut, congue accumsan tellus.',
    35,
    100.50,
    1.81,
    TRUE,
    '1984-08-27',
    '17:30:00',
    '2020-02-08 12:32:45'
);


SELECT * 
	FROM aluno
	WHERE id = 1


UPDATE aluno
	SET nome= 'Nico',
    cpf = '10987654321',
    observacao = 'Teste',
    idade = 38,
    dinheiro = 15.23,
    altura = 1.90,
    ativo = false,
    data_nascimento = '1980-01-15',
    hora_aula = '13:00',
    matriculado_em = '2020-01-02 15:00:00'
	WHERE id = 1;


SELECT * 
	FROM aluno
	WHERE nome = 'Nico'

	
DELETE 
	FROM aluno 
	WHERE nome = 'Nico'

SELECT nome 
	FROM aluno

SELECT nome, idade, matriculado_em
	FROM aluno

SELECT nome, idade, matriculado_em AS quando_se_matriculou
	FROM aluno


SELECT nome AS "nome do aluno",
	   idade, 
	   matriculado_em AS quando_se_matriculou
	FROM aluno

INSERT INTO aluno (nome) VALUES ('Vinícios Dias');
INSERT INTO aluno (nome) VALUES ('Nico Steppat');
INSERT INTO aluno (nome) VALUES ('João Roberto');
INSERT INTO aluno (nome) VALUES ('Diego');
	
SELECT * 
	FROM aluno
WHERE nome <> 'Diogo';


SELECT * 
	FROM aluno
WHERE nome != 'Vinícios Dias';


SELECT * 
	FROM aluno
WHERE nome LIKE 'Di_go';


SELECT * 
	FROM aluno
WHERE nome NOT LIKE 'Di_go';


SELECT * 
	FROM aluno
WHERE nome LIKE 'D%';


SELECT * 
	FROM aluno
WHERE nome LIKE '%s';


SELECT * 
	FROM aluno
WHERE nome LIKE '% %';


SELECT * 
	FROM aluno
WHERE nome LIKE '%i%a%';


SELECT *
	FROM aluno
WHERE cpf IS null; 


SELECT *
	FROM aluno
WHERE cpf IS NOT null; 

SELECT *
	FROM aluno
WHERE idade = 35; 

SELECT *
	FROM aluno
WHERE idade <> 35; 

SELECT *
	FROM aluno
WHERE idade >= 35; 

SELECT *
	FROM aluno
WHERE idade <= 35; 
	

SELECT *
	FROM aluno
WHERE idade < 35; 
	

SELECT *
	FROM aluno
WHERE idade < 35; 

SELECT *
	FROM aluno
WHERE idade BETWEEN 10 AND 35; 


SELECT *
	FROM aluno
WHERE ativo = true; 

SELECT *
	FROM aluno
WHERE ativo IS null; 


SELECT *
	FROM aluno
WHERE nome LIKE 'D%'
	AND cpf IS NOT null; 

SELECT *
	FROM aluno
WHERE nome LIKE 'Diogo'
	OR nome LIKE 'Rodrigo'; 

SELECT *
	FROM aluno
WHERE nome LIKE 'Diogo'
	OR nome LIKE 'Rodrigo'
	OR nome LIKE 'Nico%'; 
	
CREATE TABLE curso (
	id INTEGER,
	nome VARCHAR(255)
);

DROP TABLE curso;
	
CREATE TABLE curso (
	id INTEGER NOT NULL,
	nome VARCHAR(255) NOT NULL
);

DROP TABLE curso;

CREATE TABLE curso (
	id INTEGER NOT NULL UNIQUE,
	nome VARCHAR(255) NOT NULL
);

DROP TABLE curso;
CREATE TABLE curso (
	id INTEGER PRIMARY KEY,
	nome VARCHAR(255) NOT NULL
);

INSERT INTO curso (id, nome) VALUES(null, null);
INSERT INTO curso (id, nome) VALUES(1, null);
INSERT INTO curso (id, nome) VALUES(null, 'HTML');
INSERT INTO curso (id, nome) VALUES(1, 'HTML');
INSERT INTO curso (id, nome) VALUES(1, 'JavaScript');
INSERT INTO curso (id, nome) VALUES(2, 'JavaScript');

SELECT * FROM curso;
SELECT * FROM aluno;

DROP TABLE aluno;

CREATE TABLE aluno (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255) NOT NULL
);

INSERT INTO aluno (nome) VALUES('Diogo');
INSERT INTO aluno (nome) VALUES('Vinícios');
INSERT INTO aluno (nome) VALUES('Vinícios');
SELECT * FROM aluno;
SELECT * FROM curso;

CREATE TABLE aluno_curso (
	aluno_id INTEGER,
	curso_id INTEGER,
	PRIMARY KEY (aluno_id, curso_id)
);

INSERT INTO aluno_curso(aluno_id, curso_id) VALUES (1,1);
INSERT INTO aluno_curso(aluno_id, curso_id) VALUES (2,1);
INSERT INTO aluno_curso(aluno_id, curso_id) VALUES (3,1);

SELECT * FROM aluno_curso;
SELECT * FROM aluno WHERE id =1;
SELECT * FROM curso WHERE id =1;

SELECT * FROM aluno WHERE id =2;
SELECT * FROM curso WHERE id =1;

SELECT * FROM aluno WHERE id =3;
SELECT * FROM curso WHERE id =1;



DROP TABLE aluno_curso;
CREATE TABLE aluno_curso (
    aluno_id INTEGER,
        curso_id INTEGER,
        PRIMARY KEY (aluno_id, curso_id),

        FOREIGN KEY (aluno_id)
         REFERENCES aluno (id),

        FOREIGN KEY (curso_id)
         REFERENCES curso (id)
);
INSERT INTO aluno_curso(aluno_id, curso_id) VALUES (1,1);
INSERT INTO aluno_curso(aluno_id, curso_id) VALUES (2,1);
INSERT INTO aluno_curso(aluno_id, curso_id) VALUES (3,1);
INSERT INTO aluno_curso(aluno_id, curso_id) VALUES (1,3);



SELECT * FROM aluno;
SELECT * FROM curso;

SELECT *
	FROM aluno
	JOIN aluno_curso ON aluno_curso.aluno_id = aluno.id
	JOIN curso 		 ON curso.id             = aluno_curso.curso_id   

INSERT INTO aluno_curso(aluno_id, curso_id) VALUES (2,2);

SELECT aluno.nome AS aluno,
	   curso.nome AS curso
	FROM aluno
	JOIN aluno_curso ON aluno_curso.aluno_id = aluno.id
	JOIN curso 		 ON curso.id             = aluno_curso.curso_id   


INSERT INTO aluno(nome) VALUES ('Nico');
SELECT * FROM aluno;
SELECT * FROM curso;

INSERT INTO curso (id,nome) VALUES (3,'CSS');

SELECT aluno.nome AS aluno,
	   curso.nome AS curso
     FROM aluno 
LEFT JOIN aluno_curso ON aluno_curso.aluno_id = aluno.id
LEFT JOIN curso 		 ON curso.id          = aluno_curso.curso_id   


	SELECT aluno.nome AS aluno,
	       curso.nome AS curso
      FROM aluno 
 RIGHT JOIN aluno_curso ON aluno_curso.aluno_id = aluno.id
 RIGHT JOIN curso 	   ON curso.id             = aluno_curso.curso_id   


	SELECT aluno.nome AS aluno,
	       curso.nome AS curso
      FROM aluno 
 FULL JOIN aluno_curso ON aluno_curso.aluno_id = aluno.id
 FULL JOIN curso 	   ON curso.id             = aluno_curso.curso_id  


	SELECT aluno.nome AS aluno,
	       curso.nome AS curso
      FROM aluno 
CROSS JOIN curso 

INSERT INTO aluno(nome) VALUES ('Jão');

SELECT * FROM aluno;
SELECT * FROM aluno_curso;
SELECT * FROM curso;

DELETE FROM aluno WHERE id = 1;

DROP TABLE aluno_curso;
CREATE TABLE aluno_curso (
	aluno_id INTEGER,
	curso_id INTEGER,
	PRIMARY KEY (aluno_id, curso_id),

	FOREIGN KEY (aluno_id)
 	REFERENCES aluno (id)
	ON DELETE CASCADE,

	FOREIGN KEY (curso_id)
	REFERENCES curso (id)
);
INSERT INTO aluno_curso(aluno_id, curso_id) VALUES (1,1);
INSERT INTO aluno_curso(aluno_id, curso_id) VALUES (2,1);
INSERT INTO aluno_curso(aluno_id, curso_id) VALUES (3,1);
INSERT INTO aluno_curso(aluno_id, curso_id) VALUES (1,3);

SELECT * FROM curso;

SELECT aluno.nome AS aluno,
	   curso.nome AS curso
	FROM aluno
	JOIN aluno_curso ON aluno_curso.aluno_id = aluno.id
	JOIN curso 		 ON curso.id             = aluno_curso.curso_id 

DELETE FROM aluno WHERE id = 1;

UPDATE aluno
	SET id=10
	WHERE id = 2;

UPDATE aluno
	SET id = 20
	WHERE id = 4;


DROP TABLE aluno_curso;
CREATE TABLE aluno_curso (
	aluno_id INTEGER,
	curso_id INTEGER,
	PRIMARY KEY (aluno_id, curso_id),

	FOREIGN KEY (aluno_id)
 	REFERENCES aluno (id)
	ON DELETE CASCADE
	ON UPDATE CASCADE,

	FOREIGN KEY (curso_id)
	REFERENCES curso (id)
);
SELECT * FROM aluno;
INSERT INTO aluno_curso(aluno_id, curso_id) VALUES (2,1);
INSERT INTO aluno_curso(aluno_id, curso_id) VALUES (3,1);
INSERT INTO aluno_curso(aluno_id, curso_id) VALUES (3,1);


SELECT 
	   aluno.id AS 	aluno_id,
	   aluno.nome AS aluno,
	   curso.id AS curso_id,
	   curso.nome AS curso
	FROM aluno
	JOIN aluno_curso ON aluno_curso.aluno_id = aluno.id
	JOIN curso 		 ON curso.id             = aluno_curso.curso_id 

SELECT * FROM aluno_curso;


--- ORDENAÇÃO ----
DROP TABLE funcionarios;
CREATE TABLE funcionarios (
	id	      SERIAL        PRIMARY KEY,
	matricula VARCHAR(10),
	nome      VARCHAR(255),
	sobrenome VARCHAR(255)
);

INSERT INTO funcionarios (matricula, nome, sobrenome) VALUES ('M001', 'Diogo', 'Mascarenhas');
INSERT INTO funcionarios (matricula, nome, sobrenome) VALUES ('M002', 'Vinícius', 'Dias');
INSERT INTO funcionarios (matricula, nome, sobrenome) VALUES ('M003', 'Nico', 'Steppat');
INSERT INTO funcionarios (matricula, nome, sobrenome) VALUES ('M004', 'João', 'Roberto');
INSERT INTO funcionarios (matricula, nome, sobrenome) VALUES ('M005', 'Diogo', 'Mascarenhas');
INSERT INTO funcionarios (matricula, nome, sobrenome) VALUES ('M006', 'Alberto', 'Martins');
INSERT INTO funcionarios (matricula, nome, sobrenome) VALUES ('M007', 'Diogo', 'Oliveira');

SELECT * 
    FROM funcionarios
    ORDER BY nome;

SELECT * 
    FROM funcionarios
    ORDER BY nome DESC;

SELECT * 
    FROM funcionarios
    ORDER BY nome, matricula DESC;

SELECT * 
    FROM funcionarios
    ORDER BY 4;

SELECT * 
    FROM funcionarios
    ORDER BY 3, 4, 2;

SELECT * 
    FROM funcionarios
    ORDER BY 4 DESC, nome DESC, 2 ASC;

SELECT * 
    FROM funcionarios
    ORDER BY 4 DESC, funcionarios.nome DESC, 2 ASC;

SELECT 
        aluno.id as aluno_id,
        aluno.nome as "Nome do Aluno",
        curso.id as "curso_id",
        curso.nome as "Nome do Curso"
    FROM aluno
    JOIN aluno_curso ON aluno_curso.aluno_id = aluno.id
    JOIN curso ON curso.id = aluno_curso.curso_id
    ORDER BY curso.nome, aluno.nome

----- LIMITANDO CONSULTAS ------
SELECT * FROM funcionarios LIMIT 5;

SELECT * 
	FROM funcionarios 
	ORDER BY nome
	LIMIT 5;

SELECT *
  FROM funcionarios
  ORDER BY id
 LIMIT 5
OFFSET 0;

SELECT *
  FROM funcionarios
  ORDER BY id
 LIMIT 5
OFFSET 1;

SELECT *
  FROM funcionarios
  ORDER BY id
 LIMIT 5
OFFSET 2;

----- FUNÇÕES DE AGREGAÇÃO -----

-- COUNT - Retorna a quantidade de registros
-- SUM -   Retorna a soma dos registros
-- MAX -   Retorna o maior valor dos registros
-- MIN -   Retorna o menor valor dos registros
-- AVG -   Retorna a média dos registros

SELECT * FROM funcionarios;

SELECT COUNT(id) 
	FROM funcionarios;

SELECT COUNT(id),
		SUM(id)
	FROM funcionarios;

SELECT COUNT(id),
		SUM(id),
		MAX (id)
	FROM funcionarios;

SELECT COUNT(id),
		SUM(id),
		MAX (id),
		MIN (id)
	FROM funcionarios;

SELECT COUNT(id),
		SUM(id),
		MAX (id),
		MIN (id),
		AVG (id)
	FROM funcionarios;

SELECT COUNT(id),
		SUM(id),
		MAX (id),
		MIN (id),
		ROUND (AVG (id),2)
	FROM funcionarios;


----- AGRUPANDO CONSULTAS ------
SELECT nome 
	FROM funcionarios
	ORDER BY nome;

SELECT DISTINCT 
	   nome,
       sobrenome
	FROM funcionarios
	ORDER BY nome;

SELECT  
	   nome,
       sobrenome,
       COUNT (*)
	FROM funcionarios
	GROUP BY nome, sobrenome
	ORDER BY nome;

SELECT  
	   nome,
       sobrenome,
       COUNT (*)
	FROM funcionarios
	GROUP BY 1, 2
	ORDER BY nome;

SELECT  
	   nome,
       sobrenome,
       COUNT (*)
	FROM funcionarios
	GROUP BY 1, 2
	ORDER BY nome;

SELECT *
    FROM aluno
    JOIN aluno_curso ON aluno.id = aluno_curso.aluno_id
    JOIN curso ON curso.id = aluno_curso.curso_id

SELECT curso.nome
        COUNT(aluno.id)
    FROM aluno
    JOIN aluno_curso ON aluno.id = aluno_curso.aluno_id
    JOIN curso ON curso.id = aluno_curso.curso_id
    GROUP BY 1
    ORDER BY 1


----- FILTRANDO CONSULTAS AGRUPADAS ----- 
SELECT * FROM aluno;
SELECT * FROM aluno_curso;
SELECT * FROM curso;

SELECT *
    FROM curso
    LEFT JOIN aluno_curso ON aluno.curso_id = curso.id
    LEFT JOIN aluno ON aluno.id = aluno_curso.aluno_id

SELECT curso.nome,
       COUNT(aluno.id)    
  FROM curso
  LEFT JOIN aluno_curso ON aluno_curso.curso_id = curso.id
  LEFT JOIN aluno ON aluno.id = aluno_curso.aluno_id
  WHERE curso.nome = 'Javascritp'
GROUP BY 1


SELECT *
    FROM curso
    LEFT JOIN aluno_curso ON aluno.curso_id = curso.id
    LEFT JOIN aluno ON aluno.id = aluno_curso.aluno_id
    --WHERE curso.nome = 'Javascritp'
GROUP BY 1
    HAVING COUNT (aluno.id) = 0


SELECT nome
    FROM funcionarios
    GROUP BY nome
    HAVING COUNT(id) > 1;


SELECT nome,
       COUNT(id)
    FROM funcionarios
    GROUP BY nome
    HAVING COUNT(id) > 1;

