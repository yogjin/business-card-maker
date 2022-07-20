import { Card, FireBaseRealTimeDB } from '../common/interfaces';
import { firebaseApp } from 'service/firebase';
import {
  Database,
  get,
  getDatabase,
  off,
  onValue,
  ref,
  remove,
  set,
} from 'firebase/database';

export class FireBaseRealTimeDBImpl implements FireBaseRealTimeDB {
  private database: Database;
  constructor() {
    this.database = getDatabase(firebaseApp);
  }
  setCards(userId: string, card: Card) {
    set(ref(this.database, `users/${userId}/cards/${card.id}`), card);
  }
  syncCards(
    userId: string,
    setCards: React.Dispatch<React.SetStateAction<Card[]>>
  ) {
    const syncRef = ref(this.database, `users/${userId}/cards/`);
    onValue(syncRef, (snapshot) => {
      const arrCards: Card[] = [];
      const cards = snapshot.val();
      cards && Object.keys(cards).map((key) => arrCards.push(cards[key]));

      setCards(arrCards);
    });

    return () => off(syncRef); // Detach listeners function
  }
  removeCard(userId: string, cardId: string) {
    remove(ref(this.database, `users/${userId}/cards/${cardId}`));
  }
}
