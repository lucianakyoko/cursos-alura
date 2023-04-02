import React from 'react';
import fotosPopulares from './fotos-populares.json';
import Botao from '../Botao';
import styles from './Populares.module.scss';

export default function Populares() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {fotosPopulares.map(fotoPopular => (
          <li key={fotoPopular.id}>
            <img src={fotoPopular.path} alt={fotoPopular.alt} />
          </li>
        ))}
      </ul>
      <Botao>Ver mais fotos</Botao>
    </aside>
  )
}
