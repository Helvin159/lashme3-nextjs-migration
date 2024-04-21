import { createClient } from 'contentful';

class ApiHandling {
	client: any;

	constructor() {
		this.client = createClient({
			space: `${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
			accessToken: `${process.env.REACT_APP_CONTENTFUL_API_KEY}`,
		});
	}

	// Contentful
	async getContentfulEntries(contentType: string) {
		return await this.client.getEntries({
			content_type: contentType,
		});
	}
}

export default ApiHandling;
