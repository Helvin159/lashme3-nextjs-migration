'use server';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import React from 'react';

import { redirect } from 'next/navigation';

const ConfirmAppointment = async () => {
	redirect(`/`);

	return (
		<Container>
			<Heading level='1'>Appointment Confirmation Page</Heading>
		</Container>
	);
};

export default ConfirmAppointment;
