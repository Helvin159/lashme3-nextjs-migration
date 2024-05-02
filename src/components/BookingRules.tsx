'use server';
import React from 'react';
import Container from './Container';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BookingRules = async ({ rules }: any) => {
	return (
		<Container className='mx-auto w-11/12 tablet:w-8/12 text-center border-4 border-variant-one py-8 px-3 tablet:px-20 booking'>
			<article className='booking__rules'>
				{documentToReactComponents(rules)}
			</article>
		</Container>
	);
};

export default BookingRules;
