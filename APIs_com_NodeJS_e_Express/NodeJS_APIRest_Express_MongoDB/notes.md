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
