'use client';
import React, { Dispatch, SetStateAction } from 'react';
import Container from '@/components/Container';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Cal = ({ state, setter }: any) => {
	const settings = {
		defaultActiveStartDate: state,
		minDate: new Date(2024, 3, 8),
		maxDate: new Date(2025, 0, 1),
		selectRange: false,
	};

	return (
		<Container className='text-center'>
			<Calendar
				onChange={setter}
				value={state}
				{...settings}
				className={'mx-auto rounded-xl w-3/5'}
			/>
		</Container>
	);
};

export default Cal;
