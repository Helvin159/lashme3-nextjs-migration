import axios from 'axios';

class ApiHandling {
	url: string;
	apiKey: string;
	contentType: string;

	constructor(contentType: string, apiKey: string, url: string) {
		this.url = url;
		this.apiKey = apiKey;
		this.contentType = contentType;
	}

	async getDates() {
		try {
			await axios.get(this.url);
		} catch (e) {
			console.log(e);
		}
	}
}

export default ApiHandling;
