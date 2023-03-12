import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDDhYn7GeuqMpEYHcLpJ-6Ah5T19dJoOyU',
  authDomain: 'note-42caa.firebaseapp.com',
  projectId: 'note-42caa',
  storageBucket: 'note-42caa.appspot.com',
  messagingSenderId: '492384304544',
  appId: '1:492384304544:web:fc745d599f9fb4ece938c5',
}
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
