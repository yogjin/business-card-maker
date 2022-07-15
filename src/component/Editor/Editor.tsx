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
  border-right: 1px solid gray;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;
export default Editor;
