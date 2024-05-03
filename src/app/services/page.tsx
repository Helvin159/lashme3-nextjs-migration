'use server';
import CategoryCards from '@/app/_components/CategoryCards';
import Container from '@/app/_components/Container';
import Heading from '@/app/_components/Heading';
import ApiHandling from '@/app/_utils/ApiHandling';

const Services = async () => {
	const apiHandling = new ApiHandling();
	const { items: categories } = await apiHandling.getContentfulEntries(
		'category'
	);

	return (
		<>
			<Container className='text-center mx-auto w-full py-5'>
				<Heading level='1'>Services Page</Heading>
			</Container>

			<Container className='flex flex-row flex-wrap justify-between content-evenly items-start w-full mx-auto '>
				{categories?.map((i: any, k: any) => (
					<CategoryCards category={i} key={k} />
				))}
			</Container>
		</>
	);
};

export default Services;
