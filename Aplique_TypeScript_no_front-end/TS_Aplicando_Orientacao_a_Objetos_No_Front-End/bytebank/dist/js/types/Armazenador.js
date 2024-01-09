export class Armazenador {
    constructor() { }
    ;
    static salvar(chave, valor) {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }
    ;
    static obter(chave, reviver) {
        const valor = localStorage.get(chave);
        if (valor === null) {
            return null;
        }
        ;
        if (reviver) {
            return JSON.parse(valor, reviver);
        }
        ;
        return JSON.parse(valor);
    }
}
