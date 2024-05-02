'use client';
import { useEffect } from 'react';

import Section from '../Section';
import Container from '../Container';
import SelectCategory from './components/SelectCategory';
import SelectService from './components/SelectService';
import CustomerInfoForm from './components/CustomerInfoForm';
import CalAndTime from './components/CalAndTime';
import { useCalendarCtx } from '@/context/CalendarContext';

const CalendarComponent = ({
	categories,
	services,
	uDates,
	appointments,
	params,
}: any) => {
	const { calendarDate, setCalendarDate, setSelCategory, setSelService } =
		useCalendarCtx();

	const settings = {
		defaultActiveStartDate: calendarDate,
		minDate: new Date(),
		maxDate: new Date(2025, 0, 1),
		selectRange: false,
	};

	const handleClick = ({ id, name }: { id: string; name: string }) => {
		setSelCategory({ id: id, name: name });
	};

	const handleSelService = ({
		id,
		name,
		price,
		hours,
		minutes,
	}: {
		id: string;
		name: string;
		price: number;
		hours: number;
		minutes: number;
	}) => {
		setSelService({
			id: id,
			name: name,
			price: price,
			hours: hours,
			minutes: minutes,
		});
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

			if (params?.slug[1]) {
				let date = new Date(params?.slug[1]);
				let year = date.getFullYear();
				let month =
					date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth();
				let day =
					date.getDate() < 10 ? `0${date.getDate() + 2}` : date.getDate() + 2;
				const selDate = `${year}-${month}-${day}`;

				console.log(new Date(selDate), 'seldate');
				setCalendarDate(new Date(selDate));
			}
		}
	}, [categories, params, params?.slug, setSelCategory, setCalendarDate]);

	return (
		<Section>
			<Container className='mx-auto w-full'>
				<Container className='flex flex-col w-full tablet:w-10/12 mx-auto '>
					{/* Categories to select from, service will show 
					after category has been chosen */}
					<SelectCategory categories={categories} handleClick={handleClick} />

					{/* Service Menu shows after category is chosen */}
					<SelectService
						services={services}
						handleSelService={handleSelService}
					/>

					{/* Calendar Available Times & Other Services */}
					<CalAndTime services={services} settings={settings} />

					{/* Form to enter customer name, email and phone number */}
					<CustomerInfoForm selectedDate={calendarDate} />
				</Container>
			</Container>
		</Section>
	);
};
export default CalendarComponent;
