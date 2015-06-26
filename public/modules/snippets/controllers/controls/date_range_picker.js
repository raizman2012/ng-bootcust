'use strict';

/**
 * Angular controller for 'date_range_picker' snippet
 */
angular.module('snippets').controller('DateRangePickerController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'date_range_picker';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);