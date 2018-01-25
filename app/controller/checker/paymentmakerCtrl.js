'use strict';
(function () {
    var Adbapp = angular.module('abpib');

    Adbapp.controller('paymentmakerCtrl', ['$scope', '$state','$log','$modal',
        function ($scope, $state) {
            var vm = this;
            $scope.currentNavItem = $state.current.name;
            vm.submit = function () {
                $state.go('dashboard');
            }
        }
    ]);
})();