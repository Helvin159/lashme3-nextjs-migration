import { createClient } from 'contentful';
import { createClient as createMgmtClient } from 'contentful-management';

class ApiHandling {
	client: any;
	cmaClient: any;
	space: any;
	env: any;

	constructor() {
		this.client = createClient({
			space: `${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
			accessToken: `${process.env.REACT_APP_CONTENTFUL_API_KEY}`,
		});

		this.cmaClient = createMgmtClient({
			accessToken: `${process.env.REACT_APP_CONTENTFUL_CMA}`,
		});

		this.space = this.cmaClient.getSpace(
			process.env.REACT_APP_CONTENTFUL_SPACE_ID
		);
	}

	// Contentful
	async getContentfulEntries(contentType: string) {
		return await this.client.getEntries({
			content_type: contentType,
		});
	}

	async createApptEntry() {
		this.env = await this.space.getEnvironment(
			process.env.REACT_APP_CONTENTFUL_ENV_ID
		);

		this.env
			.createEntry('appointments', {
				fields: {
					appointmentName: 'test',
					customerName: 'test',
					appointmentDate: '2024-04-23',
					customerEmail: 'h@g.com',
					customerPhoneNumber: '9299299928',
				},
			})
			.then((entry: any) => entry.publish())
			.then((entry: any) => {
				console.log(entry, 'success');
			})
			.catch(console.error, 'error');
	}
}

export default ApiHandling;
