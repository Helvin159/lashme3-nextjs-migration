'use client';
import { Dispatch, SetStateAction } from 'react';

class MenuHandling {
	state: boolean;
	setState: Dispatch<SetStateAction<boolean>>;

	constructor(state: boolean, setState: Dispatch<SetStateAction<boolean>>) {
		this.state = state;
		this.setState = setState;
	}

	handleMobileNav = (
		state: boolean,
		setState: Dispatch<SetStateAction<boolean>>
	) => {
		setState(!state);
		document.body.style.overflow = 'hidden';
	};

	handleMobileClose = (
		state: boolean,
		setState: Dispatch<SetStateAction<boolean>>
	) => {
		setState(!state);
		document.body.style.overflow = 'auto';
	};
}

export default MenuHandling;
