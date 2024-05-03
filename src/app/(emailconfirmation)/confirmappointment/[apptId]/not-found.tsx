import Container from '@/app/_components/Container';
import Heading from '@/app/_components/Heading';
import React from 'react';

const AppointmentNotFound = () => {
	return (
		<Container>
			<Heading level='1'>{'Sorry, the date entered is invalid.'}</Heading>
		</Container>
	);
};

export default AppointmentNotFound;
