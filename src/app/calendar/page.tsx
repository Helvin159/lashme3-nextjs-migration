'use client';
import React from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import CalendarComponent from '@/components/Calendar/Calendar';

const Calendar = () => {
	return (
		<Section>
			<Container className='text-center'>
				<h1 className='text-3xl'>Calendar</h1>
			</Container>
			<Container>
				<CalendarComponent />
			</Container>
		</Section>
	);
};

export default Calendar;
