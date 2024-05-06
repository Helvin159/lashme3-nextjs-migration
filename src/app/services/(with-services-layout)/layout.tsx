import React from 'react';
import Section from '../../_components/Section';
import PopularTreatments from '../../_components/PopularBundles/PopularTreatments';
import ApiHandling from '../../_utils/ApiHandling';

const ServicesLayout = async ({ children }: { children: React.ReactNode }) => {
	const apiHandling = new ApiHandling();
	const { items: services } = await apiHandling.getContentfulEntries('service');

	return (
		<>
			{children}
			<Section>
				<PopularTreatments services={services} />
			</Section>
		</>
	);
};

export default ServicesLayout;
