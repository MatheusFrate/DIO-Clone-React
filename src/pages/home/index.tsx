import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { HomeContainer, TextContent, Title, TitleHighLight } from './styles';
import banner from '../../assets/banner.png';
const Home = () => {
  const navigate = useNavigate();

  const handleClickSignUp = () => {
    navigate('/login');
  };

  return (
    <>
      <Header />
      <HomeContainer>
        <div>
          <Title>
            <TitleHighLight>
              Implemente
              <br />
            </TitleHighLight>
            o seu futuro global agora
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secundary"
            onClick={handleClickSignUp}
          ></Button>
        </div>
        <div>
          <img src={banner} alt="Imagem Principal" />
        </div>
      </HomeContainer>
    </>
  );
};

export { Home };
