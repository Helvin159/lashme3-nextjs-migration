'use server';
import { ProductType } from '@/app/_utils/Types';
import Link from 'next/link';
import React from 'react';

export async function generateStaticParams() {
	const data = await fetch(
		`https://firebasestorage.googleapis.com/v0/b/portfolio-db-b6a63.appspot.com/o/data.json?alt=media&token=838f7644-ad32-4734-ab1f-510f495ff115`
	)
		.then((res) => res.json())
		.then((data) => data.products);

	const dataArr = data.map((i: ProductType) => ({
		slug: i.slug,
	}));
	return dataArr;
}

const Products = async () => {
	const data = await fetch(
		`https://firebasestorage.googleapis.com/v0/b/portfolio-db-b6a63.appspot.com/o/data.json?alt=media&token=838f7644-ad32-4734-ab1f-510f495ff115`
	)
		.then((res) => res.json())
		.then((data) => data.products);

	return (
		<>
			<h1 className='text-xl tablet:text-3xl'>Product page</h1>
			<ul>
				{data.map((i: ProductType) => (
					<li key={i.id}>
						<Link href={`/products/${i.slug}`}>{i.name}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Products;
