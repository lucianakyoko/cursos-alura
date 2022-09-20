## Biblioteca
É um conjunto de códigos para executar tarefas específicas. Todo programa é constituído por partes menores, que são as bibliotecas. Elas podem ser escritas por nós ou por outras pessoas que enfrentaram problemas específicos, os quais também podemos encontrar.

## Entendendo o problema
Neste projeto, trabalharemos no contexto de um blog de programação, como a seção de artigos do site da Alura. Quase todo dia, novos artigos são publicados lá.

Os textos são escritos em Markdown, uma linguagem de marcação de sintaxe simplificada, ótima para formatar textos. Markdown é ideal para textos que precisam de formatação, listas, título, subtítulos, partes de código, links e imagens.
Essa linguagem é muito mais simples que a HTML e, no final do processo, pode ser convertida em HTML e exibida na tela. Ela também é utilizada para escrever os arquivos "README" no Github.

Todos os artigos do blog têm links clicáveis. Mas, com o passar do tempo, pode ser que um desses links saia do ar. Para gerenciar isso numa plataforma com milhares de arquivos com links, como é o nosso caso, vamos contar com a ajuda dos nossos computadores.
Vamos automatizar essa tarefa. É isso que aprenderemos a fazer durante nosso projeto: criaremos uma biblioteca que resolva este problema específico, capaz de acessar arquivos de texto em Markdown, capturar os links espalhados pelo texto e testá-los.