import firebaseConfig from './firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/auth';

// FIrebase Init
export const FirebaseInit = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
};

// Format user Data
const userData = (info) => {
	const userInfo = {
		name: info.displayName,
		email: info.email,
		isLoggedIn: true,
	};
	return userInfo;
};

// Login With Google Icon
export const LoginWithGoogleIcon = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	return firebase
		.auth()
		.signInWithPopup(provider)
		.then((res) => userData(res.user));
};

// Sign Up With Google Form
export const SignUpWithForm = (email, password, name) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			updateUserName(name);
			return true;
		});
};

// Sign Up With Form
export const SignInWithForm = (email, password) => {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((res) => userData(res.user));
};

// Logout
export const Logout = () => {
	return firebase
		.auth()
		.signOut()
		.then(() => {
			return true;
		});
};

// Update User Name After Register With Sign Up Form
const updateUserName = (name) => {
	const user = firebase.auth().currentUser;
	return user.updateProfile({
		displayName: name,
	});
};
