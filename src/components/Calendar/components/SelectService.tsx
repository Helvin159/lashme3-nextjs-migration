'use client';
import React from 'react';
import { useCalendarCtx } from '@/context/CalendarContext';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';

const SelectService = ({ services, handleSelService }: any) => {
	const { selCategory, setSelCategory, selService } = useCalendarCtx();

	const goBack = () => {
		setSelCategory(null);
	};

	return (
		<Container
			className={`w-full text-center ${
				selCategory !== null && selService === null ? 'block' : 'hidden'
			}`}>
			<div className='text-center pb-6'>
				<Heading level='3'>{selCategory?.name}</Heading>

				<Heading level='6'>Select a Service</Heading>
			</div>
			{services.map((i: any) => {
				if (i.fields.category.sys.id.toString() === selCategory?.id) {
					return (
						<button
							className='bg-variant-one-light shadow-lg active:shadow-md rounded w-11/12 tablet:w-3/5 py-4 px-3 mx-auto my-2 text-2xl'
							key={i.sys.id}
							onClick={() => {
								handleSelService({
									id: i.sys.id,
									name: i.fields.serviceName,
									price: i.fields.price,
									hours: i.fields.hours,
									minutes: i.fields.minutes,
								});
							}}>
							{i.fields.serviceName}
						</button>
					);
				}
			})}
			<Container className='mx-auto w-full text-center p-6'>
				<Button variant='pink' onClick={goBack}>
					Back
				</Button>
			</Container>
		</Container>
	);
};

export default SelectService;
