## Preparando o ambiente
O json-server está listado como dependência no package.json.
* fazer npm install dentro pasta admin, 

O comando que executamos durante a aula para subir o servidor, json-server --watch db.json, deve ser realizado dentro da pasta do projeto a admin, caso contrário o comando não vai ser reconhecido.

Outra informação importante é que para funcionar localmente ao invés de rodarmos o comando json-server --watch db.json igual é feito na aula, temos que rodar o comando com npx na frente:

npx json-server --watch db.json

Caso queira utilizar o comando sem o npx na frente é preciso instalar o json-server de forma global:

npm install -g json-server

E depois para subir o servidor fazemos json-server --watch db.json como é feito na aula.

---