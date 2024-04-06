import { StaticImageData } from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

export interface MenuType {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

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

export interface ButtonType {
	children?: React.ReactNode;
	variant: string;
}

export interface MenuCtxProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface ContainerType {
	children?: React.ReactNode;
	className?: string;
}

export interface SectionType {
	children?: React.ReactNode;
	className?: string;
}

// Product types
export interface Products {
	products: {
		name: string;
		purpose: string;
		price: string;
		image: string | StaticImageData;
	}[];
}

export interface Product {
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
