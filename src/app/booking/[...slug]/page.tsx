import BookingRules from '@/components/BookingRules';
import CalendarComponent from '@/components/Calendar/Calendar';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import ApiHandling from '@/utils/ApiHandling';
import { Params } from '@/utils/Types';
import { createClient } from 'contentful';

export async function generateStaticParams() {
	let client = await createClient({
		space: `${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
		accessToken: `${process.env.REACT_APP_CONTENTFUL_API_KEY}`,
	});
	const apiHandling = new ApiHandling();
	const { items } = await apiHandling.getContentfulEntries('service');

	const dataArr = items.map((i: any) => i.fields.slug);
	return dataArr;
}

const Booking = async ({ params }: Params) => {
	const apiHandling = new ApiHandling();
	const { items: details } = await apiHandling.getContentfulEntries(
		'businessDetails'
	);
	const dets = details.find((i: any) => i.fields.useThisLive === true);
	const { items: services } = await apiHandling.getContentfulEntries('service');
	const { items: appts } = await apiHandling.getContentfulEntries(
		'appointments'
	);
	const { items: categories } = await apiHandling.getContentfulEntries(
		'category'
	);
	const { items: uDates } = await apiHandling.getContentfulEntries(
		'unavailableDates'
	);

	return (
		<>
			<Container className='text-center p-10'>
				<h1 className='text-4xl'>Booking</h1>
			</Container>
			<BookingRules rules={dets.fields.bookingRules} />
			<Container>
				<CalendarComponent
					params={params}
					categories={categories}
					services={services}
					uDates={uDates}
					appointments={appts}
				/>
			</Container>
		</>
	);
};

export default Booking;
