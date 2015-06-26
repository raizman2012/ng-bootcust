'use strict';

/**
 * Angular controller for 'list_change_order' snippet
 */
angular.module('snippets').controller('ListChangeOrderController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_change_order';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);