import React from 'react';
import style from './Botao.module.scss';

interface Props {
  children?: React.ReactNode
  type?: "submit" | "button" | "reset" | undefined
  onClick?: () => void
}

export default function Botao ({type, onClick, children}: Props) {
  return (
    <button
      type={type} 
      className={style.botao}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
