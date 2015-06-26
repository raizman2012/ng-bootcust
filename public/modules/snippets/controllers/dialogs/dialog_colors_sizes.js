'use strict';

/**
 * Angular controller for 'dialog_colors_sizes' snippet
 */
angular.module('snippets').controller('DialogColorsSizesController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'dialog_colors_sizes';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);