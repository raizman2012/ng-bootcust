'use strict';

/**
 * Angular controller for 'table_edit_popup' snippet
 */
angular.module('snippets').controller('TableEditPopupController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_edit_popup';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);