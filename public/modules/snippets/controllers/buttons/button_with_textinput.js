'use strict';

/**
 * Angular controller for 'button_with_textinput' snippet
 */
angular.module('snippets').controller('ButtonWithTextinputController', ['$scope',
    function ($scope) {

        $scope.snippetId = 'button_with_textinput';

        $scope.value = '';
        $scope.valueAdvanced = '';
        $scope.message = 'Press the button';
        $scope.search = function() {
            $scope.message = 'search for:'+$scope.value;
        }

        $scope.searchAdvanced = function(option) {
            $scope.message = 'advanced search for:'+$scope.valueAdvanced+' option:'+option;
        }
    }
]);