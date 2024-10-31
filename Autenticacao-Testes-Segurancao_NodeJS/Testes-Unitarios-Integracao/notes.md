# Anotações do curso

---

### Pirâmide de testes

1. E2E - end to end
  - Ponta a ponta, alto nível
  - testes longos e completos
  - análise de todos os móduls e stacks. Ex. front-end/ banco de dados/ micro serviços
2. Integração
  - Testes de rotas e requisições
  - comunicação dos módulos
  - não analisa todo o fluxo da aplicação
3. Unitários
  - Testes curtos e isolados
  - análise de funções ou métodos
  - não garante uma integração de modulos

Mais integração, maior consumo de recursos e mais complexo e devagar. Quanto mais isolado, maior o volume detestes e mais simples e rápido

---

### Cultura de testes
Ter uma cultura de testes significa criar um ambiente onde a equipe de desenvolvimento tenha a capacidade de implementar e gerir os testes, entendendo como esses testes afetam a qualidade do código e permitindo que problemas que eventualmente passem desse ambiente de testes sejam resolvidos. No geral, podemos conceituar como utilizar boas práticas de testes dentro da nossa companhia, organização ou projeto.

Fatores fundamentais:
- Qualidade
- Confiança
- Tempo

---

### Fases do teste
1. Análise de requisitos
  vamos identificar quais funcionalidades estarão presentes no projeto e selecionar quais testes e quais tipos de teste vamos implementar para poder atingir esses objetivos
2. Plano de teste
  o time conhecido como QA, que é o Quality Assurance, ou os analistas de qualidade, elaboram o plano de teste, contendo as ferramentas que serão utilizadas, dividindo as responsabilidades de quem vai criar os testes e estimando no geral qual será o tempo, a complexidade e os gastos de recursos que terá naquele projeto
3. Caso de teste
  são detalhados os testes em si: quais são as condições, os dados de entrada, os comportamentos esperados, dados de saída, quantidade de testes. Todo esse mapeamento é feito nos casos de teste
4. Ambiente de teste
  são escolhidos onde e como esses testes serão executados. É feito o pipeline, o fluxo de como é produzido pela equipe de desenvolvimento e como aquilo vai sendo testado, ferramentas de versionamento e tudo que será utilizado, onde as alterações e implementações que são feitas pelo time de desenvolvimento vão sendo testadas e validadas para poder seguir no projeto.
5. Implementação
  onde é feita a documentação daqueles resultados que foram obtidos com os testes, problemas que aconteceram dentro dos processos, estabelecendo como podem ter melhorias para os próximos ciclos e toda essa parte que vai lidar diretamente com a implementação, tanto do código em si do projeto quanto da implementação dos testes e tudo que aconteceu em torno disso.

---

### utilizando o Jest com ESM
[Documentação](https://jestjs.io/pt-BR/docs/ecmascript-modules)

o Jest ainda não completou a implementação em projetos que utilizam a forma do EcmaScript 6 (ou JS2015) de trabalhar com importações/exportações utilizando as palavras reservadas import e export. 
As nossas chamadas ao Jest deverão ser acompanhadas por uma flag, que sinaliza que o projeto utiliza uma funcionalidade experimental para trabalhar com a nova importação de módulos. Uma flag é uma forma usada comumente para descrever parâmetros passados na chamada de um programa.
```
--experimental-vm-modules
```

Que é apresentada na documentação. Então o comando completo para executar o Jest fica assim:
```
node --experimental-vm-modules node_modules/jest/bin/jest.js
```

Para simplificar o uso, você pode criar uma propriedade chamada scripts no arquivo package.json e colocar o seguinte:
```
"scripts": {
  "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
  "test:watch": "node --experimental-vm-modules node_modules/jest/bin/jest.js --detectOpenHandles --watch",
  "test:coverage": "node --experimental-vm-modules node_modules/jest/bin/jest.js --detectOpenHandles --coverage"
},
```

Assim, para executar os comandos de teste basta rodar:
```
npm run test
```
e opcionalmente adicionar um :watch ou :coverage no final.

Outro arquivo que pode conter configurações é o jest.config.js, que é mencionado na documentação do Jest e você pode armazenar alguns destes parâmetros neste arquivo.
[Documentação](https://jestjs.io/pt-BR/docs/configuration)

---

###  estrutura de pastas e nomenclatura
Existem algumas convenções que podem facilitar a organização de seus testes com o Jest.

Se você deseja escrever um teste unitário para cobrir, por exemplo, um arquivo editorasController.js, o arquivo de teste deve ser especificado com o sufixo editorasController.test.js ou editorasController.spec.js, pois é uma convenção de mercado. Há ainda quem prefira especificar o tipo de teste com nomeDoArquivo.unit.test.js e nomeDoArquivo.int.test.js para informar se o teste é unitário ou de integração. Todas estas formas são reconhecidas pelo Jest.

O arquivo de teste pode ficar no mesmo diretório do arquivo original, como observamos abaixo:

```
├── src
│   ├── app.js
│   ├── controllers
│   │   └── editorasController.js
│   │   └── editorasController.test.js
```

Essa estrutura deixa o teste bastante perceptível e fácil de ser identificado. No entanto, à medida que o projeto expandir, mais testes surgirão e sua organização pode ficar comprometida.

Outra forma de especificar os testes no seu projeto é com a criação de um diretório específico com o nome tests ou __tests__:
```
├── src
│   ├── app.js
│   ├── controllers
│       └── editorasController.js
│
|
├── tests
    ├── editorasController.test.js      
```

Ou:

```
├── src
│   ├── app.js
│   ├── controllers
│       └── editorasController.js
│
|
├── __tests__
    ├── editorasController.test.js      
```

Dessa maneira, certamente ficará mais fácil encontrar todos os testes quando necessário, pois, de certa forma, centraliza a informação. Você também pode organizar os testes em subpastas para facilitar ainda mais, como um diretório para as rotas, models, por exemplo, que reproduza a estrutura de pastas do projeto.

O Jest possibilita ainda que você separe os teste de unidade e testes de integração. Em outras palavras, você pode criar subpastas para ambos os testes com as nomenclaturas unit e int e configurar pelo próprio Jest para rodá-las com comandos diferentes, como sugestão: jest unit e jest int.

E qual a diferença entre usar tests e __tests__? O Jest encontrará da mesma forma os arquivos de teste que têm os prefixos de teste (já mencionados acima), porém, se você não utilizar estes prefixos no nome dos arquivos, nomear a pasta como __tests__ (com o sinal de subescrito duas vezes no começo e no fim) vai garantir que o Jest encontre os testes mesmo sem os sufixos. Por exemplo:
```
├── src
│   ├── app.js
│   ├── controllers
│       └── editorasController.js
│
|
├── __tests__
    ├── editorasControllerTest.js
```

Contudo, a convenção é sempre utilizar os sufixos .test ou .spec nos nomes dos arquivos.
Também é possível criar mocks de módulos completos, modificando totalmente a implementação interna. Nesse caso, deve-se criar uma cópia do arquivo dentro de uma pasta __mocks__.
[Documentação](https://jestjs.io/pt-BR/docs/manual-mocks)

No final, a escolha de cada método está relacionada com a sua familiaridade e o que é adotado na empresa em que você atua, ou mesmo com a organização geral do seu projeto. Por isso é importante conhecer um pouco sobre as diferentes formas de estruturação.

---

### cobertura de testes
vimos como utilizar o Jest para não apenas executar testes mas também exibir os resultados de uma forma mais completa e compreensível. Chamamos estes resultados de relatório de testes e é muito importante que sempre seja lido com atenção e compreendido, pois as informações do relatório vão nos informar como nossos testes estão se comportando, que partes não estão sendo testadas e como resolver este problema.

Ao executarmos o script de testes com a flag --coverage (em português, “cobertura”), veremos uma tabela similar a esta:
```
| File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines #s |
|-------------|---------|----------|---------|---------|-----------------|
| All files   | 100         | 100          | 100         | 100         |                     |
|        index.js | 100         | 100          | 100         | 100         |                     |

Test Suites:         1 passed, 1 total
Tests:         2 passed, 2 total
Snapshots:        0 total
Time:                 1.800 s
Ran all test suites.
```

- **File**: A primeira coluna indica quais arquivos de teste do diretório estão sendo executados. Cada linha dessa coluna fornece as estatísticas para cada arquivo de teste localizado e executado pelo Jest.
- **Stmts**: Esta coluna lista a porcentagem de statements do código que foram cobertos pelos testes. Em programação, um statement (ou declaração) é cada comando individual que damos ao programa para que ele execute instruções.
- **Branch**: Sempre que o código de um programa apresenta ramificações no fluxo, por exemplo, blocos if…else ou switch, devemos garantir que todas as possibilidades sejam testadas. Ou seja, se existe um bloco if…else no programa, devemos escrever testes tanto para o código executado no bloco if quanto para o código executado no bloco else, e a porcentagem na coluna Branch mostra em quais arquivos há ramificações que precisam ter todas as suas condições testadas. Embora tenham o mesmo nome, não confundir estas branches com branches de versionamento do Git. O Jest não acessa o repositório do Git e nem há nenhum teste a ser feito nesse sentido.
- **Funcs**: Informa qual a porcentagem de funções presentes em cada arquivo que foram executadas/chamadas pelos testes.
- **Lines**: A porcentagem de linhas de código por onde os testes passaram durante a sua execução. Quando está em 100%, significa que os testes percorreram todas as linhas de código dos arquivos testados. Quando não está em 100%, devemos observar a coluna seguinte (Uncovered Lines), que vai indicar por quais linhas o Jest não passou ao executar os testes nos arquivos.
- **Uncovered lines**: Lista quais linhas de cada arquivo não foram percorridas pelo Jest. Você pode usar esta lista para consultar o código e pensar em quais testes podem ser adicionados para que estas linhas também sejam “cobertas”.

O Jest também fornece o relatório de cobertura de forma mais visual. Quando utilizamos a flag coverage, além de exibir o relatório no terminal, o Jest também cria a pasta coverage na raiz do projeto. Dentro desta pasta, você pode acessar a subpasta lcov-report para ver o relatório (report) e interagir com os arquivos, abrindo o arquivo index.html e navegando pelos arquivos.

---

### funções adicionais
- [Guia iniciando com Jest](https://jestjs.io/pt-BR/docs/getting-started)
- [Documentação API Expect](https://jestjs.io/pt-BR/docs/expect)

Como podemos observar, o framework Jest apresenta diversas funcionalidades para tornar o desenvolvimento de testes unitários mais eficiente. Pensando nisso, o uso de matchers é interessante para comparar valores e permite a construção de asserções no seu código.

| Método	| Funcionalidade |
| --- | --- |
| expect(value)	| Testar um valor |
| expect.extend(matchers)	| Adicionar seus próprios "matchers" |
| expect.anything()	| Corresponde a qualquer coisa menos null e Undefined |
| expect.any(constructor)	| Testa qualquer coisa que é criada com um construtor |
| expect.arrayContaining(array)	| O array esperado é um subconjunto do array recebido |
| expect.assertions(número)	| Verifica que um certo número de verificações são chamadas durante um teste |
| expect.closeTo(number, numDigits?)	| é útil quando você compara números quebrados num array |
| expect.hasAssertions()	| Verifica que pelo menos uma verificação é chamada durante um teste |
| expect.not.arrayContaining(array)	| Quando o array esperado não é um subconjunto do array recebido |
| expect.not.objectContaining(object)	| Quando o objeto esperado não é um subconjunto do objeto recebido |
| expect.not.stringContaining(string)	| Quando o valor recebido não é uma String ou não corresponde ao valor esperado da String |
| expect.not.stringMatching(string / regexp)	| Quando o valor recebido não é String ou não corresponde a String esperada ou a expressão  |regular
| expect.objectContaining(object)	| Corresponde a qualquer objeto recebido que recursivamente coincide com as propriedades esperadas |
| expect.stringContaining(string)	| Quando o valor recebido é uma String que contém a String esperada |
| expect.stringMatching(string / regexp)	| Quando o valor recebido é uma String que contém a String ou expressão regular esperada |
| expect.addSnapshotSerializer(serializer)	| Para adicionar um módulo que formata estruturas de dados específicas da aplicação |
| .not |	Se você sabe como testar algo, .not permite que você teste seu oposto |
| .resolves |	Decodifica o valor de uma promessa cumprida, para que qualquer outro matcher possa então ser encadeado |
| .rejects |	Decodifica o motivo de uma promessa rejeitada, para que qualquer outro matcher possa ser encadeado |

---

### lista de matchers 
[Documentação de matchers](https://jestjs.io/docs/using-matchers);

O Jest utiliza funções chamadas de matchers (em português, algo como “combinadoras”), que servem para verificar e comparar resultados esperados e recebidos nos testes - ou seja, essas funções verificam se os resultados “combinam” entre si. Existe uma variedade de matchers, cada qual para uma finalidade diferente.

Os matchers podem ser do tipo:

- **Comuns**: usados para testar igualdade de valores de forma exata;
- **Veracidade**: usados para distinguir de forma explícita entre undefined, null e false;
- **Number**: usados para comparar números equivalentes;
- **String: usados para verificar expressões regulares;
- **Arrays e iteráveis**: usados para verificar a inclusão de um item em um array ou iterável;
- **Exceções**: usado para testar se uma função lança um erro quando chamada;

---

### ferramentas para API
Toda pessoa desenvolvedora ao direcionar seus estudos para o Back-End se depara com a necessidade de verificar o funcionamento de rotas, endpoints, acesso ao banco de dados, dentre outros. Em outras palavras, em algum momento você precisará testar sua API. Dessa maneira, há algumas formas de realizar os testes sem precisar de um Front-End, e uma delas é através do próprio terminal. No entanto, esse processo é muito verboso e custoso, pois demanda muito tempo. Pensando então em otimizar e facilitar os testes, há diversas ferramentas e plataformas que apresentam essas especialidades. 

- Postman
A ferramenta Postman é uma API Client e funciona simulando as requisições feitas no lado do cliente, ou seja, você não precisa de um front para testar requisições e ainda pode automatizar os testes.

- Insomnia
Apresenta uma aparência mais “simples” e tem o mesmo papel que o Postman. Também é amplamente utilizado pela comunidade dev. É uma ferramenta gratuita.

- Thunder Client
Já imaginou utilizar uma ferramenta como Postman ou Insomnia direto no VSCode? Pois bem, alguém já pensou nisso e desenvolveu uma solução em formato de extensão. O Thunder Client é leve, intuitivo e se consolida como uma boa opção para quem deseja simplicidade e rapidez na hora de testar seus projetos.

---

### escopos de pacotes
Durante a aula a instalação da ferramenta Jest foi feita de uma maneira diferente de instalação global.
```
npm i @jest/globals
```

O uso do @ nem sempre é presente nas instalações de pacotes NPM. Mas então, o que seria isso?

Chamamos essa nomenclatura de escopo. Imagine que ao configurar um nome e publicar um pacote NPM, o escopo permite que você crie um pacote com o mesmo nome que outros pacotes criados por usuários diferentes sem conflitos.

Quando listados como dependentes em um arquivo package.json, os pacotes com escopo são precedidos por seu nome de escopo. O nome do escopo é tudo entre o “@” e a barra e você pode separar pacotes públicos (NPM) e privados (NPMCorp) adicionando o prefixo de escopo:

Escopo "npm": @npm/nome-do-pacote
Escopo "npmcorp": @npmcorp/nome-do-pacote
Sendo assim, quando precisamos instalar um pacote NPM basta usar o “@” para diferenciar o pacote com ou sem escopo.

Para pacotes com escopo, execute npm install <@escopo/nome-do-pacote>
Para pacotes sem escopo, execute npm install <nome-do-pacote>
Mas o que seriam pacotes npm com escopo público e privado? Vamos entender melhor essas diferenças.

**Escopo de pacotes públicos**:
[Criando e publicando pacotes públicos](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
Nem todo pacote público tem escopo, e, por padrão, pacotes privados sempre têm escopo. Mas é possível compartilhar seu código publicamente em um namespace de usuário ou organização e você pode publicar pacotes públicos com escopo de usuário ou de organização no registro NPM.

**Escopo de pacotes privados**:
É possível usar o registro NPM para hospedar código que é visível apenas para você e colaboradores escolhidos, permitindo que você gerencie e use código privado junto com código público em seus projetos.

O serviço do NPM tem a capacidade de hospedar pacotes privados. Porém, esse serviço não é gratuito e requer pagamentos mensais. 
Para obter mais informações, clique no link:
[pacotes privados](https://docs.npmjs.com/about-private-packages) e [criando e publicando pacotes privados](https://docs.npmjs.com/creating-and-publishing-private-packages).

[Artigo: Criando e publicando uma biblioteca JS no NPM](https://www.alura.com.br/artigos/criando-e-publicando-uma-biblioteca-javascript-no-npm)

---

