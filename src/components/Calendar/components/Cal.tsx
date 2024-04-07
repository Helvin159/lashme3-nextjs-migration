'use client';
import React from 'react';
import Container from '@/components/Container';
import Calendar from 'react-calendar';

const Cal = ({ value, onChange }: any) => {
	const settings = {
		defaultActiveStartDate: value,
		minDate: new Date(2024, 3, 8),
		maxDate: new Date(2025, 0, 1),
		selectRange: false,
	};

	return (
		<Container className='text-center mx-auto'>
			<Calendar
				onChange={onChange}
				value={value}
				{...settings}
				className={'mx-auto rounded-xl w-3/5'}
			/>
		</Container>
	);
};

export default Cal;
