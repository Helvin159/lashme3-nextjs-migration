import React from 'react';
import PopularTreatmentsCard from './components/PopularTreatmentsCard';
import Section from '../Section';
import { Treatments } from '@/utils/Types';

const PopularTreatments = ({ treatments }: Treatments) => {
	return (
		<Section>
			<div className='container mx-auto py-4 px-5 tablet:px-0'>
				<h2 className='text-xl'>Popular Treatments</h2>
			</div>
			<div className='container flex flex-col tablet:flex-row items-center justify-evenly mx-auto'>
				{treatments.map((treatment) => {
					return (
						<PopularTreatmentsCard treatment={treatment} key={Math.random()} />
					);
				})}
			</div>
		</Section>
	);
};

export default PopularTreatments;
