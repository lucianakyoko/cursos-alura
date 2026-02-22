import Colaborador from "./Colaborador";
import Sistema from "./Sistema";
import { Cargos } from "./enum/cargos";

const sistema = new Sistema();


const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

sistema.contratarColaborador(colaborador1);
sistema.contratarColaborador(colaborador2);
sistema.contratarColaborador(colaborador3);

console.log(sistema.gerarRelatorioJSON());

console.log(colaborador1);
sistema.pagaColaborador(colaborador1);
console.log(colaborador1);