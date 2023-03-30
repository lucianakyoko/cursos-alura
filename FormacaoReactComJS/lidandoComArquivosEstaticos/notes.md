# ANOTAÇÕES - CURSO REACT COM JAVASCRIPT: LIDANDO COM ARQUIVOS ESTÁTICOS

--- 

<p align="center">
  <a href="#-aula-1">Aula 1</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-2">Aula 2</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-3">Aula 3</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-4">Aula 4</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aula-5">Aula 5</a> 

</p>

---

## 📌 AULA 1
  [Protótipo](https://www.figma.com/file/Y1W8HJHKqlUdDFeWi8e4cz/Alura-Space-%7C-React%3A-arquivos-est%C3%A1ticos?node-id=89%3A4)

### CSS Modules:
O CSS Modules é um arquivo CSS no qual todos os nomes de classe e nomes de animação têm escopo local por padrão. Isso significa que você pode usar o mesmo nome de classe CSS em arquivos diferentes sem se preocupar com conflitos de nomes.

O React por padrão suporta CSS Modules sem nenhuma instalação adicional, utilizando a convenção de nomenclatura padrão de arquivos [nome].module.css. O uso de módulos css permitem um escopo do CSS criando automaticamente um nome de classe exclusivo no formato 
```[nome-do-arquivo]_[nome-da-classe]__[hash]```

Documentação [CSS Modules](https://github.com/css-modules/css-modules).


## 📌 AULA 2 - Avançando nos componentes
## 📌 AULA 3 - Fontes e estilos
### @font-face
  O @font-face surgiu para permitir que pessoas desenvolvedoras possam adicionar fontes sem se limitar às chamadas “fontes seguras”, como as do Google. Com o @font-face podemos especificar o nome de uma fonte instalada localmente. Se a fonte não estiver instalada no localmente na máquina do usuário, automaticamente ela é baixada no servidor e exibida ao usuário.
  Para utilizar o @font-face no React você precisa criar uma pasta chamada fonts.

  Feito isso, você pode baixar as fontes desejadas e colocá-las nessa pasta fonts.

  Em seguida, você deve adicionar essas fontes ao arquivo index.js de seu projeto, dessa forma: ```import './fonts/nome-da-fonte.ttf';```

  No arquivo index.css (ou a extensão de pré-processador que está usando), você pode usar o @font-face:
  ```
    @font-face {
      font-family: "NomePersonalizadoDaFonte";
      src: local("NomePersonalizadoDaFonte"),
        url("../assets/fontes/nome-da-font.ttf") format("truetype");
      font-weight: 500;
      font-display: swap;
    }
  ```


## 📌 AULA 4
## 📌 AULA 5