'use client';
import { Params } from '@/utils/Types';
import { tempPopTreats } from '@/utils/mockData';
import Container from '@/components/Container';
import Section from '@/components/Section';

const Service = ({ params }: Params) => {
	const data = tempPopTreats.find((i) => {
		if (i.id === params.service) {
			let data = i;
			return data;
		}
	});

	return (
		<Section>
			<Container className='text-center'>
				<h1 className='text-xl tablet:text-3xl'>{data?.name} Service Page</h1>;
			</Container>
		</Section>
	);
};

export default Service;
