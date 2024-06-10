import { RowContainerType } from '@/app/_utils/Types';
import React from 'react';

const RowContainer = ({ children, className }: RowContainerType) => {
	return (
		<div
			className={`flex flex-row flex-wrap justify-center sm:justify-start sm:items-start w-full text-center ${className ? className : ''}`}>
				{children}
		</div>
	);
};

export default RowContainer;
