'use strict';

/**
 * Angular controller for 'two_table' snippet
 */
angular.module('snippets').controller('TwoTableController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'two_table';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);