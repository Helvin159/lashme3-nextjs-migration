'use client';
import { createContext, useState } from 'react';

export const MenuContext = createContext({
	isOpen: Boolean,
	setIsOpen: () => null,
});

export const MenuProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const value = {
		isOpen,
		setIsOpen,
	};

	return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
