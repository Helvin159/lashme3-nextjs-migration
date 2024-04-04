'use client';

import React, { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';
import Link from 'next/link';

const MobileMenu = () => {
	const { isOpen, setIsOpen } = useContext(MenuContext);

	const handleClose = () => {
		setIsOpen(!isOpen);
		document.body.style.overflow = 'auto';
	};

	return (
		<div
			className={`absolute top-0 left-0 right-0 bottom-0 block bg-white-light backdrop-blur ${
				!isOpen ? 'block' : 'hidden'
			} z-10`}>
			<div className='absolute right-10 top-8'>
				<button onClick={handleClose}>
					<span className='text-6xl'>&#x2715;</span>
				</button>
			</div>
			<nav className='absolute top-2/4 left-2/4 translate-y-n60 translate-x-n50'>
				<ul className='p-0list-none text-center'>
					<li className='block py-5'>
						<Link className='poppins-semibold text-5xl' href='/'>
							Home
						</Link>
					</li>
					<li className='block py-5'>
						<Link className='poppins-semibold text-5xl' href='/'>
							Book
						</Link>
					</li>
					<li className='block py-5'>
						<Link className='poppins-semibold text-5xl' href='/'>
							Calendar
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default MobileMenu;
