'use strict';

/**
 * Angular controller for 'form_formats' snippet
 */
angular.module('snippets').controller('FormFormatsController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'form_formats';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);