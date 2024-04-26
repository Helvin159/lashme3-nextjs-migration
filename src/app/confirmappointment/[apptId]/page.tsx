import Container from '@/components/Container';
import Heading from '@/components/Heading';
import ApiHandling from '@/utils/ApiHandling';
import { Params } from '@/utils/Types';
import React from 'react';

const ConfirmAppt = async ({ params }: Params) => {
	const apiHandling = new ApiHandling();

	const { apptId } = params;

	await apiHandling.confirmAppointment(apptId);

	return (
		<Container>
			<Container className='w-10/12 mx-auto text-center py-10'>
				<Heading level='1' className='py-10'>
					Thank you for confirming!
				</Heading>
			</Container>
		</Container>
	);
};

export default ConfirmAppt;
