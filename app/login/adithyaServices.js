(function () {
    'use strict';
    var Adbapp = angular.module('abpib');
    Adbapp.factory('adithyaServices', function adithyaServices($http) {
        var url = "https://13.126.208.204:8441/oauth/token?grant_type=client_credentials";
        return {
            loginNec: function (encode) {
                return $http({
                    method: 'POST',
                    url: url,
                    headers: {
                        "Authorization": "Basic " + encode,
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }

                }).then(function (result) {

                    return result.data;
                });
            },
            updatePaymentchecker: function (datas,token) {
                var url = "https://13.126.208.204:8441/middleware/nachMandateOperation/updateMandateTransactions";
                var acctoken = "bearer" + " " + token;
                return $http({
                    method: 'POST',
                    url: url,
                    headers: {
                        "Authorization": acctoken,
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    data:datas
                }).then(function (result) {
                    return result.data;
                })
            },
            paymentChecker: function (token) {
                var url = "https://13.126.208.204:8441/middleware/nachMandateOperation/getMandateTransactions";
                var acctoken = "bearer" + " " + token;
                // var url="https://13.126.208.204:8441/oauth/token?grant_type=client_credentials";
                return $http({
                    method: "GET",
                    url: url,
                    headers: {
                        "Authorization": acctoken
                    }
                }).then(function (result) {
                    return result.data;
                })

            },

            dashBoard: function (token) {
               var url=" https://13.126.208.204:8441/middleware/nachMandateOperation/dashboardDetails?mfilter=''&cfilter=''";
                var acctoken = "bearer" + "" + token;
                // var url="https://13.126.208.204:8441/oauth/token?grant_type=client_credentials";
                return $http({
                    method: "GET",
                    url: url,
                    headers: {
                        "Authorization": acctoken
                    }
                }).then(function (result) {
                    return result.data;
                })

            }
        }
    });


})();
