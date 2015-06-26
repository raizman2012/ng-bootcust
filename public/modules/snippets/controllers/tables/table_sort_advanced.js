'use strict';

/**
 * Angular controller for 'table_sort_advanced' snippet
 */
angular.module('snippets').controller('TableSortAdvancedController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_sort_advanced';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);