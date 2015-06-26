'use strict';

/**
 * Angular controller for 'table_crud_server' snippet
 */
angular.module('snippets').controller('TableCrudServerController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_crud_server';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);