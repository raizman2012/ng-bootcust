'use strict';

/**
 * Angular controller for 'chart_table_group' snippet
 */
angular.module('snippets').controller('ChartTableGroupController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'chart_table_group';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);