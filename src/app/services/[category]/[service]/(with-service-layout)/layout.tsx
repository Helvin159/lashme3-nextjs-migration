import React from 'react';
import Section from '../../../../_components/Section';
import PopularTreatments from '../../../../_components/PopularBundles/PopularTreatments';
import ApiHandling from '../../../../_utils/ApiHandling';
import RecommendedProducts from '@/app/_components/RecommendedProducts/RecommendedProducts';
import { mockData } from '@/app/_utils/mockData';

const ServicesLayout = async ({ children }: { children: React.ReactNode }) => {
	const apiHandling = new ApiHandling();
	const { items: services } = await apiHandling.getContentfulEntries('service');

	return (
		<>
			{children}
			<Section>
				<RecommendedProducts products={mockData} />
			</Section>
		</>
	);
};

export default ServicesLayout;
