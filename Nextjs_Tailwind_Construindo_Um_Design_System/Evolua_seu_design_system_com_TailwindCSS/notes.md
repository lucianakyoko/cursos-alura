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