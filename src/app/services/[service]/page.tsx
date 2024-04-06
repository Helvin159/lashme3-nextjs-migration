'use client';
import { Params } from '@/utils/Types';
import { GContext } from '@/context/GlobalContext';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { useContext } from 'react';

const Service = ({ params }: Params) => {
	const {
		treatments: { treatments },
	} = useContext(GContext);

	const data = treatments.find((i) => {
		if (i.id === params.service) {
			let data = i;
			return data;
		}
	});

	return (
		<Section>
			<Container className='text-center'>
				<h1 className='text-xl tablet:text-3xl'>{data?.name} </h1>
				<p>Service Page</p>
			</Container>
		</Section>
	);
};

export default Service;
