import { HeadingComponentType, HeadingLevel } from '@/utils/Types';
import React from 'react';

const Heading = ({ level, className, children }: HeadingComponentType) => {
	// Heading levels and their respected
	// classes
	const headingLevel: HeadingLevel = {
		'1': <h1 className={`text-6xl ${className}`}>{children}</h1>,
		'2': <h2 className={`text-5xl ${className}`}>{children}</h2>,
		'3': <h3 className={`text-4xl ${className}`}>{children}</h3>,
		'4': <h4 className={`text-3xl ${className}`}>{children}</h4>,
		'5': <h5 className={`text-2xl ${className}`}>{children}</h5>,
		'6': <h6 className={`text-xl ${className}`}>{children}</h6>,
	};

	// If level is provided, return heading with specified level
	if (level) return <>{headingLevel[level as keyof typeof headingLevel]}</>;

	// If level isn't provided, return default heading level 1
	if (!level) return <>{headingLevel[1]}</>;
};

export default Heading;
