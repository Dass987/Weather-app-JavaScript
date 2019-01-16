export class Store {

	constructor() {
		
		this.city;
		this.countryCode;
		this.defaultCity = "London";
		this.defaultCountry = "uk";
		
	}

	getLocationData() {

		if (localStorage.getItem('__city') === null) {
			this.city = this.defaultCity;
		} else {
			this.city = localStorage.getItem('__city');
		}
		
		if (localStorage.getItem('__countryCode') === null) {
			this.countryCode = this.defaultCountry;
		} else {
			this.countryCode = localStorage.getItem('__countryCode');
		}

		return {
			_city: this.city,
			_countryCode: this.countryCode
		};
		
	}

	setLocationData(city, countryCode) {

		localStorage.setItem('__city', city);
		localStorage.setItem('__countryCode', countryCode);



	}

}