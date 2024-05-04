'use server';
import React from 'react';
import Container from './Container';
import Link from 'next/link';
import Heading from './Heading';
import Image from 'next/image';
import FlexCol from './FlexCol';

const ServiceCards = async ({ service }: any) => {
	const serviceUrl = `/services/${service.fields.category.fields.slug}/${service.fields.slug}`;
	return (
		<FlexCol key={service.sys.id} className='basis-4/12 max-w-72 '>
			<Container className='shadow-lg rounded-xl'>
				<Link href={`${serviceUrl}`}>
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
										className='w-full h-full mx-auto rounded shadow-lg m-3 object-cover object-center'
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
			</Container>
		</FlexCol>
	);
};

export default ServiceCards;
