'use strict';

/**
 * Angular controller for 'list_autocomplete' snippet
 */
angular.module('snippets').controller('ListAutocompleteController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_autocomplete';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);