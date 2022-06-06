import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Login from './component/Login/Login';
import { FireBaseAuthServiceImpl } from 'service/firebase_auth_service';

const fireBaseAuthService = new FireBaseAuthServiceImpl();

function App() {
  return (
    <>
      <AppContainer>
        <Login fireBaseAuthService={fireBaseAuthService} />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: gray;
`;
export default App;
