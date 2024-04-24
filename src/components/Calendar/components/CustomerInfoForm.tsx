'use client';
import React, { Dispatch, SetStateAction, useRef } from 'react';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import ApiHandling from '@/utils/ApiHandling';
import { CustomerInfoFormType } from '@/utils/Types';

const CustomerInfoForm = ({
	selectedTime,
	setSelectedTime,
	selectedCat,
	selectedServ,
	selectedDate,
	isSubmitted,
	setIsSubmitted,
}: CustomerInfoFormType) => {
	const apiHandling = new ApiHandling();

	console.log(selectedTime);
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
		const slug = `${e?.target[0].value.trim()}${e?.target[1].value.trim()}-${date.trim()}`;

		await apiHandling.createApptEntry(
			name,
			date,
			email,
			selectedTime,
			tel,
			slug,
			isSubmitted,
			setIsSubmitted
		);
	};

	const goBack = () => {
		setSelectedTime(null);
	};

	return (
		<Container
			className={`${
				selectedTime !== null ? 'block' : 'hidden'
			} mx-auto w-11/12`}>
			<Container className='mx-auto w-full text-left'>
				<Button variant='pink' onClick={goBack}>
					Back
				</Button>
			</Container>
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

			<Heading level='1' className={`${isSubmitted ? 'block' : 'hidden'}`}>
				success
			</Heading>
		</Container>
	);
};

export default CustomerInfoForm;
