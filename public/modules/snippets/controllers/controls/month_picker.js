'use strict';

/**
 * Angular controller for 'month_picker' snippet
 */
angular.module('snippets').controller('MonthPickerController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'month_picker';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);