import React, { Dispatch, SetStateAction } from 'react';
import { StaticImageData } from 'next/image';

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
export type ContainerType = {
	children?: React.ReactNode;
	className?: string;
};

export type SectionType = {
	children?: React.ReactNode;
	className?: string;
};

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

export type SelectedOptionState = {
	id: string;
	name: string;
};

// ************
// Button Types
// ************
export interface ButtonType {
	children?: React.ReactNode;
	variant: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
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

// Components

export interface CustomerInfoFormType {
	selectedTime: string;
	setSelectedTime: Dispatch<SetStateAction<string | null>>;
	selectedCat: SelectedOptionState | null;
	selectedServ: SelectedOptionState | null;
	selectedDate: string;
	isSubmitted: Boolean | null;
	setIsSubmitted: Dispatch<SetStateAction<Boolean | null>>;
}
