import Container from '@/app/_components/Container';
import Heading from '@/app/_components/Heading';
import ApiHandling from '@/app/_utils/ApiHandling';
import { Params } from '@/app/_utils/Types';
import React from 'react';

export async function generateStaticParams() {
	const apiHandling = new ApiHandling();
	const { items } = await apiHandling.getContentfulEntries('clients');

	const dataArr = items.map((i: any) => i.sys.id);
	return dataArr;
}

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
