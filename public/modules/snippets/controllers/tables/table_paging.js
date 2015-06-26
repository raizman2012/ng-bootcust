'use strict';

/**
 * Angular controller for 'table_paging' snippet
 */
angular.module('snippets').controller('TablePagingController', ['$scope', 'paging', 'selectable', 'clientMockData',
    function ($scope, paging, selectable, clientMockData) {

        $scope.snippetId = 'table_paging';

        $scope.customers = clientMockData.customers;

        $scope.paging = new paging($scope.customers.length);

        $scope.pagerTypes = new selectable(['default', 'more', 'prev_next']);

        $scope.pagerTypes.selectIndex(0);
    }
]);