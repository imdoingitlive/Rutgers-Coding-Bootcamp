angular.module('myApp', ['ngRoute'])
    
    .config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl : '/angularroute/assets/views/home.html',
                //controller : mainController
            })
            .when('/about', {
                templateUrl : '/angularroute/assets/views/about.html',
                //controller : mainController
            })
            .when('/contact', {
                templateUrl : '/angularroute/assets/views/contact.html',
                //controller : mainController
            });
    
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });
