# TypeScript parte 1: Evoluindo seu JavaScript

---

## Class 01 - Por que usar TypeScript?
A pasta ```dist``` do nosso projeto é a pasta que será compartilhada com o navegador por meio de um servidor web. Para subir esse servidor, usaremos o comando: ```npm run server```, que abrirá automaticamente o navegador padrão definido no nosso sistema operacional com o projeto.

### Importação de módulo nativo do ECMAScript
O atributo ```type="module"``` indica para o navegador que o arquivo a carregado deve ser tratado com um módulo e não um script. E dentro do arquivo package.json, acrescentar o código ```"type": "module"```

```
<script type="module" src="app/app.js"></script>
```

### Sobre o escopo de um módulo
- Tudo o que for declarado dentro de um módulo estará confinado nesse módulo, ao menos que o desenvolvedor decida exportar uma ou mais funcionalidades.
- A pessoa desenvolvedora pode escolher quais funcionalidades expor

### ES2015 e classes
No paradigma da orientação a objetos criamos a representação de algo do mundo real em nosso programa através de modelos e esses modelos são definidos através de classes. Sendo assim, para criar uma classe usando o ECMASCRIPT2015 usamos a sintaxe:

```
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
```

---

## Class 02 - TypeScript e Compilador
Para realizar a instalação do TypeScript, vamos executar o seguinte comando no terminal:
```npm install typescript@4.2.2 --save-dev``` a versão 4.2.2 é a que será usado durante as aulas, e o save dev significa que o que estamos instalando é uma dependencia do NodeJS de desenvolvimento, ou seja, não será levado para a produção.

### Sobre o compilador do TypeScript:
 - Podemos passar configurações especiais para o compilador através do arquivo tsconfig.json
 - É instalado através do npm
 - O uso do Node.js não é opcional, pois o compilador depende desta plataforma para funcionar, inclusive é baixado pelo seu gerenciador de pacotes npm. Além disso, o código TypeScript precisa ser traduzido/convertido para um código em ECMASCRIPT para que seja entendido pelo navegador. Lembre-se que apenas ECMASCRIPT é suportado pelo navegador.

### Configuração básica do compilador:
 Apesar de estarmos utilizando o VS Code e ele já fazer a integração com o TypeScript, se faz necessário realizar a configuração do compilador pois o VS Code não gera os arquivos, converte ou compila os arquivos TypeScript da pasta "app" e joga dentro da pasta "dist".

    - dentro da raiz do projeto, criar um arquivo chamado ```tsconfig.json```
    - dentro desse arquivo, colocar o código abaixo:
    ```
    {
        "compilerOptions": {
            "outDir": "dist/js",
            "target": "ES6"
        },
        "include": [
            "app/**/*"
        ]
    }
    ```
    A propriedade "target" indica para o compilator tsc (TypeScript Compiler) para qual versão do Javascript o código escrito em TypeScript deve ser compilado. Isso significa que o resultado final será arquivos Javascript sem qualquer referência para a sintaxe do Typescript.
    O navegador só entende a linguagem JavaScript, desta maneira, todo código TypeScript precisa ser compilado para uma sintaxe compatível.

    - no arquivo package.json, dentro do item "scripts" colocar o comando ```"compile": "tsc"```

### Aprimorando a configuração:
 Tudo que está dentro de "app" vai ser compilado de arquivo "ts" para arquivo "js".

 E ele vai respeitar a mesma estrutura de árvore, tanto isso é verdade que você vai chegar em "dist" agora, vai apagar a pasta "js", vou executar o compilador de novo, ele vai executar e ele vai gerar a pasta "js > models > app" usando a mesma estrutura de pastas que eu tenho aqui. Se "app" está dentro de "app", meu "app" vai ficar dentro de "js". Se meu "negociação" está dentro de "models" vai ficar dentro de "models".


Não faz sentido o compilador gerar arquivos "js" enquanto hover um problema com nosso código ts. Para resolvermos isso, iremos:
- abrir novamente o arquivo tsconfig.json
- dentro do item "CompilerOptions", acrescentar o comando ```"noEmitOnError": true``` isso significa que não será gerado o arquivo js enquanto o nosso arquivo ts não estiver passando na compilação 

### Automatizando a compilação de arquivos:
No arquivo package.json, dentro do item "scripts" vamos colocar o comando ```"watch": "tsc -w"```, esse comando faz com que o nosso compilador fique monitorando o nossos arquivos dentro "app/**/*" . Primeiro ele faz uma compilação inicial e depois fica observando as alterações.

Para fazer o compilador e servidor rodarem ao mesmo tempo:
 - vamos adicionar a dependencia "concurrently" na versão 6.0.0 e adicionar no arquivo package.json, dentro do item scripts, o seguinte comando:

 ```
    "start": "concurrently \"npm run watch\" \"npm run server\""
 ```

 - agora, basta rodar o comando ```npm run start ``` para rodar tanto o servidor quanto o compilador com um único comando.


### TypeScript e classes:
O TypeScript é um superset da ES2015, ou seja, além de suportar os recurso da linguagem desta versão, adiciona outros. Um exemplo é o suporte ao modificador private.

O código abaixo é um exemplo de  um erro de compilação do TypeScript de acesso indevido a uma propriedade privada.

```
    class Pessoa {

        private nome;
        idade;

        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }
    }

    let pessoa = new Pessoa('Barney', 18);
    pessoa.nome = 'Martin';
```

A propriedade nome é declarada com o modificador private, dessa forma, apenas métodos da própria classe podem acessá-la.

---

## Class 02 - TypeScript e Compilador
### Sobre o tipo any:
    - Por padrão, é assumido automaticamente pelo TypeScript quando não definimos o tipo das nossas variáveis.
    - É possível desativar o tipo implícito any passando uma configuração especial para o compilador no arquivo tsconfig.json. Isso fará com que o compilador emita um erro em todos os locais que o tipo any foi adotado implicitamente.
    ```
        "compilerOptions": {
            "noImplicitAny": true
        },
    ```
    - Variáveis do tipo any podem ter uma atribuição de qualquer tipo conhecido no mundo TypeScript. Como o nome do tipo indica, any pode ser qualquer coisa.
    -  Variáveis declaradas com o tipo any, por poderem ser qualquer tipo, não permitem que IDE's e editores integrados com TypeScript infiram métodos e funções específicas de um tipo.

### Conversão de data:
A string passada pelo construtor deve ter o ano, mês e dia separados por vírgula.
 cria um objeto Date a partir de uma string: ```const date = new Date('2021,2,20');```

### Sobre Array:
Opções que declaram um array corretamente em TypeScript, assumindo que a configuração noImplicitAny está definida com o valor true:
 - ```let nomes: Array<string> = [];```
 - ```let idades: Array<Number> = [1, 2, 3];```

### Somente leitura:
Maneira para declarar um array e que não disponibilize a remoção ou inclusão de novos items.

```
    const nomes: ReadonlyArray<string> = ['a', 'b', 'c'];
```

--- 

## Class 05 - Simplificando nosso código
### Construtor e atalho:
Observe a declaração de classe abaixo:
```
export class Fatura {
    private criadaEm: Date;
    private quantidade: number;
    private valor: number;

    constructor(
        criadaEm: Date, 
        quantidade: number, 
        valor: number
    ) {
            this.criadaEm = criadaEm;
            this.quantidade = quantidade;
            this.valor = valor;
    }
}
```

A mesma classe pode ser declarada utilizando o atalho que o TypeScript possui:
```
export class Fatura {
    constructor(
        private criadaEm: Date, 
        private quantidade: number, 
        private valor: number
    ) {}
}
```

-> Isso: ```Array<Negociação>``` é a mesma coisa que: ```Negociacao[]```
-> Isso: ```ReadonlyArray<Negociacao>``` é a mesma coisa que: ```readonly Negociacao[]```
-> Isso: 
```export class Negociacao {
        constructor(
            private _data: Date, 
            private _quantidade: number, 
            private _valor: number
        ) {}

        get data(): Date {
            return this._data;
        }

        get quantidade(): number {
            return this._quantidade;
        }

        get valor(): number {
            return this._valor;
        }

        get volume(): number {
            return this._quantidade * this._valor;
        }
    }``` 
    
    é a mesma coisa que:
    
    ```
        export class Negociacao {
            constructor(
                public readonly data: Date, 
                public readonly quantidade: number, 
                public readonly valor: number
            ) {}

            get volume(): number {
                return this.quantidade * this.valor;
            }
        }
    ```