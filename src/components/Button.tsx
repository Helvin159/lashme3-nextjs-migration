import React from 'react';
import { ButtonType, ButtonVariants } from '@/utils/Types';

const Button = ({ children, variant, onClick }: ButtonType) => {
	// ************************************
	// Button variant object.
	// Containts all necessary classes
	// for each button variant, then called
	// with bracket notation at the return.
	// ************************************
	const variants: ButtonVariants = {
		pink: 'transition ease-in delay-80 bg-variant-one border-solid border-2 border-variant-one px-8 py-2 rounded-lg text-white hover:bg-white hover:border-black hover:text-black',
		light:
			'transition ease-in delay-80 border-solid border-2 border-black px-8 py-2 rounded-lg mr-2 hover:bg-variant-one hover:border-variant-one hover:text-white',
	};

	return (
		<button
			onClick={onClick}
			aria-label='Button'
			className={`${
				variant
					? variants[variant as keyof typeof variants]
					: variants['light' as keyof typeof variants]
			}`}>
			{children}
		</button>
	);
};

export default Button;
