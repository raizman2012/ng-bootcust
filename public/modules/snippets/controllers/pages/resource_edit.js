'use strict';

/**
 * Angular controller for 'resource_edit' snippet
 */
angular.module('snippets').controller('ResourceEditController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'resource_edit';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);