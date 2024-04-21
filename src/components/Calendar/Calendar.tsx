'use client';
import { useState } from 'react';
import { daysOfWeek, months } from '@/utils/utils';
import Section from '../Section';
import Container from '../Container';
import Calendar from 'react-calendar';
import OtherServices from './components/OtherServices';

const CalendarComponent = ({ categories, services, uDates }: any) => {
	const [value, onChange] = useState<Date | any>(new Date());
	const [selCategory, setSelCategory] = useState<any>(null);
	const [selService, setSelService] = useState<any>(null);

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
				<div className='flex flex-col w-10/12 mx-auto '>
					{categories.map((i: any) => (
						<div key={i.sys.id} className='w-full text-center'>
							<button
								className='shadow-lg active:shadow-md my-2 rounded mx-auto w-3/5 p-3 text-2xl'
								onClick={() => {
									handleClick(i.sys.id);
								}}>
								{i.fields.categoryName}{' '}
							</button>
						</div>
					))}
				</div>

				<div className='flex flex-col w-10/12 mx-auto text-center'>
					{selCategory !== null && (
						<div className='py-5 text-center'>
							{services.map((i: any) => {
								if (
									i.fields.category.sys.id.toString() === selCategory.toString()
								) {
									return (
										<button
											className='shadow-lg active:shadow-md my-2 rounded mx-auto w-3/5 p-3 text-2xl'
											key={i.sys.id}
											onClick={() => {
												handleSelService(i.sys.id);
											}}>
											{i.fields.serviceName}
										</button>
									);
								}
							})}
						</div>
					)}
				</div>
			</Container>

			{/* Calendar */}
			{selService && (
				<Container className='text-center'>
					<Calendar
						onChange={onChange}
						value={value}
						{...settings}
						className={'mx-auto rounded-xl w-11/12 tablet:w-3/5'}
					/>
				</Container>
			)}

			{/* Available Times & Other Services */}
			<Container className='pt-10 mx-auto text-center'>
				<Container>
					<h3 className='text-3xl'>
						Available time for: {months[value.getMonth()]},{' '}
						{daysOfWeek[value.getDay()].day} {value.getDate().toString()}
					</h3>

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

						<OtherServices services={services} />
					</Container>
				</Container>
			</Container>
		</Section>
	);
};
export default CalendarComponent;
