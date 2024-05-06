import React from 'react';
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import MobileMenuBtn from './components/MobileMenuBtn';
import ApiHandling from '@/app/_utils/ApiHandling';

const Header = async () => {
	const apiHandling = new ApiHandling();
	const businessDetails = await apiHandling.getContentfulEntry(
		process.env.REACT_APP_CONTENTFUL_BUSINESS_DETAILS
	);
	return (
		<>
			<header className='relative w-full px-5'>
				<Menu businessDetails={businessDetails} />
				<MobileMenuBtn />
			</header>
			<MobileMenu businessDetails={businessDetails} />
		</>
	);
};
export default Header;
