'use server';
import React from 'react';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import ServiceCards from '@/components/ServiceCards';
import ApiHandling from '@/utils/ApiHandling';

export async function generateStaticParams() {
	const apiHandling = new ApiHandling();
	const { items } = await apiHandling.getContentfulEntries('category');

	const dataArr = items.map((i: any) => i.fields.slug);
	return dataArr;
}

const Categories = async ({ params }: any) => {
	const apiHandling = new ApiHandling();
	const { items: categories } = await apiHandling.getContentfulEntries(
		'category'
	);
	const { items: services } = await apiHandling.getContentfulEntries('service');

	const category = categories.find(
		(i: any) => i.fields.slug === params?.category
	);

	return (
		<>
			<Container className='text-center py-10'>
				<Heading level='1'>{category?.fields.categoryName}</Heading>
			</Container>
			<Container className='flex flex-row flex-wrap justify-between content-evenly items-start w-full mx-auto '>
				{services.map((i: any, k: any) => {
					if (i.fields.category.fields.slug === params?.category)
						return <ServiceCards service={i} key={k} />;
				})}
			</Container>
		</>
	);
};

export default Categories;
