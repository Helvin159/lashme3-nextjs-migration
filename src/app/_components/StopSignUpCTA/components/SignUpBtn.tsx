'use client';
import React from 'react';
import Button from '../../Button';
import { useRouter } from 'next/navigation';

const SignUpBtn = () => {
	const router = useRouter();
	return (
		<div className='text-center px-2 pt-6 laptop:pt-0 shrink'>
			<div className='inline-block align-middle tablet:py-2'>
				<Button
					variant={'light'}
					onClick={() => {
						router.push('/login');
					}}>
					Sign up
				</Button>
			</div>
		</div>
	);
};

export default SignUpBtn;
