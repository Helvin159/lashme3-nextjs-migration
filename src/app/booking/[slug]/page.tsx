import CalendarComponent from '@/components/Calendar/Calendar';
import Container from '@/components/Container';
import { Params } from '@/utils/Types';

const Booking = ({ params }: Params) => {
	const { slug } = params;

	return (
		<>
			<Container className='text-center p-10'>
				<h1 className='text-4xl'>Booking page</h1>
			</Container>
			<Container>
				<CalendarComponent selectedService={slug} selectedDate={null} />
			</Container>
		</>
	);
};

export default Booking;
