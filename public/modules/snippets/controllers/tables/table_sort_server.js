'use strict';

/**
 * Angular controller for 'table_sort_server' snippet
 */
angular.module('snippets').controller('TableSortServerController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_sort_server';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);