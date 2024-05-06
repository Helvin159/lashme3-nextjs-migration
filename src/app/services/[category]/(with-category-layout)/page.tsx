'use server';
import React from 'react';
import Container from '@/app/_components/Container';
import Heading from '@/app/_components/Heading';
import ServiceCards from '@/app/_components/ServiceCards';
import ApiHandling from '@/app/_utils/ApiHandling';
import Section from '@/app/_components/Section';
import RowContainer from '@/app/_components/RowContainer';
import { Metadata } from 'next';

const apiHandling = new ApiHandling();

export const generateStaticParams = async () => {
	const { items } = await apiHandling.getContentfulEntries('category');
	const dataArr = items.map((i: any) => i.fields.slug);

	return dataArr;
};

export const generateMetadata = async ({
	params,
}: {
	params: { category: string };
}): Promise<Metadata> => {
	const { items } = await apiHandling.getContentfulEntries('category');
	const data = items?.find((i: any) => i.fields.slug === params.category);

	return { title: { absolute: `Lash Me E. - ${data.fields.categoryName}` } };
};

const Categories = async ({ params }: any) => {
	const { items: categories } = await apiHandling.getContentfulEntries(
		'category'
	);
	const { items: services } = await apiHandling.getContentfulEntries('service');

	const category = categories.find(
		(i: any) => i.fields.slug === params?.category
	);

	return (
		<>
			<Section>
				<Container className='text-center py-10'>
					<Heading level='1'>{category?.fields.categoryName}</Heading>
				</Container>
			</Section>
			<Section>
				<RowContainer className='max-w-969 mx-auto'>
					{services.map((i: any, k: any) => {
						if (i.fields.category.fields.slug === params?.category)
							return <ServiceCards service={i} key={k} />;
					})}
				</RowContainer>
			</Section>
		</>
	);
};

export default Categories;
