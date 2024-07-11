import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import GrupoRadio from "../../componentes/Radio/GrupoRadio"
import { Col, Row } from "react-grid-system"
import { Botao } from "../../componentes/Botao/Botao"
import { Link } from "react-router-dom"
import { Form, Formik } from "formik"

const opcoes = [
  {
    valor: 1,
    label: 'TI e Programação',
  },
  {
    valor: 2,
    label: 'Design e Multimídia',
  },
  {
    valor: 3,
    label: 'Revisão',
  },
  {
    valor: 4,
    label: 'Tradução',
  },
  {
    valor: 5,
    label: 'Transcrição',
  },
  {
    valor: 6,
    label: 'Marketing',
  },
]

const Interesses = () => {


  return (<>
    <div style={{ textAlign: 'center' }}>
      <Tipografia variante="h1" componente="h1">
        Crie seu cadastro
      </Tipografia>
      <Tipografia variante='h3' componente='h2'>
        Qual a área de interesse?
      </Tipografia>
    </div>
    <Formik initialValues={{
      interesse: ''
    }}>
      <Form>
        <GrupoRadio
          opcoes={opcoes}
        />
      </Form>
    </Formik>
    <Row>
      <Col lg={6} md={6} sm={6}>
        <Link to="/cadastro">
          <Botao variante="secundaria">
            Anterior
          </Botao>
        </Link>
      </Col>
      <Col lg={6} md={6} sm={6}>
        <div style={{ textAlign: 'right' }}>
          <Link to='/cadastro/dados-pessoais'>
            <Botao>
              Próxima
            </Botao>
          </Link>
        </div>
      </Col>
    </Row>
  </>)
}

export default Interesses