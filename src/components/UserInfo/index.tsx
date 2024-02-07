import { CardContainer, NameText, Progress, UserPicture } from './styles';
import { IUserInfo } from './types';

const UserInfo = ({ nome, image, percentual }: IUserInfo) => {
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
