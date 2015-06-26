'use strict';

/**
 * Angular controller for 'resource_grid' snippet
 */
angular.module('snippets').controller('ResourceGridController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'resource_grid';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);