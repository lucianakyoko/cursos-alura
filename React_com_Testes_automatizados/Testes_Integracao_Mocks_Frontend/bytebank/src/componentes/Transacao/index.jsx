import React from 'react';
import estilos from './Transacao.module.css';
import { ReactComponent as Ilustracao } from './ilustracao.svg';
import Formulario from './Formulario';

export default function Transacao({ realizarTransacao }) {
  return (
    <section className="container">
      <div className="detalhe__superior" />
      <div className={estilos.wrapper}>
        <Formulario realizarTransacao={realizarTransacao} />
      </div>
      <Ilustracao height="229" width="459" />
      <div className="detalhe__inferior" />
    </section>
  );
}
