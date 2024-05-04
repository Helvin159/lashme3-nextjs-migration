import { RowContainerType } from '@/app/_utils/Types';
import React from 'react';

const RowContainer = ({ children, className }: RowContainerType) => {
	return (
		<div
			className={`flex flex-row flex-wrap justify-center tablet:justify-start gap-y-3  gap-x-6 tablet:gap-x-12 content-start items-start w-full text-center ${className}`}>
			{children}
		</div>
	);
};

export default RowContainer;
