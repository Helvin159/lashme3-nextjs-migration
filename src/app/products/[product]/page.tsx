'use client';
import React from 'react';
import { Params } from '@/utils/Types';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { tempPopTreats } from '@/utils/mockData';

const Product = ({ params }: Params) => {
	const data = tempPopTreats.find((i) => {
		if (i.slug === params.product) {
			let data = i;
			return data;
		}
	});

	return (
		<Section>
			<Container className='text-center'>
				<h1 className='text-xl tablet:text-3xl'>{data?.name} </h1>
				<p>Product Page</p>
			</Container>
		</Section>
	);
};

export default Product;
