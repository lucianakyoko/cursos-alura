import {
  Button,
  ButtonContainer,
  Divisor,
  Fieldset,
  Form,
  FormContainer,
  Input,
  Label,
  Titulo,
} from "../../components";

const CadastroEspecialistaTecnico = () => {
  return (
    <>
      <Titulo className="titulo">Agora, seus dados técnicos:</Titulo>
      <Form>
        <Fieldset>
          <Label>CRM</Label>
          <Input
            id="campo-crm"
            type="text"
            placeholder="Insira seu número de registro"
          />
        </Fieldset>
        <Divisor />
        <Fieldset>
          <Label>Especialidade</Label>
          <Input
            id="campo-especialidade"
            type="text"
            placeholder="Qual sua especialidade?"
          />
        </Fieldset>

        <FormContainer>
          <Fieldset>
            <Label>Ano de conclusão</Label>
            <Input id="campo-ano-conclusao" type="text" placeholder="2005" />
          </Fieldset>
          <Fieldset>
            <Label>Instituição de ensino</Label>
            <Input
              id="campo-instituicao-ensino"
              type="text"
              placeholder="USP"
            />
          </Fieldset>
        </FormContainer>
        <Divisor />
        <ButtonContainer>
          <Button type="button" $variante="secundario">
            Adicionar Especialidade
          </Button>
        </ButtonContainer>
        <Button type="submit">Avançar</Button>
      </Form>
    </>
  );
};

export default CadastroEspecialistaTecnico;
