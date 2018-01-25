'use strict';
(function() {
    var Adbapp = angular.module('abpib');

Adbapp.controller('footerCtrl', ['$scope','$state',
function($scope,$state) {
var vm = this;

vm.submit = function() {
$state.go('dashboard');
}
}
]);
})();