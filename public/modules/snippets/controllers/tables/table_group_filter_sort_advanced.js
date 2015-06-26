'use strict';

/**
 * Angular controller for 'table_group_filter_sort_advanced' snippet
 */
angular.module('snippets').controller('TableGroupFilterSortAdvancedController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_group_filter_sort_advanced';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);