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