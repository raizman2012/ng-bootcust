'use strict';

/**
 * Angular controller for 'table_pdf' snippet
 */
angular.module('snippets').controller('TablePdfController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_pdf';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);