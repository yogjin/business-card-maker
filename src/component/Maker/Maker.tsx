import {
  Card,
  FireBaseAuthService,
  FireBaseRealTimeDB,
} from 'common/interfaces';
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
  fireBaseRealTimeDB: FireBaseRealTimeDB;
  FileInput: Function;
}
interface LoginResult {
  userId: string;
}

const Maker: FC<makerProps> = ({
  fireBaseAuthService,
  fireBaseRealTimeDB,
  FileInput,
}) => {
  const [cards, setCards] = useState<Card[]>([]);
  const location = useLocation().state as LoginResult;
  const userId = location.userId;
  const navigate = useNavigate();

  const handleLogout = (): void => {
    fireBaseAuthService.logout();
  };

  useEffect(() => {
    const goToLogin = (): void => {
      navigate('/');
    };

    fireBaseAuthService.onAuthChange((user: User | null) => {
      !user && goToLogin();
    });
  }, [fireBaseAuthService, navigate]);

  useEffect(() => {
    const stopSync = fireBaseRealTimeDB.syncCards(userId, setCards); // DB -> front 로 data 저장

    return () => stopSync(); // Detach listeners
  }, [fireBaseRealTimeDB, userId]);

  const addCard = (newCard: Card) => {
    setCards((cards) => {
      fireBaseRealTimeDB.setCards(userId, newCard);
      return [...cards, newCard];
    });
  };

  const deleteCard = (id: string): void => {
    setCards((cards) => cards.filter((card) => card.id !== id));
    fireBaseRealTimeDB.removeCard(userId, id);
  };

  const updateCard = (updatedCard: Card): void => {
    const updated: Card[] = cards.map((card) =>
      card.id === updatedCard.id ? updatedCard : card
    );
    setCards(() => {
      fireBaseRealTimeDB.setCards(userId, updatedCard); // front -> DB로 data 저장
      return updated;
    });
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
  max-width: 80rem;
  background-color: white;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  min-height: 0;
  @media screen and (max-width: 42rem) {
    flex-direction: column;
  }
`;
export default Maker;
