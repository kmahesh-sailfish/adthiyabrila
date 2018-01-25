'use strict';
(function () {
    var Adbapp = angular.module('abpib');
    Adbapp.controller('paymentcheckerCtrl', ['$scope', '$state','$filter','userStroage','adithyaServices','$modal','$log',
        function ($scope, $state,$filter,userStroage,adithyaServices,$modal,$log) {
            var pm = this;
            $(".ClassName").css('overflow','');
            pm.myData = [
                {
                    firstName: "Cox",
                    lastName: "Carney",
                    company: "Enormo",
                    employed: true
                },
                {
                    firstName: "Lorraine",
                    lastName: "Wise",
                    company: "Comveyer",
                    employed: false
                },
                {
                    firstName: "Nancy",
                    lastName: "Waters",
                    company: "Fuelton",
                    employed: false
                }
            ];
            pm.myData={
                "utilityCode": "",
                "sponoserCode": "",
                "sysDate": "",
                "mandateTransactions": [
                {
                    "customerName": "syed",
                    "custId": "456123",
                    "installment": "4/36",
                    "loanAmount": "500",
                    "loanType": "Personal",
                    "outstanding": "1,00,000",
                    "dueAmount": "11,000",
                    "dueDate": "11/05/2017",
                    "collectionDate": "05/11/2017",
                    "collectionAmount": "7,000",
                    "umrn": "",
                    "remarks": "Icon",
                    "selectFlag": false
                },
                {
                    "customerName": "john done dfdfdf",
                    "custId": "1234544",
                    "installment": "4/36",
                    "loanAmount": '5,000',
                    "loanType": "Personal",
                    "outstanding": "1,00,000",
                    "dueAmount": "11,000",
                    "dueDate": "11/05/2017",
                    "collectionDate": "05/11/2017",
                    "collectionAmount": "7,000",
                    "umrn": "",
                    "remarks": "Icon",
                    "selectFlag": false
                },
                {
                    "customerName": "Abhay",
                    "custId": "VENK00003",
                    "installment": "3/36",
                    "loanAmount": "199",
                    "loanType": "Personal",
                    "outstanding": "1,00,000",
                    "dueAmount": "11,000",
                    "dueDate": "11/05/2017",
                    "collectionDate": "05/11/2017",
                    "collectionAmount": "10,000",
                    "umrn": "",
                    "remarks": "Icon",
                    "selectFlag": false
                }
            ]
            }
            $scope.currentNavItem = $state.current.name;
            var token=userStroage.get('access_token');
            adithyaServices.paymentChecker(token).then(function (d) {
                pm.mandateTransactions=d.mandateTransactions
            });
            pm.updateChecker=function (data) {
                pm.paymentcherUpdate = $filter('filter')(data,{selectFlag:'Y'});
                var obj={
                    "utilityCode": "",
                    "sponoserCode": "",
                    "sysDate": "",
                    "mandateTransactions":pm.paymentcherUpdate
                };
                console.log(obj);
                adithyaServices.updatePaymentchecker(obj,token).then(function (d) {
                    var modalInstance = $modal.open({
                        templateUrl: 'views/myModalContent.html',
                        controller: ModalInstanceCtrl,
                        backdrop: true,
                        keyboard: true,
                        backdropClick: true,
                        size: 'md',
                        resolve: {
                            data: function () {
                                return d;
                            }
                        }
                    });
                    modalInstance.result.then(function (selectedItem) {
                        $scope.selected = selectedItem;
                        //alert( $scope.selected);
                    }, function () {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                })
            };

        }
    ]);
    var ModalInstanceCtrl = function ($scope, $modalInstance, data) {
        $scope.data=data;
        if($scope.data.status == 'SUCCESS' && $scope.data.status !=undefined)
        {
            $scope.data.message="Mandates Uploaded Successfully";
            $scope.data.mode='success';
        }else{
            $scope.data.mode='danger';
            $scope.data.message="Mandates Upload Failed";
        }

        $scope.close = function (/*result*/) {
            $modalInstance.close($scope.data);
        };
    };
})();