'use strict';

/**
 * Angular controller for 'table_panel_buttons' snippet
 */
angular.module('snippets').controller('TablePanelButtonsController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_panel_buttons';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);