'use client';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import React from 'react';

const SelectCategory = ({ selectedCat, categories, handleClick }: any) => {
	return (
		<Container
			className={`w-full text-center ${
				selectedCat === null ? 'block' : 'hidden'
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
