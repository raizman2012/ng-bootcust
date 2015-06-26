'use strict';

/**
 * Angular controller for 'button_animation' snippet
 */
angular.module('snippets').controller('ButtonAnimationController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.count = 0;
        $scope.snippetId = 'button_animation';
        $scope.click = function () {
            $scope.count++;
           // do something
        }
    }
]);