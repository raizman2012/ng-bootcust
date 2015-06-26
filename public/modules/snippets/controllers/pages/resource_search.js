'use strict';

/**
 * Angular controller for 'resource_search' snippet
 */
angular.module('snippets').controller('ResourceSearchController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'resource_search';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);