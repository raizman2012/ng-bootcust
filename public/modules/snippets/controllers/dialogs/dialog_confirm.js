'use strict';

/**
 * Angular controller for 'dialog_confirm' snippet
 */
angular.module('snippets').controller('DialogConfirmController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'dialog_confirm';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);