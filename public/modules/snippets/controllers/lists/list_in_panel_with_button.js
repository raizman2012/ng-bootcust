'use strict';

/**
 * Angular controller for 'list_in_panel_with_button' snippet
 */
angular.module('snippets').controller('ListInPanelWithButtonController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_in_panel_with_button';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);