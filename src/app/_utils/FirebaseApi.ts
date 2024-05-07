import { initializeApp } from 'firebase/app';

import {
	GoogleAuthProvider,
	getAuth,
	getRedirectResult,
	onAuthStateChanged,
	signInWithPopup,
	signInWithRedirect,
	signOut,
} from 'firebase/auth';
import { Dispatch, SetStateAction } from 'react';
import ApiHandling from './ApiHandling';

class FirebaseApi {
	firebaseConfig: object;
	apiHandling;
	firebaseApp;
	googleProvider;
	auth;
	signInWPopUpUser: any;
	signInWRedirectUser: any;

	constructor() {
		this.firebaseConfig = {
			apiKey: process.env.NEXT_PUBLIC_REACT_APP_APIKEY,
			authDomain: process.env.NEXT_PUBLIC_REACT_APP_AUTHDOMAIN,
			projectId: process.env.NEXT_PUBLIC_REACT_APP_PROJECTID,
			storageBucket: process.env.NEXT_PUBLIC_REACT_APP_STORAGEBUCKET,
			messagingSenderId: process.env.NEXT_PUBLIC_REACT_APP_MESSAGINGSENDERID,
			appId: process.env.NEXT_PUBLIC_REACT_APP_APP_ID,
		};

		// initialize Firebase
		// eslint-disable-next-line
		this.firebaseApp = initializeApp(this.firebaseConfig);

		// Google Provider
		this.googleProvider = new GoogleAuthProvider();
		this.googleProvider.setCustomParameters({
			prompt: 'select_account',
		});

		// Get auth object
		this.auth = getAuth();

		// User
		this.signInWPopUpUser = null;
		this.signInWRedirectUser = null;

		// Contentful ApiHandling Class
		this.apiHandling = new ApiHandling();
	}

	// Events

	// Methods
	signInWRedirect = async (setState: Dispatch<SetStateAction<any>>) => {
		const clients = await this.apiHandling.getContentfulEntries('clients');

		this.signInWRedirectUser = await signInWithRedirect(
			this.auth,
			new GoogleAuthProvider()
		);

		if (this.auth?.currentUser?.email) {
			let f = clients.items.find(
				(i: any) => i.fields.email === this.signInWPopUpUser.user.email
			);

			console.log(f, 'f');
			if (f === undefined) {
				this.apiHandling.createClientEntry(
					this.signInWPopUpUser.user.displayName,
					this.signInWPopUpUser.user.email
				);
			}
		}

		setState({
			email: this.signInWPopUpUser.user.email,
			fullName: this.signInWPopUpUser.user.displayName,
			photoUrl: this.signInWPopUpUser.user.photoURL,
			googleUserId: this.signInWPopUpUser.user.photoURL,
			authToken: this.signInWPopUpUser.user.auth.authToken,
			authObj: this.auth,
		});
	};

	signInWPopup = async (setState: Dispatch<SetStateAction<any>>) => {
		const clients = await this.apiHandling.getContentfulEntries('clients');

		this.signInWPopUpUser = await signInWithPopup(
			this.auth,
			new GoogleAuthProvider()
		);

		if (this.auth?.currentUser?.email) {
			let f = clients.items.find(
				(i: any) => i.fields.email === this.signInWPopUpUser.user.email
			);

			console.log(f, 'f');
			if (f === undefined) {
				this.apiHandling.createClientEntry(
					this.signInWPopUpUser.user.displayName,
					this.signInWPopUpUser.user.email
				);
			}
		}

		let userObj = {
			email: this.signInWPopUpUser.user.email,
			fullName: this.signInWPopUpUser.user.displayName,
			photoUrl: this.signInWPopUpUser.user.photoURL,
			googleUserId: this.signInWPopUpUser.user.photoURL,
			authToken: this.signInWPopUpUser.user.auth.authToken,
			authObj: this.auth,
		};

		localStorage.setItem('lashMeEUserObject', JSON.stringify(userObj));

		setState({
			email: this.signInWPopUpUser.user.email,
			fullName: this.signInWPopUpUser.user.displayName,
			photoUrl: this.signInWPopUpUser.user.photoURL,
			googleUserId: this.signInWPopUpUser.user.photoURL,
			authToken: this.signInWPopUpUser.user.auth.authToken,
			authObj: this.auth,
		});
	};

	// Signout
	signoutUser = async (setState: Dispatch<SetStateAction<any>>) => {
		await signOut(this.auth);
		localStorage.setItem('lashMeEUserObject', '');
		setState(null);

		window.scrollTo(0, 0);
		window.location.reload();
	};

	onAuthStateChangedListener = (callback: any) => {
		onAuthStateChanged(this.auth, callback);
	};
}

export default FirebaseApi;
