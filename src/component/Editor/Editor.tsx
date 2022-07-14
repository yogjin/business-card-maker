import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface EditorProps {}

const Editor: FC<EditorProps> = () => {
  return (
    <Container>
      <Title>Card Maker</Title>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  background-color: pink;
  flex-basis: 50%;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;
export default Editor;
