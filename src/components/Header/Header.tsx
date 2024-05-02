'use client';
import React from 'react';
import { useMenuCtx } from '@/context/MenuContext';
import MenuHandling from '@/utils/MenuHandling';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './components/MobileMenu';

// Hamburger image
import menuBtn from '../../assets/svg/icon-menu.svg';
import NavLink from '../NavLink';

const Header = () => {
	// *************
	// Menu Context
	const { isOpen, setIsOpen } = useMenuCtx();

	// *************
	// Use Menu Hadnling Class to
	// access handleMobileClose function
	const menuHandling = new MenuHandling(isOpen, setIsOpen);

	return (
		<>
			<header className='relative w-full px-5'>
				<div className='flex flex-col tablet:flex-row justify-between py-7 px-14'>
					<div className='flex mx-auto tablet:mx-0'>
						<div className='mx-auto text-2xl tablet:mr-14 '>
							<Link href='/'>Logo</Link>
						</div>
						<div className='hidden tablet:block tablet:flex'>
							<ul className='p-0 py-1.5 list-none'>
								<li className='inline-block mr-8'>
									<Link href='/'>Home</Link>
								</li>
								<li className='inline-block mr-8'>
									<Link href='/services'>Services</Link>
								</li>
								<li className='inline-block mr-8'>
									<Link href='/products'>Products</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='hidden tablet:flex'>
						<NavLink variant={'light'} url='/booking'>
							Book Now
						</NavLink>
						<NavLink variant={'pink'} url='/booking'>
							Login
						</NavLink>
					</div>
				</div>
				<div className='absolute right-6 top-6 tablet:hidden'>
					<button
						aria-label='Menu Button'
						onClick={() => {
							menuHandling.handleMobileNav(isOpen, setIsOpen);
						}}>
						<Image src={menuBtn} width={40} alt='Menu button' />
					</button>
				</div>
			</header>
			<MobileMenu />
		</>
	);
};
export default Header;
