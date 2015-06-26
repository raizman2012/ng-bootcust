'use strict';

/**
 * Angular controller for 'table_actions_inrow' snippet
 */
angular.module('snippets').controller('TableActionsInrowController', ['$scope', 'selectable', '$timeout', 'clientMockData',
    function ($scope, selectable, $timeout, clientMockData) {

        $scope.snippetId = 'table_actions_inrow';

        $scope.selectableCustomers = new selectable(clientMockData.customers);
        $scope.lastRemoved = [];
        $scope.timeoutPromise = undefined;

        $scope.remove = function() {
            if ($scope.timeoutPromise !== undefined) {
                return;
            }
            var index = $scope.selectableCustomers.getSelectedIndex();
            if (index != -1) {
                $scope.selectableCustomers.unselectIndex(index);
                $scope.lastRemoved = $scope.selectableCustomers.getList()[index];
                $scope.selectableCustomers.list.splice(index, 1);

                $scope.timeoutPromise = $timeout(function() {
                    $scope.lastRemoved = undefined;
                    $scope.timeoutPromise = undefined;
                }, 2000);
            }
        }

        $scope.undoLastRemove = function() {
            $scope.selectableCustomers.getList().push($scope.lastRemoved);
            $scope.lastRemoved = undefined;
            $scope.timeoutPromise = undefined;
        }
    }
]);