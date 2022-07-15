import { Card } from 'common/interfaces';
import Card_add_form from 'component/Card_add_form/Card_add_form';
import Card_edit_form from 'component/Card_edit_form/Card_edit_form';
import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface EditorProps {
  cards: Card[];
  addCard: Function;
}

const Editor: FC<EditorProps> = ({ cards, addCard }) => {
  return (
    <Container>
      <Title>Card Maker</Title>
      {cards.map((card) => (
        <Card_edit_form card={card} />
      ))}
      <Card_add_form addCard={addCard} />
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
