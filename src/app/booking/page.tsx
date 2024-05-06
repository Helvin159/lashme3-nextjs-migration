'use server';
import React from 'react';
import { Metadata, NextPage } from 'next';
import Container from '@/app/_components/Container';
import ApiHandling from '@/app/_utils/ApiHandling';
import CalendarComponent from '@/app/_components/Calendar/Calendar';
import Heading from '@/app/_components/Heading';
import BookingTerms from '@/app/_components/BookingTerms';
import Section from '../_components/Section';

const apiHandling = new ApiHandling();

export const generateMetadata = async ({
	params,
}: {
	params: { category: string };
}): Promise<Metadata> => {
	async () =>
		await new Promise((resolve: any) => {
			setTimeout(() => resolve(), 100);
		});

	return { title: { absolute: `Lash Me E. - Booking` } };
};

const Book: NextPage = async () => {
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

	// console.log(appts[0].fields.relatedService, 'appointments');
	return (
		<>
			<Section>
				<Container className='text-center p-10'>
					<Heading level={'1'} className={''}>
						Booking
					</Heading>
				</Container>
			</Section>
			<Section>
				<BookingTerms rules={dets.fields.bookingRules} />
			</Section>
			<Section>
				<Container>
					<CalendarComponent
						categories={categories}
						services={services}
						uDates={uDates}
						appointments={appts}
					/>
				</Container>
			</Section>
		</>
	);
};

export default Book;
