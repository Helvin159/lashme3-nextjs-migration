'use client';
import { useMenuCtx } from '@/app/_context/MenuContext';
import MenuHandling from '@/app/_utils/MenuHandling';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const MobileMenu = ({ businessDetails }: any) => {
	const { isOpen, setIsOpen } = useMenuCtx();
	// *************
	// Use Menu Hadnling Class to
	// access handleMobileClose function
	const menuHandling = new MenuHandling(isOpen, setIsOpen);

	const router = useRouter();

	return (
		<header
			className={`absolute top-0 left-0 right-0 bottom-0 block bg-white-light backdrop-blur ${
				isOpen ? 'block' : 'hidden'
			} z-10`}>
			<div className='flex flex-col tablet:flex-row justify-between py-7 px-14'>
				<div className='flex mx-auto tablet:mx-0'>
					<div className='mx-auto text-2xl tablet:mr-14 '>
						{businessDetails && (
							<Image
								className='max-w-14 rounded-xl shadow'
								src={`https://${businessDetails.fields.logo.fields.file.url}`}
								alt={businessDetails?.fields?.businessName}
								width={
									businessDetails.fields.logo.fields.file.details.image.width
								}
								height={
									businessDetails.fields.logo.fields.file.details.image.height
								}
							/>
						)}
					</div>
				</div>
			</div>
			<nav>
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
							<button
								onClick={() => {
									router.push('/');

									setTimeout(
										() => menuHandling.handleMobileClose(isOpen, setIsOpen),
										100
									);
								}}
								className='poppins-semibold text-5xl'
								// href='/'
							>
								Home
							</button>
						</li>
						<li className='block py-5'>
							<button
								className='poppins-semibold text-5xl'
								// href='/booking'
								onClick={() => {
									router.push('/booking');
									setTimeout(
										() => menuHandling.handleMobileClose(isOpen, setIsOpen),
										100
									);
								}}>
								Booking
							</button>
						</li>
						<li className='block py-5'>
							<button
								className='poppins-semibold text-5xl'
								// href='/services'
								onClick={() => {
									router.push('/services');
									setTimeout(
										() => menuHandling.handleMobileClose(isOpen, setIsOpen),
										500
									);
								}}>
								Services
							</button>
						</li>
						<li className='block py-5'>
							<button
								className='poppins-semibold text-5xl'
								// href='/products'
								onClick={() => {
									router.push('/products');
									setTimeout(
										() => menuHandling.handleMobileClose(isOpen, setIsOpen),
										100
									);
								}}>
								Products
							</button>
						</li>
					</ul>
				</nav>
			</nav>
		</header>
	);
};

export default MobileMenu;
