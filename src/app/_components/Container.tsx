import { ContainerType } from '@/app/_utils/Types';
import React from 'react';

const Container = ({ children, className }: ContainerType) => {
	return (
		<div className={`container mx-auto ${className ? className : ''}`}>
			{children}
		</div>
	);
};

export default Container;
