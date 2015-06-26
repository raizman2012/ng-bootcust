'use strict';

/**
 * Angular controller for 'directory' snippet
 */
angular.module('snippets').controller('DirectoryController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'directory';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);