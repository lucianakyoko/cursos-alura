# Anotações do curso 

---
## Relembrando objetos
### Entendendo os paradigmas de programação
Paradigmas de programação são abordagens sobre como resolver problemas de programação, baseados em uma teoria ou um conjunto de princípios definidos. Em outras palavras, um paradigma normalmente se baseia em alguma teoria matemática ou computacional que propõe resolver determinado problema de uma forma específica.

Cada paradigma tem um conjunto de regras que especificam como os dados são tratados, a organização do sistema, a forma como o código é escrito, entre vários outros aspectos.

### Abstraindo conceitos com orientação a objetos
A orientação a objetos, especificamente, é um princípio que busca espelhar o mundo real por meio de uma estrutura de objetos com características e ações. Esses objetos, por sua vez, interagem uns com os outros.

Ou seja, a programação orientada a objetos parte de uma premissa de aproximar a modelagem do código do "mundo real" para o software. O propósito é transformar em software aspectos como uma pessoa, um produto ou um processo.

O intuito dessa abordagem é aproximar a abstração lógica de um programa ou aplicativo aos problemas da vida real que o software deve resolver.

Quando falamos em objetos, precisamos abstrair conceitos que existem na vida real.

Por exemplo, vamos pensar em um gato. Para abstrair um gato seguindo os conceitos da orientação a objetos, começamos dividindo este gato (não literalmente) em duas partes: características e comportamentos.

Como características desse gato, identificaremos:

O sexo;
A idade, que calculamos a partir da data de nascimento;
A cor da pelagem;
Alguns status como:
Ser castrado;
Estar vacinado;
Estar vermifugado.
Os comportamentos que este gato pode ter são ações. Nessa etapa, descreveremos o que o gato pode fazer:

Miar;
Comer:
Comer ração úmida;
Comer ração seca;
Dormir;
Se limpar com lambidas;
Brincar:
Brincar com bolinha;
Brincar com laser;
Brincar com fita;

Se transferirmos isso para o JavaScript, podemos utilizar um objeto literal, único para cada gato.

O objeto literal é a forma mais comum de se criar objetos em JavaScript, na qual temos uma variável e criamos o objeto a partir dela.
```
const gato = {
    nome: "Churrumina",
    nascimento: "25/11/2018",
    pelagem: "mesclada",
    status: {
        castrada: true,
        vacinada: true,
        vermifugada: true
    }
}
```

O objeto gato criado como exemplo acima possui diversas propriedades:

O nome, com o valor Churrumina do tipo string;
O nascimento, também do tipo string, com sua data de nascimento;
A pelagem, com o valor mesclada;
Um bloco status com uma lista de valores booleanos, que retornam verdadeiro ou falso (true ou false):
castrada, igual a true;
vacinada, igual a true e
vermifugado, igual a true.
Além das propriedades, esse objeto tem comportamentos. No JavaScript, podemos atribuir isso a uma função, como no exemplo miar abaixo, inserido dentro do objeto gato, abaixo do bloco status.

```
const gato = {
    nome: "Churrumina",
    nascimento: "25/11/2018",
    pelagem: "mesclada",
    status: {
        castrada: true,
        vacinada: true,
        vermifugada: true
    }
    miar: function() {
        console.log("miau")
    }
}
```

Nesse exemplo, a função miar chama um console.log com o som "miau" do gato em uma string. A partir disso, temos o comportamento de miar do gato, que será chamado com gato.miar().

### Criando modelos de objetos
Entendemos como abstrair conceitos da vida real em um objeto, transformando um gato de verdade em um gato de software.

Mas e se tivermos mais de um gato?

Vamos pensar, por exemplo, em uma clínica veterinária que atende vários gatos. Poderíamos ter um objeto literal, único para cada um dos gatos, conforme o exemplo abaixo.

```
const gato1 = {
    nome: "Churrumina",
    nascimento: "25/11/2018",
    pelagem: "mesclada",
    status: {
        castrada: true,
        vacinada: true,
        vermifugada: true
    }
}

const gato2 = {
    nome: "Wen Ning",
    nascimento: "25/01/2021",
    pelagem: "creme",
    status: {
        castrado: true,
        vacinado: true,
        vermifugado: true
    }
}
```

Temos o gato1, Churrumina, e o gato2, Wen Ning, cada qual com todas as suas características.

Mas se pensarmos em termos de um sistema, essa estrutura não é gerenciável nem prática. Não dá para criar variáveis e objetos literais para cada um dos gatos, cachorros e papagaios que temos em uma clínica veterinária.

Para resolver esse problema, podemos ter um modelo que se reflita no objeto que queremos criar.

Ou seja, podemos ter uma base para a estrutura gato, conforme o exemplo abaixo. Podemos criar esse modelo no formato de objeto literal mesmo, dizendo que modeloGato vai ter um nome, do tipo string, um nascimento, do tipo string, uma pelagem, do tipo string, e os status, que é um bloco com outro objeto, dentro do qual temos castrado, vacinado, e vermifugado, do tipo booleano.

```
const modeloGato = {
    nome: stringNome,
    nascimento: stringData,
    pelagem: stringPelagem,
    status: {
        castrado: boolCastrado,
        vacinado: boolVacinado,
        vermifugado: boolVermifugado
    },
}
```

Esse modelo é uma das bases da orientação a objetos. Com ele, não só abstraímos os conceitos da vida real e transformamos em estrutura de código, como abstraímos os próprios modelos.

A partir desses modelos, criarmos todos os nossos gatos, pessoas usuárias, produtos do nosso e-commerce, e assim por diante.

A partir de um modelo, conseguimos criar instâncias diferentes, ou seja, cópias de um objeto. No nosso exemplo, a partir do modeloGato, criamos abaixo um objeto com os dados do gato Churrumina e outro com os dados do gato Wen Ning.

```
[
    {
        nome: "Churrumina",
        nascimento: "25/11/2018",
        pelagem: "mesclada",
        status: {
            castrado: true,
            vacinado: true,
            vermifugado: true
        },
    },
    {
        nome: "Wen Ning",
        nascimento: "25/01/2021",
        pelagem: "creme",
        status: {
            castrado: true,
            vacinado: true,
            vermifugado: true
        },
    }
]
```

Um dos fundamentos explorados da orientação a objetos é conseguir fazer essa abstração que pode ser reaproveitada para vários gatos, clientes, produtos e outras entidades

---

##  paradigmas de programação
Além do paradigma orientado a objetos, temos também outras formas de lidar e organizar os programas. Uma forma muito comum de categorizar esses paradigmas é dividi-los entre paradigmas **imperativos** ou **declarativos**.

Os **paradigmas imperativos** são aqueles que usam afirmações para alterar o estado de um programa, da mesma forma como o modo verbal imperativo no português expressa um comando ou ordem para ser executada. Essa categoria se preocupa com o **“como”** uma tarefa vai ser executada, o seu passo a passo e a sequência dessas etapas. Alguns dos paradigmas que se encaixam aqui são os seguintes:

- Estrutural
- Procedural
- Orientado a objetos

Um exemplo que mostra o paradigma imperativo é a implementação da seguinte função que recebe um vetor e retorna outro vetor com cada um dos valores dobrado:
```
function dobra(vetor){
    let resultados = [];
    for (let i = 0; i < vetor.length ; i++){
        resultados.push(arr[i] * 2);
}
return resultados;
}
```

Podemos notar que passamos as instruções de como percorrer o vetor, qual operação fazer e o que devemos adicionar ao resultado.

Uma outra categoria de paradigma é o **declarativo**. Podemos dizer que uma característica dele é expressar a lógica de um processo sem descrever o seu controle de fluxo. Ou seja, é associado a **“o quê”** uma tarefa vai resultar ou retornar. Um paradigma que pode se encaixar nessa categoria é o **paradigma funcional**.

Uma implementação declarativa do mesmo problema de dobrar os valores de um vetor pode ser feita da seguinte forma:
```
function dobra(vetor){
  return vetor.map((item) => item * 2);
}
```

Podemos observar que não foi necessário explicitar como iterar sobre o laço de repetição ou atribuir os novos valores.

No cotidiano temos diversos outros exemplos de afirmações que podem ser consideradas declarativas, como arquivos HTML:
```
<h1> Programação Declarativa</h1>
<p> Estou declarando como quero que o texto apareça, e não dizendo para o computador como renderizar um texto</p>
```

Ou até mesmo as queries SQL, nas quais apenas dizemos qual resultado esperamos, sem especificar como a busca deve ser feita:
```
SELECT * FROM Alunos WHERE Escola=’Alura’;
```

O JavaScript e algumas outras linguagens podem utilizar mais de um paradigma. É comum ouvir o termo “multiparadigma” quando nos referimos a esse tipo de linguagem, e isso traz alguns benefícios, pois permite perfis diferentes de desenvolvedores e sistemas utilizarem uma linguagem em comum.

Claro que um paradigma não é necessariamente melhor que o outro, mas dependendo das circunstâncias podemos utilizar um que seja mais otimizado para determinada aplicação. Algumas funcionalidades precisam alterar o estado de uma aplicação, não podendo ser escritas de forma declarativa, assim como os códigos declarativos que utilizamos podem ter uma implementação imperativa por baixo dos panos.

---

## a linguagem UML
Existe uma forma muito prática de ilustrar sistemas, controles de fluxo e outros comportamentos chamado UML. A UML é a Linguagem de Modelagem Unificada - do inglês Unified Modeling Language.

Ela consiste na padronização de algumas notações para facilitar o entendimento entre os times de desenvolvimento que eventualmente irão lidar com um determinado sistema.

Um dos diagramas mais comuns de ser representado utilizando a UML é o diagrama de classe. A função dele é representar as estruturas e relações entre as classes de um projeto e interfaces com outros sistemas. Aqui está um exemplo:
<p align="center">
  <img src="./slides/image.png">
</p>

Neste diagrama, representamos a existência de uma relação por uma reta e as associações são indicadas por setas. Os números que acompanham as retas indicam a quantidade de itens que estão se relacionando. No exemplo, um cliente pode possuir 0 ou mais contratos de aluguel, enquanto um contrato de aluguel só pode se referir a 0 ou 1 veículo alugado.

Existem outras versões de diagramas de classe que incluem, por exemplo, os tipos de variáveis dos dados associados, informações sobre tipos de dados abstratos, relações de herança e composição de classes e métodos que são implementados pelas classes.

Atualmente, a UML é mantida por um consórcio internacional que regula esse padrão. Existem diversos programas disponíveis que nos permitem descrever em um código próprio um diagrama e exportar as imagens que ilustram o sistema, como o PlantUML.