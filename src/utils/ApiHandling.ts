import { createClient } from 'contentful';
import { createClient as createMgmtClient } from 'contentful-management';

class ApiHandling {
	client: any;
	space: any;
	env: any;
	cmaClient: any;
	cmaSpace: any;
	cmaEnv: any;

	constructor() {
		this.client = createClient({
			space: `${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
			accessToken: `${process.env.REACT_APP_CONTENTFUL_API_KEY}`,
		});
		this.space;
		this.cmaClient;
		this.cmaSpace;
		this.cmaEnv;
	}

	// Contentful
	async getContentfulEntries(contentType: string) {
		return await this.client.getEntries({
			content_type: `${contentType}`,
		});
	}

	async getContentfulEntry(contentId: string | undefined) {
		return await this.client.getEntry(`${contentId}`);
	}

	async createApptEntry(
		name: string,
		date: string,
		email: string,
		tel: string,
		slug: string
	) {
		this.cmaClient = createMgmtClient({
			accessToken: `${process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_CMA}`,
		});

		this.space = await this.cmaClient.getSpace(
			process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_SPACE_ID
		);

		this.cmaEnv = await this.space.getEnvironment(
			process.env.NEXT_PUBLIC_REACT_APP_CONTENTFUL_ENV_ID
		);

		this.cmaEnv
			.createEntry('appointments', {
				fields: {
					appointmentName: { 'en-US': `${name}` },
					customerName: { 'en-US': name },
					appointmentDate: { 'en-US': date },
					customerEmail: { 'en-US': email },
					customerPhoneNumber: { 'en-US': tel },
					slug: { 'en-US': `${slug}` },
				},
			})
			.then((entry: any) => entry.publish())
			.then((entry: any) => {
				console.log(entry, 'success');
			})
			.catch(console.error);
	}
}

export default ApiHandling;
