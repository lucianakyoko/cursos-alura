import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX/ Design',
    'Mobile',
    'Inovação e Gestão'
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log('form foi submetido');
  }

  return(
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar card do colaborador</h2>
        <CampoTexto obrigatorio label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa obrigatorio label="Time" itens={times}/>
        <Botao>Criar Card</Botao>
      </form>
    </section>
  )
}

export default Formulario;