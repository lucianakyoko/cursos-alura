import './Colaborador.css';

const Colaborador = ({imagem, nome, cargo}) => {
  return (
    <div className='colaborador'>
      <div className='cabecalho'>
        <img src={`https://github.com/${imagem}.png`} alt={nome} />
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}

export default Colaborador;