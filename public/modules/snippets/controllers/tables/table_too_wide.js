'use strict';

/**
 * Angular controller for 'table_too_wide' snippet
 */
angular.module('snippets').controller('TableTooWideController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_too_wide';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);