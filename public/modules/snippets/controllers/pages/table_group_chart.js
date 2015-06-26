'use strict';

/**
 * Angular controller for 'table_group_chart' snippet
 */
angular.module('snippets').controller('TableGroupChartController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_group_chart';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);