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