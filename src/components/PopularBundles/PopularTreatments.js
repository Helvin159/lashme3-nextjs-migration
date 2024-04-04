import React from 'react';
import PopularTreatmentsCard from './components/PopularTreatmentsCard';
import Section from '../Section';

const PopularTreatments = ({ popularTreatments }) => {
	return (
		<Section>
			<div className='container mx-auto py-4 px-5 tablet:px-0'>
				<h2 className='text-xl'>Popular Treatments</h2>
			</div>
			<div className='container flex flex-col tablet:flex-row basis-1/2 justify-evenly mx-auto'>
				{popularTreatments.map((i, k) => {
					return <PopularTreatmentsCard treatment={i} key={k} />;
				})}
			</div>
		</Section>
	);
};

export default PopularTreatments;
