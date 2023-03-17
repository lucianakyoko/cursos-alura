import Botao from '../Botao';
import CampoTexto from '../CampoTexto/';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
  const times = [
    'Programação',
    'Front-end',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ];

  const aoSalvar = event => {
    event.preventDefault();
    console.log('form submetido')
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio label='Nome' placeholder='Digite seu nome' />
        <CampoTexto obrigatorio label='Cargo' placeholder='Digite seu cargo' />
        <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' />
        <ListaSuspensa obrigatorio label='Time' itens={times} />
        <Botao>
          Criar Botão
        </Botao>
      </form>
    </section>
  );
}

export default Formulario;