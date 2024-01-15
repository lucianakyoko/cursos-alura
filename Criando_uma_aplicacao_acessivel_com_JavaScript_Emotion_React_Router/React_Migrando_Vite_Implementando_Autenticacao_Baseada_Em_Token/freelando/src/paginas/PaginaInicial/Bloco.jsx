import styled from "@emotion/styled"
import { Row } from "react-grid-system"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"

const ContanierEstilizado = styled.div`
    text-align: center;
    padding-top: ${props => props.theme.espacamentos.s};
`
const Bloco = ({ titulo, children }) => {
  return (<ContanierEstilizado>
    <Tipografia componente="h2" variante="h2">
      {titulo}
    </Tipografia>
    <Row >
      {children}
    </Row>
  </ContanierEstilizado>)
}

export default Bloco