'use client';
import {
	SetStateAction,
	createContext,
	Dispatch,
	useState,
	useContext,
	useEffect,
} from 'react';
import FirebaseApi from '../_utils/FirebaseApi';

type UserType = {
	email: string | null | undefined;
	fullName: string | null | undefined;
	photoUrl: string | null | undefined;
	googleUserId: string | null | undefined;
	authToken: string | null | undefined;
	authObj: any | null;
};

const UserContext = createContext<UserType | any | null>({
	email: null,
	fullName: null,
	photoUrl: null,
	googleUserId: null,
	authToken: null,
	authObj: null,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const firebaseApi = new FirebaseApi();
	const auth = firebaseApi.auth;

	const [user, setUser] = useState<UserType | any | null>(null);

	useEffect(() => {
		if (auth?.currentUser?.email) {
			setUser({
				email: auth?.currentUser?.email,
				fullName: auth?.currentUser?.displayName,
				photoUrl: auth?.currentUser?.photoURL,
				googleUserId: auth?.currentUser?.email,
				// authToken: auth?.currentUser?.accessToken,
				authObj: auth,
			});
		}
	}, [auth]);

	const value = { user, setUser };

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
