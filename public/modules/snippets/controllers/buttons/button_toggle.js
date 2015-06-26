'use strict';

/**
 * Angular controller for 'button_toggle' snippet
 */
angular.module('snippets').controller('ButtonToggleController', ['$scope', 'selectable', 'clientMockData',
    function ($scope, selectable, clientMockData) {

        $scope.snippetId = 'button_toggle';
        $scope.optionsSelectable = new selectable(['bold', 'italic', 'underline']);
    }
]);