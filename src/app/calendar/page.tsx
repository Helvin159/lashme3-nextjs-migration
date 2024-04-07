'use client';
import React from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import CalendarComponent from '@/components/Calendar/Calendar';

const Calendar = () => {
	return (
		<Section>
			<Container className='text-center p-10'>
				<h1 className='text-4xl'>Calendar</h1>
			</Container>
			<Container>
				<CalendarComponent />
			</Container>
		</Section>
	);
};

export default Calendar;
