import React from 'react';

export default function Box(props) {
  return (
    <div className={props.estilos}>
      <p>{props.renda}</p>
      <h3>{props.children}</h3>
    </div>
  );
}
