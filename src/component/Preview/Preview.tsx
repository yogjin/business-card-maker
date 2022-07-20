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
      <List>
        {cards.map((card) => (
          <CardComponent card={card} />
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  flex-basis: 50%;
  overflow-y: auto;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  position: sticky;
  top: 0px;
  padding: 0.8rem;
  margin-top: 0;
  background-color: wheat;
`;
export default Preview;
