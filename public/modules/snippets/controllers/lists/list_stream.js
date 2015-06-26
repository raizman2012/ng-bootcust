'use strict';

/**
 * Angular controller for 'list_stream' snippet
 */
angular.module('snippets').controller('ListStreamController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_stream';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);