'use client';
import { useState } from 'react';
import { daysOfWeek, months } from '@/utils/utils';
import Section from '../Section';
import Container from '../Container';
import Calendar from 'react-calendar';
import OtherServices from './components/OtherServices';
import Heading from '../Heading';

const CalendarComponent = ({
	categories,
	services,
	uDates,
	appointments,
}: any) => {
	const [value, onChange] = useState<Date | any>(new Date());
	const [selCategory, setSelCategory] = useState<string>('');
	const [selService, setSelService] = useState<string>('');

	const settings = {
		defaultActiveStartDate: value,
		minDate: new Date(2024, 3, 8),
		maxDate: new Date(2025, 0, 1),
		selectRange: false,
	};

	const handleClick = (id: string) => {
		setSelCategory(id);
	};

	const handleSelService = (id: string) => {
		setSelService(id);
	};

	return (
		<Section>
			{/* Category and Service Selection */}
			<Container className='mx-auto w-full'>
				<Container className='flex flex-col w-full tablet:w-10/12 mx-auto '>
					<div className='text-center'>
						<Heading level='3'>Select a category</Heading>
					</div>

					{/* Categories to select from, service will show 
					after category has been chosen */}
					<Container
						className={`w-full text-center ${
							selCategory === '' ? 'block' : 'hidden'
						}`}>
						{categories.map((i: any) => (
							<button
								key={i.sys.id}
								className='bg-variant-one-light shadow-lg active:shadow-md rounded w-11/12 tablet:w-3/5 py-4 px-3 mx-auto my-2 text-2xl'
								onClick={() => {
									handleClick(i.sys.id);
								}}>
								{i.fields.categoryName}{' '}
							</button>
						))}
					</Container>

					{/* Service Menu shows after category is chosen */}
					<Container
						className={`w-full text-center ${
							selCategory !== '' && selService === '' ? 'block' : 'hidden'
						}`}>
						{services.map((i: any) => {
							if (
								i.fields.category.sys.id.toString() === selCategory.toString()
							) {
								return (
									<button
										className='bg-variant-one-light shadow-lg active:shadow-md rounded w-11/12 tablet:w-3/5 py-4 px-3 mx-auto my-2 text-2xl'
										key={i.sys.id}
										onClick={() => {
											handleSelService(i.sys.id);
										}}>
										{i.fields.serviceName}
									</button>
								);
							}
						})}
					</Container>

					{/* Calendar Available Times & Other Services */}
					<Container
						className={`text-center ${selService !== '' ? 'block' : 'hidden'}`}>
						<Calendar
							onChange={onChange}
							value={value}
							{...settings}
							className={'mx-auto rounded-xl w-11/12 tablet:w-3/5'}
						/>

						{/* Time slots */}
						<Container className='mx-auto text-center py-3'>
							<Heading level={'5'} className='mt-6 mb-3'>
								Available time for: {months[value.getMonth()]},{' '}
								{daysOfWeek[value.getDay()].day} {value.getDate().toString()}
							</Heading>
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
					</Container>

					{/* Other related services */}
					<Container
						className={`text-center ${selService !== '' ? 'block' : 'hidden'}`}>
						<OtherServices services={services} />
					</Container>
				</Container>
			</Container>
		</Section>
	);
};
export default CalendarComponent;
