import { FireBaseAuthService } from 'common/interfaces';
import Footer from 'component/Footer/Footer';
import Header from 'component/Header/Header';
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
      <div>로그인</div>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > :nth-child(1) {
    flex: 1 1 15%;
  }
  & > :nth-child(2) {
    flex: 1 1 75%;
  }
  & > :nth-child(3) {
    flex: 1 1 10%;
  }
`;

export default Maker;
