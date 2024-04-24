import { HeadingComponentType, HeadingLevel } from '@/utils/Types';
import React from 'react';

const Heading = ({ level, className, children }: HeadingComponentType) => {
	// Heading levels and their respected
	// classes
	const headingLevel: HeadingLevel = {
		'1': <h1 className={`${className} text-6xl`}>{children}</h1>,
		'2': <h2 className={`${className} text-5xl`}>{children}</h2>,
		'3': <h3 className={`${className} text-4xl`}>{children}</h3>,
		'4': <h4 className={`${className} text-3xl`}>{children}</h4>,
		'5': <h5 className={`${className} text-2xl`}>{children}</h5>,
		'6': <h6 className={`${className} text-xl`}>{children}</h6>,
	};

	// If level is provided, return heading with specified level
	if (level) return <>{headingLevel[level as keyof typeof headingLevel]}</>;

	// If level isn't provided, return default heading level 1
	if (!level) return <>{headingLevel[1]}</>;
};

export default Heading;
