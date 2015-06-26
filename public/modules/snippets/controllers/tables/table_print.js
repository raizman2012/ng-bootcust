'use strict';

/**
 * Angular controller for 'table_print' snippet
 */
angular.module('snippets').controller('TablePrintController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_print';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);