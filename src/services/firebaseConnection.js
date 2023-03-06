import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA1hhq--_YRRrGcmvUVx3KZ-XY_rX0aWZk',
  authDomain: 'controle-os-24808.firebaseapp.com',
  projectId: 'controle-os-24808',
  storageBucket: 'controle-os-24808.appspot.com',
  messagingSenderId: '307873274986',
  appId: '1:307873274986:web:4dd668c57d20248dcd3e13',
  measurementId: 'G-KG0EPX91D8',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
