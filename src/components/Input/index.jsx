import { IconContainer, InputContainer, InputText, ErrorText } from './styles';
import { Controller } from 'react-hook-form';

const Input = ({ leftIcon: Icon, control, name, errorMessage, ...rest }) => {
  return (
    <>
      <InputContainer>
        {Icon ? (
          <IconContainer>
            <Icon />
          </IconContainer>
        ) : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export { Input };
