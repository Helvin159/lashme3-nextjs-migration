'use server';
import { Params, TreatmentType } from '@/utils/Types';
import Container from '@/components/Container';
import Section from '@/components/Section';

export async function generateStaticParams() {
	const data = await fetch(
		`https://firebasestorage.googleapis.com/v0/b/portfolio-db-b6a63.appspot.com/o/data.json?alt=media&token=838f7644-ad32-4734-ab1f-510f495ff115`
	)
		.then((res) => res.json())
		.then((data) => data.services);

	const dataArr = data.map((i: TreatmentType) => ({
		slug: i.slug,
	}));
	return dataArr;
}

export default async function Service({ params }: Params) {
	const treatments = await fetch(
		`https://firebasestorage.googleapis.com/v0/b/portfolio-db-b6a63.appspot.com/o/data.json?alt=media&token=838f7644-ad32-4734-ab1f-510f495ff115`
	)
		.then((res) => res.json())
		.then((data) => data.services);

	const data = treatments.find((i: TreatmentType) => {
		if (i.id === params.service) {
			let data = i;
			return data;
		}
	});

	return (
		<Section>
			<Container className='text-center'>
				<h1 className='text-xl tablet:text-3xl'>{data?.name} </h1>
				<p>Service Page</p>
			</Container>
		</Section>
	);
}
