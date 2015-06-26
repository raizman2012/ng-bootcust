'use strict';

/**
 * Angular controller for 'table_paging_more_server' snippet
 */
angular.module('snippets').controller('TablePagingMoreServerController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_paging_more_server';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);