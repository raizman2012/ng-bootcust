'use strict';

/**
 * Angular controller for 'popup_message' snippet
 */
angular.module('snippets').controller('PopupMessageController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'popup_message';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);