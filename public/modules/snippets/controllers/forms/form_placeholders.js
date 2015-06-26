'use strict';

/**
 * Angular controller for 'form_placeholders' snippet
 */
angular.module('snippets').controller('FormPlaceholdersController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'form_placeholders';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);