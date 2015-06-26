'use strict';

/**
 * Angular controller for 'button_in_tab' snippet
 */
angular.module('snippets').controller('ButtonInTabController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'button_in_tab';
        $scope.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
            { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
        ];
    }
]);