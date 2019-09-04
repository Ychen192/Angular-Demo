var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partial/entitlement.html",
        controller : "appCtrl"
    })
    .when("/Entitlement", {
        templateUrl : "partial/entitlement.html",
        controller : "appCtrl"
    })
    .when("/Template", {
        templateUrl : "partial/template.html",
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
            },
            {
               accountNumber: '10000005',
               accountName: 'Escrow 1',
               toggleAll: false,
               wireTransfer: true,
               internalTransfer: false,
               billPayment: true,
               informationReporting: false,
               selected: false
            },
            {
               accountNumber: '10000006',
               accountName: 'Escrow 2',
               toggleAll: false,
               wireTransfer: true,
               internalTransfer: false,
               billPayment: true,
               informationReporting: false,
               selected: false
            },
            {
               accountNumber: '10000007',
               accountName: 'Escrow 3',
               toggleAll: false,
               wireTransfer: true,
               internalTransfer: false,
               billPayment: true,
               informationReporting: false,
               selected: false
            },
            {
               accountNumber: '10000008',
               accountName: 'Checking 2',
               toggleAll: false,
               wireTransfer: true,
               internalTransfer: false,
               billPayment: true,
               informationReporting: false,
               selected: false
            },
            {
               accountNumber: '10000009',
               accountName: 'Checking 3',
               toggleAll: false,
               wireTransfer: true,
               internalTransfer: false,
               billPayment: true,
               informationReporting: false,
               selected: false
            }
         ];

         $scope.entitlements = [
             {  name:'Wire Transfer',selected: false},
             {  name:'Internal Transfer',selected: false},
             {  name:'ACH Transfer',selected: false},
             {  name:'Bill Payment',selected: false},
             {  name:'Controlled Disbursement',selected: false},
             {  name:'Information Reporting',selected: false},
             {  name:'ARP Positive Pay',selected: false},
             {  name:'CitiFx Pulse',selected: false},
             {  name:'Investments',selected: false},
             {  name:'ACH Positive Pay',selected: false},
             {  name:'Download Services',selected: false},
             {  name:'Trade Services',selected: false},
             {  name:'Payroll Manager',selected: false},
             {  name:'Onsite Official Check',selected: false},
             {  name:'Lockbock',selected: false},
             {  name:'Remote Check Deposit',selected: false}
         ];

         $scope.templates = [
            {  name:'Payment Template', entitlements: ['Wire Transfer','Internal Transfer','ACH Transfer','Bill Payment']},
            {  name:'Information Template', entitlements: ['Information Reporting']},
            {  name:'Third Party Template', entitlements: ['Lockbox','Remote Check Deposit']}
         ]

        $scope.selectAllEntitlement = function(){
            angular.forEach($scope.entitlements, function(entitlement){
               entitlement.selected = $scope.entitlementAll;
            });
        };

        $scope.selectAllAccount = function(){
            angular.forEach($scope.accounts, function(account){
                account.selected = $scope.accountAll;
            });
        };

//        $scope.save = function(){
//          var ent = [];
//          var acct = [];
//
//          angular.forEach($scope.entitlements, function(entitlement){
//            if (entitlement.selected) ent.push(entitlement.name);
//
//          });
//
//          angular.forEach($scope.accounts, function(account){
//            if (account.selected) acct.push(account.accountNumber);
//          });
//
//          var entJSON = JSON.stringify(ent);
//          var acctJSON = JSON.stringify(acct);
//          var alertString = "Assign "+entJSON+" to "+ acctJSON;
//          alert(alertString);
//        };
}]);