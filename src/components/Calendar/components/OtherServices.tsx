'use client';
import Heading from '@/components/Heading';
import React from 'react';

const OtherServices = ({ services }: any) => {
	return (
		<div className=''>
			<Heading level='5'>Other services:</Heading>
			<fieldset className='flex flex-col py-3'>
				{services?.slice(0, 3).map((i: any) => (
					<span className='px-3 py-2 ' key={i.sys.id}>
						<label className='px-1' htmlFor={i.sys.id}>
							<span>{i.fields.serviceName}</span>
							<br />
							{i.fields.hours > 0 && (
								<span>
									{i.fields.hours} Hours{i.fields?.minutes && ' & '}
								</span>
							)}

							{i.fields?.minutes > 0 && (
								<span>{i.fields?.minutes} Minutes</span>
							)}
							<span> ${i.fields?.price}</span>
						</label>
						<input type='checkbox' name={i.fields.serviceName} id={i.sys.id} />
					</span>
				))}
			</fieldset>
		</div>
	);
};

export default OtherServices;
