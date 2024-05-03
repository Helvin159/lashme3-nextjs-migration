import React from 'react';
import Section from './Section';

import stopHand from '../_assets/svg/icon-hand.svg';
import Button from './Button';
import Image from 'next/image';

const StopSignUpCTA = () => {
	return (
		<Section>
			<div className='container bg-variant-two-light py-8 px-0 rounded-lg mx-auto'>
				<div className='flex flex-col laptop:flex-row w-full basis-1/2 justify-between mx-auto'>
					<div className='flex-row shrink text-center laptop:text-left'>
						<div className='inline-block align-middle px-2 py-4 laptop:py-0'>
							<Image
								src={stopHand}
								alt='Stop hand'
								className='inline-block w-14 max-w-full '
							/>
						</div>
						<div className='inline-block align-middle px-10 laptop:px-0'>
							<h4>Exclusive deals for our loay customers</h4>
							<p className='w-full tablet:max-w-2xl'>
								Join our VIP Club to receive special offers and discounts on
								lash and brow services, and be the first to know about new
								products!
							</p>
						</div>
					</div>
					<div className='text-center px-2 pt-6 laptop:pt-0 shrink'>
						<div className='inline-block align-middle tablet:py-2'>
							<Button variant={'light'}>Sign up</Button>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default StopSignUpCTA;
