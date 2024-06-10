'use server';
import { Params } from '@/app/_utils/Types';
import Container from '@/app/_components/Container';
import Section from '@/app/_components/Section';
import ApiHandling from '@/app/_utils/ApiHandling';
import { Metadata } from 'next';
import ServicePresentation from '@/app/_components/ServicePresentation';

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

	if (!data) {
		throw new Error("This product doesn't exist.");
	}

	return (
		<Section>
			<Container className='text-center pb-12'>
				<h1 className='text-4xl tablet:text-5xl'>
					{data?.fields?.serviceName}{' '}
				</h1>
			</Container>
			<ServicePresentation services={data} />

		</Section>
	);
};

export default Service;
