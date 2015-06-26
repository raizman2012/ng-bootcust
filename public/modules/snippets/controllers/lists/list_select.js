'use strict';

/**
 * Angular controller for 'list_select' snippet
 */
angular.module('snippets').controller('ListSelectController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_select';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);