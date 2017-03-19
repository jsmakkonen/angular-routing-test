var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'pages/about.html'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html'
        });
});

app.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'This is home page';
});

/*app.controller('aboutController', function ($scope) {
    $scope.message = 'Look! This is an about page.';
});

app.controller('contactController', function ($scope) {
    $scope.message = 'This is a demo contact page.';
});*/
