'use strict';

/**
 * Angular controller for 'table_multiselect' snippet
 */
angular.module('snippets').controller('TableMultiselectController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_multiselect';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);