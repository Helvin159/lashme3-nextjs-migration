import Image from 'next/image';
import HomeHero from '../components/HomeHero';
import PopularTreatments from '../components/PopularBundles/PopularTreatments';
import RecommendedProducts from '../components/RecommendedProducts/RecommendedProducts';
import BookingWidget from '../components/BookingWidget/BookingWidget';
import StopSignUpCTA from '../components/StopSignUpCTA';

import prod1 from '../assets/png/image-7.png';
import prod2 from '../assets/png/image-8.png';
import prod3 from '../assets/png/image-9.png';
import prod4 from '../assets/png/image-10.png';
import prod5 from '../assets/png/image-11.png';

import imgOne from '../assets/png/image-1.png';
import imgTwo from '../assets/png/image-2.png';
import imgThree from '../assets/png/image-3.png';
import imgFour from '../assets/png/image-4.png';
import imgFive from '../assets/png/image-5.png';
import imgSix from '../assets/png/image-6.png';

export default function Home() {
	const mockData = [
		{
			name: 'Lash Serum +',
			purpose: 'Promote Lash Growth',
			price: '30.99',
			image: prod1,
		},
		{
			name: 'Lash Serum +',
			purpose: 'Promote Lash Growth',
			price: '30.99',
			image: prod2,
		},
		{
			name: 'Lash Serum +',
			purpose: 'Promote Lash Growth',
			price: '30.99',
			image: prod3,
		},
		{
			name: 'Lash Serum +',
			purpose: 'Promote Lash Growth',
			price: '30.99',
			image: prod4,
		},
		{
			name: 'Lash Serum +',
			purpose: 'Promote Lash Growth',
			price: '30.99',
			image: prod5,
		},
		{
			name: 'Lash Serum +',
			purpose: 'Promote Lash Growth',
			price: '30.99',
			image: prod5,
		},
	];

	const tempPopTreats = [
		{
			one: imgOne,
			two: imgTwo,
			three: imgThree,
		},
		{
			one: imgFour,
			two: imgFive,
			three: imgSix,
		},
	];

	return (
		<>
			<HomeHero />
			<BookingWidget />
			<PopularTreatments popularTreatments={tempPopTreats} />
			<RecommendedProducts products={mockData} />
			<StopSignUpCTA />
		</>
	);
}
