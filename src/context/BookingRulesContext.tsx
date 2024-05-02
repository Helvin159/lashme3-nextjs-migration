'use client';
import {
	SetStateAction,
	createContext,
	Dispatch,
	useState,
	useContext,
} from 'react';

const BookingRulesContext = createContext<{
	isAgreed: boolean;
	setIsAgreed: Dispatch<SetStateAction<boolean>>;
}>({
	isAgreed: false,
	setIsAgreed: () => null,
});

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
	const [isAgreed, setIsAgreed] = useState<boolean>(false);

	const value = { isAgreed, setIsAgreed };
	return (
		<BookingRulesContext.Provider value={value}>
			{children}
		</BookingRulesContext.Provider>
	);
};

export const useBookingRulesCtx = () => useContext(BookingRulesContext);
