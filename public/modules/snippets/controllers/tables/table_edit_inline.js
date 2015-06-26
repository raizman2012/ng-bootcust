'use strict';

/**
 * Angular controller for 'table_edit_inline' snippet
 */
angular.module('snippets').controller('TableEditInlineController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_edit_inline';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);