
export class Weather {

	/**
	 * 
	 * 
	 *
	 * API fetch urls
	 * 
	 	api.openweathermap.org/data/2.5/weather?q=London

		api.openweathermap.org/data/2.5/weather?q=London,uk
	 */

	constructor(city, countryCode = "") {
		
		this.apiKey = "5a79b1ea582966e011fcd360775ea6c2";
		this.city = city;
		this.countryCode = countryCode;

	}

	async getWeather() {

		const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`

		const response = await fetch(URI);
		const data = response.json();
		
		return data;

	}

	changeLocation(city, countryCode = "") {

		this.city = city;
		this.countryCode = countryCode;

	}

}