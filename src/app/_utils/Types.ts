import React, { Dispatch, Key, SetStateAction } from 'react';
import { StaticImageData } from 'next/image';

// ************
export interface Params {
	params: {
		slug: string;
		service?: string;
		product?: string;
		date?: string;
		apptId?: string;
		clientId?: string;
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

export type RowContainerType = {
	children?: React.ReactNode;
	className?: string;
};
export type FlexColType = {
	children?: React.ReactNode;
	className?: string;
	size?: number;
};

export type ColSizes = {
	1: string,
	2: string,
	3: string,
	4: string,
	5: string,
	6: string,
	7: string,
	8: string,
	9: string,
	10: string,
	11: string,
	12: string,
}

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
	price?: number;
	hours?: number;
	minutes?: number;
};

// ************
// Button Types
// ************
export interface ButtonType {
	children?: React.ReactNode;
	variant: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	className?: string;
	url?: string;
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
	selectedDate: string;
}
