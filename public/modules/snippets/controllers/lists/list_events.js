'use strict';

/**
 * Angular controller for 'list_events' snippet
 */
angular.module('snippets').controller('ListEventsController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_events';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);