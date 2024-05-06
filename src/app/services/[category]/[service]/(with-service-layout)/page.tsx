'use server';
import { Params } from '@/app/_utils/Types';
import Container from '@/app/_components/Container';
import Section from '@/app/_components/Section';
import ApiHandling from '@/app/_utils/ApiHandling';
import { Metadata } from 'next';

const apiHandling = new ApiHandling();

export const generateStaticParams = async () => {
	const data = await apiHandling.getContentfulEntries('service');
	const dataArr = data.items.map((i: any) => ({
		slug: i.fields.slug,
	}));
	return dataArr;
};

export const generateMetadata = async ({
	params,
}: {
	params: { service: string };
}): Promise<Metadata> => {
	const { items } = await apiHandling.getContentfulEntries('service');
	const data = items?.find((i: any) => i.fields.slug === params.service);

	return { title: { absolute: `Lash Me E. - ${data.fields.serviceName}` } };
};

const Service = async ({ params }: Params) => {
	const { items } = await apiHandling.getContentfulEntries('service');
	const data = items?.find((i: any) => i.fields.slug === params.service);

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
};

export default Service;
