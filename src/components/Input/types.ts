export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  control: any;
  name: string;
  errorMessage?: string;
}
