import React, { ButtonHTMLAttributes } from "react";
import * as S from "./button.styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  big?: boolean;
  primary?: boolean;
}

export const Button: React.FC<Props> = ({ children, ...rest }) => (
  <S.Wrapper {...rest}>{children}</S.Wrapper>
);
