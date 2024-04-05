import { StaticImageData } from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

export interface MenuProviderProps {
	children?: React.ReactNode;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	value: { isOpen: boolean; setIsOpen: Function };
}

export interface StateProps {
	state: any;
	setState: Dispatch<SetStateAction<boolean>>;
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
		one: StaticImageData | string;
		two: StaticImageData | string;
		three: StaticImageData | string;
	}[];
}

export interface Treatment {
	treatment: {
		id: string;
		one: StaticImageData | string;
		two: StaticImageData | string;
		three: StaticImageData | string;
	};
}
