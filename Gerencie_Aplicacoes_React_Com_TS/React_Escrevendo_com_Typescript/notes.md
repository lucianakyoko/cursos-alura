# Anotações do curso React: escrevendo com TypeScript

---

Este projeto foi criado usando CRA: 
```npx create-react-app --template typescript alura-studies```

para subir o projeto no servidor:
```npm start```

---

Instalando Sass:
```
npm install --save-dev sass
```

Instalando CSS Module:
```
npm install -D typescript-plugin-css-modules
```

No tsconfig.json acrescentar a configuração abaixo:
```
{
  "compilerOptions": {
    "plugins": [{ "name": "typescript-plugin-css-modules" }]
  }
}
```