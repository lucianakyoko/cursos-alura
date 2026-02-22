import { Cargos } from "./enum/cargos";

export default class Colaborador {

    public readonly nome: string;
    private _cargo: Cargos;
    private _saldo: number;
    constructor(
        nome: string,
        cargo: Cargos,
    ) {
        this.nome = nome;
        this._cargo = cargo;
        this._saldo = 0;
    }

    get cargo() {
        return this._cargo;
    }

    set cargo(cargo: Cargos) {
        this._cargo = cargo;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(salario: number) {
        this._saldo += salario;
    }

}