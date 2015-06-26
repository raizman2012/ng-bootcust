'use strict';

/**
 * Angular controller for 'dialog_richtext' snippet
 */
angular.module('snippets').controller('DialogRichtextController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'dialog_richtext';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);