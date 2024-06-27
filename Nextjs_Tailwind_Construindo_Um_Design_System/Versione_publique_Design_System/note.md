## Anotações do curso: React - versione e publique o seu Design System

---

[Figma](https://www.figma.com/file/h86gUvqUXTKwgr6tVYinLT/React%3A-Design-System-com-Tailwind?type=design&node-id=143-2789&t=tc1JQtY9THljGNiw-0)
[Arquivos iniciais](https://github.com/alura-cursos/alfabit-ds-pkg/tree/7c36b38360111988c1e8e55379590f989daf10b4)

---

## Preparando o Design System
Nós criamos todo o nosso design system e já conseguimos publicar a nossa documentação no Storybook. Geramos uma pasta estática com os arquivos de uma página estática, enviamos para a Vercel e publicamos essa página no Storybook com toda a documentação.

No navegador, podemos acessar a documentação do Storybook do Alfabit, com todo o design system organizado de uma maneira que cada componente foi classificado dentro de uma pasta com uma categoria de átomos ou moléculas.

Nosso desafio para este curso será publicar essa biblioteca de componentes no npm e disponibilizá-la para que outras pessoas possam utilizá-la em seus próprios projetos.

Para fazer isso, vamos ao Visual Studio Code e acessar o nosso projeto. Precisamos realizar algumas configurações no projeto, principalmente no arquivo package.json, para preparar nossa aplicação com algumas configurações extras para enviá-la ao npm.

Primeiramente, vamos abrir um novo terminal, clicando na opção "Terminal" na barra de ferramentas superior do VS Code e selecionando a opção "New Terminal". Você também pode usar o atalho "Ctrl + Shift + J" para abrir o novo terminal.

A princípio, foi aberto um terminal do PowerShell, mas vamos selecionar um CMD, que acreditamos ser melhor. Nesse novo terminal, vamos digitar o comando npm init.

Por que precisamos dar um novo init no nosso projeto, sendo que já temos um arquivo package.json? Porque vamos sobrescrever algumas configurações que não estão no projeto.

Após executar o comando, o terminal pergunta o nome do pacote, que no caso está sugerido como alfabit-design-system, mas vamos colocar como alfabit-ds.

A versão está sugerida como 0.1.0 e não vamos alterar. Conversaremos sobre isso mais adiante e você vai entender porque mantivemos essa versão.

Em entry point, temos a sugestão next.config.js; vamos apenas teclar "Enter". Faremos o mesmo para o repositório do Git e para a palavra-chave. Como author, você pode colocar o seu nome, mas o instrutor colocará Alfabit. A licença também não vamos selecionar; ajustaremos esses detalhes mais para frente.

Feito isso, será exibido o novo package.json. Vamos apenas verificar se estão corretas as informações. Após conferir, digitamos “sim” no terminal e o package.json será alterado.

Agora, precisamos adicionar no package.json uma opção de file, onde vamos indicar, por exemplo, a fonte que utilizamos na biblioteca, a pasta de componentes, algumas configurações do Tailwind e nos estilos da aplicação, o style da pasta "styles".

No arquivo package.json, vamos até o final após license na linha 48, adicionaremos uma vírgula, e na linha abaixo vamos digitar files. Será aberto um array ([]) onde podemos adicionar opções. Então, copiaremos os arquivos que precisamos indicar para o package.json, para ele ter conhecimento deles, e colaremos na linha 49 dentro do array.

```
"files": [
  "styles/globals.css",
  "tailwind.config.js",
  "components/*",
  "fonts/*"
]
```

Em files, especificamos que o projeto precisa reconhecer o arquivo globals.css localizado na pasta "styles". A próxima indicação é a configuração do tailwind.css com o arquivo tailwind.config.js.

Posteriormente, sinalizamos a pasta em que estão os componentes, a components/, seguida por um asterisco, indicando todos os arquivos presentes dentro da pasta de "components".

Também indicamos a pasta fonts/, seguida por um asterisco, pois queremos que todos os arquivos dentro dessa pasta sejam reconhecidos pelo projeto.

Anteriormente, definimos a opção main como next.config.js. Vamos alterar essa opção e indicar um arquivo que ainda não criamos, mas que iremos criar, localizado na pasta components/, chamado index.ts.

Neste index.ts, vamos exportar todos os componentes e os tipos desses componentes que criamos, pois facilita a importação deles quando consumirmos essa biblioteca.

Vamos salvar o arquivo package.json. Agora, dentro da pasta "components", criaremos um novo arquivo chamado index.ts, onde faremos a exportação dos componentes.

Para isso, primeiro digitaremos export, em seguida abrimos e fechamos chaves. Entre elas, digitaremos default as, seguido do nome do componente Avatar. Fora das chaves, digitamos a palavra from e o caminho de onde exportamos o componente, que é ./Avatar/Avatar.
```
export { default as Avatar } from "./Avatar/Avatar";
```

Assim, exportamos o componente padrão como Avatar, e na linha seguinte, vamos importar também os tipos dele. Para isso, escrevemos export, abrimos e fechamos chaves novamente, e passamos type AvatarProps. Da mesma forma, ele virá de ./Avatar/Avatar.
```
export { type AvatarProps } from "./Avatar/Avatar";
```

Precisamos fazer isso para todos os componentes:
```
export { default as Box } from "./Box/Box";
export { type BoxProps } from "./Box/Box";
export { default as Button } from "./Button/Button";
export { type ButtonProps } from "./Button/Button";
export { default as Divider } from "./Divider/Divider";
export { type DividerProps } from "./Divider/Divider";
export { default as Dropdown } from "./Dropdown/Dropdown";
export { type DropdownProps } from "./Dropdown/Dropdown";
export { default as Input } from "./Input/Input";
export { type InputProps } from "./Input/Input";
export { default as Link } from "./Link/Link";
export { type LinkProps } from "./Link/Link";
export { default as Modal } from "./Modal/Modal";
export { type ModalProps } from "./Modal/Modal";
export { default as Notice } from "./Notice/Notice";
export { type NoticeProps } from "./Notice/Notice";
export { default as Switch } from "./Switch/Switch";
export { type SwitchProps } from "./Switch/Switch";
export { default as Typography } from "./Typography/Typography";
export { type TypographyProps } from "./Typography/Typography";
export { default as TextBlock } from "./TextBlock/TextBlock";
export { type TextBlockProps } from "./TextBlock/TextBlock";
```

---

##  Criando conta e publicando no npm
Agora que preparamos a aplicação para publicá-la no npm, é necessário criar uma conta na plataforma para ter a possibilidade de publicar os pacotes.

**Criando uma conta no npm**
No navegador, vamos abrir uma nova aba e acessar o site do npm. Caso ainda não tenha uma conta, clique em "Sign Up" no canto superior direito da página.

Será necessário preencher os campos com o seu nome de usuário e e-mail. Recomendamos que você utilize um e-mail principal, preferencialmente o mesmo do GitHub. Isso é vantajoso, pois ao publicar o seu pacote, ele será vinculado à sua conta principal do GitHub e terá a referência para essa conta.

Após preencher essas informações, crie uma senha forte e marque a caixa de seleção para aceitar os termos. Passaremos por um breve processo de verificação e, após concluído, teremos uma conta no npm.

Caso já possua uma conta, é preciso clicar em "Sign In", preencher as informações de login e senha, e clicar novamente em "Sign In".

Haverá uma confirmação com verificação em duas etapas, uma medida de segurança para garantir que realmente é você. Um token de verificação será enviado por e-mail. Com esse token, é possível realizar login no npm.

**Publicando uma biblioteca**
Agora vamos ao processo de publicar a nossa biblioteca. Existem duas maneiras de fazer isso: a principal é diretamente pelo terminal da plataforma onde codamos o projeto. O processo também pode ser realizado por terminal separado, mas faremos pelo Visual Studio Code.

Basta abrir um novo terminal com o atalho "Ctrl + J", limpar a tela com o comando cls, e a partir desse terminal, publicar a nossa biblioteca com o comando npm publish.

Porém, não faremos isso agora, pois ainda é preciso realizar mais uma configuração. É necessário fazer algumas alterações no arquivo package.json, principalmente na opção private da linha de código 4.
```"private": true```

A opção private está definida como true, ou seja, torna o repositório privado. Para publicar o projeto como público, precisamos alterar esse valor para false. Assim, o projeto não será mais privado.

Outro indicativo importante é a versão. Podemos observar que ela está em 0.1.0. Essa é considerada a versão de desenvolvimento. O ideal é manter nessa versão enquanto estivermos em desenvolvimento.

Após realizar essas alterações, é necessário salvar o arquivo package.json.

De volta ao terminal, não precisamos fazer login novamente no npm, mas caso você queira saber o processo, basta digitar o comando npm login e serão abertas no navegador as opções para o mesmo processo que realizamos anteriormente.

Com o login feito, vamos publicar a biblioteca com o comando npm publish.
```npm publish```

Com isso, o npm vai empacotar o projeto e, em pouco tempo, receberemos a informação de que foi publicado. Será indicada a versão que foi publicada e o endereço no npm.
```Publishing to https://registry.npmjs.org/ with tag latest and default access + alfabit-ds@0.1.0```

Já estamos conectados ao npm no navegador, então vamos recarregar a página, clicar no ícone de perfil no canto superior direito e selecionar "Packages".

Na seção "Packages", temos duas bibliotecas: uma versão anterior chamada ds-alfabit-v1, e a recentemente publicada alfabit-ds. Selecionaremos o link de alfabit-ds para carregar a página desta biblioteca que acabamos de publicar.

Perfeito! A biblioteca que acabamos de publicar aparece com um "Readme" contendo informações de instalação, a versão, a licença, a quantidade de arquivos, e por fim, o comando para instalar e utilizar essa biblioteca nas nossas aplicações.
```npm i alfabit-ds```

---
## barrel export
Imagine que você e sua equipe estão empolgados para compartilhar uma nova biblioteca de componentes React incríveis com a comunidade, e vocês estão se preparando para publicá-la no npm. No entanto, vocês perceberam que, ao importar esses componentes em outros projetos, pode ser um tanto complicado e desorganizado. Como resolver esse dilema?

O desafio aqui é tornar a experiência dos desenvolvedores que utilizarão sua biblioteca mais simples e intuitiva. Importar cada componente separadamente pode ser confuso e consumir tempo, o que não é ideal quando se trabalha com bibliotecas reutilizáveis.

Bem, temos uma solução prática para isso: o padrão de exportação conhecido como "Barrel exports". Vamos aprender como aplicá-lo para que sua biblioteca de componentes seja fácil de usar e economize tempo para quem a utiliza.

Barrel exports é como criar um ponto de acesso único para todos os seus componentes em sua biblioteca. Ao invés de importar cada componente individualmente, você exporta todos eles de uma vez, simplificando as importações e deixando o código mais organizado para os desenvolvedores que usarão sua biblioteca.

Passo 1: Crie um arquivo chamado index.js (ou index.ts para projetos TypeScript) na raiz da sua biblioteca (ou na pasta components dentro da pasta src se assim estiver o seu projeto).

Passo 2: Dentro do arquivo index.js, exporte todos os seus componentes da seguinte maneira:
```
export { default as Componente1 } from './Componente1';
export { default as Componente2 } from './Componente2';
export { default as Componente3 } from './Componente3';
// Continue exportando todos os outros componentes da mesma maneira
```

Passo 3: Agora, quando os desenvolvedores quiserem usar sua biblioteca em seus projetos, eles podem fazer uma importação simples e organizada, como esta:
```
import { Componente1, Componente2, Componente3 } from 'sua-biblioteca-de-componentes';
```

Usando o padrão de exportação de Barril (Barrel exports), você está facilitando a vida dos desenvolvedores que utilizam sua biblioteca, tornando a importação de componentes mais rápida e organizada.
[Leitura de artigo](https://medium.com/@klauskpm/do-a-barrel-export-aa5b79b76b05)

---

## Breaking Changes

"Breaking changes" (mudanças que quebram) é um termo utilizado na área de desenvolvimento de software para se referir a alterações em um programa, biblioteca, ou sistema que podem causar incompatibilidades ou quebras em relação às versões anteriores. Essas mudanças normalmente afetam a forma como o software interage com outros componentes ou como os desenvolvedores usam as funcionalidades do software.

No frontend essas mudanças se referem a alterações nas APIs ou no comportamento dos componentes que podem afetar negativamente os aplicativos que utilizam essa biblioteca. Alguns exemplos são:

**Alterações na API dos componentes**
Mudança nas propriedades aceitas: Se você alterar as propriedades que um componente aceita ou a estrutura das propriedades, os aplicativos que usam esses componentes precisarão ser atualizados para refletir essas mudanças.
Adição ou remoção de métodos de ciclo de vida: A adição ou remoção de métodos de ciclo de vida em um componente pode afetar como os aplicativos gerenciam o ciclo de vida do componente e exigir atualizações.
Alterações no comportamento dos componentes
Mudança de eventos: Se você modificar os eventos disparados por um componente (por exemplo, ao clicar em um botão), os aplicativos que dependem desses eventos podem quebrar.
Remoção de componentes ou funcionalidades
Se você decidir remover componentes ou funcionalidades da biblioteca de componentes, os aplicativos que dependem desses recursos precisarão ser reescritos para acomodar essa mudança.
Dependências atualizadas ou removidas
Se a biblioteca de componentes depende de outras bibliotecas ou pacotes e você atualiza ou remove essas dependências, isso pode causar quebras nos aplicativos que utilizam a biblioteca.
Para mitigar o impacto das breaking changes em uma biblioteca de componentes você pode:

**Documentação clara**
Mantenha uma documentação atualizada que explique todas as mudanças, incluindo as breaking changes, para que os desenvolvedores que utilizam a biblioteca possam entender como atualizar seus aplicativos.

**Versionamento semântico:**
Siga uma estratégia de versionamento semântico para indicar o impacto das mudanças em cada nova versão da biblioteca.

**Fornecer guias de migração**
Se possível, forneça guias de migração detalhados para ajudar os desenvolvedores a atualizar seus aplicativos para acomodar as mudanças.

**Testes e avaliação**
É fundamental que os desenvolvedores conduzam testes rigorosos após fazerem breaking changes para garantir que o software continue funcionando corretamente e que os problemas sejam identificados e resolvidos antes do lançamento.

Breaking changes podem ser uma parte necessária do desenvolvimento de software para melhorar a qualidade, a segurança e a eficiência do software, mas é crucial gerenciá-las adequadamente para minimizar interrupções para os usuários e desenvolvedores.

Se você quiser conhecer mais exemplos de breaking changes e exemplos de como elas ocorrem no Frontend, clique aqui neste link e conheça um exemplo muito bacana da Morningstar Design System.

[Versioning & Breaking Changes](https://designsystem.morningstar.com/legacy/about/versioning.html)

---

##  inferno de dependências
O "inferno de dependências" é um termo usado na área de desenvolvimento de software para descrever a situação em que um projeto acumula um grande número de dependências externas, tornando-se complexo, difícil de gerenciar e propenso a problemas de compatibilidade. Isso ocorre quando um projeto depende de bibliotecas, frameworks e pacotes de terceiros, cada um com suas próprias dependências, e essa rede de dependências se torna cada vez mais intrincada à medida que o projeto cresce.

Para evitar o inferno de dependências, os desenvolvedores devem adotar práticas como a gestão cuidadosa de dependências, a atualização regular de bibliotecas e a minimização do uso de dependências não essenciais. Além disso, é importante manter um controle rigoroso sobre as versões das dependências, utilizando o versionamento semântico por exemplo, para evitar conflitos e garantir que o projeto seja mantido de forma eficiente e segura.

Assegurar que as dependências estejam sempre em dia é uma prática fundamental para garantir a segurança do software que você desenvolve. No entanto, a atualização manual das dependências é frequentemente vista como uma tarefa desafiadora e trabalhosa pelos desenvolvedores.

Para te ajudar com essa tarefa árdua você pode contar com o Dependabot, um aliado valioso, que automatiza o processo de atualização de dependências. Com ele, você pode dedicar menos tempo a essas atualizações e mais tempo à criação de software de qualidade.
[Dependabot](https://github.blog/2020-06-01-keep-all-your-packages-up-to-date-with-dependabot/)
[Artigo - O que é o inferno de dependências e como utilizar o Dependabot](https://www.alura.com.br/artigos/o-que-e-inferno-de-dependencias-como-utilizar-dependabot)

---

## versionamento semântico
Versionamento semântico, também conhecido como SemVer (Semantic Versioning), é um sistema de controle de versão utilizado principalmente na gestão de bibliotecas, pacotes e projetos de software.

Ele define um conjunto de regras para atribuir números de versão aos seus projetos de uma maneira consistente e significativa, facilitando a comunicação e o entendimento das mudanças em uma biblioteca ou pacote.

Imagem colorida. A imagem exibe uma lista numerada com itens explicando as três principais regras do versionamento semântico. O texto está alinhado a esquerda. No topo um título indicando os três principais tipos de versão, major, minor, path. Logo abaixo na lista numerada o item um é a versão maior (major), o item dois é a versão menor (minor) e o item três a versão de correção (path). A explicação na imagem é similar a que vem no texto a seguir.

As principais regras do versionamento semântico incluem:

Versão Major (X.y.z): O número principal (X) é incrementado quando há alterações incompatíveis na API que podem quebrar a compatibilidade com versões anteriores. Isso geralmente indica grandes mudanças ou alterações significativas.
Versão Minor (x.Y.z): O número de versão menor (Y) é incrementado quando funcionalidades são adicionadas de maneira compatível com as versões anteriores, ou seja, sem quebrar a compatibilidade. Isso reflete melhorias e adições de recursos. Também serve quando queremos marcar um componente como depreciado, por exemplo.
Versão Patch (x.y.Z): O número de versão de patch (Z) é incrementado quando correções de bugs ou pequenas melhorias são feitas sem alterar a compatibilidade com versões anteriores.
Pre-release e Build Metadata: O versionamento semântico permite a inclusão de informações opcionais, como pré-lançamento (pre-release) e metadados de construção (build metadata) após o número de versão. Isso pode ser útil para indicar versões em desenvolvimento, alfas, betas, etc. Por exemplo, "1.0.0-alpha.1" indica a primeira versão alfa da versão 1.0.0.
Compatibilidade Ascendente: As versões de aumento devem manter compatibilidade ascendente com as versões anteriores. Isso significa que um cliente que usa uma versão anterior deve ser capaz de atualizar para uma nova versão sem quebrar seu código existente.
Dependências Claras: É importante declarar as dependências de forma clara em seu projeto, especificando a faixa de versões compatíveis (por exemplo, ">= 1.0.0"). Isso ajuda a evitar problemas de compatibilidade e garante que os usuários obtenham uma versão compatível do seu pacote.
O versionamento semântico é uma abordagem amplamente aceita para a gestão de versões de software e pacotes, pois ajuda a criar expectativas claras sobre o impacto das atualizações e facilita a escolha de versões adequadas para os projetos. Ao seguir essas regras, você pode manter um controle mais eficaz sobre o desenvolvimento e a distribuição de suas bibliotecas e pacotes de software. Se ficou curioso e deseja conhecer melhor cada uma das regras do SemVer recomendo a leitura da documentação.

[Semver](https://semver.org/lang/pt-BR/)
