'use strict';

/**
 * Angular controller for 'table_load_progress' snippet
 */
angular.module('snippets').controller('TableLoadProgressController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_load_progress';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);