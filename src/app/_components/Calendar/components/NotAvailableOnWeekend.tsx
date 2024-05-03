'use server';
import Container from '@/app/_components/Container';

const NotAvailableOnWeekend = () => (
	<Container className='text-center'>
		<h4 className='text-3xl'>Not available on weekends.</h4>
		<p>Please pick another date during the week.</p>
	</Container>
);

export default NotAvailableOnWeekend;
