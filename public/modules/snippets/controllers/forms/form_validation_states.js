'use strict';

/**
 * Angular controller for 'form_validation_states' snippet
 */
angular.module('snippets').controller('FormValidationStatesController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'form_validation_states';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);