/**
 * Created by Mahesh on 1/9/2018.
 */
(function() {
    var Adbapp = angular.module('abpib');

    Adbapp.controller('headerCtrl', ['$scope','$state',
        function($scope,$state) {
            $scope.currentNavItem = $state.current.name;
        }
    ]);
})();