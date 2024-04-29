import Image from 'next/image';
import React, { Suspense } from 'react';
import Link from 'next/link';
import LoadingImage from '@/components/LoadingImage';

const PopularTreatmentsCard = ({ service }: any) => {
	return (
		<div className='flex self-start w-full tablet:w-6/12 mb-2 tablet:mb-0 px-4 tablet:px-0'>
			<div className='flex p-0 h-full w-3/6 tablet:pr-1 self-start'>
				<Suspense fallback={<LoadingImage />}>
					<Link
						href={`/services/${service.fields.category.fields.slug}/${service.fields.slug}`}>
						<Image
							src={`https:${service.fields.samplePictures[0].fields.file.url}`}
							width={
								service.fields.samplePictures[0].fields.file.details.image.width
							}
							height={
								service.fields.samplePictures[0].fields.file.details.image
									.height
							}
							alt=''
							className='w-96 h-96 max-h-19rem rounded-xl object-cover object-center'
						/>
					</Link>
				</Suspense>
			</div>
			<div className='flex flex-col w-3/6 max-h-19rem p-0 justify-between pl-1 tablet:pr-2'>
				<div className=' flex h-3/6 w-full  self-start pb-1'>
					<Link
						href={`/services/${service.fields.category.fields.slug}/${service.fields.slug}`}>
						<Suspense fallback={<LoadingImage />}>
							<Image
								src={`https:${service.fields.samplePictures[1]?.fields.file.url}`}
								width={
									service.fields.samplePictures[1].fields.file.details.image
										.width
								}
								height={
									service.fields.samplePictures[1].fields.file.details.image
										.height
								}
								className='object-cover object-center h-full rounded-xl'
								alt=''
							/>
						</Suspense>
					</Link>
				</div>
				<div className=' flex h-3/6 w-full  self-end pt-1'>
					<Link
						href={`/services/${service.fields.category.fields.slug}/${service.fields.slug}`}>
						<Suspense fallback={<LoadingImage />}>
							<Image
								src={`https:${service.fields.samplePictures[2]?.fields.file.url}`}
								width={
									service.fields.samplePictures[2].fields.file.details.image
										.width
								}
								height={
									service.fields.samplePictures[2].fields.file.details.image
										.height
								}
								className='object-cover object-center h-full rounded-xl'
								alt=''
							/>
						</Suspense>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PopularTreatmentsCard;
