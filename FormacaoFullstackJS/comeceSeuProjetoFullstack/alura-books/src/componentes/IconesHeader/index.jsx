
import styled from 'styled-components';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const icones =[perfil, sacola];


function IconesHeader() {
  return (
    <Icones>
      {icones.map(icone => (
        <Icone key={icone}>
          <img src={icone} />
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;