'use strict';

/**
 * Angular controller for 'table_tree' snippet
 */
angular.module('snippets').controller('TableTreeController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_tree';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);