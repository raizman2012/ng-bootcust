'use strict';

/**
 * Angular controller for 'table_excell' snippet
 */
angular.module('snippets').controller('TableExcellController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_excell';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);