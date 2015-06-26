'use strict';

/**
 * Angular controller for 'button_as_select' snippet
 */
angular.module('snippets').controller('ButtonAsSelectController', ['$scope', 'selectable', 'clientMockData',
    function ($scope, selectable, clientMockData) {

        $scope.snippetId = 'button_as_select';
        
        $scope.optionsSelectable = new selectable(['bad', 'acceptable', 'good', 'excellent']);
    }
]);