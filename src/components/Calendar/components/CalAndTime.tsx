'use client';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import { daysOfWeek, months } from '@/utils/utils';
import React from 'react';
import Calendar from 'react-calendar';

const CalAndTime = ({
	selectedService,
	value,
	onChange,
	settings,
	selectedTime,
	setSelectedTime,
}: any) => {
	return (
		<Container
			className={`text-center ${
				selectedService !== null && selectedTime === null ? 'block' : 'hidden'
			}`}>
			<div className='text-center pb-6'>
				<Heading level='4'>{selectedService?.name}</Heading>
				<p>time @ price</p>
				<Heading level='6'>Select a Date</Heading>
			</div>
			<div className='flex flex-col tablet:flex-row'>
				<Container>
					<Calendar
						onChange={onChange}
						value={value}
						{...settings}
						className={'mx-auto rounded-xl w-11/12 '}
					/>
				</Container>
				{/* Time slots */}
				<Container className='mx-auto text-center py-3'>
					<Heading level={'5'} className='mt-6 mb-3'>
						Select a Time for: {months[value.getMonth()]},{' '}
						{daysOfWeek[value.getDay() - 1].day} {value.getDate()}
					</Heading>
					<select
						name='time-slots'
						id='timeSlots'
						title='time-slots'
						className='w-2/4 mx-auto outline outline-black	rounded p-2 text-lg text-center'
						onChange={(e) => {
							setSelectedTime(e.target.value);
						}}>
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
			</div>
		</Container>
	);
};

export default CalAndTime;
