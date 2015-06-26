'use strict';

/**
 * Angular controller for 'list_menu' snippet
 */
angular.module('snippets').controller('ListMenuController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_menu';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);