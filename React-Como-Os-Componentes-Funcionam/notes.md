# REACT: COMO OS COMPONENTES FUNCIONAM

---

## AULA 01 - Importando do GitHub
**Git e Github**
Caso você não tenha conhecimento sobre git, não se preocupe! Neste curso não utilizaremos com frequência , mas para a sua carreira é muito importante entender como utilizar o Git e Github.


  - **Git** -  é a ferramenta utilizada pelos desenvolvedores para controlar as versões do seu código.
    Ao invés de você ter pastas diferentes com códigos parecidos, você terá branches com códigos parecidos!

  - **Branches** - seriam uma representação dessas pastas que você criaria sem o Git, e caso você queira ir para uma destas branches, você pode utilizar o comando git checkout, por exemplo:

    - git checkout projeto-inicial < estou na branch projeto-inicial
    - git checkout projeto-final < estou na branch projeto-final
    - git branch projeto-final-2 < criei uma nova branch projeto-final-2
    - git checkout projeto-final-2 < entrei na branch projeto-final-2 que eu acabei de criar
    - git branch < sem especificar nenhuma branch, o git me mostra todas as branches que eu tenho localmente
  
Para criar um projeto com git, primeiro você precisa saber se o projeto já contém o git, para fazer isto, tem 2 formas principais:

1. Olhando se na raiz do projeto existe uma pasta .git;
2. No terminal, escreva qualquer comando git (como o git branch, por exemplo) e veja se o terminal entende, se ele entender, o seu projeto contém git, se não, provavelmente aparecerá algo com not a git repository.

E para pegar um projeto que já tem git??
1. Para pegar um projeto que tem git, primeiro você precisa saber onde achar este projeto, certo? É aí que entra o Github.

**Github** - nada mais é do que um site que guarda projetos git. Estes projetos são chamados de repositórios, e você pode ter repositórios públicos ou privados.Todos os repositórios que você tem acesso podem ser clonados ou “forkados”.

Todo repositório pode ter um ou mais remotes, que nada mais são que link de repositórios online (como no Github) que você pode trocar informações, sendo pegar código novo ou enviar um código novo que está na sua máquina. O nome padrão do remote normalmente é origin, mas você pode adicionar o nome que você quiser em outros remotes, caso você queira fazer esta conexão.

**clone** - você copia o código para a sua máquina, porém o remote permanece o da pessoa que você clonou, ou seja, se você copiar o código do React por exemplo, o remote é o link do código real, do React. Como você não tem permissão para enviar código para o repositório oficial do React, fazer isto seria negado.

**fork** - faz uma cópia daquele repositório no seu Github! Ele não copia o código para a sua máquina, mas após esta cópia, você poderá fazer um clone do seu repositório (o repositório copiado via fork) e agora o remote estará apontando para o seu Github, não mais para o Github oficial!

---

## AULA 02 - O que são componentes
**Closures e o map**
Observe o código abaixo:
```
{colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} />)}
```

Primeiro destrincharemos esta linha de código e depois falaremos especificamente sobre o que ela tem a ver com o título.

Como estamos utilizando o .map, podemos deduzir que colaboradores é um array;
O .map aceita uma função como parâmetro, no nosso caso utilizamos uma arrow function para isto;
A arrow function não necessita de um nome, ou seja, ela é uma função anônima;
Como não temos chaves após a arrow(=>), sabemos que ela não tem um bloco de código, apenas o retorno;
Como não temos um bloco, sabemos que o retorno dela é o componente Colaborador.
Beleza, agora que conseguimos ter uma visão melhor, explica o que é closure!

Uma closure é um bloco dentro de uma função que nos permite colocar alguma informação dentro, ou seja, é o mesmo que um “bloco”, que é o que precisamos para colocar o console.log!

Veja estes 2 códigos:
```
<Componente onClick={() => executarFuncao()}
```

```
<Componente onClick={() => { executarFuncao() }}
```

Eles parecem muito parecidos, mas são diferentes! A diferença é que nesta arrow function, a primeira (sem as chaves) retorna a função e a segunda só a executa!

Na prática, isto não influencia em nada nesta parte do código, mas e aqui?
```
{colaboradores.map((colaborador, indice) => { <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} /> })}
```

O que acontece neste caso?

Neste caso, o código não funcionaria! O map necessita de um retorno, pois a diferença entre o map e o forEach é que o map muda o item de cada array, então se ele não recebe nenhum retorno, o map interpreta todos os itens como undefined, então, caso você queira utilizar um bloco (ou uma closure) dentro do map, você é obrigado a retornar o que você quer que ele mostre.

Beleza Luiz, mas no código não tá escrito return, como eu estou retornando algo que eu não digo que estou retornando?

Aí que está a magia da coisa, você só precisa dizer que está retornando algo se você precisar utilizar a closure! Caso você não queira, apenas utilizando parênteses ou simplesmente não colocando nada, você já diz que está retornando!

Veja este código:
```
pessoas.map(pessoa=> (
 <Pessoa nome={pessoa.nome} />
))
```

Os parênteses neste caso são iguais a não colocar nada, mas ele permite que você tenha um return de mais de uma linha! Porém como não temos uma closure, podemos apenas colocar os parênteses, sem o return! Caso você queira fazer algum cálculo, pode fazer algo assim:

```
pessoas.map(pessoa => {
  const maiorDeIdade = pessoa.idade > 18;
  return (
   <Pessoa nome={pessoa.nome} maiorDeIdade={maiorDeIdade} />
 )
})
```

Neste caso, você está utilizando o closure (as chaves) e um return com mais de uma linha (com os parênteses) de uma vez só! Agora olhe o mesmo código:

Sem closure e sem return de mais de uma linha:
```
pessoas.map(pessoa => <Pessoa nome={pessoa.nome} maiorDeIdade={pessoa.idade > 18} />)
```
Sem close e com return de mais de uma linha:
```
pessoas.map(pessoa => (
 <Pessoa nome={pessoa.nome} maiorDeIdade={pessoa.idade > 18} />
))
```

Então as chaves, os parênteses ou nada têm significado neste caso, e você agora sabe de todos eles!

---

## Aula 03 - Como o React vê um componente

**Virtual DOM**
Durante o vídeo passado tocamos algumas vezes no termo Virtual DOM, mas afinal, o que é isto?

Virtual DOM é algo vital dentro do React, e é uma das coisas que fez o React ser tão famoso.Você provavelmente deve ter percebido como o React é inteligente e com rapidez ele atualiza o DOM? Então, isto tem tudo a ver com Virtual DOM!

Lembra que os componentes são vistos como objetos no React? O Virtual DOM armazena estes objetos, e quando algo muda dentro desta árvore de objetos, o React compara o DOM real com o que a gente quer que mude (que a gente chama de candidato) e atualiza apenas o que for mudado!

Vamos ver um exemplo:

Se a gente mudar o input de cor para uma nova cor, o que acontece?

1. O input executa o evento onChange;
2. O onChange executa a função mudarCor;
3. O mudarCor execute o setTimes;
4. O setTimes muda o state;
5. O React percebe a mudança de state e compara o Virtual DOM com o DOM real, mudando as partes necessárias (no caso tudo que está relacionado com time.cor).

Neste momento o React tem uma “cópia” da árvore antes do evento e o “candidato”, que é a árvore com as mudanças após o evento, e compara o que deve ser atualizado por causa do evento, e a partir daí ocorre as mudanças!


