# Anotações do curso: React - evolua o seu Design System com TailwindCSS

---
Para subir o storybook: ```npm run storybook```

---

## Class Variance Authority (CVA)
O Class Variance Authority (CVA) é uma biblioteca que simplifica a criação de componentes de interface do usuário com variantes de estilo. Ao trabalhar com CSS "tradicional" em vez de abordagens como CSS-in-JS, o CVA oferece uma solução conveniente para lidar com classes de variantes e composição de folhas de estilo.

O CVA é útil quando você precisa ter controle total sobre a saída da folha de estilo e deseja criar variantes de componentes com facilidade. Ele elimina a necessidade de combinar manualmente classes de estilo ou adicionar tipos manualmente, permitindo que você se concentre nos aspectos mais interessantes do desenvolvimento da interface do usuário.

Exemplo do utilização:
```
import { cva } from "class-variance-authority";

const button = cva(["font-semibold", "border", "rounded"], {
  variants: {
    intent: {
      primary: ["bg-blue-500", "text-white", "border-transparent", "hover:bg-blue-600"],
      secondary: ["bg-white", "text-gray-800", "border-gray-400", "hover:bg-gray-100"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

button(); // Retorna a string com as classes de estilo para o botão padrão
button({ intent: "secondary", size: "small" }); // Retorna a string com as classes de estilo para um botão de variante secundária e tamanho pequeno

```

[Link da documetação oficial](https://cva.style/docs)
[Link do vídeo Next.js Conf 2022 ](https://youtu.be/T-Zv73yZ_QI) 

---

### Biblioteca classnames:
A biblioteca "classnames" é uma ferramenta popular em JavaScript (tanto no ambiente do navegador quanto no Node.js) que ajuda a construir facilmente strings de classes CSS condicionais. É frequentemente utilizada em conjunto com frameworks e bibliotecas JavaScript, como React, para gerar as classes de estilo dinamicamente com base em certas condições ou propriedades.

Com o "classnames", é possível concatenar e condicionar classes de forma mais conveniente e legível, evitando a repetição de código e simplificando a lógica de construção das classes de estilo. A biblioteca lida automaticamente com diferentes tipos de entrada, como strings, objetos e arrays, para gerar corretamente a string final das classes.

Aqui está um exemplo básico de uso do "classnames":

```
import classnames from "classnames";

const isActive = true;
const isDisabled = false;
const customClass = "custom-class";

const buttonClasses = classnames("button", {
  "active": isActive,
  "disabled": isDisabled,
  [customClass]: true,
});

console.log(buttonClasses);
// Resultado: "button active custom-class"
```

No exemplo acima, o "classnames" é usado para gerar a string de classes do botão com base nas condições de ativação (isActive), desativação (isDisabled) e uma classe personalizada (customClass). A função classnames concatena automaticamente as classes que têm suas condições avaliadas como true, gerando a string final "button active custom-class".

O "classnames" também permite passar múltiplos argumentos, como strings e objetos, para criar classes condicionais de maneira ainda mais flexível.

[Link da documentação](https://github.com/JedWatson/classnames)

---

## composição de componentes e Atomic Design:
[Atomic Web Design](https://bradfrost.com/blog/post/atomic-web-design/)

A composição de componentes no React pode ser comparada ao conceito de Atomic Design (Design Atômico), uma metodologia de design de interfaces proposta por Brad Frost. Ambas as abordagens compartilham a ideia de criar componentes menores e reutilizáveis, que são combinados para formar componentes maiores e mais complexos.

A composição de componentes no React segue uma abordagem atômica semelhante ao Atomic Design. Começamos com componentes básicos (átomos) e os combinamos para criar componentes compostos (moléculas). Esses componentes compostos, por sua vez, são agrupados para formar componentes ainda mais complexos (organismos). E, por fim, usamos esses organismos na criação de layouts e páginas.

A vantagem dessa abordagem é a reutilização e a flexibilidade que oferece. Podemos facilmente trocar átomos, combinar moléculas de diferentes maneiras e construir organismos personalizados para atender às necessidades específicas de cada parte do aplicativo. Isso resulta em uma interface consistente, modular e de fácil manutenção.

Em resumo, a composição de componentes no React segue uma abordagem semelhante ao Atomic Design, onde componentes menores são combinados para formar componentes maiores e mais complexos. Essa abordagem atômica nos permite criar interfaces flexíveis, reutilizáveis e fáceis de manter.

---

## Princípio Aberto e Fechado (OCP) do SOLID no Front-end:
[SOLID em React: Entendendo o Single-Responsibility Principle (SRP)](https://marcosviniciosneves.medium.com/solid-em-react-entendendo-o-single-responsibility-principle-srp-4a2028b35c41)

O Princípio Aberto-Fechado (Open-Closed Principle, OCP) é um dos princípios fundamentais do SOLID, um conjunto de diretrizes para design de software. No contexto dos componentes React, o OCP é uma abordagem valiosa para criar sistemas flexíveis, reutilizáveis e fáceis de manter.

Em termos simples, o OCP estabelece que os componentes devem estar abertos para extensão, mas fechados para modificação direta. Isso significa que você pode adicionar novos comportamentos ou funcionalidades sem alterar o código existente dos componentes.

Vamos explorar duas formas de como isso pode ser aplicado no desenvolvimento de componentes React.

1. Herança de Componentes:

A herança é uma maneira de estender o comportamento de um componente React. Anteriormente, vimos exemplos usando classes, mas agora podemos alcançar o mesmo resultado utilizando componentes funcionais com React Hooks. Veja um exemplo:
```
const BaseComponent = (props) => {
  // Implementação comum
};

const ChildComponent = (props) => {
  // Implementação adicional
  // ...
  return <BaseComponent {...props} />;
};
```

2. Composição de Componentes:

A composição é uma abordagem em que você combina componentes menores para criar um componente maior e mais complexo. Os componentes menores podem ser reutilizados e combinados de diferentes maneiras para adicionar novos comportamentos. Veja um exemplo:
```
const Button = (props) => {
  // Implementação do botão
};

const Icon = (props) => {
  // Implementação do ícone
};

const IconButton = (props) => {
  return (
    <Button>
      <Icon />
    </Button>
  );
};
```

Ao aplicar o Princípio Aberto-Fechado no desenvolvimento de componentes React, você cria um código mais modular, reutilizável e fácil de manter. Isso permite a extensão do comportamento dos componentes sem modificar diretamente o código existente. Com abordagens como herança, composição e o uso de props e callbacks, você pode adicionar novos recursos e funcionalidades aos seus componentes React de forma flexível, promovendo um design mais robusto e evolutivo.

---

## biblioteca heroicons
[HeroIcons](https://heroicons.com/)

A biblioteca Heroicons é uma coleção de ícones projetada especificamente para ser usada em projetos da web ou aplicativos que utilizam o framework Tailwind CSS. Ela fornece um conjunto de ícones limpos e simplificados, que podem ser facilmente integrados aos projetos e estilizados de acordo com as necessidades.

Os ícones do Heroicons são desenvolvidos pelo mesmo time responsável pelo Tailwind CSS e são categorizados em diferentes estilos, como solid (sólidos), outline (contornos) e o estilo emoji. Cada estilo oferece uma variedade de ícones que podem ser usados para representar ações, objetos, elementos de interface do usuário e muito mais.

Os ícones do Heroicons estão disponíveis em formatos SVG e também podem ser importados como componentes Vue.js, React ou Angular. Isso facilita a utilização dos ícones em diferentes projetos e estruturas de desenvolvimento.

Além disso, a biblioteca Heroicons é altamente personalizável. Você pode ajustar o tamanho dos ícones, a cor de preenchimento, a espessura do traço (nos estilos outline) e aplicar classes do Tailwind CSS para estilizar os ícones de acordo com a identidade visual do seu projeto.

Para utilizar a biblioteca Heroicons, você pode visitar o site oficial (https://heroicons.com/) para visualizar todos os ícones disponíveis, copiar o código SVG correspondente ou baixar os arquivos necessários. Também existem pacotes prontos para serem instalados via gerenciador de pacotes, como npm ou yarn, caso esteja usando algum desses sistemas em seu projeto.

---

### acessibilidade Web
Acessibilidade é um aspecto fundamental a ser considerado ao criar componentes React. Ao desenvolver componentes acessíveis, estamos garantindo que todas as pessoas, independentemente de suas habilidades ou necessidades, possam utilizar a aplicação de forma eficaz.

Uma das principais considerações é garantir que os componentes sejam adequadamente estruturados em termos de semântica HTML. Isso significa usar as tags HTML corretas e aplicar atributos como aria-* quando necessário. A utilização de tags semânticas, como <button>, <input>, <select>, e a atribuição correta de papéis usando o atributo role, ajuda a transmitir o propósito e a função dos componentes aos leitores de tela e outros dispositivos assistivos.

Além disso, é importante fornecer informações visuais e de interação de forma alternativa para pessoas com deficiência visual. Isso pode ser alcançado através do uso adequado de atributos alt em imagens, fornecendo descrições concisas e significativas, e garantindo que os links e botões tenham textos explicativos adequados através dos atributos aria-label ou aria-labelledby.

Outro aspecto crucial é a navegação e a interação com os componentes. Certifique-se de que todos os elementos interativos sejam acessíveis pelo teclado, permitindo que os usuários naveguem e interajam sem a necessidade de utilizar o mouse. Isso pode ser alcançado definindo corretamente a ordem de tabulação usando o atributo tabIndex e manipulando eventos de teclado adequadamente.

Além disso, é importante considerar o contraste de cores nos componentes para garantir a legibilidade para pessoas com baixa visão ou outras condições visuais. Utilize cores com bom contraste entre o texto e o plano de fundo e evite depender exclusivamente de cores para transmitir informações importantes.

E sabia que Acessibilidade na Web vai muito além de só escrever um HTML semântico? A W3C que é o World Wide Web Consortium (W3C) é um consórcio internacional em que organizações filiadas, uma equipe em tempo integral e o público trabalham juntos para desenvolver padrões para a web, ela estabelece uma cartilha com as recomendações e diretrizes que podem ser usadas por pessoas desenvolvedoras de aplicações e soluções web para evitar ou eliminar barreiras de acesso, indicando as respectivas fontes de consulta e você pode acessar esta cartilha clicando neste [link](https://www.w3c.br/pub/Materiais/PublicacoesW3C/cartilha-w3cbr-acessibilidade-web-fasciculo-I.html).

[Thread no Twitter sobre acessibilidade](https://twitter.com/lixeletto/status/1668733853626777600)

---

## Headless UI
O Headless UI é uma biblioteca de componentes desenvolvida pelo Time do Tailwind CSS. Ela oferece um conjunto de componentes acessíveis e customizáveis que podem ser utilizados em projetos React, independente do framework de UI utilizado.

O termo "headless" se refere ao fato de que esses componentes não possuem uma aparência visual definida, permitindo que você os estilize de acordo com as necessidades do seu projeto. Eles fornecem apenas a lógica e a estrutura necessárias para a funcionalidade do componente, enquanto a parte visual é completamente personalizável.

Os componentes do Headless UI são projetados com foco na acessibilidade, garantindo que cumpram as diretrizes e melhores práticas de acessibilidade. Eles também são construídos com base nas convenções de acessibilidade do HTML, permitindo que sejam facilmente compreendidos por leitores de tela e outros dispositivos assistivos.

A biblioteca do Headless UI inclui uma variedade de componentes, como modais (Modal), menus (Menu), abas (Tabs), botões de alternância (Switch), caixas de seleção (Checkbox), entre outros. Cada componente é projetado para ser altamente flexível e personalizável, permitindo que você atenda às necessidades específicas do seu projeto.

Uma das vantagens do uso do Headless UI é que você pode integrá-lo facilmente com outros frameworks ou bibliotecas UI, como o Tailwind CSS, mas também com qualquer outra solução de estilização que você preferir.

[Documentação oficial](https://headlessui.com/)
