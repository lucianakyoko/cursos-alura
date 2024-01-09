export class Armazenador {
  private constructor() {};

    static salvar(chave: string, valor: any): void {
      const valorComoString = JSON.stringify(valor);
      localStorage.setItem(chave, valorComoString);
    };

    static obter(chave:string, reviver?:(this:any, key: string, value:any) => any) {
      const valor = localStorage.get(chave);
      if(valor === null) {
        return null;
      };

      if(reviver) {
        return JSON.parse(valor, reviver);
      };

      return JSON.parse(valor);
    }
}