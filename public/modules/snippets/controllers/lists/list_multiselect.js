'use strict';

/**
 * Angular controller for 'list_multiselect' snippet
 */
angular.module('snippets').controller('ListMultiselectController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_multiselect';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);