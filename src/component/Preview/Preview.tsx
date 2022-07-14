import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface PreviewProps {}

const Preview: FC<PreviewProps> = () => {
  return (
    <Container>
      <Title>Card Preview</Title>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  background-color: wheat;
  flex-basis: 50%;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;
export default Preview;
