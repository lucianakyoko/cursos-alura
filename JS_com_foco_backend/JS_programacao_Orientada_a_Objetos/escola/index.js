import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Juliana", "j@j.com", "2024-01-01");
console.log(novoUser.exibirInfo());
novoUser.nome = ''
console.log(novoUser.exibirInfo());

// console.log(novoUser.exibirInfo());

// novoUser.#nome = 'Márcia';
// console.log(novoUser.exibirInfo());
// console.log(novoUser.#nome);

// const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2024-01-01');
// console.log(novoAdmin.nome);
// console.log(novoAdmin.exibirNome());