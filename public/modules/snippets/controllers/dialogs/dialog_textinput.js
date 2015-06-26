'use strict';

/**
 * Angular controller for 'dialog_textinput' snippet
 */
angular.module('snippets').controller('DialogTextinputController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'dialog_textinput';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);