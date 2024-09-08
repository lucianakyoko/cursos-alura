# Anotações do curso

## arrays truthy ou falsy
Em JavaScript, os termos "truthy" e "falsy" referem-se à avaliação de valores de acordo com seu contexto booleano. Um valor "falsy" é aquele que é considerado falso quando avaliado como um booleano, enquanto um valor "truthy" é considerado verdadeiro nesse mesmo contexto.

Valores "falsy" em JavaScript são aqueles que, ao serem convertidos para booleanos, são interpretados como falso. Isso inclui:
- Zero: O valor numérico zero (0);
- String vazia (''): Uma string sem nenhum caractere;
- NaN: Representa "Not-A-Number", frequentemente resultante de operações matemáticas inválidas;
- null: Indica a ausência intencional de um valor ou referência nula;
- undefined: Indica uma variável que foi declarada, mas ainda não teve um valor atribuído.

Valores "truthy", por outro lado, são valores que, quando convertidos para booleanos, são interpretados como verdadeiros. Estes incluem:
- Strings não vazias: Qualquer string que contenha pelo menos um caractere;
- Números diferentes de zero: Qualquer número que não seja zero, incluindo números negativos e decimais;
- Arrays: Mesmo um array vazio é considerado "truthy";
- Objetos: Objetos em JavaScript são "truthy", mesmo se estiverem vazios;

---

## diferença entre i++ e ++i
i++ e ++i são ambos operadores de incremento usados para aumentar o valor de uma variável i em 1. No entanto, a diferença entre eles está na forma como o aumento é aplicado e quando o valor é retornado.

### i++
O operador i++ é conhecido como pós-incremento. Ele primeiro retorna o valor atual de i e depois incrementa i em 1 unidade. Ou seja, o valor atual de i é usado na expressão em que i++ está presente, e após isso, i é aumentado em 1.

### ++i
O operador ++i é conhecido como pré-incremento. Ele primeiro incrementa i em 1 unidade e depois retorna o novo valor de i. Ou seja, o valor de i é incrementado imediatamente, e então o valor atualizado é usado na expressão em que ++i está presente.

Portanto, a principal diferença entre i++ e ++i é o momento em que ocorre o incremento: i++ retorna o valor atual de i e depois incrementa, enquanto ++i incrementa i primeiro e depois retorna o novo valor. Escolher entre eles depende do contexto em que são usados e da necessidade de uso imediato do valor atualizado da variável.

