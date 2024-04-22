'use client';
import MenuHandling from '@/utils/MenuHandling';
import Link from 'next/link';
import { MenuStateType } from '@/utils/Types';

const MobileMenu = ({ isOpen, setIsOpen }: MenuStateType) => {
	// *************
	// Use Menu Hadnling Class to
	// access handleMobileClose function
	const menuHandling = new MenuHandling(isOpen, setIsOpen);

	return (
		<nav
			className={`absolute top-0 left-0 right-0 bottom-0 block bg-white-light backdrop-blur ${
				isOpen ? 'block' : 'hidden'
			} z-10`}>
			<div className='absolute right-10 top-8'>
				<button
					onClick={() => {
						menuHandling.handleMobileClose(isOpen, setIsOpen);
					}}>
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
						<Link className='poppins-semibold text-5xl' href='/booking'>
							Booking
						</Link>
					</li>
					<li className='block py-5'>
						<Link className='poppins-semibold text-5xl' href='/services'>
							Services
						</Link>
					</li>
					<li className='block py-5'>
						<Link className='poppins-semibold text-5xl' href='/products'>
							Products
						</Link>
					</li>
				</ul>
			</nav>
		</nav>
	);
};

export default MobileMenu;
