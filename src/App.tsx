import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Login from './component/Login/Login';
import Maker from './component/Maker/Maker';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FireBaseAuthServiceImpl } from 'service/firebase_auth_service';

const fireBaseAuthService = new FireBaseAuthServiceImpl();

function App() {
  return (
    <>
      <AppContainer>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Login fireBaseAuthService={fireBaseAuthService} />}
            />
            <Route
              path="/maker"
              element={<Maker fireBaseAuthService={fireBaseAuthService} />}
            />
          </Routes>
        </BrowserRouter>
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
