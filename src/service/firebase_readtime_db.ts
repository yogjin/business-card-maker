import { FireBaseRealTimeDB } from './../common/interfaces';
import { firebaseApp } from 'service/firebase';
import { Database, getDatabase, set } from 'firebase/database';

export class FireBaseRealTimeDBImpl implements FireBaseRealTimeDB {
  private database: Database;
  constructor() {
    this.database = getDatabase(firebaseApp);
  }
  set() {}
  get() {}
}
