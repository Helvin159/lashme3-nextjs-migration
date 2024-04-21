'use server';
import React from 'react';
import { NextPage } from 'next';
import Container from '@/components/Container';
import ApiHandling from '@/utils/ApiHandling';
import CalendarComponent from '@/components/Calendar/Calendar';

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
	const { items: categories } = await apiHandling.getContentfulEntries(
		'category'
	);
	const { items: uDates } = await apiHandling.getContentfulEntries(
		'unavailableDates'
	);

	return (
		<>
			<Container className='text-center p-10'>
				<h1 className='text-4xl'>Booking page</h1>
			</Container>
			<Container>
				<CalendarComponent
					categories={categories}
					services={services}
					uDates={uDates}
				/>
			</Container>
		</>
	);
};

export default Book;
