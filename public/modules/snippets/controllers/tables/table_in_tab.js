'use strict';

/**
 * Angular controller for 'table_in_tab' snippet
 */
angular.module('snippets').controller('TableInTabController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_in_tab';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);