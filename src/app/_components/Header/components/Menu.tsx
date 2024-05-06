'use client';
import Link from 'next/link';
import React from 'react';
import Button from '../../Button';
import { useUserContext } from '@/app/_context/UserContext';
import FirebaseApi from '@/app/_utils/FirebaseApi';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Menu = ({ businessDetails }: any) => {
	const { user, setUser } = useUserContext();

	const path = usePathname();

	// *************
	// New Firebase Api Class Instance
	const firebaseApi = new FirebaseApi();

	// *************
	// Use Menu Hadnling Class to
	// access handleMobileClose function
	const loginBtn = async () => await firebaseApi.signInWPopup(setUser);
	const logoutBtn = async () => await firebaseApi.signoutUser(setUser);
	return (
		<div className='flex flex-col tablet:flex-row justify-between py-7 px-14'>
			<div className='flex mx-auto tablet:mx-0'>
				<div className='mx-auto text-2xl tablet:mr-14 '>
					<Link href='/'>
						{businessDetails?.fields?.logo && (
							<Image
								className='max-w-14 rounded-xl shadow'
								src={`https://${businessDetails.fields.logo.fields.file.url}`}
								alt={businessDetails?.fields?.logo.title}
								width={
									businessDetails.fields.logo.fields.file.details.image.width
								}
								height={
									businessDetails.fields.logo.fields.file.details.image.height
								}
							/>
						)}
					</Link>
				</div>
				<div className='hidden tablet:block tablet:flex justify-center items-center'>
					<ul className='p-0 py-1.5 list-none'>
						<li className='inline-block mr-8'>
							<Link
								href='/'
								className={`${
									path === '/' && 'text-variant-one font-semibold'
								}`}>
								Home
							</Link>
						</li>
						<li className='inline-block mr-8'>
							<Link
								href='/services'
								className={`${
									path === '/services' && 'text-variant-one font-semibold'
								}`}>
								Services
							</Link>
						</li>
						<li className='inline-block mr-8'>
							<Link
								href='/products'
								className={`${
									path === '/products' && 'text-variant-one font-semibold'
								}`}>
								Products
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='hidden tablet:flex'>
				<Button variant={'light'} url='/booking'>
					Book Now
				</Button>
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
	);
};

export default Menu;
