'use client';
import { useEffect, useState } from 'react';
import { SelectedOptionState } from '@/utils/Types';
import Section from '../Section';
import Container from '../Container';
import OtherServices from './components/OtherServices';
import SelectCategory from './components/SelectCategory';
import SelectService from './components/SelectService';
import CustomerInfoForm from './components/CustomerInfoForm';
import CalAndTime from './components/CalAndTime';

const CalendarComponent = ({
	categories,
	services,
	uDates,
	appointments,
	params,
}: any) => {
	const [value, onChange] = useState<Date | any>(new Date());
	const [selCategory, setSelCategory] = useState<SelectedOptionState | null>(
		null
	);
	const [selService, setSelService] = useState<SelectedOptionState | null>(
		null
	);
	const [selTime, setSelTime] = useState<any>(null);

	const settings = {
		defaultActiveStartDate: value,
		minDate: new Date(2024, 3, 8),
		maxDate: new Date(2025, 0, 1),
		selectRange: false,
	};

	const handleClick = ({ id, name }: { id: string; name: string }) => {
		setSelCategory({ id: id, name: name });
	};

	const handleSelService = ({ id, name }: { id: string; name: string }) => {
		setSelService({ id: id, name: name });
	};

	console.log(uDates, appointments);

	useEffect(() => {
		if (params) {
			let itemBySlug = categories.find((i: any) => {
				if (i.fields.slug === params?.slug[0]) {
					return i;
				}
			});

			setSelCategory({
				id: itemBySlug.sys.id,
				name: itemBySlug.fields.categoryName,
			});
		}

		if (params?.slug[1]) {
			onChange(new Date(params?.slug[1]));
		}
	}, [categories, params, params?.slug]);

	return (
		<Section>
			{/* Category and Service Selection */}
			<Container className='mx-auto w-full'>
				<Container className='flex flex-col w-full tablet:w-10/12 mx-auto '>
					{/* Categories to select from, service will show 
					after category has been chosen */}
					<SelectCategory
						selectedCat={selCategory}
						categories={categories}
						handleClick={handleClick}
					/>

					{/* Service Menu shows after category is chosen */}
					<SelectService
						selectedCat={selCategory}
						selectedServ={selService}
						services={services}
						handleSelService={handleSelService}
					/>

					{/* Calendar Available Times & Other Services */}
					<CalAndTime
						selectedService={selService}
						value={value}
						onChange={onChange}
						settings={settings}
						selectedTime={selTime}
						setSelectedTime={setSelTime}
					/>

					{/* Other related services */}
					<Container
						className={`text-center ${
							selService !== null && selTime === null ? 'block' : 'hidden'
						}`}>
						<OtherServices services={services} />
					</Container>

					<CustomerInfoForm
						selectedTime={selTime}
						selectedCat={selCategory}
						selectedServ={selService}
						selectedDate={value}
					/>
				</Container>
			</Container>
		</Section>
	);
};
export default CalendarComponent;
