import { Card, FireBaseAuthService } from 'common/interfaces';
import Editor from 'component/Editor/Editor';
import Footer from 'component/Footer/Footer';
import Header from 'component/Header/Header';
import Preview from 'component/Preview/Preview';
import { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface makerProps {
  fireBaseAuthService: FireBaseAuthService;
  FileInput: Function;
}

const Maker: FC<makerProps> = ({ fireBaseAuthService, FileInput }) => {
  const [cards, setCards] = useState<Card[]>([
    {
      id: '1',
      name: 'Bob',
      company: 'Kakao',
      theme: 'light',
      title: 'Frontend Developer',
      email: 'asb@s.com',
      message: 'hello',
    },
    {
      id: '2',
      name: 'Chris',
      company: 'Kakao',
      theme: 'dark',
      title: 'Backend Developer',
      email: 'asb@s.com',
      message: 'hihihihihihi',
    },
  ]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = (): void => {
    fireBaseAuthService.logout();
  };

  const goToLogin = (): void => {
    navigate('/');
  };

  useEffect(() => {
    fireBaseAuthService.onAuthChange((user: User | null) => {
      !user && goToLogin();
    });
  });

  const addCard = (newCard: Card) => {
    setCards((cards) => [...cards, newCard]);
  };

  const deleteCard = (id: string): void => {
    setCards((cards) => cards.filter((card) => card.id !== id));
  };

  const updateCard = (updatedCard: Card): void => {
    const updated: Card[] = cards.map((card) =>
      card.id === updatedCard.id ? updatedCard : card
    );
    setCards(updated);
  };
  return (
    <Container>
      <Header handleLogout={handleLogout} />
      <Main>
        <Editor
          cards={cards}
          addCard={addCard}
          deleteCard={deleteCard}
          updateCard={updateCard}
          FileInput={FileInput}
        />
        <Preview cards={cards} />
      </Main>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  @media screen and (max-width: 42rem) {
    flex-direction: column;
  }
`;
export default Maker;
