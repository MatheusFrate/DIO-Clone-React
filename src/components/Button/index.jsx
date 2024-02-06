import { ButtonConteiner } from './styles';

const Button = ({ title, variant = 'primary', onClick }) => {
  return (
    <ButtonConteiner variant={variant} onClick={onClick}>
      {title}
    </ButtonConteiner>
  );
};

export { Button };
