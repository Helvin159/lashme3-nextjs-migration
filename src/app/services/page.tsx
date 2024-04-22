import ApiHandling from '@/utils/ApiHandling';
import Link from 'next/link';

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
