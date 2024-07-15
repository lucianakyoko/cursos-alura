import React from 'react';
import estilos from './Cabecalho.module.css';
import { ReactComponent as Logo } from '../../assets/bytebank.svg';
import avatarUsuario from '../../assets/avatar.svg';

export default function Cabecalho() {
  return (
    <header className={estilos.cabecalho}>
      <div className={estilos.container}>
        <Logo />
        <div className={estilos.usuario}>
          <p>Joana Fonseca Gomes</p>
          <img src={avatarUsuario} alt="Ícone de um avatar de usuário" />
        </div>
      </div>
    </header>
  );
}
