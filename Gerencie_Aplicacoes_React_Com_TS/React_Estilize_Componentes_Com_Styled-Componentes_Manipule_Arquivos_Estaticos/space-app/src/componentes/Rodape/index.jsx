import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;

const IconeContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const RodapeTexto = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

function Rodape() {
  return (
    <RodapeEstilizado>
      <IconeContainer>
        <li>
          <a href="#">
            <img src="/imagens/sociais/facebook.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/imagens/sociais/twitter.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/imagens/sociais/instagram.svg" alt="" />
          </a>
        </li>
      </IconeContainer>
      <RodapeTexto>Desenvolvido por Alura.</RodapeTexto>
    </RodapeEstilizado>
  );
}

export default Rodape;