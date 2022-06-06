import { FireBaseAuthService } from 'common/interfaces';
import {
  Auth,
  AuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';
import { firebaseApp } from 'service/firebase';

export class FireBaseAuthServiceImpl implements FireBaseAuthService {
  private auth: Auth = getAuth(firebaseApp);
  private googleProvider: GoogleAuthProvider;
  constructor() {
    this.googleProvider = new GoogleAuthProvider();
  }

  login(providerName: string): Promise<UserCredential> {
    const provider: AuthProvider = this.getProvider(providerName);
    return signInWithPopup(this.auth, provider);
  }

  logout(): void {}

  private getProvider(providerName: string): AuthProvider {
    switch (providerName) {
      case 'google':
        return this.googleProvider;
      // case: github, phone number etc...
      default:
        throw new Error('provider error');
    }
  }
}
