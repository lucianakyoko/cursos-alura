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