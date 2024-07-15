import React from 'react';
import estilos from './Servicos.module.css';
import icones from './icones.json';
import Icone from './Icone';

export default function Servicos() {
  return (
    <section className="container">
      <div className={estilos.detalhe__superior} />
      <div className={estilos.wrapper}>
        {icones.map((icone) => {
          return <Icone key={icone.servico} estilos={estilos} icone={icone} />;
        })}
      </div>
      <div className={estilos.detalhe__inferior} />
    </section>
  );
}
