'use strict';

/**
 * Angular controller for 'table_custom_total' snippet
 */
angular.module('snippets').controller('TableCustomTotalController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_custom_total';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);