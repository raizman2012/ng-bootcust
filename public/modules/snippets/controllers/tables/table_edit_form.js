'use strict';

/**
 * Angular controller for 'table_edit_form' snippet
 */
angular.module('snippets').controller('TableEditFormController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_edit_form';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);