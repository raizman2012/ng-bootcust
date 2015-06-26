'use strict';

/**
 * Angular controller for 'list_media' snippet
 */
angular.module('snippets').controller('ListMediaController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'list_media';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);