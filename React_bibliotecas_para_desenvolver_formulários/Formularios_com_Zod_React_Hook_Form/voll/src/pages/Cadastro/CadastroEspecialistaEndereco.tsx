import {
  Button,
  Divisor,
  Fieldset,
  Form,
  FormContainer,
  Input,
  Label,
  Titulo,
  UploadDescription,
  UploadIcon,
  UploadInput,
  UploadLabel,
  UploadTitulo,
} from "../../components";

const CadastroEspecialistaEndereco = () => {
  return (
    <>
      <Titulo className="titulo">Para finalizar, só alguns detalhes!</Titulo>
      <Form>
        <div>
          <UploadTitulo>Sua foto</UploadTitulo>
          <UploadLabel htmlFor="campo-upload">
            <UploadIcon />
            <UploadDescription>Clique para enviar</UploadDescription>
            <UploadInput accept="image/*" id="campo-upload" type="file" />
          </UploadLabel>
        </div>

        <Divisor />
        <Fieldset>
          <Label htmlFor="campo-cep">CEP</Label>
          <Input id="campo-cep" placeholder="Insira seu CEP" type="text" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="campo-rua">Rua</Label>
          <Input id="campo-rua" placeholder="Rua Agarikov" type="text" />
        </Fieldset>

        <FormContainer>
          <Fieldset>
            <Label htmlFor="campo-numero-rua">Número</Label>
            <Input id="campo-numero-rua" placeholder="Ex: 1440" type="text" />
          </Fieldset>
          <Fieldset>
            <Label htmlFor="campo-bairro">Bairro</Label>
            <Input id="campo-bairro" placeholder="Vila Mariana" type="text" />
          </Fieldset>
        </FormContainer>
        <Fieldset>
          <Label htmlFor="campo-localidade">Localidade</Label>
          <Input
            id="campo-localidade"
            placeholder="São Paulo, SP"
            type="text"
          />
        </Fieldset>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
};

export default CadastroEspecialistaEndereco;
