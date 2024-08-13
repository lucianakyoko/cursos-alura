import styled from "styled-components";
import backgroundImage from "./ImagemDeFundo.png";

const StyledContainer = styled.main`
  background-image: url(${backgroundImage});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledContent = styled.div`
  background-color: white;
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PaginaBaseFormulario({ children }: { children: React.ReactNode }) {
  return (
    <StyledContainer>
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
}

export default PaginaBaseFormulario;
