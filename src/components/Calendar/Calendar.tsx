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
	const [selTime, setSelTime] = useState<any | null>(null);
	const [isSubmitted, setIsSubmitted] = useState<Boolean | null>(false);

	const settings = {
		defaultActiveStartDate: value,
		minDate: new Date(),
		maxDate: new Date(2025, 0, 1),
		selectRange: false,
	};

	const handleClick = ({ id, name }: { id: string; name: string }) => {
		setSelCategory({ id: id, name: name });
	};

	const handleSelService = ({ id, name }: { id: string; name: string }) => {
		setSelService({ id: id, name: name });
	};

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

			if (params?.slug[1]) {
				let date = new Date(params?.slug[1]);
				let year = date.getFullYear();
				let month =
					date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth();
				let day =
					date.getDate() < 10 ? `0${date.getDate() + 2}` : date.getDate() + 2;
				const selDate = `${year}-${month}-${day}`;

				console.log(new Date(selDate), 'seldate');
				onChange(new Date(selDate));
			}
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
						setSelectedCat={setSelCategory}
						selectedServ={selService}
						services={services}
						handleSelService={handleSelService}
					/>

					{/* Calendar Available Times & Other Services */}
					<CalAndTime
						selectedService={selService}
						setSelectedService={setSelService}
						value={value}
						services={services}
						onChange={onChange}
						settings={settings}
						selectedTime={selTime}
						setSelectedTime={setSelTime}
					/>

					<CustomerInfoForm
						setSelectedTime={setSelTime}
						selectedTime={selTime}
						selectedCat={selCategory}
						selectedServ={selService}
						selectedDate={value}
						isSubmitted={isSubmitted}
						setIsSubmitted={setIsSubmitted}
					/>
				</Container>
			</Container>
		</Section>
	);
};
export default CalendarComponent;
