'use strict';

/**
 * Angular controller for 'table_messages' snippet
 */
angular.module('snippets').controller('TableMessagesController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_messages';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);