'use server';
import React from 'react';
import { NextPage } from 'next';
import Container from '@/components/Container';
import ApiHandling from '@/utils/ApiHandling';
import CalendarComponent from '@/components/Calendar/Calendar';
import Heading from '@/components/Heading';

export async function generateStaticParams() {
	const apiHandling = new ApiHandling();
	const { items } = await apiHandling.getContentfulEntries('service');

	const dataArr = items.map((i: any) => ({
		slug: i.fields.slug,
	}));
	return dataArr;
}

const Book: NextPage = async () => {
	const apiHandling = new ApiHandling();
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
					Booking page
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
