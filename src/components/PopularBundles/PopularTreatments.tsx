import React from 'react';
import PopularTreatmentsCard from './components/PopularTreatmentsCard';
import Section from '../Section';

const PopularTreatments = ({ services, treatments }: any) => {
	return (
		<Section>
			<div className='container mx-auto py-4 px-5 tablet:px-0'>
				<h2 className='text-xl'>Popular Treatments</h2>
			</div>
			<div className='container flex flex-col tablet:flex-row items-center justify-evenly mx-auto'>
				{services?.slice(0, 2).map((service: any) => {
					return (
						<PopularTreatmentsCard service={service} key={Math.random()} />
					);
				})}
			</div>
		</Section>
	);
};

export default PopularTreatments;
