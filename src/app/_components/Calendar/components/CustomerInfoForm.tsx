'use client';
import React from 'react';
import Button from '@/app/_components/Button';
import Container from '@/app/_components/Container';
import Heading from '@/app/_components/Heading';
import ApiHandling from '@/app/_utils/ApiHandling';
import { CustomerInfoFormType } from '@/app/_utils/Types';
import { useCalendarCtx } from '@/app/_context/CalendarContext';
import RowContainer from '@/app/_components/RowContainer';
import { goBack } from '@/app/_utils/utils';
import SelectService from './SelectService';

const CustomerInfoForm = ({ selectedDate }: CustomerInfoFormType) => {
	const apiHandling = new ApiHandling();

	const {
		selCategory,
		selService,
		selTime,
		setSelTime,
		isSubmitted,
		setIsSubmitted,
	} = useCalendarCtx();

	const date = new Date(selectedDate);
	const year = date.getFullYear();
	const month =
		date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
	const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

	const onSubmit = async (e: any) => {
		e.preventDefault();

		const name = `${e?.target[0].value.trim()} ${e?.target[1].value.trim()}`;
		const tel = `${e?.target[2].value.trim()}`;
		const email = `${e?.target[3].value.trim()}`;
		const date = `${year}-${month}-${day}`.trim();
		const slug = `${e?.target[0].value.trim()}${e?.target[1].value.trim()}&${date.trim()}&${selTime}`;

		await apiHandling.createApptEntry(
			name,
			date,
			email,
			selTime,
			tel,
			slug,
			isSubmitted,
			setIsSubmitted,
			selService
		);
	};

	console.log(selService);

	return (
		<Container
			className={`${selTime !== null ? 'block' : 'hidden'} mx-auto w-11/12`}>
			<div
				className={`w-full mx-auto text-center py-6 ${
					isSubmitted ? 'hidden' : 'block'
				}`}>
				<Heading level='3'>{selService?.name}</Heading>
				<p>{selCategory?.name}</p>
				<p>
					On {month}/{day}/{year} @ {selTime}
				</p>
			</div>

			<form
				onSubmit={onSubmit}
				className={`${isSubmitted ? 'hidden' : 'block'}`}>
				<Container className='flex flex-col justify-center items-center	'>
					<div className='py-2'>
						<label className='block text-lg' htmlFor='customerFName'>
							First Name
						</label>
						<input
							type='text'
							className='p-4 w-80 tablet:w-96 shadow-lg rounded'
							id='customerFName'
							name='customerFName'
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
							name='customerLName'
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
							name='customerTel'
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
							name='customerEmail'
							required
							placeholder='Email'
						/>
					</div>
					<RowContainer>
						<div className='py-6 mx-auto'>
							<Button
								variant='light'
								onClick={() => {
									goBack(setSelTime);
								}}>
								Back
							</Button>
						</div>
						<div className='py-6 mx-auto'>
							<Button variant='pink'>Submit</Button>
						</div>
					</RowContainer>
				</Container>
			</form>

			<Container className={`${isSubmitted ? 'block' : 'hidden'}  text-center`}>
				<Heading level='1' className='capitalize'>
					Success!
				</Heading>
				<p className='text-lg py-3'>
					Your appointment is set for {month}/{day}/{year} @ {selTime}.
				</p>
			</Container>
		</Container>
	);
};

export default CustomerInfoForm;
