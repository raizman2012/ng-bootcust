'use strict';

/**
 * Angular controller for 'form_animation' snippet
 */
angular.module('snippets').controller('FormAnimationController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'form_animation';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);