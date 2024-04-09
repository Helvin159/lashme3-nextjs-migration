import { TreatmentType } from '@/utils/Types';
import Link from 'next/link';

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

const Services = async () => {
	const data = await fetch(
		`https://firebasestorage.googleapis.com/v0/b/portfolio-db-b6a63.appspot.com/o/data.json?alt=media&token=838f7644-ad32-4734-ab1f-510f495ff115`
	)
		.then((res) => res.json())
		.then((data) => data.services);

	return (
		<>
			<h1 className='text-xl tablet:text-3xl'>Services Page</h1>
			<ul>
				{data.map((i: TreatmentType) => (
					<Link href={`/services/${i.slug}`} key={i.id}>
						<li>{i.name}</li>
					</Link>
				))}
			</ul>
		</>
	);
};

export default Services;
