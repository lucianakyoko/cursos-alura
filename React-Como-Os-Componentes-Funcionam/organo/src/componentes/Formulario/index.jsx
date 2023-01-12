import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = ({aoCadastrar, times, cadastrarTime}) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    aoCadastrar({
      nome: nome, 
      cargo: cargo, 
      imagem: imagem, 
      time: time
    });

    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }

  return(
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar card do colaborador</h2>
        <CampoTexto 
          obrigatorio 
          label="Nome" 
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto 
          obrigatorio 
          label="Cargo" 
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
          label="Imagem" 
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          obrigatorio 
          label="Time" 
          itens={times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form 
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarTime({nome: nomeTime, cor: corTime})
        }} 
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <CampoTexto 
          obrigatorio 
          label="Nome" 
          placeholder="Digite nome do time" 
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
        />
        <CampoTexto 
          obrigatorio 
          label="Cor do Time" 
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={valor => setCorTime(valor)}
        />
        <Botao>Criar um novo time</Botao>
      </form>
    </section>
  )
}

export default Formulario;