'use strict';

/**
 * Angular controller for 'form_file_upload' snippet
 */
angular.module('snippets').controller('FormFileUploadController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'form_file_upload';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);