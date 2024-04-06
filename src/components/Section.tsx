import { SectionType } from '@/utils/Types';

const Section = ({ children, className }: SectionType) => {
	return (
		<section className={`max-w-1250 mx-auto py-4 px-5 ${className}`}>
			{children}
		</section>
	);
};

export default Section;
