export default class User {
  constructor(nome, email, nascimento, role, ativo=true) {
    this.nome = nome,
    this.email = email,
    this.nascimento = nascimento,
    this.role = role || 'estudante',
    this.ativo = ativo
  }
  criarPerfil() {
    //lógica
  }
  apagarPerfil() {
    //lógica
  }
  exibirInfo() {
    return `${this.nome}, ${this.email}`
  }
  exibirListaCursos () {
    //exibe lista de cursos
  }
  matricularEmCurso() {
    //lógica
  }
  exibirCursosMatriculados() {
    //lógica
  }
}

const novoUser = new User('Juliana', 'j@j.com', '2024-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfo());

// console.log(User.prototype.isPrototypeOf(novoUser));
