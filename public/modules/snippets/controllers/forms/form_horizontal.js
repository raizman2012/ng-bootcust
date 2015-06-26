'use strict';

/**
 * Angular controller for 'form_horizontal' snippet
 */
angular.module('snippets').controller('FormHorizontalController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'form_horizontal';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);