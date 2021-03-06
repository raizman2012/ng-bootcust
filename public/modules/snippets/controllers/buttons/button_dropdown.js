'use strict';

/**
 * Angular controller for 'button_dropdown' snippet
 */
angular.module('snippets').controller('ButtonDropdownController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'button_dropdown';
        $scope.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];

        $scope.status = {
            isopen: false
        };

        $scope.toggled = function(open) {
            console.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };
    }
]);