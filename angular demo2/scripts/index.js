var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/demo.html",
        controller : "appCtrl"
    })
    .when("/Account", {
        templateUrl : "partials/account.html",
        controller : "appCtrl"
    })
    .when("/Account2", {
        templateUrl : "partials/account2.html",
        controller : "appCtrl"
    });
});

app.controller('appCtrl', ['$scope', function( $scope ) {
         $scope.accounts =
         [
            {
               accountNumber: '10000001',
               accountName: 'Checking',
               toggleAll: true,
               wireTransfer: true,
               internalTransfer: true,
               billPayment: true,
               informationReporting: true,
               selected: false
            },
            {
               accountNumber: '10000002',
               accountName: 'Saving',
               toggleAll: true,
               wireTransfer: false,
               internalTransfer: true,
               billPayment: false,
               informationReporting: false,
               selected: false
            },
            {
               accountNumber: '10000003',
               accountName: 'Money Market',
               toggleAll: true,
               wireTransfer: false,
               internalTransfer: true,
               billPayment: false,
               informationReporting: false,
               selected: false
            },
            {
               accountNumber: '10000004',
               accountName: 'Escrow',
               toggleAll: false,
               wireTransfer: true,
               internalTransfer: false,
               billPayment: true,
               informationReporting: false,
               selected: false
            }
         ];

         $scope.entitlements = [
             {
                 name:'Bill Payment',
                 selected: false
             },
             {
                 name:'Account Transfer',
                 selected: false
             },
             {
                 name:'Internal Transfer',
                 selected: false
             },
             {
                 name:'Wire Transfer',
                 selected: false
             },
             {
                 name:'Information Reporting',
                 selected: false
             }
         ];

        $scope.checkAll = function (account) {
            account.wireTransfer = account.toggleAll;
            account.internalTransfer = account.toggleAll;
            account.billPayment = account.toggleAll;
            account.informationReporting = account.toggleAll;
        };

        $scope.save = function(){
          var ent = [];
          var acct = [];

          angular.forEach($scope.entitlements, function(entitlement){
            if (entitlement.selected) ent.push(entitlement.name);
          })

          angular.forEach($scope.accounts, function(account){
            if (account.selected) acct.push(account.accountNumber);
          })

          var entJSON = JSON.stringify(ent);
          var acctJSON = JSON.stringify(acct);
          var alertString = "Assign "+entJSON+" to "+ acctJSON;
          alert(alertString);
        }
}]);