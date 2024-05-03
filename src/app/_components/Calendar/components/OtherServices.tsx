'use client';
import Heading from '@/app/_components/Heading';
import React, { useRef } from 'react';

const OtherServices = ({ setOtherServices, services }: any) => {
	let selected: any = [];

	const form = useRef<any | null>(null);

	const onChange = () => {
		if (form.current) {
			for (let i = 1; i < form.current.length; i++) {
				if (form?.current[i]?.checked) {
					let t = selected.find((it: any) => form?.current[i]?.value === it);
					if (t === undefined) selected.push(form?.current[i]?.value);
				}

				if (form?.current[i]?.checked === false) {
					let t = selected.find((it: any) => form?.current[i]?.value === it);
					let indexof = selected.indexOf(t);
					selected.splice(indexof, 1);
				}

				let service: any = [];
				services.map((item: any) => {
					let found = selected.find(
						(slug: string) => item.fields.slug === slug
					);

					if (found) {
						service.push(item);
					}
				});

				setOtherServices(service);
			}
		}
	};

	return (
		<div className=''>
			<Heading level='5'>Other services:</Heading>
			<form ref={form} onChange={onChange}>
				<fieldset className='flex flex-col py-3'>
					{services?.slice(0, 3).map((i: any) => (
						<span className='px-3 py-2 ' key={i.sys.id}>
							<label className='px-1' htmlFor={i.sys.id}>
								<span>{i.fields.serviceName}</span>
								<br />
								{i.fields.hours > 0 && (
									<span>
										{i.fields.hours} Hours{' '}
										{i.fields?.minutes > 0 && i.fields?.minutes && ' & '}
									</span>
								)}

								{i.fields?.minutes > 0 && (
									<span>{i.fields?.minutes} Minutes</span>
								)}
								<span>@ ${i.fields?.price}</span>
							</label>
							<input
								type='checkbox'
								name={i.fields.serviceName}
								value={i.fields.slug}
								id={i.sys.id}
							/>
						</span>
					))}
				</fieldset>
			</form>
		</div>
	);
};

export default OtherServices;
