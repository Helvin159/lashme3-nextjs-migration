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
			<Section>
				<Container className='text-center mx-auto w-full py-5'>
					<Heading level='1'>Our Services!</Heading>
				</Container>
			</Section>
			<Section>
				<RowContainer className='max-w-969 mx-auto'>
					{categories?.map((i: any, k: any) => (
						<CategoryCards category={i} key={k} />
					))}
				</RowContainer>
			</Section>
		</>
	);
};

export default Services;
