# TypeScript parte 2: Avançando na linguagem

## Class 01 - Elaborando uma solução de view
### Criando elementos do DOM dinamicamente  
 - Utilizando a API do DOM, podemos criar elementos dinamicamente através de document.createElement ou;
 - Através da propriedade innerHTML que recebe uma string que é convertida para elementos do DOM.

---

## Class 02 - Herança e reaproveitamento de código
### Utilizando Herança:
Exemplo: Um jogo desenvolvido em TypeScript com as seguintes classes:
 - Humanoide,
 - Humano,
 - Alienigena

Em termos de design, tanto Humano quanto Alienigena são humanóides, por isso herdam dessa classe:

```
  class Humanoide {
    private _energia: number = 100;
    private _nome: string = '';

    get energia() {
      return this._energia;
    }

    get nome() {
      return this._nome;
    }

    set nome(nome) {
      this._nome = nome;
    }
}
```

```
  class Humano extends Humanoide {
    private _idade: number = 0;

    get idade() {
      return this._idade;
    }

    set idade(idade) {
      this._idade = idade;
    }
  }
```

```
  class Alienigena extends Humanoide {
    private _energiaExtra: number = 100;

    get energia() {
      return this._energia + this._energiaExtra;
    }
  }
```

-> A classe Alienigena não compila, pois tenta acessar no através do seu getter get energia() uma propriedade privada da classe pai.

### Modificador de acesso:
Temos o seguinte código:
```
  class Pai {
    private nome = '';
  }

  class Filha extends Pai {

  }

  const filha = new Filha();
  console.log(filha.nome);
```
Sobre o código acima:
  - Mudar o modificador de acesso da propriedade nome de private para protected é uma solução garantindo apenas que classes filhas tenham acesso à propriedade.
  - Mudar o modificador de acesso da propriedade nome de private para public é uma solução, porém qualquer parte do sistema poderá acessar essa propriedade.

### Dois tipos genéricos:
Exemplo:
Fernando utiliza muito o IndexedDB, um banco de dados que vive no próprio navegador. Com forte influência de padrões de projeto, decidiu criar um GenericDAO:

```
  class GenericDAO {
    adiciona(objeto: Negociacao): number {
      /* implementação do método omitida */
    }

    apaga(objeto: Negociacao): void {
      /* implementação do método omitida */
    }

    buscaPorId(id: number): Negociacao {
      /* implementação do método omitida */
    }

    atualiza(objeto: Negociacao): void {
      /* implementação do método omitida */
    }

    listaTodos(): Negociacao[] {
      /* implementação do método omitida */
    }
  }

// exemplo de uso:

  let dao = new GenericDao();
  let negociacao = new Negociacao(new Date(), 1, 200);

// recebe o ID da negociação gerada

  let id = dao.adiciona(negociacao);
  let negociacaoBuscada = dao.buscaPorId(id);
```

O código escrito por Fernando não é genérico, pois está amarrado ao tipo Negociacao. Além disso, o ID do elemento no IndexedDB pode ser um número ou uma string, e esse tipo está fixo na definição da classe.

Para tornar a classe realmente genérica, permitindo persistir outros tipos, inclusive a definir um outro tipo de ID:
Pode indicar mais de um tipo genérico. No caso T, será o tipo da classe e K, o tipo do ID.

```
  class GenericDAO<T, K> {
    adiciona(objeto: T): K {
      /* implementação do método omitida */
    }

    apaga(objeto: T): void {
      /* implementação do método omitida */
    }

    buscaPorId(id: K): T {
      /* implementação do método omitida */
    }

    atualiza(objeto: T): void {
      /* implementação do método omitida */
    }

    listaTodos(): T[] {
      /* implementação do método omitida */
    }
  } 
``` 