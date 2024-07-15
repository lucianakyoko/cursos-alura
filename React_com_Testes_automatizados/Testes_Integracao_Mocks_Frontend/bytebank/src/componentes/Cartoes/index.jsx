import React from 'react';
import estilos from './Cartoes.module.css';
import cartaoFisico from './fisico.svg';
import cartaoDigital from './digital.svg';

export default function Cartoes() {
  return (
    <section className="container">
      <div className="detalhe__superior" />
      <div className={estilos.wrapper}>
        <h2>Meus cartões</h2>
        <p>Cartão físico</p>
        <div className={estilos.cartao}>
          <img src={cartaoFisico} alt="Cartão físico" />
          <div className={estilos.funcoes}>
            <button className={estilos.botaoConfigurar}>Configurar</button>
            <button className={estilos.botaoBloquear}>Bloquear</button>
            <span>Função: Débito/Crédito</span>
          </div>
        </div>
        <p>Cartão digital</p>
        <div className={estilos.cartao}>
          <img src={cartaoDigital} alt="Cartão digital" />
          <div className={estilos.funcoes}>
            <button className={estilos.botaoConfigurar}>Configurar</button>
            <button className={estilos.botaoBloquear}>Bloquear</button>
            <span>Função: Débito</span>
          </div>
        </div>
      </div>
      <div className="detalhe__inferior" />
    </section>
  );
}
