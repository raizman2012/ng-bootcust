'use strict';

/**
 * Angular controller for 'table_collapse_async_server' snippet
 */
angular.module('snippets').controller('TableCollapseAsyncServerController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_collapse_async_server';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);