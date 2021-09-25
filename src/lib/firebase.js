import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: "AIzaSyCix1V3EVQLQiK_mFAhUgeh4KKSIDgtDkk",
	authDomain: "uday-yadav.firebaseapp.com",
	databaseURL: "https://uday-yadav.firebaseio.com",
	projectId: "uday-yadav",
	storageBucket: "uday-yadav.appspot.com",
	messagingSenderId: "738163119457",
	appId: "1:738163119457:web:58821570257679645ba120"
};

let firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;