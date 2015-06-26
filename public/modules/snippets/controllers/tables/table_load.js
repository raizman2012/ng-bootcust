'use strict';

/**
 * Angular controller for 'table_load' snippet
 */
angular.module('snippets').controller('TableLoadController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_load';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);