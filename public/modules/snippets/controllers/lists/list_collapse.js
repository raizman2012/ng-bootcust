'use strict';

/**
 * Angular controller for 'list_collapse' snippet
 */
angular.module('snippets').controller('ListCollapseController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_collapse';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);