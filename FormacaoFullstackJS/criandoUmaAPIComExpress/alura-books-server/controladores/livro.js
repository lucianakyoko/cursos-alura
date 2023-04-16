const fs = require('fs');
const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId } = require('../servicos/livro');

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);

  } catch (error) {
    res.status(500);
    res.send(error.message)
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;
    const livro = getLivroPorId(id);
    res.send(livro);

  } catch (error) {
    res.status(500);
    res.send(error.message)
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    insereLivro(livroNovo);
    res.status(201);
    res.send('Livro inserido com sucesso!')

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;

    modificaLivro(body, id);
    res.send('Item modificado com sucesso!');

  } catch (error) {
    res.status(500);
    res.send(error.message);
  };
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id;
    deletaLivroPorId(id);
    res.send('Livro deletado com sucesso!');

  } catch (error) {
    res.status(500);
    res.send(error.message);    
  };
}



module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro
}