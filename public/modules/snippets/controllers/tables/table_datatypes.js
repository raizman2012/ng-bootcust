'use strict';

/**
 * Angular controller for 'table_datatypes' snippet
 */
angular.module('snippets').controller('TableDatatypesController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_datatypes';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);