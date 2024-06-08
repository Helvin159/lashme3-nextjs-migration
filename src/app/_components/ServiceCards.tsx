import React from 'react';
import Container from './Container';
import Link from 'next/link';
import Heading from './Heading';
import Image from 'next/image';
import FlexCol from './FlexCol';

const ServiceCards = async ({ service }: any) => {
	const serviceUrl = `/services/${service.fields.category.fields.slug}/${service.fields.slug}`;
	return (
		<FlexCol key={service.sys.id} size={4} className='max-w-72 min-h-full'>
				<Link href={`${serviceUrl}`} className='block min-h-full shadow-lg rounded-xl'>
					<Container className='w-72 h-64'>
						{service.fields.samplePictures &&
							service.fields.samplePictures.slice(0, 1).map((i: any) => {
								return (
									<Image
										src={`https:${i.fields.file.url}`}
										key={i.sys.id}
										width={i.fields.file.details.image.width}
										height={i.fields.file.details.image.height}
										alt={`${i.fields.title}`}
										className='w-full h-full mx-auto rounded-tr-xl rounded-tl-xl shadow-lg m-3 object-cover object-center'
									/>
								);
							})}
					</Container>
					<Container className='py-3 text-center'>
						<Heading className='text-md' level='6'>
							{service.fields.serviceName}
						</Heading>
					</Container>
				</Link>
		</FlexCol>
	);
};

export default ServiceCards;
