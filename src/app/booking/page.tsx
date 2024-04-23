'use server';
import React from 'react';
import { NextPage } from 'next';
import Container from '@/components/Container';
import ApiHandling from '@/utils/ApiHandling';
import CalendarComponent from '@/components/Calendar/Calendar';
import Heading from '@/components/Heading';
import { createClient } from 'contentful';

const Book: NextPage = async () => {
	let client = await createClient({
		space: `${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
		accessToken: `${process.env.REACT_APP_CONTENTFUL_API_KEY}`,
	});
	const apiHandling = new ApiHandling(client, null);

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
