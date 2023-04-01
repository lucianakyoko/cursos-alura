import React from 'react';
import Tags from '../Tags';
import Cards from './Cards';
import fotos from './fotos.json';
import style from './Galeria.module.scss';


export default function Galeria() {
  return (
    <section className={style.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards itens={fotos} style={style} />
    </section>
  )
}
