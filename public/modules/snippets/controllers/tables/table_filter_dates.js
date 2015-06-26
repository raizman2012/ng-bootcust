'use strict';

/**
 * Angular controller for 'table_filter_dates' snippet
 */
angular.module('snippets').controller('TableFilterDatesController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_filter_dates';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);