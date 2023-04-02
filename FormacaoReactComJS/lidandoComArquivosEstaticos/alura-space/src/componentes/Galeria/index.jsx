import React, { useState } from 'react';
import Tags from '../Tags';
import Cards from './Cards';
import fotos from './fotos.json';
import style from './Galeria.module.scss';


export default function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map(valor => valor.tag))];

  const filtrarFotos = tag => {
    const novasFotos = fotos.filter(foto => foto.tag === tag);
    setItens(novasFotos);
  }

  return (
    <section className={style.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} />
      <Cards itens={itens} style={style} />
    </section>
  )
}
