'use client';
import ApiHandling from '@/utils/ApiHandling';
import { createContext, useContext, useState } from 'react';

const apiHandling = new ApiHandling();

let data = async () => {
	let { items } = await apiHandling
		.getContentfulEntries('appointments')
		.then((res) => res);

	let newArrItems = [];

	for (let i = 0; i < items?.length; i++) {
		newArrItems.push(items[i]);
	}

	let newObj = {
		items: newArrItems,
	};

	return newObj;
};

// Create Context
const AppointmentsContext = createContext<any>(null);

// Create Provider
export const AppointmentsProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [appointments, setAppointments] = useState<any>(data);

	const value = { appointments, setAppointments };

	return (
		<AppointmentsContext.Provider value={value}>
			{children}
		</AppointmentsContext.Provider>
	);
};

export const useApptsCtx = () => useContext(AppointmentsContext);
