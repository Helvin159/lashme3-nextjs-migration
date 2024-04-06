import Image from 'next/image';
import React from 'react';

import { Treatment } from '@/utils/Types';
import Link from 'next/link';

const PopularTreatmentsCard = ({ treatment }: Treatment) => {
	return (
		<div className='flex grow shrink mb-2 px-4 tablet:mb-0 tablet:px-0'>
			<div className='flex pr-0 tablet:pr-1'>
				<Link href={`/services/${treatment.id}`}>
					<Image
						src={treatment.one}
						alt=''
						className='object-cover object-center w-full rounded-xl'
					/>
				</Link>
			</div>
			<div className='flex flex-col p-0 justify-between pl-1 tablet:pr-2'>
				<div className='h-3/6 w-full self-start pb-1'>
					<Link href={`/services/${treatment.id}`}>
						<Image
							src={treatment.two}
							className='object-cover object-center w-full h-full rounded-xl'
							alt=''
						/>
					</Link>
				</div>
				<div className='h-3/6 w-full self-end pt-1'>
					<Link href={`/services/${treatment.id}`}>
						<Image
							src={treatment.three}
							className='object-cover object-center w-full h-full rounded-xl'
							alt=''
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PopularTreatmentsCard;
