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

---

## Aula 04 - Lidando com imagens

Durante o curso não utilizamos nenhuma imagem no formato .svg. Contudo, arquivos svg’s são muito comuns em aplicações web, pois eles são utilizados para criar logotipos, ícones e outros elementos interativos na página.

Além disso, utilizar svg’s é altamente recomendado sempre que possível, pois eles podem ser pesquisados, indexados, e possuem altíssima qualidade, não comprometendo a resolução em outros tamanhos de telas.

Você pode adicionar svg’s em suas aplicações da mesma forma que importa imagens e arquivos css
```
import React from 'react'
import logo from '../assets/logo.svg'
import style from './Cabecalho.module.scss'

export default function Cabecalho() {
  return (
    <div className={style.header}>
        <img src={logo} alt="Logotipo da Alura Space" />
… // código oculto
    </div>
  )
}
```

Mas sabia que é possível adicionar svg’s como componentes e não como imagens?

É isso aí! Segundo a [documentação](https://create-react-app.dev/docs/adding-images-fonts-and-files) do React você pode importar svg’s diretamente como componentes React, da seguinte forma:
```
import React from 'react'
import { ReactComponent as Logo } from './assets/Logo.svg';
import style from './Cabecalho.module.scss'

export default function Cabecalho() {
  return (
    <div className={style.header}>
      {/* Agora a logotipo é um componente React */}
      <Logo />
    </div>
  );
}
```

Ao importar um svg como componente você deve usar a notação de componente <Logo />.

O nome de importação ReactComponent informa ao Create React App que você deseja um componente React que renderize um SVG. As vantagens de utilizar um svg como um componente é que você não precisa carregar o arquivo svg como um arquivo separado.

As duas formas de importação estão corretas, mas na segunda forma você renderizará um componente que é um svg puro, enquanto que na primeira forma será uma imagem que renderiza um svg. Do ponto de vista de compilação, é bem melhor a segunda forma.

---

## Aula 05 - Finalizando o projeto

**Absolute Imports**
Geralmente, quando queremos importar arquivos como imagens e estilos css que estão a níveis acima do diretório onde queremos fazer a importação, fazemos dessa maneira:
```
import nome-da-imagem from '../../../assets/imagens/nome da imagem'
```
Voltamos vários níveis de pastas para conseguir acessar o arquivo que desejamos importar. Mas e se um dia esse caminho mudar? Não vai quebrar nada na aplicação? Provavelmente sim! Essas importações múltiplas, relativas e aninhadas foram padrão por muito tempo e são muito difíceis de gerenciar.

É por isso que atualmente se usa absolute imports (importações absolutas) para tornar o código muito mais limpo, legível e gerenciável. As vantagens de se uilizar a importação absoluta são:

O código se torna mais limpo;
A escrita do código se torna mais fácil;
Você não precisa se preocupar com os ../../../;
Você consegue localizar facilmente um componente ou arquivo importado devido ao posicionamento absoluto.
E como eu faço para usar absolute imports no meu projeto, Neilton?

Primeiro você deve criar um arquivo chamado jsconfig.json na raiz do seu projeto com o seguinte código:
```
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

Essas poucas linhas simples dirão à configuração do Create React App para usar seu diretório src como base para suas importações, para que você possa importar arquivos e componentes com caminhos absolutos.

Com isso configurado, você pode fazer a importação do exemplo inicial da seguinte forma:
```
import nome-da-imagem from '/assets/imagens/nome da imagem'
```

Muito fácil né? Agora você não precisa mais se preocupar com as importações relativas, basta apenas importar seus arquivos de forma direta como no exemplo acima. Se quiser saber mais, neste [link](https://javascript.plainenglish.io/why-and-how-to-use-absolute-imports-in-react-d5b52f24d53c) você acessa um artigo explicando porquê e como usar absolute imports.