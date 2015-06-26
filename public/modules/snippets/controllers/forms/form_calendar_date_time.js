'use strict';

/**
 * Angular controller for 'form_calendar_date_time' snippet
 */
angular.module('snippets').controller('FormCalendarDateTimeController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'form_calendar_date_time';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);