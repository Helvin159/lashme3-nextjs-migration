'use client';
import ApiHandling from '@/app/_utils/ApiHandling';
import { createContext, useContext, useState } from 'react';

// Create Context
const AppointmentsContext = createContext<any>(null);

// Create Provider
export const AppointmentsProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const apiHandling = new ApiHandling();

	const fetchAppts = async () =>
		await apiHandling.getContentfulEntries('appointments');

	const [appointments, setAppointments] = useState<any | null>();

	const value = { appointments, setAppointments };

	return (
		<AppointmentsContext.Provider value={value}>
			{children}
		</AppointmentsContext.Provider>
	);
};

export const UseApptsCtx = () => useContext(AppointmentsContext);
