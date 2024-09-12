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