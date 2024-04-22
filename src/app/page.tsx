import HomeHero from '../components/HomeHero';
import PopularTreatments from '../components/PopularBundles/PopularTreatments';
import RecommendedProducts from '../components/RecommendedProducts/RecommendedProducts';
import BookingWidget from '../components/BookingWidget/BookingWidget';
import StopSignUpCTA from '../components/StopSignUpCTA';

import { tempPopTreats, mockData } from '@/utils/mockData';
import { NextPage } from 'next';
import ApiHandling from '@/utils/ApiHandling';

const Home: NextPage = async () => {
	const apiHandling = new ApiHandling();
	const { items: services } = await apiHandling.getContentfulEntries('service');
	const { items: categories } = await apiHandling.getContentfulEntries(
		'category'
	);

	return (
		<>
			<HomeHero />
			<BookingWidget categories={categories} />
			<PopularTreatments services={services} treatments={tempPopTreats} />
			<RecommendedProducts products={mockData} />
			<StopSignUpCTA />
		</>
	);
};

export default Home;
