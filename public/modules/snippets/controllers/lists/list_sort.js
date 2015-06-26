'use strict';

/**
 * Angular controller for 'list_sort' snippet
 */
angular.module('snippets').controller('ListSortController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_sort';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);