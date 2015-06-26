'use strict';

/**
 * Angular controller for 'table_panel' snippet
 */
angular.module('snippets').controller('TablePanelController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_panel';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);