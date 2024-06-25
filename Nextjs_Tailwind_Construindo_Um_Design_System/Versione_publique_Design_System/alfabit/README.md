<h1 align="center">
  <img alt="Alfabit Design System" title="#alfabit-ds" src="public/logo-alfabit-branco.png" height="150" />
</h1>


<p align="center">
   <h2 align="center">
    Alfabit Design System
    </h2>
</p>

<p align="center">
  Biblioteca de componentes web da Alfabit
</p>

<p align="center">
 <img alt="Repository size" src="https://img.shields.io/github/repo-size/NeiltonSeguins/alfabit-design-system-project?color=4e5acf">

  <a aria-label="Last Commit" href="https://github.com/NeiltonSeguins/alfabit-design-system-project/commits/main">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/NeiltonSeguins/alfabit-design-system-project?color=4e5acf">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-4e5acf">
  </a>
</p>
<p align="center">
  <a target="_blank" href="https://www.typescriptlang.org">
    <img src="https://img.shields.io/static/v1?color=blue&label=Typescript&message=TS&?style=plastic&logo=Typescript">
  </a>
  <a target="_blank" href="https://reactjs.org/">
    <img alt="ReactJS" src="https://img.shields.io/static/v1?color=blue&label=React&message=JS&?style=plastic&logo=React">
  </a>
  <a target="_blank" href="https://nextjs.org/">
    <img alt="Next.js" src="https://img.shields.io/static/v1?color=blue&label=Next&message=JS&?style=plastic&logo=Next.js">
  </a>
  <a target="_blank" href="https://storybook.js.org/docs/react/get-started/introduction">
    <img src="https://img.shields.io/static/v1?color=red&label=Storybook&message=SB&?style=plastic&logo=Storybook">
  </a>
  <a target="_blank" href="https://tailwindcss.com/">
    <img src="https://img.shields.io/static/v1?color=blue&label=Tailwind&message=CSS&?style=plastic&logo=TailwindCSS">
  </a>
  <a target="_blank" href="https://tailwindcss.com/">
    <img src="https://img.shields.io/static/v1?color=red&label=Figma&message=  &?style=plastic&logo=Figma">
  </a>
</p>

## O que é?
 A Alfabit é uma empresa de tecnologia inovadora dedicada a fornecer soluções criativas e eficientes para seus clientes. Reconhecendo a importância do design consistente e intuitivo em todas as suas plataformas e produtos, a Alfabit decidiu investir em um design system de ponta.
 <br> </br>

## 👨‍💻 Como instalar?

```bash
# Utilizando npm
npm i alfabit-ds

# Utilizando yarn
yarn add alfabit-ds
```


## 🏃 Como usar?

A biblioteca Alfabit-ds foi criada para funcionar em aplicações Next.js+TailwindCSS. Portanto, para usá-la lembre-se de criar suas aplicações com essa estrutura. Para que você consiga usar todos os componentes da biblioteca sem problemas é necessário uma configuração adicional no seu projeto. Vamos fazer isso passo a passo: 

    
1. No mesmo arquivo que você importa as camadas do tailwind (geralmente o arquivo `globals.css` ou `styles.css` ) importe o arquivo CSS da biblioteca Alfabit também
    
    ```tsx
    import './globals.css'
    import 'alfabit-ds/styles/globals.css'
    ```
    
2. Dentro do arquivo de configuração do Tailwind, o `tailwind.config.js`, adicione as configurações da biblioteca Alfabit como `preset`:
    
    ```tsx
    const config = {
    	presets: [
    		require('<nome_do_modulo>/tailwind.config')
    	]
    	// ... demais configurações ...
    }
    ```
    
3. Adicione no mesmo arquivo de configuração a referência dos arquivos da biblioteca Alfabit para serem cobertas pelo Tailwind e processadas no PostCSS. Para isso, basta adicionar o caminho dos componentes da biblioteca Alfabit dentro da propriedade `content`, no mesmo arquivo de configuração do tailwind do passo anterior:
    
    ```tsx
    const config = {
    	content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/<nome_do_modulo>/components/**/*.{js,ts,jsx,tsx,mdx}'
      ]
    	// ... demais configurações ...
    }
    ```
    
4. Configure o transpile do Next.js no arquivo `next.config.js`. Na nova versão do Next 13 temos um recurso que vai ajudar a transpilar a nossa biblioteca. Sem isso vamos ficar recebendo sucessivos erros de compilação porque o Next não vai entender nossa biblioteca.
    
    ```jsx
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      transpilePackages: ["ds-alfabit-v1"],
    };
    
    module.exports = nextConfig;
    ```
E agora você pode usar os componentes da biblioteca em suas páginas:

```tsx
"use client";
import { Typograph } from "alfabit-ds/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <div className="px-8 py-5 rounded-md flex flex-col gap-3 text-center text-gray-950 bg-gray-800">
        <Typograph element="h3" size="title3" className="font-black text-white">
          Olá mundo!
        </Typograph>
      </div>
    </main>
  );
}
```
<!-- <img alt="Exemplo de uso da biblioteca Quero delivery" src="example/public/exampleInput.png" height="80" /> -->

## 🎨 Quais cores foram utilizadas no padrão da biblioteca?

Toda a identidade visual da biblioteca, como os componentes, espaçamentos e cores, você pode acessar no [Figma clicando aqui neste link](https://www.figma.com/file/h86gUvqUXTKwgr6tVYinLT/React%3A-Design-System-com-Tailwind?type=design&node-id=0-1&t=GuaFV9cp30SS2di9-0).

> Confira também a documentação da biblioteca para mais detalhes de uso [Documentação](https://alfabit-ds.vercel.app/?path=/docs/design-tokens-colors--docs).

## 📚 Quais dependências são usadas nesta biblioteca?
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://www.npmjs.com/package/tailwindcss)
- [Storybook](https://www.npmjs.com/package/storybook)
- [Class Variance Authority (cva)](https://www.npmjs.com/package/class-variance-authority)
- [classnames](https://www.npmjs.com/package/classnames)
- [HeadlessUI](https://www.npmjs.com/package/@headlessui/react)
- [heroicons](https://www.npmjs.com/package/@heroicons/react)
- [Chromatic](https://www.npmjs.com/package/chromatic)

## 📝 Documentação

Para verificar a documentação click [aqui](https://alfabit-ds.vercel.app/?path=/docs/design-tokens-colors--docs)

- Para Verificar a documentação em desenvolvimento faça
  
```bash
npm run storybook ou yarn storybook
```

## Desenvolvedores/Contribuintes :octocat:

Esta é a equipe responsável pela criação desta biblioteca de componentes

| [<img src="https://avatars.githubusercontent.com/u/77410403?v=4" width=115><br><sub>Neilton Seguins</sub>](https://github.com/NeiltonSeguins) |  [<img src="https://github.com/cardozov.png" width=115><br><sub>Vinicius Cardozo</sub>](https://github.com/cardozov) |
| :---: | :---: 

## Licença 

The [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.html) (GPL)

Copyright :copyright: 2023 - Alfabit Design System
