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

