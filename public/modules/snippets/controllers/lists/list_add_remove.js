'use strict';

/**
 * Angular controller for 'list_add_remove' snippet
 */
angular.module('snippets').controller('ListAddRemoveController', ['$scope', 'sortable', 'crud', 'async', 'clientMockData', '$timeout',
    function ($scope, sortable, crud, async, clientMockData, $timeout) {

        $scope.snippetId = 'list_add_remove';
        var asyncMessages = new async();

        $scope.snippetId = 'table_crud';

        $scope.asyncMessages = asyncMessages;

        $scope.messageId = '';

        $scope.customersData = new crud(clientMockData.customers, ['age']);

        $scope.searchPanelOpen = false;

        $scope.toggleSearchPanel = function() {
            $scope.searchPanelOpen =  !$scope.searchPanelOpen;
        }

        $scope.reload = function() {
            $scope.customersData.setLoading(true);
            $timeout(function() {
                $scope.customersData.setLoading(false);
            }, 3000);
        }

        $scope.add = function() {
            $scope.customersData.inAdd = true;
            $scope.customersData.newItem =  {
                'id': '0045',
                'name' : 'Ivanov0New Leonid0New',
                'age' : 42,
                'address' : 'Ramat Gan',
                'status' : 'married',
                'work' : 'BANK CITY',
                'income' : 13000,
                'valid' : true,
                'registrated_date' : '01/01/1971',
                'about' : 'looks for startup to invest',
                'likes' : 'computers music vine ski'
            }
        }

        $scope.saveAdd = function() {
            $scope.customersData.setLoading(true);

            $timeout(function() {
                $scope.customersData.setLoading(false);
                $scope.customersData.inAdd = false;

                var newItem = $scope.customersData.add();

                $scope.messageId = $scope.asyncMessages.replaceAndDeleteAfterTimeout('customersCrud', { msg : 'added', type: 'success', newItem : newItem}, 3);
            }, 4000);

        }

        $scope.cancelAdd = function() {
            $scope.customersData.inAdd = false;
        }

        $scope.resetAdd = function() {
            $scope.add();
        }

    }
]);