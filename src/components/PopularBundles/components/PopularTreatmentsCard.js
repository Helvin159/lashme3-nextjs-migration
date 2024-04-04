import Image from 'next/image';
import React from 'react';

const PopularTreatmentsCard = ({ treatment }) => {
	const { one, two, three } = treatment;

	return (
		<div className='flex mb-2 px-4 tablet:mb-0 tablet:px-0'>
			<div className='flex pr-0 tablet:pr-1'>
				<Image
					src={one}
					alt=''
					className='object-cover object-center w-full rounded-xl'
				/>
			</div>
			<div className='flex flex-col p-0 justify-between pl-1 tablet:pr-2'>
				<div className='h-3/6 w-full self-start pb-1'>
					<Image
						src={two}
						className='object-cover object-center w-full h-full rounded-xl'
						alt=''
					/>
				</div>
				<div className='h-3/6 w-full self-end pt-1'>
					<Image
						src={three}
						className='object-cover object-center w-full h-full rounded-xl'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
};

export default PopularTreatmentsCard;
