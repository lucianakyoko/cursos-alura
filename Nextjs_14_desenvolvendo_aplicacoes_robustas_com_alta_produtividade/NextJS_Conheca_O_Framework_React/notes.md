# Anotações do curso -> Next.js: conheça o framework React

---

Criando a aplicação
```npx create-next-app@14```

---

## importação de fontes otimizadas
 Ao importar uma fonte do Google, temos algumas configurações que podem otimizar o carregamento e a apresentação no navegador.

Primeiro, a propriedade subset. Ela é como um filtro que seleciona apenas os caracteres específicos que você precisa, algo essencial se você está lidando com idiomas que têm seu próprio conjunto de caracteres, como o cirílico ou o grego. Isso mantém seu pacote enxuto e seu site ágil.

Depois, temos o display. Essa propriedade define como a fonte será exibida durante o carregamento. O valor swap é um truque mágico que diz ao navegador: "Ei, use a fonte de fallback primeiro e depois troque pela fonte do Google assim que ela estiver pronta!" Isso evita que os usuários vejam aquele efeito desagradável de texto invisível enquanto a fonte está carregando.

Agora, sobre as variantes. Algumas fontes são como um canivete suíço, vêm com um monte de variantes - negrito, itálico, light, e por aí vai. Quando uma fonte não tem variantes, precisamos ser específicos sobre os weights que queremos. Isso é como dizer ao Google: "Só me envie esses pesos específicos, porque é tudo que eu vou usar". Economiza tempo de carregamento e mantém tudo mais leve.

Mas e se você precisar sair do mundo online e usar fontes locais? Nesse caso, você pode importá-las diretamente no seu projeto Next.js. É um pouquinho de trabalho manual, mas nada que uma pessoa desenvolvedora não dê conta. Basta adicionar as fontes aos seus assets e referenciá-las no seu CSS com @font-face, especificando o font-family, src, e font-weight para cada variação que você vai usar:
```

import localFont from 'next/font/local'
 
const myFont = localFont({
  src: './my-font.woff2',
  display: 'swap',
})
  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}

```

Utilizamos o json-server para subir uma API mockada.
Para instalar o Json-server:

```
npm i -g json-server@1.0.0-alpha.22
```

Para subir o servidor, navegar até a pasta onde está localizado o arquivo json. No meu caso, salvei em uma pasta chamada code-connect-bd. Rodar o comando:
```
json-server posts.json -p 3042
```

---

## Escrevendo logs
Vamos deixar a aba "Network" aberta no Developer Tools. Quando recarregamos a página, notamos que vários pedidos são feitos, mas nenhum deles é um pedido para a API "/posts".

Fazendo um paralelo, se estivéssemos em uma aplicação React, esse pedido com os posts estaria visível nesta aba, que seria o navegador pedindo e não o back-end, isto é, o nosso Next.

O Next.js é um framework full-stack (completo) que fará back-end, front-end, e uma das coisas indispensáveis para termos uma boa aplicação em execução e conseguirmos trabalhar em cima de resolução de bugs, é termos os logs bem organizados.

Portanto, esses métodos console.log() que costumamos usar, às vezes, não tem nada errado, mas neste cenário, não necessariamente teremos, por exemplo, acesso ao terminal, ao bash, ou ao servidor. Dessa forma, quem rodará o Next, que está na Vercel?

Nesse cenário, precisamos ter alguma forma de trabalhar com logs.

### winston
Basicamente, o logger winston é um pacote que fará várias coisas super bacanas relacionadas a escrever logs na aplicação.

Não usaremos mais o método console.log(), mas sim os logs de verdade, robustos, preparados para fazer o log que chamamos de aplicacional, referente a coisas que acontecem na nossa aplicação, seja um log de erro, um log informativo, ou um log de aviso.

**Conectando o log com a aplicação**
instalar o winston. Para isso, digitamos o seguinte comando: 
```npm install winston```

---

## a importância de bons logs
Desde os primeiros computadores, manter um registro sequencial dos processos é super importante para entendermos a ordem de execução das coisas e identificar falhas.

Logs economizam tempo e são essenciais na resolução de problemas e suporte de incidentes. Eles são fundamentais para rastrear o fluxo da informação e melhorar o desempenho, algo que a monitorização de desempenho de aplicativos (APM) não consegue sozinha.

A análise de log é crucial. Logs revelam comportamentos anormais e possíveis pontos de melhoria. Ferramentas apropriadas podem descobrir gargalos de desempenho e melhorias não visíveis durante o desenvolvimento. A análise prolongada de logs também ajuda a identificar falhas de segurança.

Existem dois tipos principais de logs: diagnóstico e auditoria. Logs de diagnóstico estão relacionados ao comportamento da aplicação e ao fluxo da informação - como por exemplo dizer que algo deu errado, quando e porquê, enquanto logs de auditoria registram transações (quem fez o que e quando), para requisitos de software ou simplesmente para o cumprimento de leis.

Um ponto importante: devemos sempre usar níveis apropriados de log para identificar a criticidade dos eventos.

Os níveis básicos são:

error - erro,
warning - aviso,
info - informação,
debug - depuração
trace - rastreamento.
Quando a gente precisa solucionar um problema em uma aplicação Node.js, os logs podem ser fundamentais para entender a gravidade e a causa do problema. Stack traces (rastros de pilha) e outros tipos de atividades podem ser capturados em logs e vinculados a IDs de uma sessão específica, ID de um usuário — qualquer coisa que ajude a monitorar sua aplicação de forma mais eficiente.

O Node.js já vem com recursos de registro de logs integrados, como o console.log, mas uma biblioteca dedicada de logs, como o Winston, oferece mais opções para escrever os registros da sua aplicação. E foi por isso que utilizamos ele!
[Documentação Winston](https://github.com/winstonjs/winston)

---

## props de uma página Next.js
**Query String** é uma extensão da URL base de um site, carregados por um navegador ou aplicação client side. Tradicionalmente, era usada para registrar o conteúdo de formulários HTML em uma página. Essa string é composta por pares campo-valor, como "campo=valor", unidos por um "&" e separados da URL base por um "?".

