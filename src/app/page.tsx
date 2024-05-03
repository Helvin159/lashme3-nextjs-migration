'use server';
import { NextPage } from 'next';
import ApiHandling from '@/app/_utils/ApiHandling';
import HomeHero from './_components/HomeHero';
import PopularTreatments from './_components/PopularBundles/PopularTreatments';
import RecommendedProducts from './_components/RecommendedProducts/RecommendedProducts';
import BookingWidget from './_components/BookingWidget/BookingWidget';
import StopSignUpCTA from './_components/StopSignUpCTA';

import { mockData } from '@/app/_utils/mockData';

const Home: NextPage = async () => {
	const apiHandling = new ApiHandling();

	const businessDetails = await apiHandling.getContentfulEntry(
		process.env.REACT_APP_CONTENTFUL_BUSINESS_DETAILS
	);

	const { items: services } = await apiHandling.getContentfulEntries('service');
	const { items: categories } = await apiHandling.getContentfulEntries(
		'category'
	);

	return (
		<>
			<HomeHero
				headline={businessDetails.fields.businessHeadline}
				subHeadline={businessDetails.fields.businessSubHeadline}
			/>

			<BookingWidget categories={categories} />
			<PopularTreatments services={services} />
			<RecommendedProducts products={mockData} />
			<StopSignUpCTA />
		</>
	);
};

export default Home;
