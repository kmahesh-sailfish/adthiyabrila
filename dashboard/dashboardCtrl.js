/**
 * Created by Mahesh on 1/8/2018.
 */
(function() {
    var Adbapp = angular.module('abpib');

    Adbapp.controller('dashboardCtrl', ['$scope','userStroage','adithyaServices',
        function($scope,userStroage,adithyaServices) {
            //ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
            var token=userStroage.get('access_token');
            var db=this;
            $scope.currentNavItem = "Dashboard";
            db.manDateval=[];
            db.collection=[];
          /*  db.manDateval=[40,50];
            db.collection=[50,40];*/
            db.options = {
                cutoutPercentage: 75,
                legend: {
                    display: true,
                    position: 'bottom'
                }
            };
          //  db.options = {cutoutPercentage: 75};
            db.mandtlabels = ["Response Received","Response Pending"];
            db.collectionlab=["Response Collection Received","Response Collection Pending"];
            adithyaServices.dashBoard(token).then(function (d) {
                db.totalResponseReceived=d.totalResponseReceived;
                db.totalResponsePending=d.totalResponsePending;
                db.responseReceivedSuccess=d.responseReceivedSuccess;
                db.responseReceivedFailure=d.responseReceivedFailure;
                db.responsePendingLessthan10days=d.responsePendingLessthan10days;
                db.responsePendingmorethan10days=d.responsePendingmorethan10days;
                db.manDateval.push(d.totalResponseReceived,d.totalResponsePending);
                db.totalMandatesCreated=d.totalMandatesCreated;
                // collection section
                db.collection=[50,40]
                // $scope.collection.push(d.totalCollectionRequestSent);
                db.totalCollectionResponseReceived=d.totalCollectionResponseReceived;
                db.failedCollectionsAmount=d.failedCollectionsAmount;
                db.successCollectionsAmount=d.successCollectionsAmount;
                db.collectionResponseReceivedSuccess=d.collectionResponseReceivedSuccess;
                db.collectionResponseReceivedFailure=d.collectionResponseReceivedFailure;

            })
        }
    ]);
})();