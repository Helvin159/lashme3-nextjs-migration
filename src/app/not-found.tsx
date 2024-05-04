'use server';
import Container from '@/app/_components/Container';
import Heading from '@/app/_components/Heading';
import React from 'react';
import Section from './_components/Section';

const NotFound = async () => {
	return (
		<Section>
			<Container>
				<Heading level='1'>{"Sorry, this page doesn't exist"}</Heading>
			</Container>
		</Section>
	);
};

export default NotFound;
