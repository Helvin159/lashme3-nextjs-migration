'use server';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import React from 'react';

const NotFound = async () => {
	return (
		<Container>
			<Heading level='1'>{"Sorry, this page doesn't exist"}</Heading>
		</Container>
	);
};

export default NotFound;
