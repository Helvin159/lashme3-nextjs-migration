'use server';
import React from 'react';
import Container from './Container';
import Link from 'next/link';
import Heading from './Heading';
import Image from 'next/image';
import FlexCol from './FlexCol';

const CategoryCards = async ({ category }: any) => {
	return (
		<FlexCol key={category.sys.id} size={3} className='h-full'>
			<Container className='shadow-lg rounded-2xl overflow-hidden h-full w-full max-w-72 mx-auto'>
				<Link href={`/services/${category.fields.slug}`}>
					<Container className='w-full h-full max-h-64 overflow-hidden'>
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
								className='w-full h-full mx-auto rounded-tl-2xl rounded-tr-2xl m-3 object-cover object-center overflow-hidden'
							/>
						)}
					</Container>
					<Container className='py-4 px-3'>
						<Heading className='text-md' level='6'>
							{category.fields.categoryName}
						</Heading>
					</Container>
				</Link>
			</Container>
		</FlexCol>
	);
};

export default CategoryCards;
