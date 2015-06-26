'use strict';

/**
 * Angular controller for 'rating_widget' snippet
 */
angular.module('snippets').controller('RatingWidgetController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'rating_widget';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);