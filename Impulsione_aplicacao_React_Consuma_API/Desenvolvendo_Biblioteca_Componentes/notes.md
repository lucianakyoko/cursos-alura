# Anotações do Curso React: desenvolvendo uma biblioteca de componentes

---

[Projeto inicial](https://github.com/viniciosneves/ds-alurabooks-base)

Depois de clonar o projeto, você precisa alterar dois campos do arquivo package.json:

"name": altere para um nome customizado. O valor atual é "ds-alurabooks-base" e esse valor precisa ser único, caso contrário a gente não consegue publicar no NPM.
"author": coloque o seu nome, afinal, é o seu pacote que vai ser publicado no fim do curso!
Nesse projeto, nós não vamos utilizar o npm, mas sim o yarn.

Caso você não tenha ele disponível, execute o comando:

```npm i -g yarn```

E, logo depois, o seguinte comando (lembre de entrar no diretório raiz do projeto antes): ```yarn```

---

## Testando localmente
1. parar o comando que estava rodando o yarn storybook, e vou pedir um ```yarn build```

Enquanto ele está compilando, dentro do nosso projeto tem uma pasta chamada “example”, dentro dessa pasta tem um “package.json”, e você só confere na parte de devDependencies, na dependência chamada parcel, a versão tem que estar fixa em 1.12.3. Então, se por acaso, na sua máquina tiver um acento circunflexo, você apaga sem medo, e deixa o 1.12.3. Tem que ser essa versão específica.

Vou salvar, vou fechar o “package.json”, agora que ele já fez o build, eu vou entrar em “example”, vou fazer um yarn, deixar ele instalar, e enquanto ele faz o yarn, eu tenho o “index.tsx” importando aquele componente de exemplo. Mas eu não quero o componente Thing, eu quero o componente AbBotao, repara que ele já fez a sugestão, e eu vou só copiar e colar para utilizar o botão, ao invés daquele componente Thing.

 Voltando para o terminal, ele já fez o yarn, agora podemos fazer o yarn start, ele vai subir, ele está rodando no localhost:1234, ele fez o build, vou copiar, vou para o nosso navegador, vou abrir uma aba nova “localhost:1234”, e vou até abrir o console, ele está me reclamando alguma coisa relacionada ao React 18, que não precisamos nos preocupar nesse caso, que é a nossa aplicação de exemplo, então eu vou limpar essa reclamação, e ele tem o nosso componente com o nosso hover.

Ele não tem nenhum comportamento, mas está disponível para utilizarmos. Então, é assim que a pessoa que consumir a nossa biblioteca vai importar e interagir com esse componente. Então, facilmente conseguimos fazer um build e um teste local de como a nossa biblioteca de componentes vai se comportar em um projeto em React.

Então, agora que já fechamos o ciclo que é iniciar o projeto, criar o primeiro componente, criar a primeira história, já evoluir o primeiro componente para ele ter os estilos necessário, fizemos isso utilizando o Styled. Depois que fizemos tudo isso, fizemos um build da aplicação, testamos localmente, e o nosso pacote funciona, conseguimos importar o componente que criamos.

Com tudo isso já em vista, já pronto, podemos ir para o próximo passo. E na próxima aula, precisamos de alguma forma versionar o nosso código e linkar o que temos, com o próprio NPM, ou seja, precisamos criar um pacote no NPM, e é isso que vamos fazer, criar o repositório no GitHub, subir o nosso código no GitHub, para termos uma versionamento, e então, vamos subir para o NPM essa biblioteca que acabamos de criar.

Uma vez feito isso, podemos ir em um projeto React real, e fazer um yarn add, ou um npm install, e utilizar essa biblioteca. Então, o nosso próximo passo é publicar isso de alguma forma.

---

