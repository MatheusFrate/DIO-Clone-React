import { ButtonConteiner } from './styles';
import { IButton } from './types';

const Button = ({ title, variant = 'primary', onClick }: IButton) => {
  return (
    <ButtonConteiner variant={variant} onClick={onClick}>
      {title}
    </ButtonConteiner>
  );
};

export { Button };
