import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import logo from 'images/logo.png';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <Container>
      <img src={logo} alt="logo" style={{ width: '4rem' }}></img>
      <Title>Business Card Maker</Title>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2980b9;
  width: 100%;
  padding: 0.5em;
`;
const Title = styled.h1`
  margin: 0;
  color: white;
`;
export default Header;
