'use client';
import React from 'react';
import Section from './_components/Section';
import Heading from './_components/Heading';
import Container from './_components/Container';

const ErrorBoundary = ({ error }: { error: Error }) => {
	console.log(error);
	return (
		<Section>
			<Container className='text-center max-w-40rem mx-auto'>
				<Heading level='3'>
					We are sorry, looks you you&apos;ve run into an error.
				</Heading>
				<p className='py-6'>{error.message}</p>
			</Container>
		</Section>
	);
};

export default ErrorBoundary;
