const express = require('express');
const rotaLivro = require('./rotas/livro');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors({origin: '*'}));
app.use('/livros', rotaLivro);

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});