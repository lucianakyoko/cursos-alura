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