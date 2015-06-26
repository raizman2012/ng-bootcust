'use strict';

/**
 * Angular controller for 'progress' snippet
 */
angular.module('snippets').controller('ProgressController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'progress';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);