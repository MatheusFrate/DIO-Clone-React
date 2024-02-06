import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import {
  BuscarInputContainer,
  HeaderContainer,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from './styles';
import logo from '../../assets/logo-dio.png';

const Header = ({ autenticado }) => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login');
  };

  const handleClickSignUp = () => {
    navigate('/cadastro');
  };

  return (
    <Wrapper>
      <HeaderContainer>
        <Row>
          <img src={logo} alt="Logo da DIO" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Coding</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/55608318?v=4" />
          ) : (
            <>
              <MenuRight href="$">Home</MenuRight>
              <Button title="Entrar" onClick={handleClickSignIn} />
              <Button title="Cadastrar" onClick={handleClickSignUp} />
            </>
          )}
        </Row>
      </HeaderContainer>
    </Wrapper>
  );
};

export { Header };
