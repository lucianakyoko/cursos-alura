import React from 'react';
import { Link } from 'react-router-dom';
import estilos from './Menu.module.css';

const listaMenu = [
  { link: 'Início', href: '/' },
  { link: 'Cartões', href: '/cartoes' },
  { link: 'Serviços', href: '/servicos' },
  { link: 'Investimentos', href: '/investimentos' },
];

export default function Menu({ path }) {
  return (
    <nav className={estilos.menu}>
      {listaMenu.map((item, indice) => {
        return (
          <div key={item.href} className={estilos.item}>
            <Link
              to={item.href}
              className={`${estilos.link} ${
                path === item.href && estilos.linkAtivo
              }`}
            >
              {item.link}
            </Link>
            {indice !== listaMenu.length - 1 && (
              <div className={estilos.divisor} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
