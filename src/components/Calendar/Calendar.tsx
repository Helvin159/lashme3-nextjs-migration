'use client';
import { useEffect, useState } from 'react';
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
	params,
}: any) => {
	const [value, onChange] = useState<Date | any>(new Date());
	const [selCategory, setSelCategory] = useState<
		| {
				id: string;
				name: string;
		  }
		| null
		| undefined
	>(null);
	const [selService, setSelService] = useState<
		| {
				id: string;
				name: string;
		  }
		| null
		| undefined
	>(null);

	const settings = {
		defaultActiveStartDate: value,
		minDate: new Date(2024, 3, 8),
		maxDate: new Date(2025, 0, 1),
		selectRange: false,
	};

	const handleClick = ({ id, name }: { id: string; name: string }) => {
		setSelCategory({ id: id, name: name });
	};

	const handleSelService = ({ id, name }: { id: string; name: string }) => {
		setSelService({ id: id, name: name });
	};

	useEffect(() => {
		if (params) {
			let itemBySlug = categories.find((i: any) => {
				if (i.fields.slug === params?.slug[0]) {
					return i;
				}
			});

			setSelCategory({
				id: itemBySlug.sys.id,
				name: itemBySlug.fields.categoryName,
			});
		}
	}, [categories, params, params?.slug]);

	return (
		<Section>
			{/* Category and Service Selection */}
			<Container className='mx-auto w-full'>
				<Container className='flex flex-col w-full tablet:w-10/12 mx-auto '>
					{/* Categories to select from, service will show 
					after category has been chosen */}
					<Container
						className={`w-full text-center ${
							selCategory === null ? 'block' : 'hidden'
						}`}>
						<div className='text-center'>
							<Heading level='3'>Select a Category</Heading>
						</div>
						{categories.map((i: any) => (
							<button
								key={i.sys.id}
								className='bg-variant-one-light shadow-lg active:shadow-md rounded w-11/12 tablet:w-3/5 py-4 px-3 mx-auto my-2 text-2xl'
								onClick={() => {
									handleClick({ id: i.sys.id, name: i.fields.categoryName });
								}}>
								{i.fields.categoryName}{' '}
							</button>
						))}
					</Container>

					{/* Service Menu shows after category is chosen */}
					<Container
						className={`w-full text-center ${
							selCategory !== null && selService === null ? 'block' : 'hidden'
						}`}>
						<div className='text-center pb-6'>
							<Heading level='3'>{selCategory?.name}</Heading>

							<Heading level='6'>Select a Service</Heading>
						</div>
						{services.map((i: any) => {
							if (i.fields.category.sys.id.toString() === selCategory?.id) {
								return (
									<button
										className='bg-variant-one-light shadow-lg active:shadow-md rounded w-11/12 tablet:w-3/5 py-4 px-3 mx-auto my-2 text-2xl'
										key={i.sys.id}
										onClick={() => {
											handleSelService({
												id: i.sys.id,
												name: i.fields.serviceName,
											});
										}}>
										{i.fields.serviceName}
									</button>
								);
							}
						})}
					</Container>

					{/* Calendar Available Times & Other Services */}
					<Container
						className={`text-center ${
							selService !== null ? 'block' : 'hidden'
						}`}>
						<div className='text-center pb-6'>
							<Heading level='4'>{selService?.name}</Heading>
							<p>time @ price</p>
							<Heading level='6'>Select a Date</Heading>
						</div>
						<Calendar
							onChange={onChange}
							value={value}
							{...settings}
							className={'mx-auto rounded-xl w-11/12 tablet:w-3/5'}
						/>

						{/* Time slots */}
						<Container className='mx-auto text-center py-3'>
							<Heading level={'5'} className='mt-6 mb-3'>
								Select a Time for: {months[value.getMonth()]},{' '}
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
						className={`text-center ${
							selService !== null ? 'block' : 'hidden'
						}`}>
						<OtherServices services={services} />
					</Container>

					<Container className='hidden'>
						<form>
							<label htmlFor='customerFName'>First Name</label>
							<input
								type='text'
								id='customerFName'
								required
								placeholder='First Name'
							/>

							<label htmlFor='customerLName'>Last Name</label>
							<input
								type='text'
								id='customerLName'
								required
								placeholder='Last Name'
							/>

							<label htmlFor='customerTel'>Phone Number</label>
							<input
								type='tel'
								id='customerTel'
								required
								placeholder='Phone number'
							/>

							<label htmlFor='customerEmail'>Email</label>
							<input
								type='email'
								id='customerEmail'
								required
								placeholder='Email'
							/>
						</form>
					</Container>
				</Container>
			</Container>
		</Section>
	);
};
export default CalendarComponent;
