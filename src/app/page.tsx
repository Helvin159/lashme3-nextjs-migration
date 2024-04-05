import HomeHero from '../components/HomeHero';
import PopularTreatments from '../components/PopularBundles/PopularTreatments';
import RecommendedProducts from '../components/RecommendedProducts/RecommendedProducts';
import BookingWidget from '../components/BookingWidget/BookingWidget';
import StopSignUpCTA from '../components/StopSignUpCTA';

import { tempPopTreats, mockData } from '@/utils/mockData';

const Home = () => {
	return (
		<>
			<HomeHero />
			<BookingWidget />
			<PopularTreatments treatments={tempPopTreats} />
			<RecommendedProducts products={mockData} />
			<StopSignUpCTA />
		</>
	);
};

export default Home;
