'use server';
import React from 'react';
import Container from './Container';
import Link from 'next/link';
import Heading from './Heading';
import Image from 'next/image';

const CategoryCards = async ({ category }: any) => {
	return (
		<Container
			key={category.sys.id}
			className='flex-col basis-3/12  text-center mx-auto'>
			<Container>
				<Container className='w-72 h-64'>
					{category.fields.categoryPicture && (
						<Image
							src={`https:${category.fields.categoryPicture.fields.file.url}`}
							key={category.fields.categoryPicture.sys.id}
							width={
								category.fields.categoryPicture.fields.file.details.image.width
							}
							height={
								category.fields.categoryPicture.fields.file.details.image.height
							}
							alt={`${category.fields.categoryPicture.fields.title}`}
							className='w-full h-full mx-auto rounded shadow-lg m-3 object-cover object-center'
						/>
					)}
				</Container>
				<Container className='py-3'>
					<Link href={`/services/${category.fields.slug}`}>
						<Heading className='text-md' level='6'>
							{category.fields.categoryName}
						</Heading>
					</Link>
				</Container>
			</Container>
		</Container>
	);
};

export default CategoryCards;
