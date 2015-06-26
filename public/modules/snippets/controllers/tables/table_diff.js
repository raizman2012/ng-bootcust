'use strict';

/**
 * Angular controller for 'table_diff' snippet
 */
angular.module('snippets').controller('TableDiffController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_diff';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);