'use strict';

/**
 * Angular controller for 'table_tree_async_server' snippet
 */
angular.module('snippets').controller('TableTreeAsyncServerController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_tree_async_server';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);