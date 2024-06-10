import { RowContainerType } from '@/app/_utils/Types';
import React from 'react';

const RowContainer = ({ children, className }: RowContainerType) => {
	return (
		<div
			className={`flex flex-row flex-wrap justify-center sm:justify-stretch items-center sm:items-start w-full max-w-1250 text-center mx-auto ${className ? className : ''}`}>
				{children}
		</div>
	);
};

export default RowContainer;
