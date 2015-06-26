'use strict';

/**
 * Angular controller for 'rating' snippet
 */
angular.module('snippets').controller('RatingController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'rating';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);