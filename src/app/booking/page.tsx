'use server';
import React from 'react';
import { NextPage } from 'next';
import Container from '@/components/Container';
import ApiHandling from '@/utils/ApiHandling';
import CalendarComponent from '@/components/Calendar/Calendar';
import Heading from '@/components/Heading';
import BookingRules from '@/components/BookingRules';

const Book: NextPage = async () => {
	const apiHandling = new ApiHandling();

	// Get Data
	const { items: details } = await apiHandling.getContentfulEntries(
		'businessDetails'
	);
	const dets = details.find((i: any) => i.fields.useThisLive === true);

	const { items: services } = await apiHandling.getContentfulEntries('service');
	const { items: appts } = await apiHandling.getContentfulEntries(
		'appointments'
	);
	const { items: categories } = await apiHandling.getContentfulEntries(
		'category'
	);
	const { items: uDates } = await apiHandling.getContentfulEntries(
		'unavailableDates'
	);

	return (
		<>
			<Container className='text-center p-10'>
				<Heading level={'1'} className={''}>
					Booking
				</Heading>
			</Container>
			<BookingRules rules={dets.fields.bookingRules} />
			<Container>
				<CalendarComponent
					categories={categories}
					services={services}
					uDates={uDates}
					appointments={appts}
				/>
			</Container>
		</>
	);
};

export default Book;
