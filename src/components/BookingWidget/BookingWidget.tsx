'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Heading from '../Heading';
import Container from '../Container';
import { handleChangeDate, handleChangeSelect } from '@/utils/utils';

const BookingWidget = ({ categories }: any) => {
	const date = new Date();

	const year = date.getFullYear();

	const month =
		date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth();

	const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

	const currDate = `${year}-${month}-${day}`;

	const [service, setService] = useState<string>(categories[0].fields.slug);
	const [selectedDate, setSelectedDate] = useState<string>(currDate);

	return (
		<div className='container w-11/12 tablet:w-full max-w-969 tablet:w-3/4 bg-light-gray rounded-3xl translate-y-n10 laptop:translate-y-n30 py-8 tablet:px-0 mx-auto my-0 shadow-lg'>
			<Container className='w-full mx-auto text-center mb-4'>
				<Heading level='5' className='hidden tablet:block'>
					Select a Date and Category
				</Heading>
			</Container>
			<div className='flex flex-col  justify-around  tablet:flex-row tablet:flex-wrap tablet:justify-between align-center text-center items-center tablet:px-8 mx-auto'>
				<div className='w-3/4 tablet:w-4/12 shrink mx-auto mb-4 tablet:mb-0 text-left tablet:text-center'>
					<label htmlFor='treatmentName' className='tablet:block px-2 text-xl'>
						Category
					</label>
					<select
						id='treatmentName'
						onChange={(e) => {
							handleChangeSelect(e, service, setService);
						}}
						defaultValue={service}
						className='bg-light-gray rounded-lg placeholder:text-black outline-1 focus:outline-1 active:outline-0 focus:outline-variant-one py-2 px-2 text-center'>
						{categories.map((i: any) => {
							return (
								<option
									key={i.sys.id}
									className='outline-1 outline-variant-one text-center'
									value={i.fields.slug}>
									{i.fields.categoryName}
								</option>
							);
						})}
					</select>
				</div>
				<div className='w-3/4 tablet:w-4/12 shrink mx-auto text-left tablet:text-center'>
					<label htmlFor='date' className='tablet:block px-2 text-xl'>
						Date
					</label>
					<input
						id='date'
						type='date'
						defaultValue={selectedDate}
						onChange={(e) => handleChangeDate(e, selectedDate, setSelectedDate)}
						className='bg-light-gray rounded-lg placeholder:text-black outline-1 outline-variant-one focus:outline-1 focus:outline-variant-one py-2 px-2 text-center'
					/>
				</div>
				<div className='relative w-full tablet:w-4/12 mx-auto text-center my-8 tablet:my-0'>
					<Link
						href={`booking/${service}/${selectedDate}`}
						className='bg-variant-one text-white rounded-lg py-3 px-5'>
						<span className='tablet:hidden mr-2 tablet:mr-0'>Book Session</span>
						&#8594;
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BookingWidget;
