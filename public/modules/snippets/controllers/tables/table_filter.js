'use strict';

/**
 * Angular controller for 'table_filter' snippet
 */
angular.module('snippets').controller('TableFilterController', ['$scope', 'crud', 'action', '$timeout', 'clientMockData',
    function ($scope, crud, action, $timeout, clientMockData) {

        $scope.snippetId = 'table_filter';
        $scope.searchPanelOpen = false;

        $scope.age = 18;
        $scope.fullName = '';
        $scope.income = 0;
        $scope.status = 'single';

        $scope.customersData = new crud(clientMockData.customers, ['age']);

        $scope.toggleSearchPanel = function() {
            $scope.searchPanelOpen =  !$scope.searchPanelOpen;
        }

        $scope.search = function() {
            $scope.searchAction.processing();
            $timeout(function() {


                $scope.searchAction.normal();
            }, 1000);
        }

        $scope.searchAction = new action('search', $scope);
    }
]);