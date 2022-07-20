// Define interfaces for project
import { UserCredential } from 'firebase/auth';

// FireBase auth
export interface FireBaseAuthService {
  login: (providerName: string) => Promise<UserCredential>;
  logout(): void;
  onAuthChange: (onUserChanged: Function) => void;
}
// FireBase realtime DB
export interface FireBaseRealTimeDB {
  setCards: (userId: string, card: Card) => void;
  removeCard: (userId: string, cardId: string) => void;
  syncCards: (
    userId: string,
    setCards: React.Dispatch<React.SetStateAction<Card[]>>
  ) => Function;
}

// Card
export interface Card {
  id: string;
  name: string;
  company: string;
  theme: 'light' | 'dark' | 'colorful';
  title: string;
  email: string;
  message: string;
  // picture: CloudinaryFile
  filename?: string;
  url?: string;
}

// ImageUploader
export interface ImageUploader {
  upload: (file: File) => Promise<CloudinaryFile>;
}

// cloudinary file
export interface CloudinaryFile {
  original_filename?: string;
  secure_url?: string;
}
