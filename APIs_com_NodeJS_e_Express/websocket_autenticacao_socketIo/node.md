# anotações do curso - WebSockets: implemente autenticação e avance no Socket.IO

---

## WebSockets seguro
**Os dados que vão do cliente até o servidor estão seguros?**
A resposta é: no nosso atual ambiente, não. Da mesma forma que o protocolo HTTP possui sua versão segura, o HTTPS, o protocolo WS (WebSockets) também possui sua versão segura, o WSS. Entretanto, durante o curso, estamos trabalhando no localhost, então, por padrão, estamos utilizando a versão não segura do protocolo WS.

Você já deve ter conferido no curso de HTTP as diferenças entre o HTTP e o HTTPS, e uma delas é que as mensagens enviadas do cliente para o servidor no HTTPS são criptografadas, diferente do HTTP. Ou seja, mesmo que um invasor intercepte a senha que foi digitada no formulário, ela estará criptografada até o momento em que chegar no servidor, assim o invasor não terá acesso ao que realmente foi digitado.

Sabia que a mesma coisa acontece no protocolo WSS a versão segura do WS? Seja partindo do cliente ou do servidor, os dados que são carregados pelos eventos são criptografados até chegar no outro lado da comunicação. Ou seja, caso você precise utilizar WebSockets no mercado, desde que seja a versão segura, não há problema em enviar informações sensíveis através dos eventos.

Então, respondendo novamente a pergunta inicial: o protocolo WS não garante a segurança dos dados enviados entre cliente e servidor, mas o protocolo WSS sim!

---


