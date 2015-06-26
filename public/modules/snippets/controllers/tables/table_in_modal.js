'use strict';

/**
 * Angular controller for 'table_in_modal' snippet
 */
angular.module('snippets').controller('TableInModalController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_in_modal';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);