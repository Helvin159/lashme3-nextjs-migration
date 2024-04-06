'use client';
import axios from 'axios';

class ApiHandling {
	args: { contentType: string; url: string };
	apiKey: string;

	constructor(args: { contentType: string; url: string }, apiKey: string) {
		this.apiKey = apiKey;
		this.args = args;
	}

	async getDates() {
		try {
			await axios.get(this.args.url);
		} catch (e) {
			console.log(e);
		}
	}
}

export default ApiHandling;
