import React from 'react';
import estilos from './Menu.module.css';

const listaMenu = [
  'Inicial',
  'Transferências',
  'Investimentos',
  'Outros serviços',
];

export default function Menu() {
  return (
    <nav className={estilos.menu}>
      {listaMenu.map((item, indice) => {
        return (
          <div key={item} className={estilos.item}>
            <a href="/" className={estilos.link}>
              {item}
            </a>
            {indice !== listaMenu.length - 1 && (
              <div className={estilos.divisor} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
