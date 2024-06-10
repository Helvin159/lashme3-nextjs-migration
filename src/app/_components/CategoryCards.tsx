'use server';
import React from 'react';
import Container from './Container';
import Link from 'next/link';
import Heading from './Heading';
import Image from 'next/image';
import FlexCol from './FlexCol';

const CategoryCards = async ({ category }: any) => {
	return (
		<FlexCol key={category.sys.id} size={12} sm={6} md={4} lg={3}>
			<Container className='h-full w-full max-w-80 mx-auto overflow-hidden shadow-lg rounded-2xl'>
				<Link href={`/services/${category.fields.slug}`}>
					<Container className='w-full h-full max-h-32 sm:max-h-60 overflow-hidden'>
						{category.fields.categoryPicture && (
							<Image
								src={`https:${category.fields.categoryPicture.fields.file.url}`}
								key={category.fields.categoryPicture.sys.id}
								width={
									category.fields.categoryPicture.fields.file.details.image
										.width
								}
								height={
									category.fields.categoryPicture.fields.file.details.image
										.height
								}
								alt={`${category.fields.categoryPicture.fields.title}`}
								className='h-full max-h-72 w-full object-cover object-center'
							/>
						)}
					</Container>
					<Container className='flex justify-center items-center h-28 max-h-20 py-4 px-3'>
						<Heading className='text-lg' level='6'>
							{category.fields.categoryName}
						</Heading>
					</Container>
				</Link>
			</Container>
		</FlexCol>
	);
};

export default CategoryCards;
