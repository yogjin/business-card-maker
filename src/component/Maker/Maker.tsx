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

  const goToLogin = (): void => {
    navigate('/');
  };

  useEffect(() => {
    fireBaseAuthService.onAuthChange((user: User | null) => {
      !user && goToLogin();
    });
  }, []);

  useEffect(() => {
    fireBaseRealTimeDB.syncCards(userId, setCards);
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
      fireBaseRealTimeDB.setCards(userId, updatedCard);
      // 이렇게 하면 user -> DB는 바로바로 set되지만 DB->user는 안된다.
      // DB->user는 사실상 쓸일이 거의 없을 것 같지만 진정한 의미의 sync가 맞지않게 된다.
      // 따라서 ref.on()을 쓰는게 맞다.
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
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  @media screen and (max-width: 42rem) {
    flex-direction: column;
  }
`;
export default Maker;
