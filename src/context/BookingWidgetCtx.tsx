'use client';
import { createContext, useState, useContext } from 'react';

const BookingContext = createContext<any>({
	service: null,
	setService: () => null,
	selectedDate: null,
	setSelectedDate: () => null,
});

export const BookingProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const date = new Date();

	const year = date.getFullYear();

	const month =
		date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth();

	const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

	const currDate = `${year}-${month}-${day}`;

	const [service, setService] = useState<string>('');
	const [selectedDate, setSelectedDate] = useState<string>(currDate);

	const value = { service, setService, selectedDate, setSelectedDate };

	return (
		<BookingContext.Provider value={value}>{children}</BookingContext.Provider>
	);
};

export const useBookingWidgetCtx = () => useContext(BookingContext);
