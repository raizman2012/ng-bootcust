'use strict';

/**
 * Angular controller for 'table_actions' snippet
 */
angular.module('snippets').controller('TableActionsController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_actions';
        $scope.customers = clientMockData.customers;

        $scope.reloaded = Date.now();
        $scope.reload = function() {
            $scope.reloaded = Date.now();
        }
    }
]);