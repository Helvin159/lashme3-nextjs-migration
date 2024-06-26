'use server';
import { Params } from '@/utils/Types';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ApiHandling from '@/utils/ApiHandling';

export async function generateStaticParams() {
	const apiHandling = new ApiHandling();
	const data = await apiHandling.getContentfulEntries('service');

	const dataArr = data.items.map((i: any) => ({
		slug: i.fields.slug,
	}));
	return dataArr;
}

export default async function Service({ params }: Params) {
	const apiHandling = new ApiHandling();
	const { items } = await apiHandling.getContentfulEntries('service');

	const data = items?.find((i: any) => {
		if (i.fields.slug === params.service) {
			let data = i;
			return data;
		}
	});

	return (
		<Section>
			<Container className='text-center'>
				<h1 className='text-xl tablet:text-3xl'>
					{data?.fields?.serviceName}{' '}
				</h1>
				<p>Service Page</p>
			</Container>
		</Section>
	);
}
