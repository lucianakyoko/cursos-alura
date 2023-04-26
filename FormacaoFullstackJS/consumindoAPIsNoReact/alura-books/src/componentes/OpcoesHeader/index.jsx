import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const Opcoes = styled.ul`
  display: flex;
`;

const textoOpcoes = [
  'CATEGORIAS',
  'FAVORITOS',
  'ESTANTE'
];

function OpcoesHeader() {
  return(
    <Opcoes>
      {textoOpcoes.map(textoOpcao => (
        <Link to={`/${textoOpcao.toLocaleLowerCase()}`}>
          <Opcao key={textoOpcao}><p>{textoOpcao}</p></Opcao>
        </Link>
      ))}
    </Opcoes>
    );
}

export default OpcoesHeader;