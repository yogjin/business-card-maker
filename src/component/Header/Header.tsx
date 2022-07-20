import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import logo from 'images/logo.png';
import { FireBaseAuthService } from 'common/interfaces';
import Button from 'component/Button/Button';

interface HeaderProps {
  handleLogout?: () => void;
}

const Header: FC<HeaderProps> = ({ handleLogout }) => {
  return (
    <Container>
      <TitleDiv>
        <img src={logo} alt="logo" style={{ width: '4rem' }}></img>
        <Title>Business Card Maker</Title>
      </TitleDiv>
      <ButtonDiv>
        {handleLogout && (
          <Button name="Logout" handleClick={handleLogout} fontSize="1.1" />
        )}
      </ButtonDiv>
    </Container>
  );
};

const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: #2980b9;
  width: 100%;
  padding: 0.5em;
`;
const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  margin: 0;
  color: white;
`;
const ButtonDiv = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 1rem;
`;
export default Header;
