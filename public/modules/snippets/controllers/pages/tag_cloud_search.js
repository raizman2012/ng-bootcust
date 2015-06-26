'use strict';

/**
 * Angular controller for 'tag_cloud_search' snippet
 */
angular.module('snippets').controller('TagCloudSearchController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'tag_cloud_search';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);