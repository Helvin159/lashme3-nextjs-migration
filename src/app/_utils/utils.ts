import { Dispatch, SetStateAction } from 'react';

export const handleChangeSelect = (
	e: { target: { value: string } },
	state: string,
	setter: Dispatch<SetStateAction<string>>
) => {
	setter(e.target.value);
};

export const handleChangeDate = (
	e: { target: { value: string } },
	state: string,
	setter: Dispatch<SetStateAction<string>>
) => {
	setter(e.target.value);
};

export const goBack = (setState: Dispatch<SetStateAction<any>>) => {
	setState(null);
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
			{ time: { hour: '09', minutes: '00' } },
			{ time: { hour: '09', minutes: '15' } },
			{ time: { hour: '09', minutes: '30' } },
			{ time: { hour: '09', minutes: '45' } },
			{ time: { hour: '10', minutes: '00' } },
			{ time: { hour: '10', minutes: '15' } },
			{ time: { hour: '10', minutes: '30' } },
			{ time: { hour: '10', minutes: '45' } },
			{ time: { hour: '11', minutes: '00' } },
			{ time: { hour: '11', minutes: '15' } },
			{ time: { hour: '11', minutes: '30' } },
			{ time: { hour: '11', minutes: '45' } },
			{ time: { hour: '12', minutes: '00' } },
			{ time: { hour: '12', minutes: '15' } },
			{ time: { hour: '12', minutes: '30' } },
			{ time: { hour: '12', minutes: '45' } },
			{ time: { hour: '13', minutes: '00' } },
			{ time: { hour: '13', minutes: '15' } },
			{ time: { hour: '13', minutes: '30' } },
			{ time: { hour: '13', minutes: '45' } },
			{ time: { hour: '14', minutes: '00' } },
			{ time: { hour: '14', minutes: '15' } },
			{ time: { hour: '14', minutes: '30' } },
			{ time: { hour: '14', minutes: '45' } },
			{ time: { hour: '15', minutes: '00' } },
			{ time: { hour: '15', minutes: '15' } },
			{ time: { hour: '15', minutes: '30' } },
			{ time: { hour: '15', minutes: '45' } },
			{ time: { hour: '16', minutes: '00' } },
			{ time: { hour: '16', minutes: '15' } },
			{ time: { hour: '16', minutes: '30' } },
			{ time: { hour: '16', minutes: '45' } },
			{ time: { hour: '17', minutes: '00' } },
			{ time: { hour: '17', minutes: '15' } },
			{ time: { hour: '17', minutes: '30' } },
			{ time: { hour: '17', minutes: '45' } },
			{ time: { hour: '18', minutes: '00' } },
			{ time: { hour: '18', minutes: '15' } },
			{ time: { hour: '18', minutes: '30' } },
			{ time: { hour: '18', minutes: '45' } },
		],
	},
	{
		day: 'Tue',
		availableTimeSlots: [
			{ time: { hour: '09', minutes: '00' } },
			{ time: { hour: '09', minutes: '15' } },
			{ time: { hour: '09', minutes: '30' } },
			{ time: { hour: '09', minutes: '45' } },
			{ time: { hour: '10', minutes: '00' } },
			{ time: { hour: '10', minutes: '15' } },
			{ time: { hour: '10', minutes: '30' } },
			{ time: { hour: '10', minutes: '45' } },
			{ time: { hour: '11', minutes: '00' } },
			{ time: { hour: '11', minutes: '15' } },
			{ time: { hour: '11', minutes: '30' } },
			{ time: { hour: '11', minutes: '45' } },
			{ time: { hour: '12', minutes: '00' } },
			{ time: { hour: '12', minutes: '15' } },
			{ time: { hour: '12', minutes: '30' } },
			{ time: { hour: '12', minutes: '45' } },
			{ time: { hour: '13', minutes: '00' } },
			{ time: { hour: '13', minutes: '15' } },
			{ time: { hour: '13', minutes: '30' } },
			{ time: { hour: '13', minutes: '45' } },
			{ time: { hour: '14', minutes: '00' } },
			{ time: { hour: '14', minutes: '15' } },
			{ time: { hour: '14', minutes: '30' } },
			{ time: { hour: '14', minutes: '45' } },
			{ time: { hour: '15', minutes: '00' } },
			{ time: { hour: '15', minutes: '15' } },
			{ time: { hour: '15', minutes: '30' } },
			{ time: { hour: '15', minutes: '45' } },
			{ time: { hour: '16', minutes: '00' } },
			{ time: { hour: '16', minutes: '15' } },
			{ time: { hour: '16', minutes: '30' } },
			{ time: { hour: '16', minutes: '45' } },
			{ time: { hour: '17', minutes: '00' } },
			{ time: { hour: '17', minutes: '15' } },
			{ time: { hour: '17', minutes: '30' } },
			{ time: { hour: '17', minutes: '45' } },
			{ time: { hour: '18', minutes: '00' } },
			{ time: { hour: '18', minutes: '15' } },
			{ time: { hour: '18', minutes: '30' } },
			{ time: { hour: '18', minutes: '45' } },
		],
	},
	{
		day: 'Wed',
		availableTimeSlots: [
			{ time: { hour: '09', minutes: '00' } },
			{ time: { hour: '09', minutes: '15' } },
			{ time: { hour: '09', minutes: '30' } },
			{ time: { hour: '09', minutes: '45' } },
			{ time: { hour: '10', minutes: '00' } },
			{ time: { hour: '10', minutes: '15' } },
			{ time: { hour: '10', minutes: '30' } },
			{ time: { hour: '10', minutes: '45' } },
			{ time: { hour: '11', minutes: '00' } },
			{ time: { hour: '11', minutes: '15' } },
			{ time: { hour: '11', minutes: '30' } },
			{ time: { hour: '11', minutes: '45' } },
			{ time: { hour: '12', minutes: '00' } },
			{ time: { hour: '12', minutes: '15' } },
			{ time: { hour: '12', minutes: '30' } },
			{ time: { hour: '12', minutes: '45' } },
			{ time: { hour: '13', minutes: '00' } },
			{ time: { hour: '13', minutes: '15' } },
			{ time: { hour: '13', minutes: '30' } },
			{ time: { hour: '13', minutes: '45' } },
			{ time: { hour: '14', minutes: '00' } },
			{ time: { hour: '14', minutes: '15' } },
			{ time: { hour: '14', minutes: '30' } },
			{ time: { hour: '14', minutes: '45' } },
			{ time: { hour: '15', minutes: '00' } },
			{ time: { hour: '15', minutes: '15' } },
			{ time: { hour: '15', minutes: '30' } },
			{ time: { hour: '15', minutes: '45' } },
			{ time: { hour: '16', minutes: '00' } },
			{ time: { hour: '16', minutes: '15' } },
			{ time: { hour: '16', minutes: '30' } },
			{ time: { hour: '16', minutes: '45' } },
			{ time: { hour: '17', minutes: '00' } },
			{ time: { hour: '17', minutes: '15' } },
			{ time: { hour: '17', minutes: '30' } },
			{ time: { hour: '17', minutes: '45' } },
			{ time: { hour: '18', minutes: '00' } },
			{ time: { hour: '18', minutes: '15' } },
			{ time: { hour: '18', minutes: '30' } },
			{ time: { hour: '18', minutes: '45' } },
		],
	},
	{
		day: 'Thu',
		availableTimeSlots: [
			{ time: { hour: '09', minutes: '00' } },
			{ time: { hour: '09', minutes: '15' } },
			{ time: { hour: '09', minutes: '30' } },
			{ time: { hour: '09', minutes: '45' } },
			{ time: { hour: '10', minutes: '00' } },
			{ time: { hour: '10', minutes: '15' } },
			{ time: { hour: '10', minutes: '30' } },
			{ time: { hour: '10', minutes: '45' } },
			{ time: { hour: '11', minutes: '00' } },
			{ time: { hour: '11', minutes: '15' } },
			{ time: { hour: '11', minutes: '30' } },
			{ time: { hour: '11', minutes: '45' } },
			{ time: { hour: '12', minutes: '00' } },
			{ time: { hour: '12', minutes: '15' } },
			{ time: { hour: '12', minutes: '30' } },
			{ time: { hour: '12', minutes: '45' } },
			{ time: { hour: '13', minutes: '00' } },
			{ time: { hour: '13', minutes: '15' } },
			{ time: { hour: '13', minutes: '30' } },
			{ time: { hour: '13', minutes: '45' } },
			{ time: { hour: '14', minutes: '00' } },
			{ time: { hour: '14', minutes: '15' } },
			{ time: { hour: '14', minutes: '30' } },
			{ time: { hour: '14', minutes: '45' } },
			{ time: { hour: '15', minutes: '00' } },
			{ time: { hour: '15', minutes: '15' } },
			{ time: { hour: '15', minutes: '30' } },
			{ time: { hour: '15', minutes: '45' } },
			{ time: { hour: '16', minutes: '00' } },
			{ time: { hour: '16', minutes: '15' } },
			{ time: { hour: '16', minutes: '30' } },
			{ time: { hour: '16', minutes: '45' } },
			{ time: { hour: '17', minutes: '00' } },
			{ time: { hour: '17', minutes: '15' } },
			{ time: { hour: '17', minutes: '30' } },
			{ time: { hour: '17', minutes: '45' } },
			{ time: { hour: '18', minutes: '00' } },
			{ time: { hour: '18', minutes: '15' } },
			{ time: { hour: '18', minutes: '30' } },
			{ time: { hour: '18', minutes: '45' } },
		],
	},
	{
		day: 'Fri',
		availableTimeSlots: [
			{ time: { hour: '09', minutes: '00' } },
			{ time: { hour: '09', minutes: '15' } },
			{ time: { hour: '09', minutes: '30' } },
			{ time: { hour: '09', minutes: '45' } },
			{ time: { hour: '10', minutes: '00' } },
			{ time: { hour: '10', minutes: '15' } },
			{ time: { hour: '10', minutes: '30' } },
			{ time: { hour: '10', minutes: '45' } },
			{ time: { hour: '11', minutes: '00' } },
			{ time: { hour: '11', minutes: '15' } },
			{ time: { hour: '11', minutes: '30' } },
			{ time: { hour: '11', minutes: '45' } },
			{ time: { hour: '12', minutes: '00' } },
			{ time: { hour: '12', minutes: '15' } },
			{ time: { hour: '12', minutes: '30' } },
			{ time: { hour: '12', minutes: '45' } },
			{ time: { hour: '13', minutes: '00' } },
			{ time: { hour: '13', minutes: '15' } },
			{ time: { hour: '13', minutes: '30' } },
			{ time: { hour: '13', minutes: '45' } },
			{ time: { hour: '14', minutes: '00' } },
			{ time: { hour: '14', minutes: '15' } },
			{ time: { hour: '14', minutes: '30' } },
			{ time: { hour: '14', minutes: '45' } },
			{ time: { hour: '15', minutes: '00' } },
			{ time: { hour: '15', minutes: '15' } },
			{ time: { hour: '15', minutes: '30' } },
			{ time: { hour: '15', minutes: '45' } },
			{ time: { hour: '16', minutes: '00' } },
			{ time: { hour: '16', minutes: '15' } },
			{ time: { hour: '16', minutes: '30' } },
			{ time: { hour: '16', minutes: '45' } },
			{ time: { hour: '17', minutes: '00' } },
			{ time: { hour: '17', minutes: '15' } },
			{ time: { hour: '17', minutes: '30' } },
			{ time: { hour: '17', minutes: '45' } },
			{ time: { hour: '18', minutes: '00' } },
			{ time: { hour: '18', minutes: '15' } },
			{ time: { hour: '18', minutes: '30' } },
			{ time: { hour: '18', minutes: '45' } },
		],
	},
	{
		day: 'Sat',
		availableTimeSlots: [
			{ time: { hour: '09', minutes: '00' } },
			{ time: { hour: '09', minutes: '15' } },
			{ time: { hour: '09', minutes: '30' } },
			{ time: { hour: '09', minutes: '45' } },
			{ time: { hour: '10', minutes: '00' } },
			{ time: { hour: '10', minutes: '15' } },
			{ time: { hour: '10', minutes: '30' } },
			{ time: { hour: '10', minutes: '45' } },
			{ time: { hour: '11', minutes: '00' } },
			{ time: { hour: '11', minutes: '15' } },
			{ time: { hour: '11', minutes: '30' } },
			{ time: { hour: '11', minutes: '45' } },
			{ time: { hour: '12', minutes: '00' } },
			{ time: { hour: '12', minutes: '15' } },
			{ time: { hour: '12', minutes: '30' } },
			{ time: { hour: '12', minutes: '45' } },
			{ time: { hour: '13', minutes: '00' } },
			{ time: { hour: '13', minutes: '15' } },
			{ time: { hour: '13', minutes: '30' } },
			{ time: { hour: '13', minutes: '45' } },
			{ time: { hour: '14', minutes: '00' } },
			{ time: { hour: '14', minutes: '15' } },
			{ time: { hour: '14', minutes: '30' } },
			{ time: { hour: '14', minutes: '45' } },
			{ time: { hour: '15', minutes: '00' } },
			{ time: { hour: '15', minutes: '15' } },
			{ time: { hour: '15', minutes: '30' } },
			{ time: { hour: '15', minutes: '45' } },
			{ time: { hour: '16', minutes: '00' } },
			{ time: { hour: '16', minutes: '15' } },
			{ time: { hour: '16', minutes: '30' } },
			{ time: { hour: '16', minutes: '45' } },
			{ time: { hour: '17', minutes: '00' } },
			{ time: { hour: '17', minutes: '15' } },
			{ time: { hour: '17', minutes: '30' } },
			{ time: { hour: '17', minutes: '45' } },
			{ time: { hour: '18', minutes: '00' } },
			{ time: { hour: '18', minutes: '15' } },
			{ time: { hour: '18', minutes: '30' } },
			{ time: { hour: '18', minutes: '45' } },
		],
	},
	{
		day: 'Sun',
		availableTimeSlots: [
			{ time: { hour: '09', minutes: '00' } },
			{ time: { hour: '09', minutes: '15' } },
			{ time: { hour: '09', minutes: '30' } },
			{ time: { hour: '09', minutes: '45' } },
			{ time: { hour: '10', minutes: '00' } },
			{ time: { hour: '10', minutes: '15' } },
			{ time: { hour: '10', minutes: '30' } },
			{ time: { hour: '10', minutes: '45' } },
			{ time: { hour: '11', minutes: '00' } },
			{ time: { hour: '11', minutes: '15' } },
			{ time: { hour: '11', minutes: '30' } },
			{ time: { hour: '11', minutes: '45' } },
			{ time: { hour: '12', minutes: '00' } },
			{ time: { hour: '12', minutes: '15' } },
			{ time: { hour: '12', minutes: '30' } },
			{ time: { hour: '12', minutes: '45' } },
			{ time: { hour: '13', minutes: '00' } },
			{ time: { hour: '13', minutes: '15' } },
			{ time: { hour: '13', minutes: '30' } },
			{ time: { hour: '13', minutes: '45' } },
			{ time: { hour: '14', minutes: '00' } },
			{ time: { hour: '14', minutes: '15' } },
			{ time: { hour: '14', minutes: '30' } },
			{ time: { hour: '14', minutes: '45' } },
			{ time: { hour: '15', minutes: '00' } },
			{ time: { hour: '15', minutes: '15' } },
			{ time: { hour: '15', minutes: '30' } },
			{ time: { hour: '15', minutes: '45' } },
			{ time: { hour: '16', minutes: '00' } },
			{ time: { hour: '16', minutes: '15' } },
			{ time: { hour: '16', minutes: '30' } },
			{ time: { hour: '16', minutes: '45' } },
			{ time: { hour: '17', minutes: '00' } },
			{ time: { hour: '17', minutes: '15' } },
			{ time: { hour: '17', minutes: '30' } },
			{ time: { hour: '17', minutes: '45' } },
			{ time: { hour: '18', minutes: '00' } },
			{ time: { hour: '18', minutes: '15' } },
			{ time: { hour: '18', minutes: '30' } },
			{ time: { hour: '18', minutes: '45' } },
		],
	},
];