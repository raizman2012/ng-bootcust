'use strict';

/**
 * Angular controller for 'form_button' snippet
 */
angular.module('snippets').controller('FormButtonController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'form_button';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);