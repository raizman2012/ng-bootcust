'use strict';

/**
 * Angular controller for 'table_sort' snippet
 */
angular.module('snippets').controller('TableSortController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_sort';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);