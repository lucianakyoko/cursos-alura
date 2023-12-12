import RequisicaoIncorreta from "./requisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
  constructor(erro) {
    const mensagensErro = Object
    .values(erro.errors)
    .map(erro => erro.message)
    .join("; ");

    super(`Os seguintes erros foram encontrados: ${mensagensErro}`)
  }
}

export default ErroValidacao;