import { renderHook, act } from '@testing-library/react';
import { buscaSaldo } from '../services/saldo';
import useSaldo from './useSaldo';

jest.mock('../services/saldo');

const mockSaldo = {
  valor: 100,
};

describe('hooks/useSaldo()', () => {
  test('Deve retornar o saldo e uma função para atualizá-lo', async () => {
    buscaSaldo.mockImplementation(() => mockSaldo.valor);
    const { result } = renderHook(() => useSaldo());

    expect(result.current[0]).toEqual(0);

    await act(async () => {
      result.current[1]();
    });

    expect(result.current[0]).toEqual(mockSaldo.valor);
  });
});