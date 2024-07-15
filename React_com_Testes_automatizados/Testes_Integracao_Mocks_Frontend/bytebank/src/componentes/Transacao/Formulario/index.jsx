import React, { useState } from 'react';
import estilos from './Formulario.module.css';

export default function Formulario({ realizarTransacao }) {
  const [valor, setValor] = useState({ transacao: '', valor: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    const valoresAtualizados = { ...valor, [name]: value };
    setValor(valoresAtualizados);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dataTransacao = new Date().toLocaleDateString('pt-br');
    const mesTransacao = new Date().toLocaleDateString('pt-br', {
      month: 'long',
    });
    realizarTransacao({
      ...valor,
      data: dataTransacao,
      mes: mesTransacao[0].toUpperCase() + mesTransacao.substring(1),
    });
    setValor({ ...valor, valor: '' });
  }

  return (
    <form className={estilos.formulario} onSubmit={handleSubmit}>
      <div>
        <h3 className={estilos.legenda__opcoes}>Nova Transação</h3>
        <select
          className={estilos.grupo__opcoes}
          onChange={handleChange}
          name="transacao"
          data-testid="select-opcoes"
        >
          <option defaultValue="Selecione um tipo de transação">
            Selecione um tipo de transação
          </option>
          <option value="Depósito">Depósito</option>
          <option value="Transferência">Transferência</option>
        </select>
      </div>
      <div className={estilos.areaValor}>
        <label htmlFor="valor" className={estilos.legenda}>
          Valor
        </label>
        <input
          onChange={handleChange}
          className={estilos.campo__valor}
          type="number"
          value={valor.valor}
          name="valor"
          id="valor"
          placeholder="Digite um valor"
        />
        <button className={estilos.botao} type="submit">
          Realizar transação
        </button>
      </div>
    </form>
  );
}
