import Footer from 'component/Footer/Footer';
import Header from 'component/Header/Header';
import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface makerProps {}

const Maker: FC<makerProps> = () => {
  return (
    <Container>
      <Header />
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
