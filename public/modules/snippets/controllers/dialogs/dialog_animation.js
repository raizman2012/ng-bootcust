'use strict';

/**
 * Angular controller for 'dialog_animation' snippet
 */
angular.module('snippets').controller('DialogAnimationController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'dialog_animation';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);