import './style.css';

const textoOpcoes = [
  'CATEGORIAS',
  'FAVORITOS',
  'MINHA ESTANTE'
];

function OpcoesHeader() {
  return(
    <ul className='opcoes'>
      {textoOpcoes.map(textoOpcao => (
        <li className='opcao'><p>{textoOpcao}</p></li>
      ))}
    </ul>
    );
}

export default OpcoesHeader;