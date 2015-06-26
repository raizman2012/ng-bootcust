'use strict';

/**
 * Angular controller for 'button_icons' snippet
 */
angular.module('snippets').controller('ButtonIconsController', ['$scope', 'selectable', 'clientMockData',
    function ($scope, selectable, clientMockData) {

        $scope.snippetId = 'button_icons';


        $scope.optionsSelectable = new selectable(['center', 'left', 'right', 'justify']);
    }
]);