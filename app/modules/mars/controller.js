class MarsController {
  constructor($stateParams, $http) {
    this.rover = $stateParams.rover;
    this._$http = $http;

    this.getData();
  }

  getData() {
    this._$http
      .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.rover}/photos?sol=1000&api_key=fSuITcqrIpB2mym704AqfA4iIG77yJ7ZCV5VpcMC`)
      .then((response) => {
        console.log(response);
        this.photos = response.data.photos;
      })
  }
}

export default MarsController;
