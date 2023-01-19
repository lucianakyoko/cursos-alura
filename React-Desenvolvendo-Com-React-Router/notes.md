# REACT: DESENVOLVENDO EM REACT ROUTER COM JAVASCRIPT

---
## Class 03 - Rotas aninhadas
**rotas index e caminhos relativos**
Você viu que quando queremos reaproveitar partes da nossa aplicação em apenas algumas rotas em vez de todas, utilizamos o recurso de rotas aninhadas, que são rotas filhas de uma mesma rota pai. Você pode ver sobre isso na documentação.

Aproveite também para conferir a documentação sobre rotas index.

Da documentação, há o seguinte exemplo:

```
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Activity />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="activity" element={<Activity />} />
      </Route>
    </Routes>
  );
}
```

Veja que há três rotas aninhadas de Layout. A primeira delas possui um atributo index em vez de um atributo path. Isso é mesmo que dizer que o caminho desta rota é igual ao da rota pai, ou seja, nesse caso é a mesma coisa que um atributo path="/".

As outras duas rotas têm caminhos que iniciam sem a /. Isso quer dizer que essas rotas serão relativas ao caminho da rota pai, e são equivalentes a "/invoices" e "/activity", respectivamente.

Se a rota pai tivesse o caminho "/qualquercoisa", os caminhos das três rotas aninhadas seriam equivalentes a "/qualquercoisa, "/qualquercoisa/invoices" e "/qualquercoisa/activity". Utilizando rotas index e caminhos relativos, evitamos repetição de código e o deixamos mais legível.

---

## Aula 04 - Linguagem markdown
O markdown é uma linguagem de marcação, assim como o HTML. Inclusive, no projeto React que criamos, já vem um arquivo chamado README.md na raiz do projeto. A extensão .md indica que é um arquivo escrito em markdown.

Você pode ler mais sobre essa linguagem no artigo Markdown: [como trabalhar com essa linguagem de markup?](https://www.alura.com.br/artigos/como-trabalhar-com-markdown)

No Olá Mundo, guardamos os textos markdown no JSON, mas essa não é a melhor forma de trabalhar com o markdown, pois o JSON possui limitações, como não permitir quebra de linha nas strings (foi utilizado \n em vez de quebra de linha). Porém, os cenários ideais são um pouco mais avançados, envolvendo consumo de serviços externos. Então, apesar das limitações do JSON, ele é mais simples de utilizar e supre as necessidades do nosso projeto.

Para melhor experiência de escrita, você pode escrever seus posts em markdown e depois passar para a string do JSON, mas se atente para substituir as quebras de linha por \n (e duas quebras de linha \n\n para um novo parágrafo), assim como já está sendo feito no posts.json.

