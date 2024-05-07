'use client';
import {
	SetStateAction,
	createContext,
	Dispatch,
	useState,
	useContext,
	useEffect,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';

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
	const [user, setUser] = useState<UserType | any | null>(null);

	useEffect(() => {
		// Get userObject from LocalStorage
		const userLcString: any = localStorage.getItem('lashMeEUserObject');
		if (userLcString) {
			const userObject: any = JSON.parse(userLcString);
			console.log('setting user');
			if (user === null) {
				console.log(user);
				if (userObject?.email) {
					setUser(userObject);
				}
			}
		}
		// eslint-disable-next-line no-use-before-define
	}, [user]);

	const value = { user, setUser };

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
