import React from 'react';
import Box from './Box';
import grafico from './grafico.svg';
import estilos from './Investimentos.module.css';

export default function Investimentos() {
  return (
    <section className="container">
      <div className="detalhe__superior" />
      <div className={estilos.wrapper}>
        <div className={estilos.investimentos}>
          <h2>Investimentos</h2>
          <p>Total: R$ 1.000.000,00</p>
        </div>
        <div className={estilos.aplicacoes}>
          <Box renda="Renda Fixa" estilos={estilos.renda}>
            R$ 300.000,00
          </Box>
          <Box renda="Renda variável" estilos={estilos.renda}>
            R$ 700.000,00
          </Box>
        </div>
        <h3>Estatísticas</h3>
        <div className={estilos.grafico}>
          <img src={grafico} alt="Gráfico dos investimentos" />
        </div>
      </div>
      <div className="detalhe__inferior" />
    </section>
  );
}
