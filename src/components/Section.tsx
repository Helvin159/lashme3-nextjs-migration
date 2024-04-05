import { Children } from '@/utils/Types';

const Section = ({ children }: Children) => {
	return <section className='max-w-1250 mx-auto py-4 px-5'>{children}</section>;
};

export default Section;
