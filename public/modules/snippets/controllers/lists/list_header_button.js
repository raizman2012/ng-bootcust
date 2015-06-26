'use strict';

/**
 * Angular controller for 'list_header_button' snippet
 */
angular.module('snippets').controller('ListHeaderButtonController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_header_button';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);