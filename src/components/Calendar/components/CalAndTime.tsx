'use client';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import { daysOfWeek, months } from '@/utils/utils';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import OtherServices from './OtherServices';
import Button from '@/components/Button';
import { useCalendarCtx } from '@/context/CalendarContext';

const CalAndTime = ({ services, settings }: any) => {
	const {
		calendarDate,
		setCalendarDate,
		selService,
		setSelService,
		selTime,
		setSelTime,
		otherServices,
		setOtherServices,
		totalHours,
		setTotalHours,
		totalMins,
		setTotalMins,
	} = useCalendarCtx();

	const dayOfWeek = calendarDate?.getDay() - 1;
	const month = calendarDate?.getMonth();
	const day = calendarDate?.getDate();

	const goBack = () => {
		setSelService(null);
	};

	useEffect(() => {
		setTotalHours(selService?.hours);
		setTotalMins(selService?.minutes);

		let otherTotalHours = 0;
		let otherTotalMinutes = 0;
		let totalH = 0;
		let totalM = 0;

		if (otherServices) {
			for (let i = 0; i < otherServices.length; i++) {
				otherTotalHours = otherTotalHours + otherServices[i].fields.hours;
				otherTotalMinutes = otherTotalMinutes + otherServices[i].fields.minutes;
			}

			totalH = selService.hours + otherTotalHours;
			totalM = selService.minutes + otherTotalMinutes;

			setTotalMins(totalM);
			setTotalHours(totalH);
		}
	}, [
		otherServices,
		selService?.hours,
		selService?.minutes,
		selService,
		setTotalHours,
		totalHours,
		setTotalMins,
	]);

	return (
		<Container
			className={`text-center ${
				selService !== null && selTime === null ? 'block' : 'hidden'
			}`}>
			<div className='text-center pb-6'>
				<Heading level='4'>{selService?.name}</Heading>
				<p>
					{totalHours < 1
						? ''
						: totalHours === 1
						? `${totalHours} hour`
						: `${totalHours} hours`}
					{totalMins > 0 && ` & ${totalMins} minutes`} @ ${selService?.price}
				</p>
				<Heading level='6'>Select a Date</Heading>
			</div>
			<div className='flex flex-col tablet:flex-row px-5'>
				<Container className='tablet:px-5'>
					<Calendar
						onChange={setCalendarDate}
						value={calendarDate}
						{...settings}
						className={'mx-auto rounded-xl w-full shadow-lg'}
					/>
				</Container>
				{/* Time slots */}
				<Container className='mx-auto text-center py-3'>
					<Container className='shadow-lg rounded-xl py-6'>
						<OtherServices
							setOtherServices={setOtherServices}
							services={services}
						/>
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
								setSelTime(e?.target?.value);
							}}>
							<option
								className='text-center'
								defaultValue={'Time'}
								value={'Time'}>
								Time
							</option>
							{daysOfWeek[dayOfWeek]?.availableTimeSlots.map((i, k) => (
								<option key={k} value={`${i.time.hour}:${i.time.minutes}`}>
									{`${
										parseInt(i.time.hour) > 12
											? parseInt(i.time.hour) - 12
											: i.time.hour
									}:${i.time.minutes}`}
								</option>
							))}
						</select>
					</Container>
				</Container>
			</div>
			<Container className='mx-auto w-full text-center p-6'>
				<Button variant='pink' onClick={goBack}>
					Back
				</Button>
			</Container>
		</Container>
	);
};

export default CalAndTime;
