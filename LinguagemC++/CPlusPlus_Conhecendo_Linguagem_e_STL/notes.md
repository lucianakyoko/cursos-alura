# Anotações do Curso de C++: Conhecendo a linguagem e a STL

---

Para compilar o programa em C++ 
```
g++ jogoadivinhacao.cpp -o jogoadivinhacao.out
```

-> jogoadivinhacao.cpp é o arquivo a ser compilado
-> jogoadivinhacao.out é o arquivo compilado

Para "rodar" o arquivo compilado
```
./jogoadivinhacao.out
```

---

## Imprimindo doubles
Há situações em que devemos imprimir valores decimais com um número definido de casas depois da vírgula, como por exemplo:

Para lidar com valores financeiros: devemos escrever R$ 12,50, com duas casas depois da vírgula, ao invés de apenas R$ 12,5

Para escrever resultados de contas: não se escreve que a média de uma sala na prova foi 7,62156, geralmente usamos apenas uma casa depois da vírgula, dizemos que a média foi 7,6

Desta forma, que linhas de código precisamos adicionar para que o cout imprima a pontuação seguindo esse padrão?
- Primeiramente, precisamos modificar o cout usando o método precision, colocando entre parênteses a quantidade de casas depois da vírgula que desejamos:
  ```
    cout.precision(2);
  ```
- Logo em seguida, para garantir que o número não aparecerá em notação científica, é necessário usar o marcador fixed:
  ```
    cout << fixed;
  ```

Deste modo, das próximas vezes que o cout for imprimir valores reais, ele sempre escreverá os valores com duas casas depois da vírgula.

---

## Como sortear valores
Para que o valor do número secreto variasse entre as execuções do nosso jogo, usamos as funções srand() e rand().
A primeira serve pra determinar a semente que vai ser usada na hora de gerar os valores pseudo-aleatórios do nosso programa, e a segunda para retornar um valor aleatório.

```
srand(time(NULL));
const int NUMERO_SECRETO = rand() % 100; 
``` 

Usamos a função time(NULL) como semente dos números aleatórios por ser uma função que está sempre mudando de valor.

Além disso, a função rand() pode retornar valores muito maiores que 99, por isso precisamos de algum jeito de diminuir esses valores grandes.

Para isso usamos a operação resto, denotada por %, como queremos valores de 0 a 99, basta tomarmos o resto da divisão do valor sorteado por 100, que desse modo sempre teremos um valor dentro dos limites desejados.

---


# Jogo da forca
- para compilar
```
  g++ forca.cpp -o forca.out
```

- para rodar o jogo
```
  ./forca.out
```

- usando a versão 11 do C++
```
  $ g++ forca.cpp -o forca.out -std=c++11
```

- usando make
```
  mingw32-make forca

  ./forca
```