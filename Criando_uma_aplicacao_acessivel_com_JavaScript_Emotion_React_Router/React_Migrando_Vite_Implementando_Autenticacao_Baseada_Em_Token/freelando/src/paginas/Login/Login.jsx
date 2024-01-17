import styled from "@emotion/styled"
import { useState } from "react"
import { Col, Container, Row } from "react-grid-system"
import { Link as RouterLink } from "react-router-dom"
import { Botao } from "../../componentes/Botao/Botao"
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto"
import { Card } from "../../componentes/Card/Card"
import { Link } from "../../componentes/Link/Link"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import { Logo } from "./Logo"
import { useContextUsuarioContext } from "../../contexto/SessaoUsuario"

const FormEstilizado = styled.form`
    border-bottom: 1px solid;
    border-color: ${props => props.theme.cores.primarias.a};
    padding-bottom: ${props => props.theme.espacamentos.l};
`

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { login } = useContextUsuarioContext();

  const tentarEfetuarLogin = async (evento) => {
    evento.preventDefault();
    login(email, senha);
  }

  return (<Container>
    <Row justify="center">
      <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ margin: '80px 0' }}>
        <div style={{ textAlign: 'center' }}>
          <Logo />
        </div>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <Tipografia variante="h1" componente="h1">
              Efetuar login
            </Tipografia>
          </div>
          <FormEstilizado onSubmit={tentarEfetuarLogin}>
            <CampoTexto
              titulo="E-mail"
              valor={email}
              onChange={setEmail}
              tipo="email"
            />
            <CampoTexto
              titulo="Senha"
              valor={senha}
              onChange={setSenha}
              tipo="password"
            />
            <div style={{ textAlign: 'right' }}>
              <RouterLink to="">
                <Tipografia componente="legenda" variante="legenda">
                  Esqueceu sua senha?
                </Tipografia>
              </RouterLink>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Botao>
                Login
              </Botao>
            </div>
          </FormEstilizado>
          <div style={{ textAlign: 'center' }}>
            <Tipografia componente="legenda" variante="legenda">
              Ainda não criou sua conta no Freelando?
            </Tipografia>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link variante="secundario">
              <RouterLink to="/cadastro">
                Cadastre-se clicando aqui!
              </RouterLink>
            </Link>
          </div>
        </Card>
      </Col>
    </Row>
  </Container>)
}

export default Login