import { Card } from 'common/interfaces';
import Card_add_form from 'component/Card_add_form/Card_add_form';
import Card_edit_form from 'component/Card_edit_form/Card_edit_form';
import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface EditorProps {
  cards: Card[];
  addCard: Function;
  deleteCard: Function;
  updateCard: Function;
  FileInput: Function;
}

const Editor: FC<EditorProps> = ({
  cards,
  addCard,
  deleteCard,
  updateCard,
  FileInput,
}) => {
  return (
    <Container>
      <Title>Card Maker</Title>
      {cards.map((card) => (
        <Card_edit_form
          key={card.id}
          card={card}
          deleteCard={deleteCard}
          updateCard={updateCard}
          FileInput={FileInput}
        />
      ))}
      <Card_add_form addCard={addCard} FileInput={FileInput} />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  flex-basis: 50%;
  border-right: 1px solid gray;
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  position: sticky;
  top: 0px;
  padding: 0.8rem;
  margin-top: 0;
  background-color: wheat;
`;
export default Editor;
