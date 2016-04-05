class ApodController {
  constructor($http, $sce) {
    this._$http = $http;
    this._$sce = $sce;
    this.getData();
  }

  getData() {
    this._$http
      .get('https://api.nasa.gov/planetary/apod?api_key=fSuITcqrIpB2mym704AqfA4iIG77yJ7ZCV5VpcMC')
      .then((response) => {
        console.log(response);
        this.title = response.data.title;
        this.description = response.data.explanation;
        this.url = this._$sce.trustAsResourceUrl(response.data.url);
        this.media_type = response.data.media_type;
        // console.log(this.url);
      });
  }

}

export default ApodController;
