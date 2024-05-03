'use client';
import { SelectedOptionState } from '@/app/_utils/Types';
import { createContext, useState, useContext } from 'react';

const CalendarContext = createContext<any>({
	selCategory: null,
	setSelCategory: () => null,
	selService: null,
	setSelService: () => null,
	selTime: null,
	setSelTime: null,
	isSubmitted: false,
	setIsSubmitted: () => null,
	isOpen: false,
	setIsOpen: () => null,
});

export const CalendarProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [calendarDate, setCalendarDate] = useState<Date | any>(new Date());
	const [selCategory, setSelCategory] = useState<SelectedOptionState | null>(
		null
	);
	const [selService, setSelService] = useState<SelectedOptionState | null>(
		null
	);
	const [selTime, setSelTime] = useState<any | null>(null);
	const [isSubmitted, setIsSubmitted] = useState<Boolean | null>(false);
	const [isOpen, setIsOpen] = useState<any>(false);

	const [otherServices, setOtherServices] = useState<any>(null);
	const [totalHours, setTotalHours] = useState<any>(selService?.hours);
	const [totalMins, setTotalMins] = useState<any>();

	const value = {
		calendarDate,
		setCalendarDate,
		selCategory,
		setSelCategory,
		selService,
		setSelService,
		selTime,
		setSelTime,
		isOpen,
		isSubmitted,
		setIsSubmitted,
		setIsOpen,
		otherServices,
		setOtherServices,
		totalHours,
		setTotalHours,
		totalMins,
		setTotalMins,
	};
	return (
		<CalendarContext.Provider value={value}>
			{children}
		</CalendarContext.Provider>
	);
};

export const useCalendarCtx = () => useContext(CalendarContext);
