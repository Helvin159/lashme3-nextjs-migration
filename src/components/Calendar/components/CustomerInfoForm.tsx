'use client';
import React, { useRef } from 'react';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import ApiHandling from '@/utils/ApiHandling';

const CustomerInfoForm = ({
	selectedTime,
	selectedCat,
	selectedServ,
	selectedDate,
}: any) => {
	const apiHandling = new ApiHandling();

	const date = new Date(selectedDate);

	const year = date.getFullYear();
	const month =
		date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
	const day = date.getDate() < 10 ? `0${date.getDate}` : date.getDate();

	const onSubmit = async (e: any) => {
		e.preventDefault();

		const name = `${e?.target[0].value.trim()} ${e?.target[1].value.trim()}`;
		const tel = `${e?.target[2].value.trim()}`;
		const email = `${e?.target[3].value.trim()}`;
		const date = `${year}-${month}-${day}`.trim();
		const slug = `${e?.target[0].value.trim()}-${e?.target[1].value.trim()}-${date.trim()}`;

		await apiHandling.createApptEntry(name, date, email, tel, slug);
	};

	return (
		<Container
			className={`${
				selectedTime !== null ? 'block' : 'hidden'
			} mx-auto w-11/12`}>
			<div className='w-full mx-auto text-center py-6'>
				<Heading level='3'>{selectedServ?.name}</Heading>
				<p>{selectedCat?.name}</p>
				<p>
					On {month}/{day}/{year} @ {selectedTime}
				</p>
			</div>
			<form onSubmit={onSubmit}>
				<Container className='flex flex-col justify-center items-center	'>
					<div className='py-2'>
						<label className='block text-lg' htmlFor='customerFName'>
							First Name
						</label>
						<input
							type='text'
							className='p-4 w-80 tablet:w-96 shadow-lg rounded'
							id='customerFName'
							required
							placeholder='First Name'
						/>
					</div>

					<div className='py-2'>
						<label className='block text-lg' htmlFor='customerLName'>
							Last Name
						</label>
						<input
							type='text'
							className='p-4 w-80 tablet:w-96 shadow-lg rounded'
							id='customerLName'
							required
							placeholder='Last Name'
						/>
					</div>
					<div className='py-2'>
						<label className='block text-lg' htmlFor='customerTel'>
							Phone Number
						</label>
						<input
							type='tel'
							className='p-4 w-80 tablet:w-96 shadow-lg rounded'
							id='customerTel'
							required
							maxLength={18}
							minLength={6}
							placeholder='Phone number'
						/>
					</div>
					<div className='py-2'>
						<label className='block text-lg' htmlFor='customerEmail'>
							Email
						</label>
						<input
							type='email'
							className='p-4 w-80 tablet:w-96 shadow-lg rounded'
							id='customerEmail'
							required
							placeholder='Email'
						/>
					</div>
					<div className='py-6 mx-auto'>
						<Button variant='pink'>Submit</Button>
					</div>
				</Container>
			</form>
		</Container>
	);
};

export default CustomerInfoForm;
