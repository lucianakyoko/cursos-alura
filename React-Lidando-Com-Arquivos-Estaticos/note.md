# REACT COM JAVASCRIPT: LIDANDO COM ARQUIVOS ESTÁTICOS

---

## Aula 01 - Explorando o projeto
Instalando o Sass
```
cd alura-space
npm install --save-dev sass
```

**CSS Modules**
O CSS Modules é um arquivo CSS no qual todos os nomes de classe e nomes de animação têm escopo local por padrão. Isso significa que você pode usar o mesmo nome de classe CSS em arquivos diferentes sem se preocupar com conflitos de nomes.

O React por padrão suporta CSS Modules sem nenhuma instalação adicional, utilizando a convenção de nomenclatura padrão de arquivos [nome].module.css. O uso de módulos css permitem um escopo do CSS criando automaticamente um nome de classe exclusivo no formato [nome-do-arquivo]_[nome-da-classe]__[hash].

Digamos que você tenha um componente de Botão e seu arquivo css é o Botao.module.css com o seguinte código CSS.
```
.erro {
    background-color: red;
}
```

e em outro arquivo de estilos, como o styles.css você também tenha uma classe com o mesmo nome, mas que altera a cor do texto.

```
.erro {
    color: blue;
}
```

Ainda assim é possível usar as duas classes em um mesmo arquivo, por exemplo:
```
import React from 'react';
import styles from './Button.module.css';
import './style.css'; 

export default function Botao () {
 return (
   <button className={styles.erro}>Erro</button>;
 )
}
```

Isso acontece porque utilizamos um módulo css no arquivo de estilos do Botão.

O resultado vai ser o seguinte:
```
<button class="Botao_erro_ax7yz">Erro</button>
```

O botão vai ter a cor de fundo vermelha, mas não terá a cor de seu texto azul, pois a classe associada a ele é diferente da classe erro de styles.css por mais que os nomes sejam os mesmos, o escopo do Botão é único.