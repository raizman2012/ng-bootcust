'use strict';

/**
 * Angular controller for 'calendar_big' snippet
 */
angular.module('snippets').controller('CalendarBigController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'calendar_big';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);