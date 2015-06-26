'use strict';

/**
 * Angular controller for 'dialog_table_button' snippet
 */
angular.module('snippets').controller('DialogTableButtonController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'dialog_table_button';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);