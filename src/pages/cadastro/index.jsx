import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';

import { IoPerson } from 'react-icons/io5';
import { MdEmail, MdLock } from 'react-icons/md';

import {
  CadastroContainer,
  Column,
  Title,
  ContaText,
  TitleCadastro,
  SubtitleCadastro,
  Wrapper,
  PoliticasText,
  Row,
  FazerLoginText,
} from './styles';

const schema = yup
  .object({
    nome: yup.string().min(3).required('nome é obrigatório'),
    email: yup
      .string()
      .email('email não é válido')
      .required('email é obrigatório'),
    senha: yup
      .string()
      .min(3, 'No mínimo 3 caracteres')
      .required('senha é obrigatória'),
  })
  .required();

const Cadastro = () => {
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
      const users = await api.get('users');
      const maxId = Math.max(...users.data.map((user) => user.id));
      console.log(maxId);
      formData.id = (maxId + 1).toString();
      const { data } = await api.post('users', formData);
      if (data.id) {
        navigate('/feed');
        return;
      }
    } catch (error) {
      alert('Erro ao cadastrar');
    }
  };
  return (
    <>
      <Header />
      <CadastroContainer>
        <Column flex={2}>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column flex={1}>
          <Wrapper>
            <TitleCadastro>Comece agora grátis</TitleCadastro>
            <SubtitleCadastro>
              Crie sua conta e make the change._
            </SubtitleCadastro>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                name="nome"
                placeholder="Nome Completo"
                leftIcon={IoPerson}
                errorMessage={errors?.nome?.message}
              />
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
                leftIcon={MdLock}
                errorMessage={errors?.senha?.message}
              />

              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <PoliticasText>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Provacidade e os Termos de Uso da DIO.
            </PoliticasText>
            <Row>
              <ContaText>Já tenho conta.</ContaText>
              <FazerLoginText href="/login">Fazer login</FazerLoginText>
            </Row>
          </Wrapper>
        </Column>
      </CadastroContainer>
    </>
  );
};

export { Cadastro };
