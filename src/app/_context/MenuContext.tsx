'use client';
import {
	SetStateAction,
	createContext,
	Dispatch,
	useState,
	useContext,
} from 'react';

type MenuCtx = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const menuObj = {
	isOpen: false,
	setIsOpen: () => null,
};

const MenuContext = createContext<MenuCtx>(menuObj);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState<any>(false);

	const value = { isOpen, setIsOpen };
	return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export const useMenuCtx = () => useContext(MenuContext);
