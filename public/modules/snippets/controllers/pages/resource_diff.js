'use strict';

/**
 * Angular controller for 'resource_diff' snippet
 */
angular.module('snippets').controller('ResourceDiffController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'resource_diff';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);