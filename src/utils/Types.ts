import { StaticImageData } from 'next/image';
import React, { Dispatch, MouseEvent, SetStateAction } from 'react';

// ************
export interface Params {
	params: {
		slug: string;
		service?: string;
		product?: string;
		date?: string;
	};
}

export interface Children {
	children: React.ReactNode;
}

export interface CalType {
	selectedService: string | null;
	selectedDate: string | Date | null | undefined;
}

// ***************
// Component Utility Types
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
export type MenuStateType = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export interface HeadingComponentType {
	level?: string;
	className?: string;
	children: React.ReactNode;
}

export type HeadingLevel = {
	'1': React.JSX.Element;
	'2': React.JSX.Element;
	'3': React.JSX.Element;
	'4': React.JSX.Element;
	'5': React.JSX.Element;
	'6': React.JSX.Element;
};

// *************
// Product types
// *************
export interface Products {
	products: {
		id: string;
		name: string;
		slug: string;
		purpose: string;
		price: string;
		image: string | StaticImageData;
	}[];
}

export interface ProductType {
	id: string;
	name: string;
	slug: string;
	purpose: string;
	price: string;
	image: string | StaticImageData;
}

export interface Treatments {
	treatments: {
		id: string;
		name: string;
		slug: string;
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
export interface TreatmentType {
	id: string;
	name: string;
	slug: string;
	one: StaticImageData | string;
	two: StaticImageData | string;
	three: StaticImageData | string;
}

// ************
// Button Types
// ************
export interface ButtonType {
	children?: React.ReactNode;
	variant: string;
}

export interface LinkButtonType {
	children?: React.ReactNode;
	variant: string;
	url: string;
}

export interface ButtonVariants {
	pink: string;
	light: string;
}
