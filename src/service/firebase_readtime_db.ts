import { Card, FireBaseRealTimeDB } from './../common/interfaces';
import { firebaseApp } from 'service/firebase';
import {
  Database,
  get,
  getDatabase,
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
  async getCards(userId: string) {
    let cards = await get(ref(this.database, `users/${userId}/cards/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        }
      })
      .catch((error) => {
        console.error(error);
      });
    const arrCards: Card[] = [];
    Object.keys(cards).map((key) => arrCards.push(cards[key]));

    return arrCards;
  }
  removeCard(userId: string, cardId: string) {
    remove(ref(this.database, `users/${userId}/cards/${cardId}`));
  }
}
