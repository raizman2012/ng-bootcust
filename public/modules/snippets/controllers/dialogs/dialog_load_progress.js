'use strict';

/**
 * Angular controller for 'dialog_load_progress' snippet
 */
angular.module('snippets').controller('DialogLoadProgressController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'dialog_load_progress';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);