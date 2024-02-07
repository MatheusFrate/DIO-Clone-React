export interface IButton {
  title: String;
  variant?: String;
  onClick?: () => void;
  type?: String;
}

export interface IButtonStyled {
  variant?: String;
}
