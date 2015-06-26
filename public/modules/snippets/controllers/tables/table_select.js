'use strict';

/**
 * Angular controller for 'table_select' snippet
 */
angular.module('snippets').controller('TableSelectController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_select';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);