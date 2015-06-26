'use strict';

/**
 * Angular controller for 'list_animation' snippet
 */
angular.module('snippets').controller('ListAnimationController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_animation';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);