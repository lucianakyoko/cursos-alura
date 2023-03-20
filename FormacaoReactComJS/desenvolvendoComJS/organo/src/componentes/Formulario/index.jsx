import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto/';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('Programação');

  const aoSalvar = event => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('Programação');
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto 
          obrigatorio label='Nome' 
          placeholder='Digite seu nome'
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto 
          obrigatorio label='Cargo' 
          placeholder='Digite seu cargo' 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
          label='Imagem' 
          placeholder='Digite o endereço da imagem' 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          obrigatorio 
          label='Time' 
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          Criar Botão
        </Botao>
      </form>
    </section>
  );
}

export default Formulario;