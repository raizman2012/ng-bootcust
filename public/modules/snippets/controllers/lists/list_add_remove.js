'use strict';

/**
 * Angular controller for 'list_add_remove' snippet
 */
angular.module('snippets').controller('ListAddRemoveController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_add_remove';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);