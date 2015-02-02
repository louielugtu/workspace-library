/**
 * Created by Louie on 2/1/2015.
 */
weatherApp.service('weatherService', function() {
    this.city = 'Manila, Philippines';
});

weatherApp.service('forecastService', ['$resource', function($resource) {

    this.GetWeather = function(city, days) {
        // Instantiate the API
        var forecastAPI = $resource(
            'http://api.openweathermap.org/data/2.5/forecast/daily',
            {
                callback: "JSON_CALLBACK"
            },
            {
                get: {
                    method: "JSONP" //Enables call outside the app
                }
            }
        );
        //?q=London&cnt=7
        return forecastAPI.get({
            q: city,
            cnt: days
        });
    };
}]);

