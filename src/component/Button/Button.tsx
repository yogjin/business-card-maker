import React, { MouseEventHandler } from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  name?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  color?: string;
  fontSize?: string;
}

const Button: FC<ButtonProps> = ({ name, handleClick, color, fontSize }) => {
  return (
    <StyledButton onClick={handleClick} color={color} fontSize={fontSize}>
      {name}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ color }) => color};
  border: 0;
  font-size: ${({ fontSize }) =>
    `${fontSize}rem` || '1rem'}; // 로그아웃 버튼 폰트사이즈 바꾸기
  cursor: pointer;
  &:hover {
    opacity: 90%;
  }
`;
export default Button;
