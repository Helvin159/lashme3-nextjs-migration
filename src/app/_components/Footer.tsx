'use server';
import Link from 'next/link';
import React from 'react';

const Footer = async () => {
	return (
		<footer className='w-full px-5'>
			<div className='container flex flex-col tablet:flex-row basis-1/2 justify-between mx-auto py-8'>
				<div className='flex flex-col justify-between'>
					<div className='container'>
						<h4>LashBoutique</h4>
						<p>Your trusted brow and lash expert since 2019.</p>
					</div>
					<div className='container'>
						<p>
							LashBoutique <span>&#9400;</span>
						</p>
					</div>
				</div>
				<div>
					<div className='container'>
						<h4>FAQ</h4>
					</div>
					<ul className='px-0 py-1.5 list-none'>
						<li>
							<Link href={'/booking'} className='whitespace-nowrap'>
								Book a Session
							</Link>
						</li>
						<li>
							<Link href={'/'} className='whitespace-nowrap'>
								Contact Us
							</Link>
						</li>
						<li>
							<Link href={'/'} className='whitespace-nowrap'>
								How-to Guides
							</Link>
						</li>
						<li>
							<Link href={'/'} className='whitespace-nowrap'>
								Find a store
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
