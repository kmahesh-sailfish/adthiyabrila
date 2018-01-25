/**
 * Created by Mahesh on 1/9/2018.
 */

(function () {
    var Adbapp = angular.module('abpib');

    Adbapp.controller('loginCtrl', ['$scope', '$state', 'adithyaServices', 'userStroage',
        function ($scope, $state, adithyaServices, userStroage) {
            var vm = this;

            vm.submit = function () {
                var data = {
                    "username": 'middleware',
                    "password": 'secret'
                };
                var encoded = btoa("middleware:secret");
                adithyaServices.loginNec(encoded).then(function (d) {
                    if (d.access_token != null) {
                        userStroage.set('access_token', d.access_token);
                        $state.go('dashboard');
                    }


                });


            }
        }
    ]);
})();