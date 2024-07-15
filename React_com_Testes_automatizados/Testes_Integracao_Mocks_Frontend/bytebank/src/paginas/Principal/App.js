import { Outlet, useLocation } from 'react-router-dom';
import { calculaNovoSaldo } from '../../utils';
import { salvaTransacao } from '../../services/transacoes';
import { atualizaSaldo } from '../../services/saldo';
import useListaTransacoes from '../../hooks/useListaTransacoes';
import useSaldo from '../../hooks/useSaldo';
import estilos from './App.module.css';

import Cabecalho from '../../componentes/Cabecalho';
import Extrato from '../../componentes/Extrato';
import Menu from '../../componentes/Menu';
import Principal from '../../componentes/Principal';
import Transacao from '../../componentes/Transacao';

export default function App() {
  const [saldo, setSaldo] = useSaldo();
  const [transacoes, setTransacoes] = useListaTransacoes();
  const location = useLocation();

  function realizarTransacao(valores) {
    const novoSaldo = calculaNovoSaldo(valores, saldo);
    setSaldo(novoSaldo);
    atualizaSaldo(novoSaldo);
    setTransacoes([...transacoes, valores]);
    salvaTransacao(valores);
  }

  return (
    <>
      <Cabecalho />
      <main className={estilos.caixa}>
        <Menu path={location.pathname} />
        <div className={estilos.envelope}>
          <Principal saldo={saldo} />
          {location.pathname === '/' && (
            <Transacao realizarTransacao={realizarTransacao} />
          )}
          <Outlet />
          <noscript data-testid = 'local'>{location.pathname}</noscript>
        </div>
        <Extrato transacoes={transacoes} />
      </main>
    </>
  );
}
