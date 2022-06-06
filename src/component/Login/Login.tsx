import { FireBaseAuthService } from 'common/interfaces';
import Footer from 'component/Footer/Footer';
import Header from 'component/Header/Header';
import React from 'react';
import { FC } from 'react';

import styled from 'styled-components';

interface LoginProps {
  fireBaseAuthService: FireBaseAuthService;
}

const Login: FC<LoginProps> = ({ fireBaseAuthService }) => {
  const onClickLoginButton = (providerName: string) => {
    fireBaseAuthService.login(providerName).then(console.log);
  };
  return (
    <>
      <Box>
        <Header />
        <LoginContainer>
          <LoginButton onClick={() => onClickLoginButton('google')}>
            Login with Google
          </LoginButton>
        </LoginContainer>
        <Footer />
      </Box>
    </>
  );
};
const Box = styled.div`
  display: flex;
  width: 30em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  width: 100%;
  padding: 1em;
`;
const LoginButton = styled.button`
  font-size: 1rem;
  padding: 0.5em;
  cursor: pointer;
  border-radius: 6px;
  background-color: transparent;
  &:hover {
    background-color: lightgray;
  }
`;
export default Login;
