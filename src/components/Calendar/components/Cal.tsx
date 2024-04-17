'use client';
import React, { useEffect, useState } from 'react';
import { tempPopTreats } from '@/utils/mockData';
import Container from '@/components/Container';
import Calendar from 'react-calendar';
import { TreatmentType } from '@/utils/Types';

const Cal = ({ selectedDate, selectedService }: any) => {
	const [value, onChange] = useState<any>(new Date());
	const [service, setService] = useState<string | null>(selectedService);

	const settings = {
		defaultActiveStartDate: value,
		minDate: new Date(2024, 3, 8),
		maxDate: new Date(2025, 0, 1),
		selectRange: false,
	};

	useEffect(() => {
		if (selectedDate) {
			let selDate = new Date(selectedDate);

			const day = selDate.getDate() + 1;
			const year = selDate.getFullYear();
			const month = selDate.getMonth() + 1;

			const date = `${year}-${month}-${day}`;
			onChange(new Date(date));
		}

		if (selectedService) {
			tempPopTreats.find((i: TreatmentType) => {
				selectedService;

				if (i.slug === selectedService) {
					setService(i.name);
				}
			});
		}
	}, [selectedDate, selectedService]);

	return (
		<Container className='text-center mx-auto'>
			<Calendar
				onChange={onChange}
				value={value}
				{...settings}
				className={'mx-auto rounded-xl w-11/12 tablet:w-3/5'}
			/>
		</Container>
	);
};

export default Cal;
