class EarthController {
  constructor($http) {
    this._$http = $http;
    this.longitude = '100.75';
    this.latitude = '1.5';
    this.date = '2016-01-01';

    this.getData();
  }

  getData() {

    navigator.geolocation.getCurrentPosition((pos) => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;

      this._$http
        .get(`https://api.nasa.gov/planetary/earth/imagery?lon=${this.longitude}&lat=${this.latitude}&date=${this.date}&cloud_score=True&api_key=fSuITcqrIpB2mym704AqfA4iIG77yJ7ZCV5VpcMC`)
        .then((response) => {
          console.log(response);
          this.image = response.data.url;
        });

    })

  }
}

export default EarthController;
