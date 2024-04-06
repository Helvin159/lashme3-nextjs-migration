import React from 'react';
import RecProductCard from './components/RecProductCard';
import Section from '../Section';
import { Products } from '@/utils/Types';

const RecommendedProducts = ({ products }: Products) => {
	return (
		<Section>
			<div className='container mx-auto py-4 px-5 tablet:px-0'>
				<h2 className='text-xl '>Reccomended Products</h2>
			</div>

			<div className='container flex flex-col tablet:flex-row basis-1/5 w-full mx-auto px-0 justify-evenly'>
				{products.slice(0, 5).map((i, k) => (
					<RecProductCard
						id={i.id}
						image={i.image}
						name={i.name}
						purpose={i.purpose}
						price={i.price}
						key={k}
					/>
				))}
			</div>
		</Section>
	);
};

export default RecommendedProducts;
