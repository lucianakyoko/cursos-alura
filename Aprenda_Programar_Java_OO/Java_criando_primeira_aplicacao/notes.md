# Anotações do curso

---

## Links importantes:
- Leitura do artigo: [Java: Tudo o que você precisa saber sobre a linguagem](https://www.alura.com.br/artigos/java)
- Leitura do artigo: [IntelliJ IDEA: dicas e truques para usar no dia a dia](https://www.alura.com.br/artigos/intellij-idea-dicas-truques-usar-no-dia-a-dia)
- Leitura do artigo: [JVM: conhecendo o processo de execução de código](https://www.alura.com.br/artigos/jvm-conhecendo-processo-execucao-de-codigo)

---

## operadores
### Operadores aritméticos:
Os operadores aritméticos são usados para realizar operações matemáticas básicas. São eles:
- "+" (adição)
- "-" (subtração)
- "*" (multiplicação)
- "/" (divisão)
- "%" (resto da divisão)

### Operadores relacionais:
Os operadores relacionais são usados para comparar valores. Eles retornam um valor booleano (verdadeiro ou falso). Trabalharemos melhor com eles quando estivermos na aula de condicionais, onde vamos modificar o fluxo da aplicação dada alguma condição. São eles:
- "==" (igual a)
- "!=" (diferente de)
- ">" (maior que)
- ">=" (maior ou igual a)
- "<" (menor que)
- "<=" (menor ou igual a)

### Operadores lógicos:
Esses operadores são usados quando queremos verificar duas ou mais condições e/ou expressões na aplicação. Eles fazem a comparação de valores booleanos e retornam também um resultado booleano.

- AND (&&)
- OR (||) 
- NOT (!)

### Operadores de incremento:
Além dos operadores citados anteriormente, o operador de incremento é usado para aumentar o valor de uma variável em 1. Existem dois tipos de operadores de incremento: 
- o operador de pré-incremento (++variavel)
- operador de pós-incremento (variavel++).


---

## convenção de código
Aqui estão algumas das principais convenções de código do Java:

Nomes de classes devem começar com letra maiúscula e usar a convenção PascalCase (também conhecida como Upper CamelCase).

Exemplo: MinhaClasse.
Nomes de métodos devem começar com letra minúscula e usar a convenção camelCase.

Exemplo: meuMetodo().
Nomes de constantes devem ser totalmente em letras maiúsculas, separadas por underline.

Exemplo: MINHA_CONSTANTE.
Nomes de variáveis devem começar com letra minúscula e usar a convenção camelCase.

Exemplo: minhaVariavel.
Todas as linhas de código devem ter no máximo 80 caracteres de largura para facilitar a leitura.

Recomenda-se usar espaços em branco para separar operadores, palavras-chave e elementos de controle de fluxo.

Exemplo: if (condicao) {.
Use comentários para documentar seu código, explicando o que ele faz e por que ele faz isso. Comentários devem ser claros e concisos.

---

## tipos primitivos
são os tipos de dados mais básicos e fundamentais da linguagem. Eles são utilizados para representar valores simples e são definidos pela própria linguagem.
Java possui oito tipos primitivos diferentes: boolean, byte, char, short, int, long, float e double. Cada um desses tipos possui suas próprias características e faixa de valores permitidos, conforme será descrito a seguir.

- **boolean** ->O tipo boolean é utilizado para representar valores lógicos, podendo assumir apenas dois valores: true ou false. É utilizado em expressões condicionais, loops e outros casos onde se deseja avaliar se uma determinada condição é verdadeira ou falsa.

- **byte** -> O tipo byte é utilizado para representar valores numéricos inteiros de 8 bits. Ele possui uma faixa de valores de -128 a 127.

- **char** -> O tipo char é utilizado para representar caracteres individuais. Ele pode armazenar qualquer caractere Unicode e é representado por aspas simples ('').

- **short** -> O tipo short é utilizado para representar valores numéricos inteiros de 16 bits. Ele possui uma faixa de valores de -32.768 a 32.767.

- **int** -> O tipo int é utilizado para representar valores numéricos inteiros de 32 bits. É um dos tipos de dados mais utilizados para representar números inteiros em Java e possui uma faixa de valores de -2.147.483.648 a 2.147.483.647.

- **long** -> O tipo long é utilizado para representar valores numéricos inteiros de 64 bits. Ele é utilizado para representar valores inteiros muito grandes e possui uma faixa de valores de -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807.

- **float** -> O tipo float é utilizado para representar valores numéricos de ponto flutuante, ou seja, valores com casas decimais, sendo que ocupa 32 bits de memória. Ele pode representar números decimais com até sete dígitos e tem uma precisão limitada, o que significa que ele pode arredondar os números se eles forem muito grandes ou muito pequenos.

- **double** -> O tipo double é similar o float, entretanto ele ocupa 64 bits de memória e pode representar números decimais com até 15 dígitos.

---

## strings e text blocks
### Comparação de Strings
Em Java, é possível comparar duas Strings utilizando o operador ==. Porém, esse operador verifica apenas se as duas variáveis apontam para o mesmo objeto na memória, e não se o conteúdo das Strings é igual. Para comparar o conteúdo de duas Strings, é necessário utilizar o método equals(). Por exemplo:
```
String senha = "12345";
if (senha.equals("12345")) {
    System.out.println("Acesso autorizado!");
} else {
    System.out.println("Senha incorreta.");
}
```

### Text Block
Introduzido na versão 15 do Java, o Text Block é uma nova forma de representar Strings que facilitam a escrita de textos com múltiplas linhas. Em vez de utilizar aspas duplas para delimitar o texto e inserir quebras de linha manualmente, ou utilizar concatenações, é possível utilizar uma sintaxe mais simples que permite inserir o texto exatamente como ele é.

Para criar um Text Block em Java, basta utilizar três aspas duplas para delimitar o texto, seguidas de uma quebra de linha. Por exemplo:
```
String mensagem = """
                  Olá, mundo!
                  Este é um Text Block.
                  Ele permite escrever textos com múltiplas linhas
                  sem precisar usar caracteres de escape ou quebras de linha manualmente ou concatenações.
                  """;
```

---

## formatação de textos
Em Java, é possível formatar textos e números de diversas maneiras. Isso pode ser útil em diversas situações, como ao exibir valores para o usuário de uma maneira mais legível.
Uma das maneiras mais comuns de se formatar textos em Java é utilizando o método format(), da classe String. Esse método permite formatar um texto utilizando diversos placeholders, que são representados pelo caractere % seguido de uma letra que indica o tipo de dado que será inserido no placeholder. Por exemplo, %s indica que uma String será inserida no placeholder, %d indica um valor inteiro e %f indica um valor de ponto flutuante. Vamos ver um exemplo:
```
String nome = "Maria";
int idade = 30;
double valor = 55.9999;
System.out.println(String.format("Meu nome é %s, eu tenho %d anos e hoje gastei %.2f reais", nome, idade, valor));
```

Nesse exemplo, os valores das variáveis nome, idade e valor são passados como parâmetros para o método String.format, substituindo os placeholders %s, %d e %.2f, respectivamente. O resultado impresso será "Meu nome é Maria, eu tenho 30 anos e hoje gastei 55,99 reais". Perceba também que o placeholder %.2f indica que o valor deve ser formatado com duas casas decimais.

Esse exemplo do que foi feito para o String.format também pode ser usado com Text Block, onde usa-se o método que citei em aula, o formatted, para informar as variáveis que deverão ser utilizadas no lugar dos placeholders. Veja esse exemplo:

```
String nome = "João";
int aulas = 4;

String mensagem = """
                  Olá, %s!
                  Boas vindas ao curso de Java.
                  Teremos %d aulas para te mostrar o que é preciso para você dar o seu primeiro mergulho na linguagem!
                  """.formatted(nome, aulas);

System.out.println(mensagem);
```

O resultado impresso será:
```
Olá, João!

Boas vindas ao curso de Java.

Teremos 4 aulas para te mostrar o que é preciso para você dar o seu primeiro mergulho na linguagem!
```

---

## Casting
Casting é um recurso utilizado em Java para converter um tipo de dado em outro. Essa conversão pode ser feita de forma automática pelo compilador (conversão implícita), quando o tipo de dado de destino é compatível com o tipo de dado de origem, ou de forma manual (conversão explícita), utilizando o operador de casting.

O casting é utilizado para permitir que tipos de dados incompatíveis possam ser utilizados em uma mesma operação ou expressão. Por exemplo, se um método espera um parâmetro do tipo int e o valor que se deseja passar é do tipo double, é necessário fazer um casting para converter o valor em int.

### Casting implícito
O casting implícito é realizado automaticamente pelo compilador quando o tipo de dado de origem é compatível com o tipo de dado de destino. Por exemplo, é possível atribuir um valor de tipo int a uma variável do tipo double, pois o tipo double é maior e suporta todos os valores que o tipo int pode armazenar:
```
int x = 10;
double y = x; // casting implícito
```

### Casting explícito
O casting explícito é realizado quando o tipo de dado de origem é incompatível com o tipo de dado de destino. Nesse caso, devemos utilizar o operador de casting para realizar a conversão:
```
double x = 10.5;
int y = (int) x; // casting explícito
```

No exemplo anterior, o valor da variável x é convertido em um valor inteiro utilizando o casting explícito. É importante notar que, neste caso, a parte decimal será descartada e o valor atribuído à variável y será 10.

Abaixo tem uma tabela, onde você pode visualizar mais facilmente as conversões que são implícitas e as que necessitam ser feitas de forma explícita.

| De/Para | byte | short | char | int | long | float | double |
| --- | --- | --- | --- | --- | --- | --- | --- |
| byte | --- | Impl. | (char) | Impl. | Impl. | Impl. | Impl. |
| short | (byte) | --- | (char) | Impl. | Impl. | Impl. | Impl. |
| char | (byte) | (short) | --- | Impl. | Impl. | Impl. | Impl. |
| int | (byte) | (short) | (char) | --- | Impl. | Impl. | Impl. |
| long | (byte) | (short) | (char) | (int) | --- | Impl. | Impl. |
| float | (byte) | (short) | (char) | (int) | (long) | --- | Impl. |
| double | (byte) | (short) | (char) | (int) | (long) | (float) | --- |

