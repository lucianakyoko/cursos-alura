import React, { useState } from "react";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto";
import { ListaSupensa } from "../../componentes/ListaSuspensa/ListaSuspensa";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";
import { Form, Formik } from 'formik';
import * as Yup from 'yup'

const estadosBrasileiros = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
];

const schema = Yup.object().shape({
  nome: Yup.string().required('Campo obrigatório').min(2, 'Digite seu nome completo'),
  cidade: Yup.string().required('Campo obrigatório').max(58, 'Digiteuma cidade válida'),
  estado: Yup.string().required('Campo obrigatório')
});

const DadosPessoais = () => {
  return (
    <Formik initialValues={{
      nome:'', 
      estado: '', 
      cidade:'',  
      telefone: '', 
      email:'', 
      senha: '', 
      confirmarSenha:''
    }}
      validate={(values) => {
        const errors = {};
        if (!values.estado) {
          errors.estado = 'Campo obrigatório';
      }
      if (!values.cidade) {
          errors.cidade = 'Campo obrigatório';
      }
      if (!values.senha) {
          errors.senha = 'Campo obrigatório';
      }
      if (!values.telefone) {
          errors.telefone = 'Campo obrigatório'
      } else if (!/^\d{11}$/i.test(values.telefone)) {
          errors.telefone = 'Número de telefone inválido'
      }
      if (!values.email) {
          errors.email = 'Campo obrigatório'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Email inválido'
      }
      if (!values.confirmarSenha) {
          errors.confirmarSenha = 'Campo obrigatório'
      } else if (values.senha != values.confirmarSenha) {
          errors.confirmarSenha = 'As senhas não conferem'
      }
        return errors;
      }}

      onSubmit={(values) => {
        console.log('dados do formulario', values)
      }}
    >

      {formik => (
        <Form onSubmit={formik.handleSubmit}>
          <div style={{ textAlign: "center" }}>
            <Tipografia variante="h1" componente="h1">
              Crie seu cadastro
            </Tipografia>
            <Tipografia variante="body" componente="body">
              Crie seu perfil gratuitamente para começar a trabalhar com os
              melhores freelancers. Em seguida, você poderá dar mais detalhes
              sobre suas demandas e sobre sua forma de trabalho.
            </Tipografia>
          </div>
          <Row>
            <Col>
              <CampoTexto
                titulo="Nome completo"
                name='nome'
                type="text"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={4}>
              <ListaSupensa
                titulo="Estado"
                opcoes={estadosBrasileiros}
              />
            </Col>
            <Col lg={8} md={8} sm={8}>
              <CampoTexto
                titulo="Cidade"
                name='cidade'
                type="text"
                required
              />
            </Col>
          </Row>
          <Row>   
            <Col lg={6} md={6} sm={6}>
              <CampoTexto
                titulo="E-mail"
                name='email'
                type="email"
                required
              />
            </Col>
            <Col lg={6} md={6} sm={6}>
              <CampoTexto
                titulo="Telefone"
                name='telefone'
                type="tel"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={6}>
              <CampoTexto
                titulo="Senha"
                name='senha'
                type="password"
                required
              />
            </Col>
            <Col lg={6} md={6} sm={6}>
              <CampoTexto
                titulo="Confirme sua senha"
                name='confirmarSenha'
                type="password"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={6}>
              <Link to="/cadastro/interesses">
                <Botao variante="secundaria">Anterior</Botao>
              </Link>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <div style={{ textAlign: "right" }}>
                {/* <Link to='/cadastro/concluido'> */}
                <Botao>Próxima</Botao>
                {/* </Link> */}
              </div>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default DadosPessoais;
