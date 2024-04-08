import React from 'react';
import CalendarComponent from '@/components/Calendar/Calendar';
import Container from '@/components/Container';
import { NextPage } from 'next';

const Book: NextPage = () => {
	return (
		<>
			<Container className='text-center p-10'>
				<h1 className='text-4xl'>Booking page</h1>
			</Container>
			<Container>
				<CalendarComponent selectedDate={null} selectedService={null} />
			</Container>
		</>
	);
};

export default Book;
