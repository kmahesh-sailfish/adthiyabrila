/**
 * Created by Mahesh on 1/8/2018.
 */
'use strict';
// Declare app level module which depends on views, and components
var Adbapp = angular.module('abpib', ['ngMaterial', 'ui.router','chart.js','ui.bootstrap','ui.grid']);


// Declare the providers only handle the config method

Adbapp.config(['$stateProvider', '$httpProvider', '$urlRouterProvider','ChartJsProvider', function ($stateProvider, $httpProvider, $urlRouterProvider,ChartJsProvider) {
    //called the token passed the header section
    ChartJsProvider.setOptions({
        chartColors: ['#d40f14', '#ed6826']
    });
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    // $httpProvider.interceptors.push('httpInterceptor');
    // var PRODUCTION_SERVER_PATH = 'http://dev.healthwiz.in/';
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                'template': {
                    templateUrl: "views/login.html",
                    controller: 'loginCtrl'
                },
                'header': {
                  "visible":false

                },
                'footer': {
                    'footer': {
                        "visible":false
                    }

                }

            }
        })
        .state('fileupload', {
            url: '/fileupload',
            views: {
                'template': {
                    templateUrl: "views/fileupload.html",
                    controller: 'fileuploadCtrl'
                }
            }
        })
        //checker
        .state('paymentchecker', {
            url: '/paymentchecker',
            views: {
                'template': {
                    templateUrl: "views/checker/paymentchecker.html",
                    controller: 'paymentcheckerCtrl'
                },
                'header': {
                    templateUrl: "views/header.html",
                    controller: "headerCtrl"

                },
                'footer': {
                    templateUrl: "views/footer.html",
                    controller: "footerCtrl"

                }

            }
        })
        .state('paymentmaker', {
            url: '/paymentmaker',
            views: {
                'template': {
                    templateUrl: "views/checker/paymentmaker.html",
                    controller: 'paymentmakerCtrl'
                },
                'header': {
                    templateUrl: "views/header.html",
                    controller: "headerCtrl"

                },
                'footer': {
                    templateUrl: "views/footer.html",
                    controller: "footerCtrl"

                }

            }
        })
        //mandate Section crate and view and update
        .state('createmandate', {
            url: '/createmandate',
            views: {
                'template': {
                    templateUrl: "views/mandate/createmandate.html",
                    controller: 'createMandateCtrl'
                },
                'header': {
                    templateUrl: "views/header.html",
                    controller: "headerCtrl"

                },
                'footer': {
                    templateUrl: "views/footer.html",
                    controller: "footerCtrl"

                }

            }
        })
        .state('verifymandate', {
            url: '/verifymandate',
            views: {
                'template': {
                    templateUrl: "views/mandate/verifymandate.html",
                    controller: 'verifyMandateCtrl'
                },
                'header': {
                    templateUrl: "views/header.html",
                    controller: "headerCtrl"

                },
                'footer': {
                    templateUrl: "views/footer.html",
                    controller: "footerCtrl"

                }

            }
        })
        //operation Section
        .state('operations', {
            url: '/operations',
            views:
                {
                    'template': {
                        templateUrl: "views/operations.html",
                        controller: 'operationCtrl'
                    },
                    'header': {
                        templateUrl: "views/header.html",
                        controller: "headerCtrl"

                    },
                    'footer': {
                        templateUrl: "views/footer.html",
                        controller: "footerCtrl"

                    }


                }

        })
        //dashBoard section
        .state('dashboard', {
            url: '/dashboard',
            views:
                {
                    'template': {
                        templateUrl: "views/dashboard.html",
                        controller: 'dashboardCtrl'
                    },
                    'header': {
                        templateUrl: "views/header.html",
                        controller: "headerCtrl"

                    },
                    'footer': {
                        templateUrl: "views/footer.html",
                        controller: "footerCtrl"

                    }

                }
        })
}]);