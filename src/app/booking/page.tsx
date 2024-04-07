import CalendarComponent from '@/components/Calendar/Calendar';
import Container from '@/components/Container';
import { NextPage } from 'next';

import React from 'react';

const Book: NextPage = () => {
	return (
		<>
			<Container className='text-center p-10'>
				<h1 className='text-4xl'>Booking page</h1>
			</Container>
			<Container>
				<CalendarComponent />
			</Container>
		</>
	);
};

export default Book;
