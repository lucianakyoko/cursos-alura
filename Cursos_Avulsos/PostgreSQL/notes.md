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

Para visualizar os bancos de dados já estão no nosso postgres, podemos usar o comando \l. Quando apertamos "Enter", aparece a seguinte tabela:

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
