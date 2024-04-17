import { Dispatch, SetStateAction } from 'react';

export const handleChangeSelect = (
	e: { target: { value: string } },
	state: string,
	setter: Dispatch<SetStateAction<string>>
) => {
	setter(e.target.value);
	console.log(state);
};

export const handleChangeDate = (
	e: { target: { value: string } },
	state: string,
	setter: Dispatch<SetStateAction<string>>
) => {
	console.log(state);
	setter(e.target.value);
};

export const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

export const daysOfWeek = [
	{
		day: 'Mon',
		availableTimeSlots: [
			{ start: '09:00', end: '10:00' },
			{ start: '11:00', end: '12:00' },
			{ start: '13:00', end: '14:00' },
			{ start: '15:00', end: '16:00' },
			{ start: '17:00', end: '18:00' },
			{ start: '19:00', end: '20:00' },
		],
	},
	{
		day: 'Tue',
		availableTimeSlots: [
			{ start: '09:00', end: '10:00' },
			{ start: '11:00', end: '12:00' },
			{ start: '13:00', end: '14:00' },
			{ start: '15:00', end: '16:00' },
			{ start: '17:00', end: '18:00' },
			{ start: '19:00', end: '20:00' },
		],
	},
	{
		day: 'Wed',
		availableTimeSlots: [
			{ start: '09:00', end: '10:00' },
			{ start: '11:00', end: '12:00' },
			{ start: '13:00', end: '14:00' },
			{ start: '15:00', end: '16:00' },
			{ start: '17:00', end: '18:00' },
			{ start: '19:00', end: '20:00' },
		],
	},
	{
		day: 'Thu',
		availableTimeSlots: [
			{ start: '09:00', end: '10:00' },
			{ start: '11:00', end: '12:00' },
			{ start: '13:00', end: '14:00' },
			{ start: '15:00', end: '16:00' },
			{ start: '17:00', end: '18:00' },
			{ start: '19:00', end: '20:00' },
		],
	},
	{
		day: 'Fri',
		availableTimeSlots: [
			{ start: '09:00', end: '10:00' },
			{ start: '11:00', end: '12:00' },
			{ start: '13:00', end: '14:00' },
			{ start: '15:00', end: '16:00' },
			{ start: '17:00', end: '18:00' },
			{ start: '19:00', end: '20:00' },
		],
	},
	{
		day: 'Sat',
		availableTimeSlots: [
			{ start: '11:00', end: '12:00' },
			{ start: '13:00', end: '14:00' },
			{ start: '15:00', end: '16:00' },
			{ start: '17:00', end: '18:00' },
		],
	},
	{
		day: 'Sun',
		availableTimeSlots: [
			{ start: '11:00', end: '12:00' },
			{ start: '13:00', end: '14:00' },
			{ start: '15:00', end: '16:00' },
			{ start: '17:00', end: '18:00' },
		],
	},
];
