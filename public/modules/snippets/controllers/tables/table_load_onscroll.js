'use strict';

/**
 * Angular controller for 'table_load_onscroll' snippet
 */
angular.module('snippets').controller('TableLoadOnscrollController', ['$scope', 'clientMockData',
    function ($scope, clientMockData) {

        $scope.snippetId = 'table_load_onscroll';
        console.log($scope.snippetId+ ' ok. data:', clientMockData.customers);
    }
]);