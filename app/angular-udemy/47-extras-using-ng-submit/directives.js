/**
 * Created by Louie on 2/1/2015.
 */
weatherApp.directive('forecast', function() {
    return {
        restrict: 'E', //A-attribute, E-element, C-class, M-Comment
        templateUrl: 'directives/forecast.html',
        replace: true, //Default is false
        scope: {
            forecast: "=",
            convertTemperature: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});
