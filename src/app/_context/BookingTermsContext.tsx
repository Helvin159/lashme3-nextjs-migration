'use client';
import {
	SetStateAction,
	createContext,
	Dispatch,
	useState,
	useContext,
} from 'react';

const BookingTermsContext = createContext<{
	isAgreed: boolean;
	setIsAgreed: Dispatch<SetStateAction<boolean>>;
}>({
	isAgreed: false,
	setIsAgreed: () => null,
});

export const BookingTermsProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [isAgreed, setIsAgreed] = useState<boolean>(false);

	const value = { isAgreed, setIsAgreed };
	return (
		<BookingTermsContext.Provider value={value}>
			{children}
		</BookingTermsContext.Provider>
	);
};

export const useBookingTermsCtx = () => useContext(BookingTermsContext);
