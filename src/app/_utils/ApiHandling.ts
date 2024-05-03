import { createClient } from 'contentful';
import { createClient as createMgmtClient } from 'contentful-management';
import axios from 'axios';

class ApiHandling {
	client: any;
	space: any;
	env: any;
	cmaClient: any;
	cmaSpace: any;
	cmaEnv: any;

	constructor() {
		this.client = createClient({
			space: `${process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_SPACE_ID}`,
			accessToken: `${process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_API_KEY}`,
		});
		this.cmaClient = createMgmtClient({
			accessToken: `${process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_CMA}`,
		});
		this.space;
		this.cmaSpace;
		this.cmaEnv;
	}

	// Contentful
	// **************
	// Getter Methods
	// **************
	async getContentfulEntries(contentType: string) {
		return await this.client.getEntries({
			content_type: `${contentType}`,
		});
	}

	async getContentfulEntry(contentId: string | undefined) {
		return await this.client.getEntry(`${contentId}`);
	}

	// **************
	// Create Methods
	// **************

	// Creates new client with
	// name, emal and phone number
	async createClientEntry(name: string, email: string, tel?: string) {
		this.cmaSpace = await this.cmaClient.getSpace(
			process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_SPACE_ID
		);

		this.cmaEnv = await this.cmaSpace.getEnvironment(
			process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_ENV_ID
		);

		this.cmaEnv
			.createEntry('clients', {
				fields: {
					fullName: { 'en-US': name },
					email: { 'en-US': email },
					phoneNumber: { 'en-US': tel ? tel : 1231231234 },
					slug: { 'en-US': name.replace(/\s/g, '-') },
					// appointments: { 'en-US': name },
				},
			})
			.then((entry: any) => entry.publish())
			.then((entry: any) => {
				console.log(entry, 'success');
			})
			.catch(console.error);
	}

	// Creates an appointment and user
	// if user doesn't already exist
	async createApptEntry(
		name: string,
		date: string | null,
		email: string,
		time: string | null,
		tel: string,
		slug: string,
		isSubmitted: Boolean | null,
		setIsSubmitted: any | null
	) {
		this.cmaSpace = await this.cmaClient.getSpace(
			process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_SPACE_ID
		);

		this.cmaEnv = await this.cmaSpace.getEnvironment(
			process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_ENV_ID
		);

		const dateTime = `${date}T${time}`;

		// Fetch list of clients
		const clientList = await this.client.getEntries({
			content_type: 'clients',
		});

		// Check if client already exists
		const clienExists = clientList.items.find((i: any) => {
			return i.fields.email.trim() === email.trim();
		});

		// If client exists, make appointment without
		// creating a new client, else creates a client
		// and creates a new appointment
		if (clienExists) {
			this.cmaEnv
				.createEntry('appointments', {
					fields: {
						appointmentName: {
							'en-US': `${name.replace(/\s/g, '')}-${tel}-${dateTime}`,
						},
						customerName: { 'en-US': name },
						appointmentDate: { 'en-US': dateTime },
						customerEmail: { 'en-US': email },
						customerPhoneNumber: { 'en-US': tel },
						slug: { 'en-US': slug },
					},
				})
				.then((entry: any) => entry.publish())
				.then((entry: any) => {
					console.log(entry, 'success');

					try {
						const res = axios.post('https://lashme3.com/email');
						console.log(res);
					} catch (e) {
						console.log(e);
					}

					setIsSubmitted(!isSubmitted);
				})
				.catch(console.error);
		} else {
			this.cmaEnv
				.createEntry('clients', {
					fields: {
						fullName: { 'en-US': name },
						email: { 'en-US': email },
						phoneNumber: { 'en-US': parseInt(tel) },
						// clientsPhysicalAddress: { 'en-US': tel },
						slug: { 'en-US': name.replace(/\s/g, '-') },
						// appointments: { 'en-US': name },
					},
				})
				.then((clientEntry: any) => clientEntry.publish())
				.then((clientEntry: any) => {
					console.log(clientEntry, 'Client created successfuly');
					this.cmaEnv
						.createEntry('appointments', {
							fields: {
								appointmentName: {
									'en-US': `${name.replace(/\s/g, '')}-${tel}-${dateTime}`,
								},
								customerName: { 'en-US': name },
								appointmentDate: { 'en-US': dateTime },
								customerEmail: { 'en-US': email },
								customerPhoneNumber: { 'en-US': tel },
								slug: { 'en-US': slug },
							},
						})
						.then((apptEntry: any) => apptEntry.publish())
						.then((apptEntry: any) => {
							console.log(apptEntry, 'Appt success');
							setIsSubmitted(!isSubmitted);
						})
						.catch(console.error);
				})
				.catch(console.error);
		}
	}

	// **************
	// Update Methods
	// **************
	async confirmAppointment(entryId: string | undefined) {
		this.cmaSpace = await this.cmaClient.getSpace(
			process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_SPACE_ID
		);

		this.cmaEnv = await this.cmaSpace.getEnvironment(
			process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_ENV_ID
		);

		this.cmaEnv.getEntry(entryId).then((entry: any) => {
			entry.fields.appointmentConfirmed['en-US'] = true;
			entry
				.update(entryId)
				.then((entry: any) => {
					console.log(entry, 'success');
				})
				.catch(console.error);
		});
	}

	async confirmEmail(entryId: string | undefined) {
		this.cmaSpace = await this.cmaClient.getSpace(
			process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_SPACE_ID
		);

		this.cmaEnv = await this.cmaSpace.getEnvironment(
			process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_ENV_ID
		);

		this.cmaEnv.getEntry(entryId).then((entry: any) => {
			entry.fields.customerEmailConfirmation['en-US'] = true;
			entry
				.update(entryId)
				.then((entry: any) => {
					console.log(entry, 'success');
					return true;
				})
				.catch(console.error);
		});
	}
}

export default ApiHandling;
