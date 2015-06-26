'use strict';

/**
 * Angular controller for 'table_group' snippet
 */
angular.module('snippets').controller('TableGroupController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_group';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);