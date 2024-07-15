import styled from "styled-components";
import logo from "./Logo.png";

const StyledImg = styled.img`
  margin-top: 1.5rem;
`;

const Logotipo = () => {
  return <StyledImg src={logo} alt="Logo da Voll" />;
};

export default Logotipo;
