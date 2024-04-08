'use server';
import React from 'react';
import { Params, ProductType } from '@/utils/Types';
import Section from '@/components/Section';
import Container from '@/components/Container';

export async function generateStaticParams() {
	const data = await fetch(
		`https://firebasestorage.googleapis.com/v0/b/portfolio-db-b6a63.appspot.com/o/data.json?alt=media&token=838f7644-ad32-4734-ab1f-510f495ff115`
	)
		.then((res) => res.json())
		.then((data) => data.products);

	return data.map((i: ProductType) => ({
		slug: i.slug,
	}));
}

const Product = async ({ params }: Params) => {
	const data = await fetch(
		'https://firebasestorage.googleapis.com/v0/b/portfolio-db-b6a63.appspot.com/o/data.json?alt=media&token=838f7644-ad32-4734-ab1f-510f495ff115'
	)
		.then((res) => res.json())
		.then((data) => data.products);

	const product = data.find((i: ProductType) => {
		if (i.slug === params.product) {
			let data = i;
			console.log(data, 'data in find');
			return data;
		}
	});

	console.log(product, 'product');

	return (
		<Section>
			<Container className='text-center'>
				<h1 className='text-xl tablet:text-3xl'>{product?.name} </h1>
				<p>Product Page</p>
			</Container>
		</Section>
	);
};

export default Product;
