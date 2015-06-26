'use strict';

/**
 * Angular controller for 'list_flow' snippet
 */
angular.module('snippets').controller('ListFlowController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_flow';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);