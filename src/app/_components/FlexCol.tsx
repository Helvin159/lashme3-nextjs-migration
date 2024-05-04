import { FlexColType } from '@/app/_utils/Types';
import React from 'react';

const FlexCol = ({ children, className }: FlexColType) => {
	return <div className={`flex flex-1 ${className}`}>{children}</div>;
};

export default FlexCol;
