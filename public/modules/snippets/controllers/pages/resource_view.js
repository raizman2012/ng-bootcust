'use strict';

/**
 * Angular controller for 'resource_view' snippet
 */
angular.module('snippets').controller('ResourceViewController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'resource_view';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);