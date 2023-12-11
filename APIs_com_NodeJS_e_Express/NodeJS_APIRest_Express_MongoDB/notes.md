# Anotações do curso: Node.js: criando uma API Rest com Express e MongoDB

O termo REST (representational state transfer ou transferência de estado representacional) representa um padrão para desenvolvimento de APIs web utilizando o protocolo HTTP para transmissão de dados.

Outras arquiteturas:
- APIs SOAP: SOAP (Simple Object Access Protocol ou protocolo simples de acesso a objetos) utiliza o formato de dados XML e pode usar HTTP ou outros protocolos na comunicação. É um formato mais antigo que o REST e muito utilizado por aplicações de grande porte, porém mais lento que o REST.

- Event-Driven APIs: APIs orientadas a eventos, ao contrário das APIs REST, não dependem de requisições feitas pelo lado cliente para iniciar a comunicação. Nesse caso, o cliente ou clientes “inscritos” na API se comunicam com ela através de gatilhos de eventos, como, por exemplo, um novo registro de usuário.

- APIs GraphQL: o GraphQL é uma linguagem de consulta (query) de APIs e também um runtime para executar estas consultas. É uma alternativa ao REST que pode se conectar a diversas APIs e bases de dados diferentes e retornar objetos complexos através de uma única requisição.

- APIs gRPC: Remote Procedure Calls (ou chamadas procedurais remotas), desenvolvido pelo Google, é um framework baseado em HTTP2 para comunicação síncrona e assíncrona, que visa facilitar comunicação rápida e simplificada entre diversos serviços.

---
### Requisição e resposta:
Todo processo de requisição-resposta usando HTTP é sempre iniciado pelo lado cliente da requisição. O lado servidor da requisição nunca envia “ativamente” nenhuma resposta para o lado cliente sem ser como resultado de uma requisição.

### Partes da requisição:
- URL, também chamado de caminho ou rota, sempre iniciado com http:// ou https://.
- Header, também chamado de cabeçalho, envia informações referentes ao cliente ou ao tipo de requisição. Alguns dados enviados através dos cabeçalhos são:
  - host é o domínio do servidor que receberá a requisição.
  - User-agent identifica o cliente, por exemplo, dados do navegador de onde está saindo a requisição.
  - Content-Type é o formato do dado que está sendo enviado no body da requisição, por exemplo JSON, string etc. Confira a lista completa de tipos de dados e como devem ser declarados no header.
  - Authorization são as credenciais de autenticação para acesso a recursos protegidos.
  - Accept especifica o formato de retorno esperado na resposta, por exemplo, JSON.
- Body ou corpo da requisição, onde são trafegados dados enviados pelo cliente para serem recebidos pelo servidor, normalmente utilizado para dados mais estruturados e em requisições POST, PUT or PATCH. O tipo de dado enviado pelo body deve ser o mesmo especificado no Content-Type, por exemplo, application/json.
- Parâmetros são inseridos na URL para envio de dados específicos, muito utilizados, por exemplo, para envio de informações variáveis como termos de buscas, IDs etc.
- Método HTTP, entre os aceitos pela rota, especifica o tipo de operação solicitado pelo cliente. Os mais comuns são os métodos GET, POST, PUT e DELETE. Vamos trabalhar com estes métodos com mais profundidade durante o curso.

### Partes resposta:
A resposta contém informações referentes à requisição, que podem ser uma confirmação de operação, dados solicitados ou mesmo mensagens de erro pertinentes em caso de falha em algum ponto da comunicação.
- Status da resposta, que contém a versão HTTP utilizada, o código de status e a mensagem de status. Por exemplo, HTTP/1.1 200 OK.
- Headers ou cabeçalhos, com informações adicionais sobre a resposta ou o conteúdo da resposta. Por exemplo:
  - Content-Type;
  - Content-Length, que corresponde ao tamanho em bytes do corpo da resposta;
  - Cache-Control, que são as instruções de cache para a resposta;
  - Set-Cookie, que adiciona um valor de cookie ao navegador. Caso queira saber mais, confira este artigo sobre o que são cookies e como são utilizados.
- Body, o corpo da resposta, que contém os dados ou o conteúdo solicitado pelo cliente através da requisição e enviado pelo servidor. O formato de dados do body vai depender do formato especificado em Content-Type, por exemplo JSON.

---
### PUT vs PATCH
- PUT substitui totalmente o recurso atual pelos novos dados que estão sendo recebidos na requisição. Caso não exista o recurso anterior, ele será criado. Apesar disso, não é o método indicado para a criação de novos recursos, para isso existe o método POST.
- PATCH atualiza parcialmente um recurso já existente. Ao contrário do PUT que precisa receber um recurso completo para fazer a substituição completa, PATCH pode receber apenas os dados a serem modificados para atualizar apenas estes campos.

---
### Tipos de servidores:
Existem diversos tipos de servidores, além dos utilizados para hospedar e processar informações através de APIs REST. Cada tipo de servidor é pensado, construído e otimizado para sua função específica, por exemplo:

- Servidores de banco de dados: armazenam, gerenciam e acessam bancos de dados, como um servidor Oracle, MySQL ou MongoDB (não incluindo aqui servidores em nuvem como o Atlas).
- Servidores de arquivos: armazenam arquivos e dados. Ao contrário de um serviço de armazenamento de arquivos em “bucket”, oferecido pelos provedores de nuvem (como o AWS S3) e que normalmente pode ser acessado de qualquer lugar via internet, os servidores de arquivos geralmente são acessados apenas através de uma rede interna.
- Servidores de arquivos estáticos: armazenam e distribuem arquivos “estáticos”, como CSS, imagens e arquivos JavaScript utilizados em sites e conteúdos web. Ao contrário dos servidores que hospedam APIs (que precisam processar inputs e servir os resultados deste processamento), servidores de arquivos estáticos apenas “entregam” os arquivos solicitados pela requisição. Mesmo arquivos JavaScript, nesse caso, são considerados estáticos, pois toda a execução é feita pelo lado cliente da requisição (através, por exemplo, do navegador do usuário).

Ainda há vários outros tipos de servidores específicos, como os voltados para a análise de grandes volumes de dados, servidores de backup, de DNS, entre outros.

Mesmo quando utilizamos os serviços de armazenamento em nuvem, devemos sempre lembrar que a nuvem é, entre muitas aspas, “o servidor de outra pessoa”. Ao utilizarmos a nuvem, terceirizamos muito do trabalho de manutenção dos servidores para os provedores destes serviços, como AWS, Google Cloud, MS Azure, entre outros. Mas os princípios ainda são os mesmos.

---
### Models:
Os models são responsáveis pela representação dos dados e da lógica de negócio da aplicação, ou seja, é responsabilidade do model gerenciar o relacionamento entre a API e a camada de dados, incluindo validação, armazenamento e manipulação dos dados, interação com a base de dados e suas regras

### Controllers:
Os controllers atuam como intermediários entre a camada responsável pelo recebimento dos inputs de dados, que em nossa API está sendo feito através das rotas, e os models. Controllers também são a camada responsável pelo “caminho inverso”, pegando o resultado do processamento feito pelos models e “repassando” de volta.
A comunicação entre as camadas de model e controller é uma caminho de ida e volta, pois o model vai repassar o resultado da consulta para o controller para que seja processada e transformada na resposta HTTP no formato adequado e com as informações esperadas

---
### try/catch
O try/catch é uma estrutura usada justamente quando é necessário capturar e manejar erros de forma mais precisa, permitindo que os erros sejam “capturados e tratados” internamente pela função e evitando que a aplicação pare de funcionar ou que o cliente receba respostas inesperadas.

- No bloco try inserimos o código que é necessário “monitorar” para que potenciais erros sejam capturados, como operações em bases de dados ou APIs externas. Em caso de sucessos, apenas o código dentro do try é executado e seus resultados retornados para fora da função, conforme o caso.
- No bloco catch inserimos o código que vai ser executado em caso de erros ocorridos no código que está dentro do try. Qualquer erro que aconteça dentro do try é automaticamente lançado para dentro do catch e recebido através do parâmetro que normalmente chamamos de (error) ou (e). Uma vez dentro do catch o erro pode ser tratado de acordo e debugado, e o lado cliente pode receber uma resposta que faça sentido.

O try/catch funciona também para captura e tratamento de possíveis erros em operações assíncronas, como as que envolvem justamente operações em bancos ou outras APIs.

---
### relacionamentos:
Em bancos SQL, a avaliação de requisitos e modelagem dos dados costuma ser feita de forma adiantada com relação à aplicação, pois o SQL é, por definição, mais “estrito” com relação à estrutura de um banco, aos tipos de dados associados a cada campo e ao relacionamento entre as tabelas.

Já em um banco de objetos como o MongoDB, esta estrutura é menos rígida e pode ser atualizada de acordo com as necessidades da aplicação, então, dois documentos livro podem ser diferentes entre si sem que para isso sejam necessárias alterações significativas na base de dados.

Porém, em ambos os tipos de banco existem três tipos de relacionamentos entre dados. São eles:

- Relacionamento “um para um” (one-to-one ou 1:1), quando um registro está conectado a somente outro registro em outro conjunto de dados. Exemplo: uma pessoa registrada no sistema da nossa livraria tem somente um CPF relacionado a ela, e não é possível que duas pessoas diferentes tenham o mesmo CPF ou uma pessoa ter dois CPFs.
- Relacionamento “um para muitos” (one-to-many ou 1:n), quando um registro pode ser conectado a mais de um registro em outro conjunto de dados. Exemplo: as pessoas cadastradas em nossa livraria podem fornecer mais de um número de telefone celular, porém, cada um destes números de celular pode estar associado a apenas uma pessoa por vez.
- Relacionamento “muitos para muitos” (many-to-many ou n:m), quando mais de um registro pode estar relacionado a mais de um registro em outro conjunto. Exemplo: um livro pode ter mais de um autor, ao mesmo tempo que este mesmo autor pode ter escrito vários livros.

---
### MongoDB - Embed x Reference
**Embedding:**
Ao contrário do SQL, o MongoDB segue o princípio de “dados que são acessados juntos devem ser armazenados juntos”.

Embedding significa incorporar dados que são relacionados e inseri-los em um documento. É usado para simplificar as consultas (queries) aos dados e melhorar a performance geral das ferramentas nas consultas.

Incorporar dados em um único documento pode criar documentos muito grandes, o que pode acabar prejudicando a performance da aplicação, pois um documento deve ser carregado em memória por inteiro. Além disso, pode também fazer com que novos dados sejam incorporados indefinidamente a um único objeto e aumentando o tamanho em bytes além do limite de 16 mb por documento de um objeto BSON.

**Referencing:**
Referencing significa fazer referência a documentos em outra coleção. Nesse caso, os dados são guardados em coleções separadas, mas ainda é importante que mantenham vínculo entre eles. A referência é feita através de um campo específico do documento, normalmente o campo id ou equivalente.

A agregação de dados via reference visa evitar duplicação de dados (um aspecto muito importante no SQL, também chamada de “normalização de dados”) e também gerenciar o tamanho dos documentos para evitar a criação de documentos muito grandes, que prejudicariam a performance do sistema.

Por outro lado, a junção de dados via referência faz com que uma consulta se transforme em duas ou várias.

---
###  estrutura de uma URL
```https://cursos.alura.com.br:443/search?query=express
```

- https:// é o protocolo de comunicação utilizado.
cursos.alura.com.br é o host, composto por subdomínio (cursos) e domínio (alura.com.br).
- :443/ é a porta utilizada na comunicação. 443 é a porta usada para conexões do tipo HTTPS e o número é normalmente suprimido na visualização padrão do navegador. No caso de conexões HTTP, a porta utilizada é a 80.
- search é a rota ou path (“caminho”), assim como nossa API tem as rotas livros e autores. Rotas de APIs, como a que estamos trabalhando, normalmente são “abstrações” referentes aos recursos. Porém, as rotas também podem ser usadas para a localização de recursos no servidor, por exemplo, /pages/sobre.html para exibir a página sobre no navegador.
- ?query=express são os query parameters ou parâmetros de busca. Note que os parâmetros de busca sempre iniciam com ?. Uma URL pode conter vários parâmetros encadeados, separados por &. Por exemplo, ?query=express&type=curso&formacao=node.
URLs também podem conter fragments ou anchors, comumente utilizadas em front-end como marcadores para determinadas partes de uma página e que não são enviadas ao servidor nas requisições.