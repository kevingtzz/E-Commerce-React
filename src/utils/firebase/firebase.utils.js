import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBbm6vayY4bjVDEY34ggm2Hqd_fCb6_n68',
  authDomain: 'e-commerce-db-ba022.firebaseapp.com',
  projectId: 'e-commerce-db-ba022',
  storageBucket: 'e-commerce-db-ba022.appspot.com',
  messagingSenderId: '58322010789',
  appId: '1:58322010789:web:18bee30bf748302481034c',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
