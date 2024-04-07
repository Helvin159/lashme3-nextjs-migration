'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import Container from '../Container';
import Section from '../Section';
import Cal from './components/Cal';

interface dateProps {
	value: Date;
	onChange: Dispatch<SetStateAction<Date>>;
}

const CalendarComponent = () => {
	const [value, onChange] = useState(new Date());

	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	return (
		<Section>
			<Container className='text-center'>
				<Cal state={value} setter={onChange} />
			</Container>
			<Container className='pt-10'>
				<h3 className='text-2xl'>Available services</h3>
				<Container>
					<h4>
						{months[value.getMonth()]}, {daysOfWeek[value.getDay()]}{' '}
						{value.getDate()}
					</h4>
					List of services based on date.
				</Container>
			</Container>
		</Section>
	);
};

export default CalendarComponent;
