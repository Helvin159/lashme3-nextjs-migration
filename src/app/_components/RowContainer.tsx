import { RowContainerType } from '@/app/_utils/Types';
import React from 'react';

const RowContainer = ({ children, className }: RowContainerType) => {
	return (
		<div
			className={`flex flex-row flex-wrap justify-between  items-start w-full ${className}`}>
			{children}
		</div>
	);
};

export default RowContainer;
