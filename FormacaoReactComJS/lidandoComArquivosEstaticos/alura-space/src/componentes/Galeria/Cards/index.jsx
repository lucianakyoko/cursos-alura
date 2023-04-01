import React from 'react';
import Card from './Card';

export default function Cads({ itens, style }) {
  return (
    <ul className={style.galeria__cards}>
      {itens.map(item => (
        <Card 
          key={item.id} 
          item={item}
          style={style}
        />
      ))}
    </ul>
  )
}
