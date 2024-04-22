import React from 'react';
import PopularTreatmentsCard from './components/PopularTreatmentsCard';
import Section from '../Section';
import Heading from '../Heading';

const PopularTreatments = ({ services, treatments }: any) => {
	return (
		<Section>
			<div className='container mx-auto py-4 px-5 tablet:px-0'>
				<Heading level='4'>Popular Services</Heading>
			</div>
			<div className='container flex flex-col tablet:flex-row items-center justify-evenly mx-auto'>
				{services?.slice(0, 2).map((service: any) => {
					console.log(service);
					// if (service.fields.featured === true)
					// 	<PopularTreatmentsCard service={service} key={Math.random()} />;

					return (
						<PopularTreatmentsCard service={service} key={Math.random()} />
					);
				})}
			</div>
		</Section>
	);
};

export default PopularTreatments;
