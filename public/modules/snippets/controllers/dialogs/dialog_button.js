'use strict';

/**
 * Angular controller for 'dialog_button' snippet
 */
angular.module('snippets').controller('DialogButtonController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'dialog_button';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);