'use strict';

/**
 * Angular controller for 'list_paging_server' snippet
 */
angular.module('snippets').controller('ListPagingServerController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_paging_server';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);