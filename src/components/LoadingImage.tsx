import Image from 'next/image';
import React from 'react';
import pic from '../assets/png/Image.png';

const LoadingImage = () => {
	return <Image src={pic} className='w-96 h-96' alt='loading pic' />;
};

export default LoadingImage;
