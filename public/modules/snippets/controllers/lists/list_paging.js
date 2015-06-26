'use strict';

/**
 * Angular controller for 'list_paging' snippet
 */
angular.module('snippets').controller('ListPagingController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_paging';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);