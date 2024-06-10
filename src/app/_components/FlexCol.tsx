import { Basis, FlexColType } from '@/app/_utils/Types';
import React from 'react';

const FlexCol = ({ children, className, size, sm, md, lg, xl }: FlexColType) => {
	const basis: Basis = {
		1: 'basis-1/12',
		2: 'basis-2/12',
		3: 'basis-3/12',
		4: 'basis-4/12',
		5: 'basis-5/12',
		6: 'basis-6/12',
		7: 'basis-7/12',
		8: 'basis-8/12',
		9: 'basis-9/12',
		10: 'basis-10/12',
		11: 'basis-11/12',
		12: 'basis-12/12',
	}

	const width: Basis = {
		1: 'w-1/12',
		2: 'w-2/12',
		3: 'w-3/12',
		4: 'w-4/12',
		5: 'w-5/12',
		6: 'w-6/12',
		7: 'w-7/12',
		8: 'w-8/12',
		9: 'w-9/12',
		10: 'w-10/12',
		11: 'w-11/12',
		12: 'w-12/12',
	}

	return (
		<div className={`${ size ? `${basis[size as keyof typeof basis]} ` : ''}${ sm ? `sm:${basis[sm as keyof typeof basis]} sm:${width[sm as keyof typeof width]} ` : ''}${ md ? `md:${basis[md as keyof typeof basis]} md:${width[md as keyof typeof width]} ` : ''}${ lg ? `lg:${basis[lg as keyof typeof basis]} lg:${width[lg as keyof typeof width]} ` : ''}${ xl ? `xl:${basis[xl as keyof typeof basis]} xl:${width[xl as keyof typeof width]} ` : ''}${className ? `${className} ` : ''} shrink grow p-3`}>
			{children}
		</div>
	);
};

export default FlexCol;
