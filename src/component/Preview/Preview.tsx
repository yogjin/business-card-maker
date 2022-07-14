import { Card } from 'common/interfaces';
import CardComponent from 'component/Card/CardComponent';
import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface PreviewProps {
  cards: Card[];
}

const Preview: FC<PreviewProps> = ({ cards }) => {
  return (
    <Container>
      <Title>Card Preview</Title>
      {cards.map((card) => (
        <CardComponent card={card} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: wheat;
  flex-basis: 50%;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;
export default Preview;
