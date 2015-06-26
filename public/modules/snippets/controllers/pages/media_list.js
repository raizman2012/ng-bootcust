'use strict';

/**
 * Angular controller for 'media_list' snippet
 */
angular.module('snippets').controller('MediaListController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'media_list';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);