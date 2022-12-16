import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid); // doc parameters: database, callection, unique ID
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error('Error creating the user', error.message);
    }
  }

  return userDocRef;
};
