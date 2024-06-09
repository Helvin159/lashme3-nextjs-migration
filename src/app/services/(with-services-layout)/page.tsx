'use server';
import CategoryCards from '@/app/_components/CategoryCards';
import Container from '@/app/_components/Container';
import Heading from '@/app/_components/Heading';
import ApiHandling from '@/app/_utils/ApiHandling';
import RowContainer from '../../_components/RowContainer';
import Section from '../../_components/Section';
import { Metadata } from 'next';

export const generateMetadata = async ({
	params,
}: {
	params: { service: string };
}): Promise<Metadata> => {
	return { title: { absolute: 'Lash Me E. - Services' } };
};
const Services = async () => {
	const apiHandling = new ApiHandling();
	const { items: categories } = await apiHandling.getContentfulEntries(
		'category'
	);

	return (
		<>
			<Section className='max-w-1250 mx-auto px-5'>
				<Container className='text-left mx-auto w-full py-5'>
					<Heading level='1' className='capitalize'>What we offer!</Heading>
				</Container>
			</Section>
			<Section>
				<RowContainer className='tablet:gap-x-0 '>
					{categories?.map((i: any, k: any) => (
						<CategoryCards category={i} key={k} />
					))}
				</RowContainer>
			</Section>
		</>
	);
};

export default Services;
