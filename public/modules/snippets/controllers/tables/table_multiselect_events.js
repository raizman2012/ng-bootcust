'use strict';

/**
 * Angular controller for 'table_multiselect_events' snippet
 */
angular.module('snippets').controller('TableMultiselectEventsController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_multiselect_events';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);