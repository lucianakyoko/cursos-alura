/* eslint-disable no-undef */
import { somaHorasExtras, calculaDescontos } from '../index.js';

//describe - é um agrupamento de testes
//test - é uma função de teste
//it - também é uma função de teste, porém, mais sintática

describe('Testes dos cálculos de folha', () => {
  it('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);
  
    expect(retornado).toBe(esperado);
  });
  
  it('Deve descontar o valor do salário', () => {
    const esperado = 2300;
    const retornado = calculaDescontos(2500, 200);
  
    expect(retornado).toBe(esperado);
  });
});

