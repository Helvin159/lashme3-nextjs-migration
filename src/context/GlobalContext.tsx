'use client';
import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { Children, Products } from '@/utils/Types';
import { mockData, tempPopTreats } from '@/utils/mockData';

interface GContext {
	products: Products;
	setProducts: Dispatch<SetStateAction<Products>>;
}

export const GContext = createContext<GContext>({
	products: { products: mockData },
	setProducts: () => {},
});

export const GProvider = ({ children }: Children) => {
	const [products, setProducts] = useState<Products>({ products: mockData });
	const [treatments, setTreatments] = useState<any>({
		treatments: tempPopTreats,
	});

	const value = {
		products,
		setProducts,
		treatments,
		setTreatments,
	};

	return <GContext.Provider value={value}>{children}</GContext.Provider>;
};
