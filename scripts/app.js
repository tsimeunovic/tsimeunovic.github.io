angular.module('app', ['ngRoute', 'offscreen-placeholder'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/peopleList.html',
            controller: 'ListCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    })
    .controller('ListCtrl', function ($scope, offscreenPlaceholderConfiguration) {
        //Scope data
        $scope.peopleData = window.peopleData;
        $scope.DoSomething = function () {};

        //Configuration overrides
        offscreenPlaceholderConfiguration.topOffset = 200;
        offscreenPlaceholderConfiguration.bottomOffset = 800;
    });
