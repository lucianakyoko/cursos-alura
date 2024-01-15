import styled from '@emotion/styled'
import { Col, Container, Row } from 'react-grid-system'
import { Link } from 'react-router-dom'
import { Botao } from '../../../componentes/Botao/Botao'
import { Tipografia } from '../../../componentes/Tipografia/Tipografia'
import imagemBanner from './pessoas.png'


const ImgEstilizado = styled.img`
    max-width: 100%;
`

const FigureEstilizada = styled.figure`
    padding: ${props => props.theme.espacamentos.l};
    background: ${props => props.theme.cores.neutras.c};
    color: ${props => props.theme.cores.primarias.b};
    margin: 0;
`

const Banner = () => {
  return <FigureEstilizada>
    <Container>
      <Row align='center'>
        <Col md={5} sm={12}>
          <figcaption>
            <Tipografia componente="h1" variante="h1">
              Uma ponte entre os freelas mais talentosos e os projetos mais interessantes!
            </Tipografia>
          </figcaption>
          <Link to="/cadastro">
            <Botao>
              Quero me cadastrar
            </Botao>
          </Link>
        </Col>
        <Col md={7} sm={12}>
          <ImgEstilizado src={imagemBanner} alt="" />
        </Col>
      </Row>
    </Container>
  </FigureEstilizada>
}

export default Banner