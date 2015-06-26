'use strict';

/**
 * Angular controller for 'button_toolbar' snippet
 */
angular.module('snippets').controller('ButtonToolbarController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'button_toolbar';
        $scope.options = ['facebook', 'twitter', 'github', 'linkedin', 'instagram', 'digg'];
    }
]);