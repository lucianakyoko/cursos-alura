import styled from 'styled-components';

import IconesHeader from "../IconesHeader";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />

      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;