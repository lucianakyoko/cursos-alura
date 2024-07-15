import React from 'react';
import estilos from './Pagina404.module.css';
import espaco from './404.svg';
import { Link } from 'react-router-dom';

export default function Pagina404() {
  return (
    <div data-testid="pagina-404" className={estilos.container}>
      <h1>Ops! Não encontramos a página</h1>
      <p>
        E olha que exploramos o universo procurando por ela! Que tal voltar e
        tentar novamente?
      </p>
      <Link to="/" className={estilos.link}>
        Voltar ao início
      </Link>
      <img src={espaco} alt="Imagem ilustrativa do espaço" />
    </div>
  );
}
