export class Negociacao {
  constructor(
    private _data:Date, 
    public readonly quantidade: number, 
    public readonly valor: number
  ) {}

  get data(): Date {
    const data = new Date(this._data.getDate());
    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor
  }
}