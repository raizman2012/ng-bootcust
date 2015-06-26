'use strict';

/**
 * Angular controller for 'list_grid' snippet
 */
angular.module('snippets').controller('ListGridController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_grid';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);