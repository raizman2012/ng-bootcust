'use strict';

/**
 * Angular controller for 'table_animation' snippet
 */
angular.module('snippets').controller('TableAnimationController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_animation';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);