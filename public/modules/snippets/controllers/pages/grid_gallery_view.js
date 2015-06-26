'use strict';

/**
 * Angular controller for 'grid_gallery_view' snippet
 */
angular.module('snippets').controller('GridGalleryViewController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'grid_gallery_view';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);