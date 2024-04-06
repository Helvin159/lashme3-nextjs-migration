import React from 'react';
import { Product } from '@/utils/Types';
import Image from 'next/image';
import Link from 'next/link';

const RecProductCard = ({ id, image, name, purpose, price }: Product) => {
	return (
		<div className='container px-2 mb-6 tablet:mb-0'>
			<div className='container rounded-xl p-3 bg-light-gray'>
				<div className='relative'>
					<Link href={`/products/${id}`}>
						<Image
							src={image}
							alt={name}
							className='object-cover	object-center w-full h-full mx-auto rounded-xl'
						/>
					</Link>
					<div className='absolute top-3 left-3 h-8 w-8 rounded-full bg-variant-one text-center'>
						<p className='absolute top-2/4 left-2/4 translate-y-n50 translate-x-n50 text-white'>
							4.9
						</p>
					</div>
				</div>
				<div className='mt-2 '>
					<Link href={`/products/${id}`}>
						<h3>{name}</h3>
					</Link>
					<Link href={`/products/${id}`}>
						<p>{purpose}</p>
					</Link>
					<Link href={`/products/${id}`}>
						<p>{price}</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RecProductCard;
