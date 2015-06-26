'use strict';

/**
 * Angular controller for 'table_simple' snippet
 */
angular.module('snippets').controller('TableSimpleController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {
        $scope.snippetId = 'table_simple';
        $scope.customers = clientMockData.customers;
    }
]);