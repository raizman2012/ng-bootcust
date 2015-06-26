'use strict';

/**
 * Angular controller for 'table_filter_advanced' snippet
 */
angular.module('snippets').controller('TableFilterAdvancedController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_filter_advanced';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);