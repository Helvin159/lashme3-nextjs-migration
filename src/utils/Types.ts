import { StaticImageData } from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

// ************
export interface Params {
	params: {
		slug: string;
		service?: string;
		product?: string;
	};
}

export interface Children {
	children?: React.ReactNode;
}

// ***************
// Wrapper Types
// ***************
export interface ContainerType {
	children?: React.ReactNode;
	className?: string;
}

export interface SectionType {
	children?: React.ReactNode;
	className?: string;
}

// **********************
// State Management Types
// **********************
export interface MenuStateType {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// *************
// Product types
// *************
export interface Products {
	products: {
		id: string;
		name: string;
		purpose: string;
		price: string;
		image: string | StaticImageData;
	}[];
}

export interface Product {
	id: string;
	name: string;
	purpose: string;
	price: string;
	image: string | StaticImageData;
}

export interface Treatments {
	treatments: {
		id: string;
		name: string;
		one: StaticImageData | string;
		two: StaticImageData | string;
		three: StaticImageData | string;
	}[];
}

export interface Treatment {
	treatment: {
		id: string;
		name: string;
		one: StaticImageData | string;
		two: StaticImageData | string;
		three: StaticImageData | string;
	};
}

// ************
// Button Types
// ************
export interface ButtonType {
	children?: React.ReactNode;
	variant: string;
}

export interface ButtonVariants {
	pink: string;
	light: string;
}
