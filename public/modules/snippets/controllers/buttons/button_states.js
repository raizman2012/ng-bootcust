'use strict';

/**
 * Angular controller for 'button_states' snippet
 */
angular.module('snippets').controller('ButtonStatesController', ['$scope','$timeout',
    function ($scope, $timeout) {
        $scope.snippetId = 'button_states';

        $scope.buttons = {
            'load' : {
                'disabled' : false,
                'loading' : false
            },
            'save' : {
                'disabled' : false,
                'loading' : false
            },
            'cancel' : {
                'disabled' : false,
                'loading' : false
            },
            'delete' : {
                'disabled' : true,
                'loading' : false
            }
        };

        $scope.pressButton = function(buttonId) {
            $scope.buttons[buttonId].loading = true;
            $scope.buttons[buttonId].disabled = true;
            $timeout( function(){
                $scope.buttons[buttonId].loading = false;
                $scope.buttons[buttonId].result = 'success';
                $timeout( function(){
                    $scope.buttons[buttonId].loading = false;
                    $scope.buttons[buttonId].disabled = false;
                    $scope.buttons[buttonId].result = undefined;
                }, 2000);
            }, 2000);
        }
    }
]);