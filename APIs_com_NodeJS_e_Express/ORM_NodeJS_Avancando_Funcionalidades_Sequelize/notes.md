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

