'use strict';

/**
 * Angular controller for 'form_colors_sizes' snippet
 */
angular.module('snippets').controller('FormColorsSizesController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'form_colors_sizes';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);