# Anotações do curso - Node.js: lidando com buscas, filtros, paginação e erros em uma API

---

Mongoose permite que utilizemos a palavra-chave await antes de métodos como find, findById, findByIdAndUpdate, findByIdAndDelete, save, entre outros. Ao fazer isso, o código irá aguardar a operação ser realizada no banco de dados e o método irá retornar o resultado da operação. 

---
### Responsabilidade do front-end ou do back-end?
devemos evitar de enviar para o cliente detalhes técnicos internos da nossa aplicação, principalmente informações do banco de dados que possam ser sensíveis.

Mesmo que o front-end possa tratar a nossa requisição e mostrar uma mensagem de erro mais apropriada ao usuário final, ainda assim estamos expondo informações da API nas respostas. Nada garante que o front-end vai de fato tratar todas as mensagens. E, mesmo que trate, ainda assim seria possível uma pessoa mal intencionada fazer requisições diretamente para a nossa API e tentar obter e explorar informações sensíveis a partir das mensagens de erros.

Considerando o seguinte erro como exemplo:
```Cast to ObjectId failed for value \"6485e5aaad1084605f44a4f5H\" (type string) at path \"_id\" for model \"Autor\"
```

Esse erro é interno do mongoose, e contém informações como o nome do modelo e o nome do campo. Até mesmo o formato do erro pode denunciar que o banco utilizado é o MongoDB! Essas informações podem ser úteis para um atacante entender a estrutura do banco de dados ou explorar suas vulnerabilidades.

Essas mensagens de erros do Banco de Dados servem apenas para as pessoas desenvolvedoras da API, justamente para sabermos o que aconteceu e para que possamos tratar melhor esses erros em tempo de desenvolvimento.

---
### erros do Mongoose e o ObjectId
Mongoose quando ele falha em converter um valor (“cast error” significa “erro de conversão”, do inglês). Mas por que esse erro em específico foi lançado?

Quando obtemos um valor por parâmetro de rota da URL, ele sempre é tratado como uma string no código. Ou seja, no seguinte código do método listarAutorPorId, a constante id é uma string
```const id = req.params.id;```

Na sequência, nós tentamos encontrar um autor no banco de dados utilizando o seguinte código:
```const autorResultado = await autores.findById(id);```

O método findById receberá uma string, e o Mongoose tentará convertê-la para ObjectId, um tipo reservado dessa biblioteca. O ObjectId abstrai o tipo de mesmo nome do MongoDB. Ou seja, o MongoDB também armazena dados do tipo ObjectId, que são exatamente os IDs únicos gerados para cada documento armazenado no banco de dados.

Tanto no MongoDB quanto no Mongoose, um ObjectId deve ser uma sequência de 12 ou 24 caracteres hexadecimais. Se o método findById receber uma string que não cumpre esses requisitos, ele falhará em converter a string para o tipo ObjectId e lançará um CastError.

---
### controladores são middlewares?:
Um middleware especial do Express caracterizado por receber quatro parâmetros que chamamos de: erro, req, res e next.

Há uma semelhança entre a estrutura dessa função e os métodos dos controladores da API, como o listarAutorPorId. Afinal, os métodos de controladores podem receber três dos quatro parâmetros que um middleware de erro pode receber, e que convencionalmente chamamos de req, res e next.

Isso porque os métodos de controladores também são middlewares do Express! Eles são o tipo mais convencional de middleware, que recebem até três parâmetros. Uum middleware do Express é uma função que é executada em toda requisição para a API ou em determinadas requisições.

Se pararmos para pensar, é exatamente assim que os métodos dos controladores se comportam: quando uma requisição é feita para uma determinada rota da API, esses métodos executam um determinado código (recebem parâmetros da requisição, acessam o banco de dados, etc) e devolvem uma resposta para o cliente.

### Registrando middlewares na aplicação Express
Para registrar um middleware que é executado em todas as requisições para a API, independente da rota ou do método HTTP, utilizamos o método app.use. 

a ordem em que os middlewares são registrados na aplicação é importante. 