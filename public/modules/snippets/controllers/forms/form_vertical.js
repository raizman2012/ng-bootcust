'use strict';

/**
 * Angular controller for 'form_vertical' snippet
 */
angular.module('snippets').controller('FormVerticalController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'form_vertical';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);