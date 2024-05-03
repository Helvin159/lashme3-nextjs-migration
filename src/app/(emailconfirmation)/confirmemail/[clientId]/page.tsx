'use server';
import React from 'react';
import { Params } from '@/app/_utils/Types';
import Container from '@/app/_components/Container';
import Heading from '@/app/_components/Heading';
import ApiHandling from '@/app/_utils/ApiHandling';

const ClientEmailConfirmation = async ({ params }: Params) => {
	const { clientId } = params;
	const apiHandling = new ApiHandling();

	await apiHandling.confirmEmail(clientId);

	return (
		<Container>
			<Container className='w-10/12 mx-auto text-center py-10'>
				<Heading level='1' className='py-10'>
					Thank you for confirming your email address!
				</Heading>
			</Container>
		</Container>
	);
};

export default ClientEmailConfirmation;
