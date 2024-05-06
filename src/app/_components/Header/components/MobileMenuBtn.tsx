'use client';
import MenuHandling from '@/app/_utils/MenuHandling';
import Image from 'next/image';
import React from 'react';
import menuBtn from '../../../_assets/svg/icon-menu.svg';
import { useMenuCtx } from '@/app/_context/MenuContext';

const MobileMenuBtn = () => {
	const { isOpen, setIsOpen } = useMenuCtx();
	const menuHandling = new MenuHandling(isOpen, setIsOpen);
	return (
		<div className='absolute right-6 top-6 tablet:hidden'>
			<button
				aria-label='Menu Button'
				onClick={() => {
					menuHandling.handleMobileNav(isOpen, setIsOpen);
				}}>
				<Image src={menuBtn} width={40} alt='Menu button' />
			</button>
		</div>
	);
};

export default MobileMenuBtn;
