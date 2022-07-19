import React, { MouseEventHandler } from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  name?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  color?: string;
}

const Button: FC<ButtonProps> = ({ name, handleClick, color }) => {
  return (
    <StyledButton onClick={handleClick} color={color}>
      {name}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ color }) => color};
  border: 0;
  cursor: pointer;
  &:hover {
    opacity: 90%;
  }
`;
export default Button;
