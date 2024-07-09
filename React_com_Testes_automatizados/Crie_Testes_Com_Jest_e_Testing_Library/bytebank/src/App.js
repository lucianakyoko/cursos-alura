import React, { useState } from 'react';
import estilos from './App.module.css';
import { calculaNovoSaldo } from './utils';

import Cabecalho from './componentes/Cabecalho';
import Extrato from './componentes/Extrato';
import Menu from './componentes/Menu';
import Principal from './componentes/Principal';
import Transacao from './componentes/Transacao';

export default function App() {
  const [saldo, setSaldo] = useState(1000);
  const [transacoes, setTransacoes] = useState([]);

  function realizarTransacao(valores) {
    const novoSaldo = calculaNovoSaldo(valores, saldo);
    setSaldo(novoSaldo);
    setTransacoes([...transacoes, valores]);
  }

  return (
    <>
      <Cabecalho />
      <main className={estilos.container}>
        <Menu />
        <div className={estilos.wrapper}>
          <Principal saldo={saldo} />
          <Transacao realizarTransacao={realizarTransacao} />
        </div>
        <Extrato transacoes={transacoes} />
      </main>
    </>
  );
}
