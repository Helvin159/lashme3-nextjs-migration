import Container from '@/app/_components/Container';
import Heading from '@/app/_components/Heading';
import Section from '@/app/_components/Section';
import React from 'react';

const DateNotFound = () => {
	return (
		<Section>
			<Container>
				<Heading level='1'>{'Sorry, the date entered is invalid.'}</Heading>
			</Container>
		</Section>
	);
};

export default DateNotFound;
