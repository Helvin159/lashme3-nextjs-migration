import React from 'react';

const BookingWidget = () => {
	return (
		<div className='container w-full max-w-969 tablet:w-3/4 bg-light-gray rounded-3xl translate-y-n2.5 laptop:translate-y-n50 py-8 tablet:px-0 mx-auto my-0'>
			<div className='flex flex-row flex-wrap justify-between align-center text-center items-center tablet:px-8 mx-auto'>
				<div className='basis-4/12 tablet:basis-3/12 shrink mx-auto '>
					<label htmlFor='treatmentName' className='block px-2'>
						Service
					</label>
					<select
						id='treatmentName'
						className='bg-light-gray rounded-lg placeholder:text-black outline-1 focus:outline-1 active:outline-0 focus:outline-variant-one py-2 px-2'
						placeholder='What treatment are you looking for?'>
						<option className='outline-1 outline-variant-one'>
							Extensions
						</option>
					</select>
				</div>
				<div className='basis-4/12 tablet:basis-3/12 shrink mx-auto '>
					<label htmlFor='date' className='block px-2'>
						Date &amp; Time
					</label>
					<input
						id='date'
						type='date'
						className='bg-light-gray rounded-lg placeholder:text-black outline-1 focus:outline-1 active:outline-0 focus:outline-variant-one py-2 px-2 text-center'
						placeholder='Select a date'
					/>
				</div>
				<div className='basis-4/12 tablet:basis-3/12 shrink mx-auto text-center '>
					<label htmlFor='duration' className='block px-2'>
						Duration
					</label>
					<select
						id='duration'
						className='bg-light-gray rounded-lg placeholder:text-black focus:outline-1 active:outline-0 focus:outline-variant-one py-2 px-2'
						placeholder='Select duration'>
						<option className='outline-1 outline-variant-one'>1 Hour</option>
					</select>
				</div>
				{/* <div>
					<label htmlFor='technician' className='block px-2'>
						Technician
					</label>
					<input
						id='technician'
						className='bg-light-gray rounded-lg placeholder:text-black focus:outline-1 active:outline-0 focus:outline-variant-one py-2 px-2'
						placeholder='Select a technician'
					/>
				</div> */}
				<div className='relative basis-full tablet:basis-3/12 mx-auto text-center pt-4 tablet:pt-0'>
					<button className='bg-variant-one text-white rounded-lg py-3 px-5'>
						<span className='tablet:hidden mr-2 tablet:mr-0'>Book Session</span>
						&#8594;
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookingWidget;
