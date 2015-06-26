'use strict';

/**
 * Angular controller for 'resource_list' snippet
 */
angular.module('snippets').controller('ResourceListController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'resource_list';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);