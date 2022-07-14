// Define interfaces for project
import { UserCredential } from 'firebase/auth';

// FireBase auth
export interface FireBaseAuthService {
  login: (providerName: string) => Promise<UserCredential>;
  logout(): void;
  onAuthChange: (onUserChanged: Function) => void;
}

// Card
export interface Card {
  name: string;
  company: string;
  theme: 'light' | 'dark' | 'colorful';
  title: string;
  email: string;
  message: string;
  // picture
}
