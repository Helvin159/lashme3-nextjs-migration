'use client';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import { daysOfWeek, months } from '@/utils/utils';
import React from 'react';
import Calendar from 'react-calendar';
import OtherServices from './OtherServices';

const CalAndTime = ({
	selectedService,
	value,
	onChange,
	services,
	settings,
	selectedTime,
	setSelectedTime,
}: any) => {
	const dayOfWeek = value?.getDay() - 1;
	const month = value?.getMonth();
	const day = value?.getDate();

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
			<div className='flex flex-col tablet:flex-row px-5'>
				<Container className='tablet:px-5'>
					<Calendar
						onChange={onChange}
						value={value}
						{...settings}
						className={'mx-auto rounded-xl w-full shadow-lg'}
					/>
				</Container>
				{/* Time slots */}
				<Container className='mx-auto text-center py-3'>
					<Container className='shadow-lg rounded-xl py-6'>
						<OtherServices services={services} />
					</Container>

					<Container className='shadow-lg rounded-xl py-6 px-3 mt-5'>
						<Heading level={'5'} className='mt-6 mb-3'>
							Select a Time for: <br />
							{months[month]}, {daysOfWeek[dayOfWeek]?.day}{' '}
							{day ? day : 'loading...'}
						</Heading>
						<select
							name='time-slots'
							id='timeSlots'
							title='time-slots'
							className='w-2/4 mx-auto outline outline-black	rounded p-2 text-lg text-center'
							onChange={(e) => {
								setSelectedTime(e?.target?.value);
							}}>
							<option className='text-center' defaultChecked value={'Time'}>
								Time
							</option>
							{daysOfWeek[dayOfWeek]?.availableTimeSlots.map((i, k) => (
								<option key={k}>
									{i.start} - {i.end}
								</option>
							))}
						</select>
					</Container>
				</Container>
			</div>
		</Container>
	);
};

export default CalAndTime;
