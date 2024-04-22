import React from 'react';
import PopularTreatmentsCard from './components/PopularTreatmentsCard';
import Section from '../Section';
import Heading from '../Heading';

const PopularTreatments = ({ services }: any) => {
	return (
		<Section>
			<div className='container mx-auto py-4 px-5 tablet:px-0'>
				<Heading level='4'>Popular Services</Heading>
			</div>
			<div className='container flex flex-col tablet:flex-row items-center justify-evenly mx-auto'>
				{services.map((service: any) => {
					if (service?.fields?.featured) {
						return (
							<PopularTreatmentsCard service={service} key={service.sys.id} />
						);
					}
				})}
			</div>
		</Section>
	);
};

export default PopularTreatments;
