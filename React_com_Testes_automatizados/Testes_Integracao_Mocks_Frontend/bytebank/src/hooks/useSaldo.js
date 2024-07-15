import { useEffect, useState } from 'react';
import { buscaSaldo } from '../services/saldo';

export default function useSaldo() {
  const [saldo, setSaldo] = useState(0);

  async function obtemSaldo() {
    setSaldo(await buscaSaldo());
  }

  useEffect(() => {
    obtemSaldo();
  }, [saldo]);

  return [saldo, setSaldo];
}
