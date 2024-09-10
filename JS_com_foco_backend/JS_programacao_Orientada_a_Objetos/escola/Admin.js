import User from "./User.js";

export default class Admin extends User{
  constructor(nome, email, nascimento, role='admin', ativo='true') {
    super(nome, email, nascimento, role, ativo)
  }

  // exibirInfo() {
  //   const infos = super.exibirInfo()
  //   return `admin - ${infos}`;
  // }

  criarCurso(nomeCurso, qtdVagas) {
    return `curso ${nomeCurso} criado com ${qtdVagas} vagas.`; 
  }


}


// console.log(novoAdmin.criarCurso('JavaScript', 20));
