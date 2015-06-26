'use strict';

/**
 * Angular controller for 'structure_view' snippet
 */
angular.module('snippets').controller('StructureViewController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'structure_view';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);