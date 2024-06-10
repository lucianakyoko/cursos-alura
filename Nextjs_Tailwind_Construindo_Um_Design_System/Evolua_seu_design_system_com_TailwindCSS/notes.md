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
