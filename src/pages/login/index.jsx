import { MdEmail, MdLock } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';

import {
  LoginContainer,
  Title,
  Column,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  TitleLogin,
  Wrapper,
} from './styles';

const schema = yup
  .object({
    email: yup
      .string()
      .email('email não é valido')
      .required('email é obrigatório'),
    senha: yup
      .string()
      .min(3, ' No mínimo 3 caracteres')
      .required('senha é obrigatória'),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.senha}`
      );
      if (data.length && data[0].id) {
        navigate('/feed');
        return;
      } else {
        alert('Email ou senha inválidos');
      }
      console.log(data);
    } catch (error) {
      alert('Erro ao fazer login, tente novamente');
    }
  };

  return (
    <>
      <Header />
      <LoginContainer>
        <Column flex={2}>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column flex={1}>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change_</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                name="email"
                placeholder="E-mail"
                leftIcon={MdEmail}
                errorMessage={errors?.email?.message}
              />
              <Input
                control={control}
                name="senha"
                placeholder="Senha"
                type="password"
                leftIcon={MdLock}
                errorMessage={errors?.senha?.message}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText href="/cadastro">Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </LoginContainer>
    </>
  );
};

export { Login };
