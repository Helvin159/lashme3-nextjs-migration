'use client';
import React from 'react';
import { useMenuCtx } from '@/app/_context/MenuContext';
import MenuHandling from '@/app/_utils/MenuHandling';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './components/MobileMenu';

// Hamburger image
import menuBtn from '../../_assets/svg/icon-menu.svg';
import NavLink from '../NavLink';
import FirebaseApi from '@/app/_utils/FirebaseApi';
import Button from '../Button';
import { useUserContext } from '@/app/_context/UserContext';

const Header = () => {
	// *************
	// Menu Context
	const { isOpen, setIsOpen } = useMenuCtx();
	const { user, setUser } = useUserContext();

	// *************
	// New Firebase Api Class Instance
	const firebaseApi = new FirebaseApi();

	// *************
	// Use Menu Hadnling Class to
	// access handleMobileClose function
	const menuHandling = new MenuHandling(isOpen, setIsOpen);

	const loginBtn = async () => await firebaseApi.signInWPopup(setUser);
	const logoutBtn = async () => await firebaseApi.signoutUser(setUser);

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
						<Button
							variant={'pink'}
							className={`${user ? 'hidden' : 'block'}`}
							onClick={loginBtn}>
							Login
						</Button>
						<Button
							variant={'pink'}
							className={`${user ? 'block' : 'hidden'}`}
							onClick={logoutBtn}>
							Logout
						</Button>
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
