import Footer from 'component/Footer/Footer';
import Header from 'component/Header/Header';
import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface makerProps {}

const Maker: FC<makerProps> = () => {
  return (
    <>
      <Header />
      <div>로그인</div>
      <Footer />
    </>
  );
};

export default Maker;
