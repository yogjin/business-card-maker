import { Card, FireBaseRealTimeDB } from './../common/interfaces';
import { firebaseApp } from 'service/firebase';
import { Database, get, getDatabase, ref, set } from 'firebase/database';

export class FireBaseRealTimeDBImpl implements FireBaseRealTimeDB {
  private database: Database;
  constructor() {
    this.database = getDatabase(firebaseApp);
  }
  set(userId: string, card: Card) {
    set(ref(this.database, `users/${userId}/cards/${card.id}`), card);
  }
  async get(userId: string) {
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
}
