const fs = require('fs');

function getTodosLivros() {
  return JSON.parse(fs.readFileSync('livros.json'));
};

module.exports = {
  getTodosLivros
}