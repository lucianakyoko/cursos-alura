import { useForm } from "react-hook-form";
import { Button, Label, Fieldset, Input, Form, Titulo, ErrorMessage } from "../../components";

interface FormInputTipos {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  senhaVerificada: string;
}


const CadastroPessoal = () => {
  const { 
    register, 
    handleSubmit, 
    formState: {errors},
    watch
  } = useForm<FormInputTipos>();

  const aoSubmeter = (dados: FormInputTipos) => {
    console.log(dados)
  }
  const senha = watch('senha')
  
  function validarEmail(valor: string) {
    const formatoEmail = /^[^\s@]+@alura\.com\.br$/;

    if(!formatoEmail.test(valor)) {
      console.error('Endereço de email inválido para este domínio');
      return false;
    } 
    return true;
  }

  const validaSenha = {
    obrigatorio: (value: string) => !!value || 'Por favor, insira a senha novamente',
    tamanhoMinimo: (value: string) => value.length >= 6 || 'A senha deve ter pelo menos seis caracteres',
    senhaIguais: (value: string) => value === senha || 'As senhas não correspondem'
  }

  return (
    <>
      <Titulo>Insira alguns dados básicos:</Titulo>
      <Form onSubmit={handleSubmit(aoSubmeter)}>
        <Fieldset>
          <Label htmlFor="campo-nome">Nome</Label>
          <Input
            id="campo-nome"
            placeholder="Digite seu nome completo"
            type="text"
            $error={!!errors.nome}
            {...register('nome', {
              required: 'Campo obrigatório', 
              minLength: {
                value:5, 
                message: 'O nome de ter, pelo menos, cinco caracteres'
            }}) }
          />
          {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
        </Fieldset>

        <Fieldset>
          <Label htmlFor="campo-email">E-mail</Label>
          <Input
            id="campo-email"
            placeholder="Insira seu endereço de email"
            type="email"
            {...register('email', {
              required: 'Campo obrigatório', 
              validate: validarEmail
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Fieldset>

        <Fieldset>
          <Label>Telefone</Label>
          <Input
            id="campo-telefone"
            type="text"
            placeholder="Ex: (DDD) XXXXX-XXXX"
            {...register('telefone', {
              pattern: {
                value: /^\(\d{2,3}\) \d{5}-\d{4}$/,
                message: 'Telefone inserido no formato incorreto'
              }, 
              required: 'Campo obrigatório'
            })}
          />
          {errors.telefone && <ErrorMessage>{errors.telefone.message}</ErrorMessage>}
        </Fieldset>

        <Fieldset>
          <Label htmlFor="campo-senha">Crie uma senha</Label>
          <Input
            id="campo-senha"
            placeholder="Crie uma senha"
            type="password"
            {...register('senha', {
              required: 'Campo obrigatório',
              minLength: {
                value: 6,
                message: 'A senha deve ter, pelo menos, seis caracteres'
              }
            })}
          />
          {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
        </Fieldset>

        <Fieldset>
          <Label htmlFor="campo-senha-confirmacao">Repita a senha</Label>
          <Input
            id="campo-senha-confirmacao"
            placeholder="Repita a senha anterior"
            type="password"
            {...register('senhaVerificada', {
              required: 'Repita a senha',
              validate: validaSenha,
            })}
          />
          {errors.senhaVerificada && <ErrorMessage>{errors.senhaVerificada.message}</ErrorMessage>}
        </Fieldset>
        <Button type="submit">Avançar</Button>
      </Form>
    </>
  );
};

export default CadastroPessoal;
