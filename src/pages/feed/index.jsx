import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { FeedContainer, Column, Title, TitleHighLight } from './styles';
const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <FeedContainer>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLight> # RANKING 5 TOP DA SEMANA </TitleHighLight>
          <UserInfo
            percentual={35}
            nome="Matheus Frate"
            image="https://avatars.githubusercontent.com/u/55608318?v=4"
          />
          <UserInfo
            percentual={65}
            nome="Matheus Frate"
            image="https://avatars.githubusercontent.com/u/55608318?v=4"
          />
          <UserInfo
            percentual={45}
            nome="Matheus Frate"
            image="https://avatars.githubusercontent.com/u/55608318?v=4"
          />
          <UserInfo
            percentual={72}
            nome="Matheus Frate"
            image="https://avatars.githubusercontent.com/u/55608318?v=4"
          />
        </Column>
      </FeedContainer>
    </>
  );
};
export { Feed };
