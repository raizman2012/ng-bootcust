'use strict';

/**
 * Angular controller for 'comments_widget' snippet
 */
angular.module('snippets').controller('CommentsWidgetController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'comments_widget';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);