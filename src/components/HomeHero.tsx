'use server';
import React from 'react';

import Image from 'next/image';
import heroImg from '../assets/png/Image.png';

const HomeHero = async ({ headline, subHeadline }: any) => {
	return (
		<section className='w-full relative px-0 tablet:px-12'>
			<div className='container p-0 my-0 mx-auto'>
				<Image
					src={heroImg}
					className='w-full min-h-40 mx-auto rounded-4xl object-cover object-center'
					alt='hero'
				/>
			</div>
			<div className='bg-rgba-white-0.6 backdrop-blur-sm h-full absolute top-0 left-0 right-0 bottom-0 m-0'>
				<div className='absolute w-full tablet:w-6/12 left-1/2 top-1/2 translate-y-n50 translate-x-n50 text-center '>
					<h1 className='text-3xl tablet:text-5xl'>{headline}</h1>
					<p className='tablet:text-xl'>{subHeadline}</p>
				</div>
			</div>
		</section>
	);
};

export default HomeHero;
