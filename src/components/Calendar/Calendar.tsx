'use server';
import { CalType, TreatmentType } from '@/utils/Types';
import { daysOfWeek, months } from '@/utils/utils';
import Section from '../Section';
import Container from '../Container';
import Cal from './components/Cal';

export async function generateStaticParams() {
	const data = await fetch(
		`https://firebasestorage.googleapis.com/v0/b/portfolio-db-b6a63.appspot.com/o/data.json?alt=media&token=838f7644-ad32-4734-ab1f-510f495ff115`
	)
		.then((res) => res.json())
		.then((data) => data.services);

	const dataArr = data.map((i: TreatmentType) => ({
		slug: i.slug,
	}));
	return dataArr;
}

export default async function CalendarComponent({
	selectedService,
	selectedDate,
}: CalType) {
	const data = await fetch(
		`https://firebasestorage.googleapis.com/v0/b/portfolio-db-b6a63.appspot.com/o/data.json?alt=media&token=838f7644-ad32-4734-ab1f-510f495ff115`
	)
		.then((res) => res.json())
		.then((data) => data.services);

	const value = new Date();
	const service = selectedService;

	const unavailableDates = [
		{ day: 12, month: 3 },
		{ day: 25, month: 3 },
	];

	const unavailable = unavailableDates.find((i) => {
		let unavailable;

		if (i.day === value.getDate() && i.month === value.getMonth()) {
			unavailable = true;
			return unavailable;
		} else {
			unavailable = false;
			return unavailable;
		}
	});

	return (
		<Section>
			<Container className='text-center'>
				<Cal selectedDate={selectedDate} />
			</Container>
			<Container className='pt-10 mx-auto text-center'>
				<Container>
					{selectedService && <h2 className='text-4xl'>{service}</h2>}

					{value.getDay() >= 1 && value.getDay() <= 5 && !unavailable ? (
						<h3 className='text-3xl'>
							Available time for: {months[value.getMonth()]},{' '}
							{daysOfWeek[value.getDay()].day} {value.getDate().toString()}
						</h3>
					) : !unavailable === false ? (
						<NotAvailableOnDay />
					) : (
						<NotAvailableOnWeekend />
					)}

					{value.getDay() >= 1 && value.getDay() <= 5 && !unavailable && (
						<Container className='mx-auto text-center py-3'>
							<select
								name='time-slots'
								id='timeSlots'
								title='time-slots'
								className='w-2/4 mx-auto outline outline-black	rounded p-2 text-lg text-center'>
								<option className='text-center' defaultChecked value={'Time'}>
									Time
								</option>
								{daysOfWeek[value.getDay()].availableTimeSlots.map((i, k) => (
									<option key={k}>
										{i.start} - {i.end}
									</option>
								))}
							</select>

							<div className='py-6'>
								<h4 className='text-3xl'>Other services:</h4>
								<fieldset className='py-3'>
									{data.map((i: TreatmentType) => (
										<span className='px-3' key={i.id}>
											<label className='px-1' htmlFor={i.id}>
												{i.name}
											</label>
											<input type='checkbox' name={i.name} id={i.id} />
										</span>
									))}
								</fieldset>
							</div>
						</Container>
					)}
				</Container>
			</Container>
		</Section>
	);
}

// Functions used in Calendar Component
const NotAvailableOnDay = () => (
	<Container className='text-center'>
		<h4 className='text-3xl'>Not available on this day.</h4>
		<p>Please pick another date.</p>
	</Container>
);
const NotAvailableOnWeekend = () => (
	<Container className='text-center'>
		<h4 className='text-3xl'>Not available on weekends.</h4>
		<p>Please pick another date during the week.</p>
	</Container>
);
