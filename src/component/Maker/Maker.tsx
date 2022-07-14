import { FireBaseAuthService } from 'common/interfaces';
import Editor from 'component/Editor/Editor';
import Footer from 'component/Footer/Footer';
import Header from 'component/Header/Header';
import Preview from 'component/Preview/Preview';
import { User } from 'firebase/auth';
import React, { useEffect } from 'react';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface makerProps {
  fireBaseAuthService: FireBaseAuthService;
}

const Maker: FC<makerProps> = ({ fireBaseAuthService }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = (): void => {
    fireBaseAuthService.logout();
  };

  const goToLogin = (): void => {
    navigate('/');
  };

  useEffect(() => {
    fireBaseAuthService.onAuthChange((user: User | null) => {
      !user && goToLogin();
    });
  });
  return (
    <Container>
      <Header handleLogout={handleLogout} />
      <Main>
        <Editor />
        <Preview />
      </Main>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  @media screen and (max-width: 42rem) {
    flex-direction: column;
  }
`;
export default Maker;
