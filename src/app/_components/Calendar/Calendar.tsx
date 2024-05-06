'use client';
import { useEffect } from 'react';
import { useCalendarCtx } from '@/app/_context/CalendarContext';
import { notFound } from 'next/navigation';
import { useBookingTermsCtx } from '@/app/_context/BookingTermsContext';

import Section from '../Section';
import Container from '../Container';
import SelectCategory from './components/SelectCategory';
import SelectService from './components/SelectService';
import CustomerInfoForm from './components/CustomerInfoForm';
import CalAndTime from './components/CalAndTime';

const CalendarComponent = ({
	categories,
	services,
	params,
	appointments,
}: any) => {
	// ************
	// If this is routed to an address that doesn't include a Date
	// on the address in the dynamic slug expecting a date on the
	// specified param.
	if (params?.slug[1]) {
		const dateCheck =
			new Date(params?.slug[1]) instanceof Date &&
			!isNaN(new Date(params?.slug[1]).valueOf());

		if (!dateCheck) {
			notFound();
		}
	}

	// Get Data from context
	const { isAgreed } = useBookingTermsCtx();
	const { setCalendarDate, setSelCategory, setSelService } = useCalendarCtx();

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

	// In the case this is loaded on a dynamic page, checks
	// useEffect checks params, and if params are available,
	// re-renders necessary components with data
	useEffect(() => {
		if (params) {
			let itemBySlug = categories.find((i: any) => {
				if (i.fields.slug === params?.slug[0]) {
					return i;
				}
			});

			setSelCategory({
				id: itemBySlug?.sys.id,
				name: itemBySlug?.fields.categoryName,
			});

			if (params?.slug[1]) {
				let date = new Date(params?.slug[1]);
				let year = date.getFullYear();
				let month =
					date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth();
				let day =
					date.getDate() < 10 ? `0${date.getDate() + 2}` : date.getDate() + 2;
				const selDate = `${year}-${month}-${day}`;

				// console.log(new Date(typeof selDate), 'seldate');
				let d = new Date(typeof selDate);
				// console.log(d, 'd type');
				if (d! instanceof Date) {
					// console.log('match');
				}
				setCalendarDate(new Date(selDate));
			}
		}
	}, [categories, params, params?.slug, setSelCategory, setCalendarDate]);

	return (
		<Section className={`${!isAgreed && 'hidden'}`}>
			<Container className='mx-auto w-full'>
				<Container className='flex flex-col w-full tablet:w-10/12 mx-auto '>
					{/* Categories to select from, service will show 
					after category has been chosen */}
					<SelectCategory categories={categories} />

					{/* Service Menu shows after category is chosen */}
					<SelectService
						services={services}
						handleSelService={handleSelService}
					/>

					{/* Calendar Available Times & Other Services */}
					<CalAndTime appointments={appointments} services={services} />

					{/* Form to enter customer name, email and phone number */}
					<CustomerInfoForm />
				</Container>
			</Container>
		</Section>
	);
};
export default CalendarComponent;
