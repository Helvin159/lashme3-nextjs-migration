'use client';
import React from 'react';
import Container from './Container';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useBookingTermsCtx } from '@/app/_context/BookingTermsContext';
import Button from './Button';

const BookingTerms = ({ rules }: any) => {
	const { isAgreed, setIsAgreed } = useBookingTermsCtx();

	const onClick = () => {
		setIsAgreed(!isAgreed);
	};
	return (
		<Container
			className={`${
				isAgreed && 'hidden'
			} mx-auto w-11/12 tablet:w-8/12 text-center border-4 border-variant-one py-8 px-3 tablet:px-20 booking`}>
			<article className='booking__rules'>
				{documentToReactComponents(rules)}
			</article>
			<Container className='pt-6'>
				<Button variant='pink' onClick={onClick}>
					Agree to Terms
				</Button>
			</Container>
		</Container>
	);
};

export default BookingTerms;
