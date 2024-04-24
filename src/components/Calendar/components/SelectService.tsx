'use client';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import React from 'react';

const SelectService = ({
	selectedCat,
	setSelectedCat,
	selectedServ,
	services,
	handleSelService,
}: any) => {
	const goBack = () => {
		setSelectedCat(null);
	};
	return (
		<Container
			className={`w-full text-center ${
				selectedCat !== null && selectedServ === null ? 'block' : 'hidden'
			}`}>
			<Container className='mx-auto w-full text-left'>
				<Button variant='pink' onClick={goBack}>
					Back
				</Button>
			</Container>
			<div className='text-center pb-6'>
				<Heading level='3'>{selectedCat?.name}</Heading>

				<Heading level='6'>Select a Service</Heading>
			</div>
			{services.map((i: any) => {
				if (i.fields.category.sys.id.toString() === selectedCat?.id) {
					return (
						<button
							className='bg-variant-one-light shadow-lg active:shadow-md rounded w-11/12 tablet:w-3/5 py-4 px-3 mx-auto my-2 text-2xl'
							key={i.sys.id}
							onClick={() => {
								handleSelService({
									id: i.sys.id,
									name: i.fields.serviceName,
								});
							}}>
							{i.fields.serviceName}
						</button>
					);
				}
			})}
		</Container>
	);
};

export default SelectService;
