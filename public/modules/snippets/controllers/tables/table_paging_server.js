'use strict';

/**
 * Angular controller for 'table_paging_server' snippet
 */
angular.module('snippets').controller('TablePagingServerController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_paging_server';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);