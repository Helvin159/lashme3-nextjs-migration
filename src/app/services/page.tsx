import ApiHandling from '@/utils/ApiHandling';
import { TreatmentType } from '@/utils/Types';
import Link from 'next/link';

export async function generateStaticParams() {
	const apiHandling = new ApiHandling();
	const data = await apiHandling.getContentfulEntries('service');

	const dataArr = data.map((i: any) => ({
		slug: i.fields.slug,
	}));
	return dataArr;
}

const Services = async () => {
	const apiHandling = new ApiHandling();
	const { items } = await apiHandling.getContentfulEntries('service');

	return (
		<>
			<h1 className='text-xl tablet:text-3xl'>Services Page</h1>
			<ul>
				{items?.map((i: any) => (
					<Link href={`/services/${i.fields.slug}`} key={i.sys.id}>
						<li>{i.fields.serviceName}</li>
					</Link>
				))}
			</ul>
		</>
	);
};

export default Services;
