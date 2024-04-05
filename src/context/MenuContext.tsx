'use client';
import { createContext, useEffect, useState } from 'react';

import { Children, MenuCtxProps } from '@/utils/Types';

export const MenuContext = createContext<MenuCtxProps>({
	isOpen: false,
	setIsOpen: () => null,
});

export const MenuProvider = ({ children }: Children) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const value = {
		isOpen,
		setIsOpen,
	};

	useEffect(() => {
		setIsOpen(!isOpen);
	}, [setIsOpen, isOpen]);

	return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
