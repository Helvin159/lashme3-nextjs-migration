import React from 'react';
import Container from './Container';
import Link from 'next/link';
import Heading from './Heading';
import Image from 'next/image';
import FlexCol from './FlexCol';

const ServiceCards = async ({ service }: any) => {
	const serviceUrl = `/services/${service.fields.category.fields.slug}/${service.fields.slug}`;
	return (
		<FlexCol key={service.sys.id} size={12} sm={6} md={4} lg={3}>
			<Container className='h-full w-full mx-auto overflow-hidden shadow-lg rounded-2xl'>
				<Link href={`${serviceUrl}`}>
					<Container className='w-full h-full max-h-32 sm:max-h-60 overflow-hidden'>
						<Image
							src={`https:${service.fields.samplePictures[0].fields.file.url}`}
							key={service.fields.samplePictures[0].sys.id}
							width={service.fields.samplePictures[0].fields.file.details.image.width}
							height={service.fields.samplePictures[0].fields.file.details.image.height}
							alt={`${service.fields.samplePictures[0].fields.title}`}
							className='h-full max-h-72 w-full object-cover object-center'
							/>
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
