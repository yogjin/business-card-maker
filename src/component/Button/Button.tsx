import React, { MouseEventHandler } from 'react';
import { FC } from 'react';

interface ButtonProps {
  name: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ name, handleClick }) => {
  return <button onClick={handleClick}>{name}</button>;
};

export default Button;
