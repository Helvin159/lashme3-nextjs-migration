import React from 'react';

const Button = ({ children, variant }) => {
	if (variant === 'pink')
		return (
			<button className='transition ease-in delay-80 bg-variant-one border-solid border-2 border-variant-one px-8 py-2 rounded-lg text-white hover:bg-white hover:border-black hover:text-black'>
				{children}
			</button>
		);

	if (variant === 'light')
		return (
			<button className='transition ease-in delay-80 border-solid border-2 border-black px-8 py-2 rounded-lg mr-2 hover:bg-variant-one hover:border-variant-one hover:text-white'>
				{children}
			</button>
		);
};

export default Button;
