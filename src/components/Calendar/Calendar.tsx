'use client';
import { useState } from 'react';
import Container from '../Container';
import Section from '../Section';
import Cal from './components/Cal';

const CalendarComponent = () => {
	const [value, onChange] = useState(new Date());

	const months = [
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

	const daysOfWeek = [
		{
			day: 'Mon',
			availableTimeSlots: [
				{ start: '11:00', end: '12:00' },
				{ start: '13:00', end: '14:00' },
				{ start: '15:00', end: '16:00' },
				{ start: '17:00', end: '18:00' },
			],
		},
		{
			day: 'Tue',
			availableTimeSlots: [
				{ start: '11:00', end: '12:00' },
				{ start: '13:00', end: '14:00' },
				{ start: '15:00', end: '16:00' },
				{ start: '17:00', end: '18:00' },
			],
		},
		{
			day: 'Wed',
			availableTimeSlots: [
				{ start: '11:00', end: '12:00' },
				{ start: '13:00', end: '14:00' },
				{ start: '15:00', end: '16:00' },
				{ start: '17:00', end: '18:00' },
			],
		},
		{
			day: 'Thu',
			availableTimeSlots: [
				{ start: '11:00', end: '12:00' },
				{ start: '13:00', end: '14:00' },
				{ start: '15:00', end: '16:00' },
				{ start: '17:00', end: '18:00' },
			],
		},
		{
			day: 'Fri',
			availableTimeSlots: [
				{ start: '11:00', end: '12:00' },
				{ start: '13:00', end: '14:00' },
				{ start: '15:00', end: '16:00' },
				{ start: '17:00', end: '18:00' },
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

	const unavailableDates = [
		{ day: 12, month: 3 },
		{ day: 25, month: 3 },
	];

	const unavailable = unavailableDates.find((i) => {
		let unavailable;

		if (i.day === value.getDate() && i.month === value.getMonth()) {
			unavailable = true;
			return unavailable;
		} else {
			unavailable = false;
			return unavailable;
		}
	});

	// console.log(!unavailable);

	return (
		<Section>
			<Container className='text-center'>
				<Cal value={value} onChange={onChange} />
			</Container>
			<Container className='pt-10 mx-auto text-center'>
				<Container>
					{value.getDay() >= 1 && value.getDay() <= 5 && !unavailable ? (
						<h3 className='text-3xl'>
							Available time for: {months[value.getMonth()]},{' '}
							{daysOfWeek[value.getDay()].day} {value.getDate().toString()}
						</h3>
					) : !unavailable === false ? (
						<NotAvailableOnDay />
					) : (
						<NotAvailableOnWeekend />
					)}

					{value.getDay() >= 1 && value.getDay() <= 5 && !unavailable && (
						<Container className='mx-auto text-center py-3'>
							<select
								name='time-slots'
								id='timeSlots'
								title='time-slots'
								className='w-2/4 mx-auto outline outline-black	rounded p-2 text-lg text-center'>
								<option className='text-center' defaultChecked value={'Time'}>
									Time
								</option>
								{daysOfWeek[value.getDay()].availableTimeSlots.map((i, k) => (
									<option key={k}>
										{i.start} - {i.end}
									</option>
								))}
							</select>
						</Container>
					)}
				</Container>
			</Container>
		</Section>
	);
};

const NotAvailableOnDay = () => (
	<Container className='text-center'>
		<h4 className='text-3xl'>Not available on this day.</h4>
		<p>Please pick another date.</p>
	</Container>
);
const NotAvailableOnWeekend = () => (
	<Container className='text-center'>
		<h4 className='text-3xl'>Not available on weekends.</h4>
		<p>Please pick another date during the week.</p>
	</Container>
);

export default CalendarComponent;
