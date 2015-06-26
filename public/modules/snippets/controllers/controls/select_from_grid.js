'use strict';

/**
 * Angular controller for 'select_from_grid' snippet
 */
angular.module('snippets').controller('SelectFromGridController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'select_from_grid';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);