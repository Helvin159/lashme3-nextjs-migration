'use client';

import React, { useContext } from 'react';

import Button from './Button';
import { MenuContext } from '../context/MenuContext';

import menuBtn from '../assets/svg/icon-menu.svg';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
	const { isOpen, setIsOpen } = useContext(MenuContext);

	const handleMobileNav = () => {
		setIsOpen(!isOpen);
		document.body.style.overflow = 'hidden';
	};

	return (
		<header className='relative w-full px-5'>
			<div className='flex flex-col tablet:flex-row justify-between py-7 px-14'>
				<div className='flex mx-auto tablet:mx-0'>
					<div className='mx-auto text-2xl tablet:mr-14 '>Logo</div>
					<div className='hidden tablet:block tablet:flex'>
						<ul className='p-0 py-1.5 list-none'>
							<li className='inline-block mr-8'>
								<Link href='/'>Home</Link>
							</li>
							<li className='inline-block mr-8'>
								<Link href='/book'>Book</Link>
							</li>
							<li className='inline-block mr-8'>
								<Link href='/'>Calendar</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='hidden tablet:flex'>
					<Button variant={'light'}>Book Now</Button>
					<Button variant={'pink'}>Login</Button>
				</div>
			</div>
			<div className='absolute right-6 top-6 tablet:hidden'>
				<button onClick={handleMobileNav}>
					<Image src={menuBtn} width={'40px'} alt='Menu button' />
				</button>
			</div>
		</header>
	);
};

export default Header;
