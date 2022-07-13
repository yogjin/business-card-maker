// Define interfaces for project
import { UserCredential } from 'firebase/auth';

// FireBase auth
export interface FireBaseAuthService {
  login: (providerName: string) => Promise<UserCredential>;
  logout(): void;
  onAuthChange: (onUserChanged: Function) => void;
}
