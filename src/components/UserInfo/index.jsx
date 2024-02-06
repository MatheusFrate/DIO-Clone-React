import { CardContainer, NameText, Progress, UserPicture } from './styles';

const UserInfo = ({ nome, image, percentual }) => {
  return (
    <CardContainer>
      <UserPicture src={image} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </CardContainer>
  );
};

export { UserInfo };
