import { Cargos } from "./enum/cargos";
import Colaborador from "./Colaborador";


export default class Sistema {
    private _colaboradores: Colaborador[];
    protected salarioBase: number;

    constructor(salarioBase: number = 1000) {
        this._colaboradores = [];
        this.salarioBase = salarioBase;
    }

    contratarColaborador(colaborador: Colaborador) {
        this._colaboradores.push(colaborador);
    }

    demitirColaborador(colaboradorChave: Colaborador) {
        this._colaboradores = this._colaboradores.filter((colaborador) => colaborador !== colaboradorChave);
    }

    calcularSalario(cargo: Cargos) {

        if (cargo === Cargos.Estagiario) {
            return this.salarioBase * 1.2;
        }

        else if (cargo === Cargos.Junior) {
            return this.salarioBase * 3;
        }

        else if (cargo === Cargos.Pleno) {
            return this.salarioBase * 5;
        }

        else if (cargo === Cargos.Senior) {
            return this.salarioBase * 7;
        }
        return 0;
    }

    pagaColaborador(colaborador: Colaborador) {
        const salarioColaborador = this.calcularSalario(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }



    gerarRelatorioJSON() {

        let relatorio = this._colaboradores.map((colaborador) => {
            return ({
                nome: colaborador.nome,
                cargo: colaborador.cargo,
                salario: this.calcularSalario(colaborador.cargo),
            })
        })
        return JSON.stringify(relatorio)
    };

    get colaboradores() {
        return this._colaboradores;
    }
}



