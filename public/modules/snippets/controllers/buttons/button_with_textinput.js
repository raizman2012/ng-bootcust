'use strict';

/**
 * Angular controller for 'button_with_textinput' snippet
 */
angular.module('snippets').controller('ButtonWithTextinputController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'button_with_textinput';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);