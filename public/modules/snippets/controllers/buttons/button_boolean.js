'use strict';

/**
 * Angular controller for 'button_boolean' snippet
 */
angular.module('snippets').controller('ButtonBooleanController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'button_boolean';
        $scope.stateBoolean = true;

        $scope.toggle = function() {
            $scope.stateBoolean = !$scope.stateBoolean;
        }
    }
]);