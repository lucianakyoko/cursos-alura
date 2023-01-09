# REACT: COMO OS COMPONENTES FUNCIONAM

---

## Importando do GitHub
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