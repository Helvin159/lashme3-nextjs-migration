'use client';
import Container from '@/components/Container';
import React from 'react';

const CustomerInfoForm = () => {
	return (
		<Container className='hidden'>
			<form>
				<label htmlFor='customerFName'>First Name</label>
				<input
					type='text'
					id='customerFName'
					required
					placeholder='First Name'
				/>

				<label htmlFor='customerLName'>Last Name</label>
				<input
					type='text'
					id='customerLName'
					required
					placeholder='Last Name'
				/>

				<label htmlFor='customerTel'>Phone Number</label>
				<input
					type='tel'
					id='customerTel'
					required
					placeholder='Phone number'
				/>

				<label htmlFor='customerEmail'>Email</label>
				<input type='email' id='customerEmail' required placeholder='Email' />
			</form>
		</Container>
	);
};

export default CustomerInfoForm;
