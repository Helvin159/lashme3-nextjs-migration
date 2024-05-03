'use client';
import Container from '@/app/_components/Container';
import Heading from '@/app/_components/Heading';
import { useCalendarCtx } from '@/app/_context/CalendarContext';
import React from 'react';

const SelectCategory = ({ categories, handleClick }: any) => {
	const { selCategory } = useCalendarCtx();
	return (
		<Container
			className={`w-full text-center ${
				selCategory === null ? 'block' : 'hidden'
			}`}>
			<div className='text-center'>
				<Heading level='3'>Select a Category</Heading>
			</div>
			{categories.map((i: any) => (
				<button
					key={i.sys.id}
					className='bg-variant-one-light shadow-lg active:shadow-md rounded w-11/12 tablet:w-3/5 py-4 px-3 mx-auto my-2 text-2xl'
					onClick={() => {
						handleClick({ id: i.sys.id, name: i.fields.categoryName });
					}}>
					{i.fields.categoryName}{' '}
				</button>
			))}
		</Container>
	);
};

export default SelectCategory;
