import firebase from 'firebase';
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAbU2wfi7YRbN_Vkfd9r6yDuPMkQNs8OsE",
	authDomain: "authapp-bfea4.firebaseapp.com",
	projectId: "authapp-bfea4",
	storageBucket: "authapp-bfea4.appspot.com",
	messagingSenderId: "828912849376",
	appId: "1:828912849376:web:2641ff0e6a99f74c0f1b85"
})

const auth = firebaseApp.auth();
export default auth;