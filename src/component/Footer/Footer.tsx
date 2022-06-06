import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <Container>
      <Text>made with ReactTS, styled-components</Text>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #2980b9;
  width: 100%;
  padding: 1em;
`;

const Text = styled.span`
  color: white;
`;
export default Footer;
