import BookingTerms from '@/app/_components/BookingTerms';
import CalendarComponent from '@/app/_components/Calendar/Calendar';
import Container from '@/app/_components/Container';
import ApiHandling from '@/app/_utils/ApiHandling';
import { Params } from '@/app/_utils/Types';

export async function generateStaticParams() {
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
			<BookingTerms rules={dets.fields.bookingRules} />
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
