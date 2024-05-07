import React from 'react';
import Section from './_components/Section';
import Container from './_components/Container';
import Heading from './_components/Heading';

const loading = () => {
	return (
		<Section>
			<Container className='text-center py-20'>
				<Heading level='1'>Loading</Heading>
			</Container>
		</Section>
	);
};

export default loading;