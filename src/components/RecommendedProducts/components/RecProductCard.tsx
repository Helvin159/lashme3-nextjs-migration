import { Product } from '@/utils/Types';
import Image from 'next/image';
import React from 'react';

const RecProductCard = ({ image, name, purpose, price }: Product) => {
	return (
		<div className='container px-2 mb-6 tablet:mb-0'>
			<div className='container rounded-xl p-3 bg-light-gray'>
				<div className='relative'>
					<Image
						src={image}
						alt={name}
						className='object-cover	object-center w-full h-full mx-auto rounded-xl'
					/>
					<div className='absolute top-3 left-3 h-8 w-8 rounded-full bg-variant-one text-center'>
						<p className='absolute top-2/4 left-2/4 translate-y-n50 translate-x-n50 text-white'>
							4.9
						</p>
					</div>
				</div>
				<div className='mt-2 '>
					<h3>{name}</h3>
					<p>{purpose}</p>
					<p>{price}</p>
				</div>
			</div>
		</div>
	);
};

export default RecProductCard;
