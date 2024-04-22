import { NextPage } from 'next';
import ApiHandling from '@/utils/ApiHandling';
import HomeHero from '../components/HomeHero';
import PopularTreatments from '../components/PopularBundles/PopularTreatments';
import RecommendedProducts from '../components/RecommendedProducts/RecommendedProducts';
import BookingWidget from '../components/BookingWidget/BookingWidget';
import StopSignUpCTA from '../components/StopSignUpCTA';

import { mockData } from '@/utils/mockData';

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
