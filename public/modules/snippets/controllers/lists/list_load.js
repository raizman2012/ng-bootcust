'use strict';

/**
 * Angular controller for 'list_load' snippet
 */
angular.module('snippets').controller('ListLoadController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_load';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);