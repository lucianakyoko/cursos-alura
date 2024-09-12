# Anotações

---

- [arquivos iniciais](https://github.com/alura-cursos/alura-docs)


---

## WebSockets e Socket.IO
O protocolo WebSockets foi implementado em 2011 e é suportado por praticamente todos os navegadores modernos. A documentação na MDN fornece mais detalhes sobre o protocolo e como você pode escrever aplicações WebSockets utilizando JavaScript puro.

### Algumas vantagens
- **Long-polling do HTTP usado como reserva**: caso o navegador não tenha suporte ao protocolo WebSockets, o Socket.IO trocará automaticamente para o modo long-polling do HTTP. Esse modo não é tão eficiente quanto o WebSockets, mas funciona de forma semelhante, e mantém uma conexão ativa entre o cliente e o servidor por um determinado período de tempo, sendo melhor que o modelo requisição-resposta tradicional do HTTP.

- **Reconexão automática**: caso algum cliente não consiga se conectar ao servidor, o Socket.IO tentará periodicamente conectá-lo novamente, o que vai aumentar o tamanho desse período a cada tentativa.

- **Buffer de pacotes**: quando um cliente é desconectado, seus pacotes de dados são guardados e, quando o cliente for reconectado, eles serão enviados automaticamente.

Além dessas vantagens listadas, veremos mais algumas vantagens que são recursos. Vou mostrar tudinho ao longo do curso, ok? 

---

## que dados posso enviar?
Você aprendeu como emitir o seu primeiro evento no Socket.IO com o método emit()!

Para isso, utilizamos esse método do lado do cliente, para em seguida poder escutá-lo do lado do servidor com o método on().

Também vimos que os eventos do Socket.IO podem carregar dados no segundo parâmetro do método emit(). No nosso caso, enviamos o texto do editor, um dado do tipo string. Mas além desse, quais outros tipos de dados eu posso enviar junto com os eventos?

O Socket.IO permite que qualquer dado serializável do JavaScript possa ser enviado junto com um evento. Um dado serializável é um dado que pode ser convertido em um determinado formato e, posteriormente, pode ser convertido de volta para sua forma original. Chamamos a recuperação do dado de desserialização.

O JavaScript possui os métodos nativos JSON.stringify() e JSON.parse() para, respectivamente, serializar e desserializar diversos tipos de dados, como os tipos primitivos, arrays e objetos. Alguns tipos de dados, como undefined, Function, Symbol, Infinity, NaN, entre outros, não são serializados corretamente com estes métodos, pois não são dados aceitos no formato JSON.

Acesse a documentação do JSON.stringify() para estudar mais sobre quais tipos de dados podem ser serializados!

Podemos falar que, “por debaixo dos panos”, os métodos JSON.stringify() e JSON.parse() são utilizados pelo Socket.IO ao enviar e receber os dados carregados pelos eventos! Dessa forma, não precisamos utilizá-los manualmente para a maioria dos tipos de dados.

Entretanto, uma atenção especial deve ser tomada para os tipos Map e Set do JavaScript. Eles não são serializados corretamente se utilizarmos JSON.stringify(), mas possuem métodos próprios para serialização.

Um objeto Map pode ser serializado e desserializado com o seguinte código:
```
const mapa = new Map();

const mapaSerializado = [...mapa.entries()];

const mapaOriginal = new Map(mapaSerializado);
```

De forma semelhante, um objeto Set pode ser serializado e desserializado com o seguinte código:
```
const set = new Set();

const setSerializado = [...set.keys()];

const setOriginal = new Set(setSerializado);
```

O tipo Date também merece atenção especial. Ao enviar um objeto Date como dado de um evento, ele será convertido para sua representação em string (por exemplo, 2022-11-03T19:11:54.073Z).

Então, ao receber esse dado do outro lado da comunicação, ele deve ser convertido de volta para o tipo Date. Para fazer isso, utilizamos o construtor Date(), passando a representação em string da data como parâmetro, como no exemplo a seguir:
```
const dataStr = "2022-11-03T19:11:54.073Z";

const data = new Date(dataStr);
```

Confira essas informações na seção [Emitting Events](https://socket.io/docs/v4/emitting-events/) da documentação!

---

## eventos com mesmo nome?
Nos últimos vídeos, entendemos como fazer um cliente emitir um evento para o servidor e, em seguida, fazer o servidor enviar um novo evento para vários outros clientes. Utilizamos o seguinte código em socket-back.js:
```
io.on("connection", (socket) => {
  socket.on("texto_editor", (texto) => {
    socket.broadcast.emit("texto_editor_clientes", texto);
  });
});
```

E se eu te disser que, nesse lado do servidor, também poderíamos ter emitido um evento chamado "texto_editor"? Saiba que isso não geraria conflito no código!

O código ficaria assim:
```
io.on("connection", (socket) => {
  socket.on("texto_editor", (texto) => {
    socket.broadcast.emit("texto_editor", texto);
  });
});
```

Mas também precisaríamos alterar o nome do evento em socket-front-documento.js, trocando "texto_editor_clientes" por "texto_editor":
```
socket.on("texto_editor", (texto) => {
  atualizaTextoEditor(texto);
});
```

Como já vimos antes, o protocolo WebSockets permite que tanto o cliente quanto o servidor possam emitir eventos. Um detalhe importante é que quando um dos lados da comunicação emite um evento, apenas o outro lado pode escutá-lo.

Ou seja, se o cliente emitir um evento chamado "texto_editor", apenas o servidor escutará essa emissão. Da mesma forma, se o servidor também emitir um evento com o mesmo nome "texto_editor", apenas os clientes escutarão essa emissão.

Dessa forma, é possível que você identifique algum código onde isso aconteça. A pessoa desenvolvedora pode escolher que dois eventos diferentes tenham o mesmo nome se ela julgar que eles são intrínsecos, ou que um seja uma “continuação” do outro.

No nosso caso, faria sentido. Pois, para que o texto do editor seja enviado por um cliente, chegue ao servidor, e seja enviado de volta para outros clientes, essa informação “viaja” pelos dois eventos que criamos. Ou seja, o evento emitido pelo servidor pode ser visto como a continuação do evento emitido pelo cliente.

Mas caso você queira evitar qualquer confusão na leitura do código, você pode deixar todos os eventos com nomes diferentes, como estou fazendo ao longo do curso!

---

## evento disconnect
Você sabia que existe um evento chamado “disconnect” (do inglês “desconectar”) que pode ser escutado tanto do lado do cliente quanto do servidor? Para praticar e entender melhor a conexão entre cada cliente e servidor, vamos explorar esse evento:

### Quando um cliente é desconectado:
No arquivo socket-back.js, dentro da função callback do evento “connection”, podemos adicionar o seguinte código:
```
  socket.on("disconnect", (motivo) => {
    console.log(`Cliente "${socket.id}" desconectado!
    Motivo: ${motivo}`);
  });
```

Você sabe que, quando um cliente se conecta ao servidor, um evento “connection” é emitido pelo cliente e pode ser escutado por io.on(). De forma semelhante, quando um cliente é desconectado, por exemplo, quando sai da página ou a atualiza, ele emite um evento chamado “disconnect”, que pode ser escutado por socket.on() no lado do servidor.

Se você atualizar a página de documento no navegador, deve aparecer uma mensagem como essa no terminal do VSCode:
```
Cliente "9i2Fhbhe_SY4KHC0AAAB" desconectado!
    Motivo: transport close
```

Perceba que o motivo de desconexão também pode ser obtido como parâmetro da função callback do evento.

E se você manteve a linha console.log("Um cliente se conectou! ID:", socket.id); no seu código, deve aparecer logo abaixo uma mensagem como essa:
```
Um cliente se conectou! ID: L0TRoI-WR7w-mUH5AAAF
```

Ou seja, com isso vemos que um socket é mantido para cada cliente que se mantém na página, e deixa de existir quando essa conexão é encerrada de alguma forma, seja atualizando ou saindo da página. Mesmo que seja a mesma pessoa no mesmo navegador, um novo socket é criado para cada vez que a página é carregada.

Caso queiramos guardar as informações de cada pessoa que acessa a aplicação, independente de desconexões, elas devem ser armazenadas de outra forma, como no próprio navegador ou em um banco de dados, por exemplo.

### Quando o servidor é desconectado:
Também podemos escutar no lado cliente se o servidor foi desconectado de alguma forma. Em socket-front-documento.js, podemos adicionar o seguinte código:
```
socket.on("disconnect", (motivo) => {
  console.log(`Servidor desconectado!
  Motivo: ${motivo}`);
});
```

Se você mantiver o navegador aberto na página de documento e encerrar o servidor, receberá a seguinte mensagem no console do navegador:
```
Servidor desconectado!
  Motivo: transport close
```

Você pode ler mais sobre esses eventos e os diferentes motivos de desconexão nas seções [The Socket instance (server-side)](https://socket.io/docs/v4/server-socket-instance/#disconnect) e [The Socket instance (client-side)](https://socket.io/docs/v4/client-socket-instance/#disconnect) da documentação. Essas páginas também contêm informações de outros eventos das instâncias socket tanto no lado do front-end quanto no lado do back-end.