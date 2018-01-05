var app = angular.module('siriBooks',['ui.router','ngMaterial','ngSanitize','ui.grid','ui.grid.selection','ui.grid.resizeColumns','ui.grid.pagination','ui.grid.grouping','ui.grid.exporter','ui.grid.expandable','ngMessages','flow','ngFileUpload','ui.grid.edit']);

app.config(function($stateProvider , $urlRouterProvider,  $locationProvider , flowFactoryProvider , $mdDateLocaleProvider) {
    $stateProvider
    .state('Login', {
        url: '/login',
        templateUrl: 'application/Partials/login.html',
        controller : 'LoginCtrl'
    })
    .state('SetPassword', {
        url: '/setpassword',
        controller: function( $location , $state){
            var url = $location.$$url.split("?");
            var params = url[1].split("&");
            $state.go('PasswordReset' , {data : params});
       }
      })
    .state('PasswordReset', {
        url: '/passwordReset',
        templateUrl: 'application/Partials/passwordReset.html',
        controller: 'passwordResetCtrl',
        params: {data : ''}
    })
    .state('Home', {
        abstract:true,
        url: '/home',
        templateUrl: 'application/Partials/home.html',
        controller : 'homeCtrl'
    })
    .state('Home.Dashboard', {
        url: '',
        templateUrl: 'application/Partials/dashboard.html',
        controller: 'dashboardCtrl'
    })
    .state('Home.Inventory', {
        url: '/inventory',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'inventoryCtrl'
    })
    .state('Home.AddInventory', {
        url: '/addInventory',
        templateUrl: 'application/Partials/addInventory.html',
        controller: 'addInventoryCtrl',
        params: {data : ''}
    })
    .state('Home.InventoryDetails', {
        url: '/inventoryDetails',
        templateUrl: 'application/Partials/inventoryDetails.html',
        controller: 'inventoryDetailsCtrl',
        params: {data : '' , gridData : ''}
    })
    .state('Home.ImportInventory', {
        url: '/InventoryImport',
        templateUrl: 'application/Partials/importCustomer.html',
        controller: 'importInventoryCtrl',
    })
    .state('Home.SetStock', {
        url: '/setStock',
        templateUrl: 'application/Partials/setStock.html',
        controller: 'setStockCtrl',
        params: {data : '', desc : ''}
    })
    .state('Home.Customers', {
        url: '/customers',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'customerCtrl'
    })
    .state('Home.addCustomers', {
        url: '/addCustomers',
        templateUrl: 'application/Partials/addCustomer.html',
        controller: 'addCustomerCtrl',
        params: {data : ''}
    })
    .state('Home.ImportCustomer', {
        url: '/CustomerImport',
        templateUrl: 'application/Partials/importCustomer.html',
        controller: 'importCustomerCtrl',
        params: {from : ''}
    })
    .state('Home.Vendors', {
        url: '/vendors',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'vendorCtrl'
    })
    .state('Home.addVendors', {
        url: '/addVendors',
        templateUrl: 'application/Partials/addVendor.html',
        controller: 'addVendorCtrl',
        params: {data : ''}
    })
    .state('Home.ImportVendors', {
        url: '/importVendors',
        templateUrl: 'application/Partials/importCustomer.html',
        controller: 'importVendorCtrl'
    })
    .state('Home.Ledgers', {
        url: '/ledgers',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'ledgerCtrl'
    })
    .state('Home.addLedgers', {
        url: '/addLedgers',
        templateUrl: 'application/Partials/addLedger.html',
        controller: 'addLedgerCtrl',
        params: {data : ''}
    })
    .state('Home.ImportLedger', {
        url: '/importLedger',
        templateUrl: 'application/Partials/importLedger.html',
        controller: 'importLedgerCtrl'
    })
    .state('Home.companyLedgers', {
        url: '/companyLedgers',
        templateUrl: 'application/Partials/companyLedgers.html',
        controller: 'companyLedgersCtrl',
        params: {data : ''}
    })
    .state('Home.Banking', {
        url: '/banking',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'bankingCtrl'
    })
    .state('Home.bankLedger', {
        url: '/bankLedger',
        templateUrl: 'application/Partials/bankLedger.html',
        controller: 'bankLedgerCtrl',
        params: {data : ''}
    })
    .state('Home.bankBRS', {
        url: '/bankBRS',
        templateUrl: 'application/Partials/bankBRS.html',
        controller: 'bankBRSCtrl'
    })
    .state('Home.Sales', {
        url: '/sales',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'salesCtrl'
    })
    .state('Home.addSales', {
        url: '/addSales',
        templateUrl: 'application/Partials/addSales.html',
        controller: 'addSalesCtrl',
        params: {data : ''}
    })
    .state('Home.Purchase', {
        url: '/purchase',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'purchaseCtrl'
    })
    .state('Home.addPurchase', {
        url: '/addPurchase',
        templateUrl: 'application/Partials/addPurchase.html',
        controller: 'addPurchaseCtrl',
        params: {data : ''}
    })
    .state('Home.Receipt', {
        url: '/receipt',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'receiptCtrl'
    })
    .state('Home.addReceipt', {
        url: '/addReceipt',
        templateUrl: 'application/Partials/addReceipt.html',
        controller: 'addReceiptCtrl',
        params: {data : ''}
    })
    .state('Home.Payments', {
        url: '/payment',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'paymentCtrl'
    })
    .state('Home.addPayments', {
        url: '/addPayment',
        templateUrl: 'application/Partials/addPayment.html',
        controller: 'addPaymentCtrl',
        params: {data : ''}
    })
    .state('Home.Expense', {
        url: '/expense',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'expenseCtrl'
    })
    .state('Home.addExpense', {
        url: '/addExpense',
        templateUrl: 'application/Partials/addExpense.html',
        controller: 'addExpenseCtrl',
        params: {data : ''}
    })
    .state('Home.Journal', {
        url: '/journal',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'journalCtrl'
    })
    .state('Home.addJournal', {
        url: '/addJournal',
        templateUrl: 'application/Partials/addJournal.html',
        controller: 'addJournalCtrl',
        params: {data : ''}
    })
    .state('Home.Contra', {
        url: '/contra',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'contraCtrl'
    })
    .state('Home.addContra', {
        url: '/addContra',
        templateUrl: 'application/Partials/addContra.html',
        controller: 'addContraCtrl',
        params: {data : ''}
    })
    .state('Home.CreditNote', {
        url: '/creditNote',
        templateUrl: 'application/Partials/creditNote.html',
        controller: 'creditNoteCtrl'
    })
    .state('Home.DebitNote', {
        url: '/debitNote',
        templateUrl: 'application/Partials/debitNote.html',
        controller: 'debitNoteCtrl'
    })
    .state('Home.SalesOrder', {
        url: '/salesOrder',
        templateUrl: 'application/Partials/salesOrder.html',
        controller: 'salesOrderCtrl'
    })
    .state('Home.PurchaseOrder', {
        url: '/puchaseOrder',
        templateUrl: 'application/Partials/purchaseOrder.html',
        controller: 'purchaseOrderCtrl'
    })

    .state('Home.Organization', {
        url: '/organizationLevel',
        templateUrl: 'application/Partials/organizationLevel.html',
        controller: 'organizationLevelCtrl'
    })
    .state('Home.User', {
        url: '/organizationUser',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'organizationUserCtrl'
    })
    .state('Home.Roles', {
        url: '/organizationRoles',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'organizationRoleCtrl'
    })
    .state('Home.addRole', {
        url: '/addRole',
        templateUrl: 'application/Partials/addRole.html',
        controller: 'addRoleCtrl',
        params: {data : ''}
    })
    .state('Home.Help', {
        url: '/help',
        templateUrl: 'application/Partials/help.html',
        controller: 'helpCtrl'
    })
    .state('Home.Notification', {
        url: '/notification',
        templateUrl: 'application/Partials/notification.html',
        controller: 'notificationCtrl'
    })
    .state('Home.Format', {
        url: '/applicationFormat',
        templateUrl: 'application/Partials/applicationFormatLevel.html',
        controller: 'applicationFormatLevelCtrl'
    })
    .state('Home.Tax', {
        url: '/applicationTax',
        templateUrl: 'application/Partials/applicationTaxLevel.html',
        controller: 'applicationTaxLevelCtrl'
    })
    .state('Home.Accounting', {
        url: '/applicationAccounting',
        templateUrl: 'application/Partials/applicationAccountingLevel.html',
        controller: 'applicationAccountingLevelCtrl'
    })

    .state('PageNotFound', {
        url: '/PageNotFound',
        templateUrl: 'application/Partials/pageNotFound.html'
    });
    flowFactoryProvider.defaults = {
        target: '',
        permanentErrors: [500, 501],
        maxChunkRetries: 1,
        chunkRetryInterval: 5000,
        simultaneousUploads: 1
      };
      flowFactoryProvider.on('catchAll', function (event) {
        console.log('catchAll', arguments);
      });
      // Can be used with different implementations of Flow.js
      // flowFactoryProvider.factory = fustyFlowFactory;
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/PageNotFound');

    $mdDateLocaleProvider.formatDate = function(date) {
        return date ? moment(date).format('DD/MM/YYYY') : '';
      };
      
      $mdDateLocaleProvider.parseDate = function(dateString) {
        var m = moment(dateString, 'DD/MM/YYYY', true);
        return m.isValid() ? m.toDate() : new Date(NaN);
      };

  });

app.run(function($rootScope) {
    console.log('Inside Run');
    $rootScope.isActive = '';
    $rootScope.isSubActive = '';
    $rootScope.showNavigations = true ;
    $rootScope.appTitle = 'Siri-Books';
    $rootScope.showLoader = false;
    $rootScope.showLoaderWithProgress = false;
    $rootScope.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  });
app.constant('CONSTANTS', {
        appLevel : 1,
        getDateObject : function(d){
                var onlydate = d.split(" ");
                var splitedArray = onlydate[0].split("/")
                return new Date(splitedArray[1]+'/'+splitedArray[0]+'/'+splitedArray[2]);
        },
        uuid : "d9f7617a-6117-4d7e-b71e-b4a337f8b545",
        uorgid: "43682e5e-af9c-4805-a29a-5f34e24185af",		
        orguser: "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
        service : [
                {
                        inventoryList : 'http://localhost:8080/api/fasmain/VCPL/Products/org/43682e5e-af9c-4805-a29a-5f34e24185af',
                        saveInventory : 'http://localhost:8080/api/fasmain/VCPL/Products',
                        updateInventory : 'http://localhost:8080/api/fasmain/VCPL/Products',
                        customerList : 'http://localhost:8080/api/fasmain/VCPL/Customers/org/43682e5e-af9c-4805-a29a-5f34e24185af',
                        saveCustomer : 'http://localhost:8080/api/fasmain/VCPL/Customers',
                        updateCustomer : 'http://localhost:8080/api/fasmain/VCPL/Customers',
                        vendorList : 'http://localhost:8080/api/fasmain/VCPL/Vendors/org/43682e5e-af9c-4805-a29a-5f34e24185af',
                        saveVendor : 'http://localhost:8080/api/fasmain/VCPL/Vendors',
                        updateVendor : 'http://localhost:8080/api/fasmain/VCPL/Vendors',
                        importVendor : 'application/fixture/importVendors.json',
                        receiptList : 'application/fixture/receiptList.json',
                        paymentList : 'application/fixture/paymentList.json',
                        expenseList : 'application/fixture/expenseList.json',
                        journalList : 'application/fixture/journalList.json',
                        contraList : 'application/fixture/contraList.json',
                        ledgerList : 'application/fixture/ledgerList.json',
                        organizationUserList : 'application/fixture/organizationUserList.json',
                        organizationRoleList : 'application/fixture/organizationRoleList.json',
                        accountingList : 'application/fixture/accountingList.json',
                        bankingLedger : 'application/fixture/bankingLedger.json',
                        importCustomer : 'application/fixture/importCustomer.json',
                        companyLedgers : 'application/fixture/companyLedger.json',
                        bankLedgers : 'application/fixture/bankLedger.json',
                        bankBRS : 'application/fixture/bankLedger.json',
                        searchInventoryList : 'application/fixture/searchInventory.json',
                        purchaseList : 'application/fixture/purchaseList.json',
                        getCustomerDetails : 'application/fixture/customer.json',
                        //getCountries : 'application/fixture/contryState.json',
                        getCountries : 'http://localhost:8091/api/fas/lkup/countries/states/country/91',
                        productGroup : 'application/fixture/productGroup.json',
                        userStatus : 'application/fixture/userStatus.json'             ,
                        subscriptionStatus : 'application/fixture/subscriptionStatus.json',
                        subscriptionPlan : 'application/fixture/subscriptionPlan.json',
                        subscriptionOption : 'application/fixture/subscriptionOption.json',
                        userRole : 'application/fixture/userRole.json',
                        productType : 'application/fixture/productType.json',
                        paymentMode : 'application/fixture/paymentMode.json',
                        boardingStatus : 'application/fixture/boardingStatus.json',
                        orgType : 'application/fixture/orgType.json',
                        NOB : 'http://192.168.1.97:8091/api/fas/lkup/natureofbusiness',
                        gstScheme : 'application/fixture/gstScheme.json',
                        getPreviousReceipts : 'application/fixture/getPreviousReceipts.json',
                        allPurchseList : 'application/fixture/allPurshaseList.json',
                        getCurrentJournal :'application/fixture/getCurrentJournal.json',
                        salesList : 'application/fixture/salesList.json',
                        importLedgers :'application/fixture/importLedgers.json' ,
                        stockCountList : '' ,
                        saveReceiptList :''                  
                },{
                        inventoryList : 'application/fixture/inventoryList.json',
                        saveInventory : '',
                        customerList : 'application/fixture/customerList.json',
                        saveCustomer : '',
                        updateCustomer : '',
                        vendorList : 'application/fixture/vendorList.json',
                        saveVendor : '',
                        updateVendor : '',
                        importVendor : 'application/fixture/importVendors.json',
                        receiptList : 'application/fixture/receiptList.json',
                        paymentList : 'application/fixture/paymentList.json',
                        expenseList : 'application/fixture/expenseList.json',
                        journalList : 'application/fixture/journalList.json',
                        contraList : 'application/fixture/contraList.json',
                        ledgerList : 'application/fixture/ledgerList.json',
                        organizationUserList : 'application/fixture/organizationUserList.json',
                        organizationRoleList : 'application/fixture/organizationRoleList.json',
                        accountingList : 'application/fixture/accountingList.json',
                        bankingLedger : 'application/fixture/bankingLedger.json',
                        importCustomer : 'application/fixture/importCustomer.json',
                        companyLedgers : 'application/fixture/companyLedger.json',
                        bankLedgers : 'application/fixture/bankLedger.json',
                        bankBRS : 'application/fixture/bankLedger.json',
                        searchInventoryList : 'application/fixture/searchInventory.json',
                        purchaseList : 'application/fixture/purchaseList.json',
                        getCustomerDetails : 'application/fixture/customer.json',
                        getCountries : 'application/fixture/contryState.json',
                        productGroup : 'application/fixture/productGroup.json',
                        userStatus : 'application/fixture/userStatus.json'             ,
                        subscriptionStatus : 'application/fixture/subscriptionStatus.json',
                        subscriptionPlan : 'application/fixture/subscriptionPlan.json',
                        subscriptionOption : 'application/fixture/subscriptionOption.json',
                        userRole : 'application/fixture/userRole.json',
                        productType : 'application/fixture/productType.json',
                        paymentMode : 'application/fixture/paymentMode.json',
                        boardingStatus : 'application/fixture/boardingStatus.json',
                        orgType : 'application/fixture/orgType.json',
                        NOB : 'application/fixture/nob.json',
                        gstScheme : 'application/fixture/gstScheme.json',
                        getPreviousReceipts : 'application/fixture/getPreviousReceipts.json',
                        allPurchseList : 'application/fixture/allPurshaseList.json',
                        getCurrentJournal :'application/fixture/getCurrentJournal.json',
                        salesList : 'application/fixture/salesList.json',
                        importLedgers :'application/fixture/importLedgers.json',
                        stockCountList :'application/fixture/stockCountList.json',
                        primaryGroupList : "application/fixture/primaryGroupList.json",
                        groupList : "application/fixture/groupList.json",
                        saveReceiptList :'',
                        getBanks : 'application/fixture/getBanks.json'
                }
        ],
        headBarNavigator : [
                {url : 'Home.Dashboard', name : 'DASHBOARD' ,SelimgSrc:'application/Images/Assets/REPORTS_active.png' , imgSrc : 'application/Images/Assets/REPORTS.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Inventory', name : 'INVENTORY' , SelimgSrc:'application/Images/Assets/INVENTORY_active.png' , imgSrc : 'application/Images/Assets/INVENTORY.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Customers', name : 'CUSTOMERS' , SelimgSrc:'application/Images/Assets/CUSTOMERS_active.png' , imgSrc : 'application/Images/Assets/CUSTOMERS.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Vendors', name : 'VENDORS' , SelimgSrc:'application/Images/Assets/VENDORS_active.png' , imgSrc : 'application/Images/Assets/VENDORS.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Ledgers', name : 'LEDGERS' , SelimgSrc:'application/Images/Assets/LEDGERS_active.png' , imgSrc : 'application/Images/Assets/LEDGERS.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Banking', name : 'CASH/BANKING' ,SelimgSrc:'application/Images/Assets/CASH_BANKING_active.png' , imgSrc : 'application/Images/Assets/CASH_BANKING.png', glyphClasses : 'glyphicon glyphicon-home'}
        ],
        sideBarNavigator : [
                {url : 'Home.Sales', name : 'Sales' ,SelimgSrc:'application/Images/Assets/Sales_active.png' , imgSrc : 'application/Images/Assets/Sales.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.Purchase', name : 'Purchase' , SelimgSrc:'application/Images/Assets/Purchases_active.png' , imgSrc : 'application/Images/Assets/Purchases.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.Receipt', name : 'Receipt' , SelimgSrc:'application/Images/Assets/Receipts_active.png' , imgSrc : 'application/Images/Assets/Receipts.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.Payments', name : 'Payments' , SelimgSrc:'application/Images/Assets/Payments_active.png' , imgSrc : 'application/Images/Assets/Payments.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.Expense', name : 'Expense' , SelimgSrc:'application/Images/Assets/Expenses_active.png' , imgSrc : 'application/Images/Assets/Expenses.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.Journal', name : 'Journal' , SelimgSrc:'application/Images/Assets/Journal_active.png' , imgSrc : 'application/Images/Assets/Journal.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.Contra', name : 'Contra' , SelimgSrc:'application/Images/Assets/Contra_active.png' , imgSrc : 'application/Images/Assets/Contra.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.CreditNote', name : 'Credit Note' , SelimgSrc:'application/Images/Assets/Credit_Note_active.png' , imgSrc : 'application/Images/Assets/Credit_Note.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.DebitNote', name : 'Debit Note' , SelimgSrc:'application/Images/Assets/Debit_Note_active.png' , imgSrc : 'application/Images/Assets/Debit_Note.png', glyphClasses : 'glyphicon glyphicon-signal'}
                //{url : 'Home.SalesOrder', name : 'Sales Order' ,SelimgSrc:'application/Images/Assets/Sale_Order_active.png' , imgSrc : 'application/Images/Assets/Sale_Order.png', glyphClasses : 'glyphicon glyphicon-signal'},
                //{url : 'Home.PurchaseOrder', name : 'Purchase Order' , SelimgSrc:'application/Images/Assets/Purchase_Order_active.png' , imgSrc : 'application/Images/Assets/Purchase_Order.png', glyphClasses : 'glyphicon glyphicon-signal'}
        ],
        organizationNavigation : [
                {url : 'Home.Organization', name : 'Organization' ,SelimgSrc:'application/Images/Assets/Admin-Settings inside/Organization_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Organization_inactive.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.User', name : 'User' , SelimgSrc:'application/Images/Assets/Admin-Settings inside/Users_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Users_inactive.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Roles', name : 'Roles' , SelimgSrc:'application/Images/Assets/Admin-Settings inside/Roles_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Roles_inactive.png', glyphClasses : 'glyphicon glyphicon-home'}
        ],
        applicationNavigation :[
                {url : 'Home.Format', name : 'Format' ,SelimgSrc:'application/Images/Assets/Admin-Settings inside/Format_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Format_inactive.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Tax', name : 'Tax' , SelimgSrc:'application/Images/Assets/Admin-Settings inside/Tax_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Tax_inactive.png', glyphClasses : 'glyphicon glyphicon-home'},
                {url : 'Home.Accounting', name : 'Accounting' , SelimgSrc:'application/Images/Assets/Admin-Settings inside/Accounting_active.png' , imgSrc : 'application/Images/Assets/Admin-Settings inside/Accounting_inactive.png', glyphClasses : 'glyphicon glyphicon-home'}
        ],
        gridOptionsConstants : function(gridName){
                if(gridName == 'Banking'){
                        return {
                                enableSorting: true,
                                rowHeight: 40,
                                enableRowSelection: false,
                                showTreeRowHeader: false,
                                enableColumnResizing: false,
                                enableRowHeaderSelection: false,
                                multiSelect : false,
                                enableColumnMenus : false,
                                enableSorting :false,
                                enableVerticalScrollbar : 0 ,
                                enablePaginationControls: false,
                                treeRowHeaderAlwaysVisible:false,
                                showColumnFooter: false,
                                columnDefs : this[gridName+"fields"]
                        }
                }
                else{
                return {
                        rowHeight: 40,
                        enableRowSelection: false,
                        enableColumnResizing: false,
                        enableRowHeaderSelection: false,
                        multiSelect : false,
                        enableColumnMenus : false,
                        enableSorting :false,
                        enableVerticalScrollbar : 0 ,
                        enablePaginationControls: false,
                        paginationPageSizes: [5 , 10, 20 , 25],
                        paginationPageSize: 20,
                        treeRowHeaderAlwaysVisible:false,
                        showColumnFooter: false,
                        columnDefs : this[gridName+"fields"]
                }
        }
        },
        Paymentfields :[
                { field: 'vendorName',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '<span class="productInactive" ng-click="grid.appScope.editData(row)">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '</div>' },
                { field: 'amount',
                width : '15%',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                        '</span>'+
                        '</div>' },
                { field: 'date' },
                { field: 'modeOfPayment'}       
        ],
        Expensefields :[
                { field: 'vendorName',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '<span class="productInactive" ng-click="grid.appScope.editData(row)">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '</div>' },
                { field: 'amount',
                width : '15%',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                        '</span>'+
                        '</div>' },
                { field: 'date' },
                { field: 'expenseDescription'}       
        ],
        Journalfields :[
                { field: 'referance',
                width : '20%',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span class="productInactive" ng-click="grid.appScope.editData(row)" style="float:left;margin-left:20px;">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '</div>' },
                        { field: 'date' ,
                        width : '15%'
                },
                        { field: 'fromLedger'},
                        { field: 'toLedger'},
                        { field: 'amount',
                        cellTemplate: '<div class="ui-grid-cell-contents" ng-class="row.isSelected ? \'buleColor\' : \'\' " >'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '</div>'
                },
        ],
        Contrafields :[
                { field: 'transferredFrom',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span class="productInactive" ng-click="grid.appScope.editData(row)" style="float:left;margin-left:20px;">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '</div>' },
                        { field: 'transferredTo' },
                        { field: 'date'},
                        { field: 'reference'},
                        { field: 'amount',
                        cellTemplate: '<div class="ui-grid-cell-contents" ng-class="row.isSelected ? \'buleColor\' : \'\' " >'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '</div>'},
        ],
        Receiptfields :[
                { field: 'customerName',
                width : '35%',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '<span class="productInactive" ng-click="grid.appScope.editData(row)">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                '</span>'+
                 '</div>' },
        { field: 'amount',
        width : '15%',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '<span class="productInactive" ng-click="grid.appScope.editLedger(row)">'+
                '<img height="20" width="20" '+
                        'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                '</span>'+
                '</div>' },
        { field: 'date' },
        { field: 'mode'}
        ],
        Inventoryfields : [
                { field: 'productname',
                displayName : 'Product',
                width : '20%',
                headerCellClass : '',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                              '<span>{{grid.getCellValue(row, col)}}</span>'+
                              '<span class="productInactive" ng-click="grid.appScope.editData(row)">'+
                              '<img height="15" width="15" '+
                                    'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                              '</span>'+
                              '</div>' },
                             
             { field: 'specification',
             displayName : 'Specification',
             headerCellClass : '',
              width : '20%' ,
              cellTemplate: '<div class="ui-grid-cell-contents" >'+
              '<span>{{row.entity.productspecs[0].productspecid}}</span>'+
              '<span>{{grid.getCellValue(row, col)}}</span>'+
              '</div>' },
              { field: 'stockCount', 
              headerCellClass : '',
              cellTemplate: '<div class="ui-grid-cell-contents" style="color:blue">'+
              '<span>{{grid.getCellValue(row, col)}}</span>'+
              '</div>' }, 
              { field: 'value' ,displayName:'Value', 
              headerCellClass : '',
              cellTemplate: '<div class="ui-grid-cell-contents" >'+
              '<span>{{grid.getCellValue(row, col)}}</span>'+
              '<span class="productInactive" ng-click="grid.appScope.editLedger(row)">'+
              '<img height="20" width="20" '+
                      'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
              '</span>'+
              '</div>' },
              { field: 'price', 
              headerCellClass : '',
              cellTemplate: '<div class="ui-grid-cell-contents" style="color:blue" ng-click="grid.appScope.showPrice(row)" >'+
              '<span>{{grid.getCellValue(row, col)}}</span>'+
              '</div>' }
              /*{ field: 'debit' ,category:"Balance Amount" ,
              cellTemplate: '<div class="ui-grid-cell-contents" >'+
              '<span ng-if="row.entity.orgledger.drcr == \'dr\' ">{{row.entity.orgledger.balanceamount}}</span>'+
              '<span ng-if="row.entity.orgledger.drcr != \'dr\' "> &nbsp; </span>'+
              '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="row.entity.orgledger.drcr == \'dr\'">'+
              '<img height="20" width="20" '+
                      'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
              '</span>'+
              '</div>' },
              { field: 'credit' ,category:"Balance Amount" ,
              cellTemplate: '<div class="ui-grid-cell-contents" >'+
              '<span ng-if="row.entity.orgledger.drcr != \'dr\' ">{{row.entity.orgledger.balanceamount}}</span>'+
              '<span ng-if="row.entity.orgledger.drcr == \'dr\' "> &nbsp; </span>'+
              '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="row.entity.orgledger.drcr != \'dr\'">'+
              '<img height="20" width="20" '+
                      'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
              '</span>'+
              '</div>' },*/
        
        ],
Customerfields : [
        { field: 'customername',
        headerCellClass : 'topPadding15',
        displayName :'Name',
        width : '35%',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '<span class="productInactive" ng-click="grid.appScope.editData(row)">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                '</span>'+
                '</div>' },
        /*{ field: 'corporateaddress1',displayName:'Address',headerCellClass : 'topPadding15',
        width : '15%' },*/
        { field: 'customertype',        headerCellClass : 'topPadding15',
displayName : 'Type'},
        { field: 'contactphone' , displayName : 'Contact' ,       headerCellClass : 'topPadding15'},
        { field: 'orgledger.balanceamount' ,category:"Balance Amount" ,displayName : 'Debit' ,
        cellTemplate: '<div class="ui-grid-cell-contents">'+
        //'<span ng-if="row.entity.orgledger.drcr == \'dr\' ">{{row.entity.orgledger.balanceamount}}</span>'+
        '<span ng-if="row.entity.orgledger.drcr != \'dr\' "> &nbsp; </span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="row.entity.orgledger.drcr == \'dr\'">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>' },
        { field: 'orgledger.balanceamount' ,category:"Balance Amount" ,displayName : 'Credit' ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span ng-if="row.entity.orgledger.drcr != \'dr\' ">{{grid.getCellValue(row, col)}}</span>'+
        //'<span ng-if="row.entity.orgledger.drcr !=  \'dr\' ">{{row.entity.orgledger.balanceamount}}</span>'+
        '<span ng-if="row.entity.orgledger.drcr ==  \'dr\' "> &nbsp; </span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="row.entity.orgledger.drcr != \'dr\'">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>' }

],
Vendorfields : [
        { field: 'name',
        headerCellClass : 'topPadding15',
        width : '30%',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '<span class="productInactive" ng-click="grid.appScope.editData(row)">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                '</span>'+
                '</div>' },
        /*{ field: 'address1' , displayName : "Address" , headerCellClass : 'topPadding15',},*/
        { field: 'contactphone' , headerCellClass : 'topPadding15', displayName : "Contact"},
        { field: 'debit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span ng-if="row.entity.orgledger.drcr == \'dr\' ">{{row.entity.orgledger.balanceamount}}</span>'+
        '<span ng-if="row.entity.orgledger.drcr != \'dr\' "> &nbsp; </span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="row.entity.orgledger.drcr == \'dr\'">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>' },
        { field: 'credit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span ng-if="row.entity.orgledger.drcr !=  \'dr\' ">{{row.entity.orgledger.balanceamount}}</span>'+
        '<span ng-if="row.entity.orgledger.drcr ==  \'dr\' "> &nbsp; </span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="row.entity.orgledger.drcr != \'dr\'">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>' }
],
ImportVendorfields : [
        { field: 'vendorName' },
        { field: 'address'},
        { field: 'contact'},
        { field: 'rowNo'}
],
ImportCustomerfields : [
        { field: 'vendorName' , fieldName:'Customer Name' },
        { field: 'address'},
        { field: 'contact'},
        { field: 'rowNo'}
],
OrganizationUserfields : [
        { field: 'userName' ,
        width:'20%',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span class="productInactive" ng-click="grid.appScope.editData(row)" style="float:left;margin-left:20px;">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
        '</span>'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '</div>' },
        { field: 'name'},
        { field: 'createdOn'},
        { field: 'updatedOn'},
        { field: 'mobile'},
        { field: 'role'},
        { field: 'status'}
],
Ledgerfields : [],
Bankingfields : [],
RoleListfields : [
        {field : "category" ,
        cellClass : "paddingTop65" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span class="productInactive" ng-click="grid.appScope.editData(row)" style="float:none">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
        '</span>'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '</div>'},
        {field : "name" ,
        cellClass : "paddingTop65"},
        {field : "createdOn",
        cellClass : "paddingTop65" },
        {field : "updatedOn",
        cellClass : "paddingTop65" },
        {field : "modules",
        width : "30%",
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<div>'+
        '<div class="moduleSection">'+
            '<span class="pull-left">Sales</span>'+
            '<span class="pull-right">'+
                '<img src="application/Images/Assets/Module.png" height="20" width="90"/>'+
            '</span>'+
        '</div>'+
        '<div class="clearBoth moduleSection">'+
        '<span class="pull-left">Accounting</span>'+
        '<span class="pull-right">'+
            '<img src="application/Images/Assets/Module.png" height="20" width="90"/>'+
        '</span>'+
    '</div>'+
    '<div class="clearBoth moduleSection">'+
    '<span class="pull-left">Inventory</span>'+
    '<span class="pull-right">'+
        '<img src="application/Images/Assets/Module.png" height="20" width="90"/>'+
    '</span>'+
'</div>'+
'<div class="clearBoth moduleSection">'+
'<span class="pull-left">Products</span>'+
'<span class="pull-right">'+
    '<img src="application/Images/Assets/Module.png" height="20" width="90"/>'+
'</span>'+
'</div>'+
        '</div>'+
        '</div>'},
        {field : "status" ,
        cellClass : "paddingTop65" }
],
Accountingfields : [
        {field : "updatedBy" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span class="productInactive" ng-if="!row.isSelected" style="float:none">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
        '</span>'+
        '<span class="productInactive" ng-if="row.isSelected" style="float:none">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
        '</span>'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '</div>'},
        {field : "unitOfTime"},
        {field : "number"},
        {field : "effectiveDate"},
        {field : "updatedOn"}
],
CompanyLedgerfields : [
        {field : "date"},
        {field : "particulars"},
        {field : "voucherType"},
        {field : "voucherNo"},
        {field : "debit"},
        {field : "credit"},
        {field : "netBalance"}
],
BankLedgerfields : [
        {field : "date"},
        {field : "particulars"},
        {field : "voucherType"},
        {field : "voucherNo."},
        {field : "debit"},
        {field : "credit"},
        {field : "netBalance"}
],
BRSfields : [
        {field : "date" ,enableCellEdit: false ,cellFilter: 'date:"dd-MM-yyyy"', displayName : 'Date'},
        {field : "particulars" ,enableCellEdit: false},
        {field : "voucherType" ,enableCellEdit: false},
        {field : "debit" ,enableCellEdit: false},
        {field : "credit" ,enableCellEdit: false},
        {field : "date" , displayName : 'Date' , headerCellClass: 'headColor',
        editableCellTemplate: 'application/Partials/dateTemplate.html' },
        {field : "notes" , width:"20%" , headerCellClass : 'headColor'}

],
AddPurchasefields : [] ,
Purchasefields : [
        {field : "VendorName",headerCellClass : 'topPadding15',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span class="productInactive" ng-click="grid.appScope.editData(row)">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
        '</span>'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '</div>' },
        {field : "date",headerCellClass : 'topPadding15'},
        {field : "contact",headerCellClass : 'topPadding15'},
        { field: 'debit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span ng-if="row.entity.orgledger.drcr == \'dr\' ">{{row.entity.orgledger.balanceamount}}</span>'+
        '<span ng-if="row.entity.orgledger.drcr != \'dr\' "> &nbsp; </span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="row.entity.orgledger.drcr == \'dr\'">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>' },
        { field: 'credit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span ng-if="row.entity.orgledger.drcr !=  \'dr\' ">{{row.entity.orgledger.balanceamount}}</span>'+
        '<span ng-if="row.entity.orgledger.drcr ==  \'dr\' "> &nbsp; </span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="row.entity.orgledger.drcr != \'dr\'">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>' }
] ,
AddJournalfields : [
        {field : "fromLedger"},
        {field : "toLedger"},
        {field : "amount"},
        {field : "narration"},
],
addReceiptfields : [
        {field : "customername" , displayName : 'Customer Name',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span class="productInactive" ng-click="grid.appScope.editData(row)" style="position:absolute;left: 10px;text-align: left;">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
        '</span>'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '</div>' },
        {field : "orgledger.balanceamount" , displayName:"Amount"},
        {field : "date"},
        {field : "mode" ,displayName : 'Mode Of Payment',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span ng-if="row.entity.mode == \'1\'">Cash</span>'+
        '<span ng-if="row.entity.mode == \'2\'">Bank</span>'+
        '<span ng-if="row.entity.mode == \'3\'">NA</span>'+
        '</div>' },
        {field:'regnumber', displayName:'Receipt Number',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '</div>'},
        {field : "bank"}
] , 
Salesfields : [
        {field : "customerName",headerCellClass : 'topPadding15',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span class="productInactive" ng-click="grid.appScope.editData(row)">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
        '</span>'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '</div>' },
        {field : "date",headerCellClass : 'topPadding15'},
        {field : "contact",headerCellClass : 'topPadding15'},
        { field: 'debit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span ng-if="row.entity.orgledger.drcr == \'dr\' ">{{row.entity.orgledger.balanceamount}}</span>'+
        '<span ng-if="row.entity.orgledger.drcr != \'dr\' "> &nbsp; </span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="row.entity.orgledger.drcr == \'dr\'">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>' },
        { field: 'credit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span ng-if="row.entity.orgledger.drcr !=  \'dr\' ">{{row.entity.orgledger.balanceamount}}</span>'+
        '<span ng-if="row.entity.orgledger.drcr ==  \'dr\' "> &nbsp; </span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="row.entity.orgledger.drcr != \'dr\'">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>' }
] ,
InventoryDetailsfields : [],
addInventoryStockfields : [],
ImportLedgerfields : []
});
app.controller('addContraCtrl',function($rootScope , $scope , $stateParams , $state){
    console.log('Inside Add Contra Controller');
    $rootScope.isActive = 'Contra';

    if(angular.isDefined($stateParams.data.transferredFrom)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }
    $scope.resetAll = function(){
        $scope.contra = {};
        $scope.addCustomerForm.$setPristine();
    }
    $scope.cancel = function(){
        $state.go('Home.Contra');
    }
});
app.controller('addCustomerCtrl',function($rootScope , $scope ,$stateParams , $state ,commonServices, customerServices , $filter , CONSTANTS){
    console.log('Inside Add Customer Controller');
    $rootScope.isActive = 'CUSTOMERS';
   /* function updateDate(d){
        var onlydate = d.split(" ");
        var splitedArray = onlydate[0].split("/")
        return new Date(splitedArray[1]+'/'+splitedArray[0]+'/'+splitedArray[2]);
    }*/
    if(angular.isDefined($stateParams.data.customername) && angular.isUndefined($stateParams.data.selectedCustomer)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.location = $stateParams.data;
        $scope.identity = $stateParams.data;
        $scope.books = $stateParams.data.orgledger;
        if($stateParams.data.customername != ''){
        $scope.books.updateddate = CONSTANTS.getDateObject($stateParams.data.orgledger.updateddate);
        };
    }
    else if(angular.isDefined($stateParams.data.selectedCustomer) ){
        $scope.disableAll = true;
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.location = $stateParams.data;
        $scope.identity = $stateParams.data;
        $scope.books = $stateParams.data.orgledger;
        $scope.receiptData = $stateParams.data;
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.location = {};
        $scope.identity = {};
        $scope.books = {};
        $scope.books.openingbalance = 0;
        $scope.books.openingbalancetype = "Dr";
    }
    $scope.stateList = [];
    commonServices.getCountries().then(function(success){
        var myArray = success.data;
        var countries = {};
        for (var i = 0; i < myArray.length; i++) {
          var countryName = myArray[i].lkupcountry.countryname;
          if (!countries[countryName]) {
            countries[countryName] = [];
          }
          countries[countryName].push({"countryName": myArray[i].lkupcountry.countryname ,"stateName":myArray[i].statename , "stateId" : myArray[i].id ,"countryId":myArray[i].lkupcountry.countryid});
        }
        myArray = [];
        for (var countryName in countries) {
          myArray.push({country: countryName, state: [countries[countryName]]});
        }
        $scope.countryList = myArray;
       $scope.getState('India');
    },function(error){
        console.log(error);
    });
    
    $scope.location.country = 'India';
    $scope.getState = function(country) {
        var states;
        angular.forEach($scope.countryList , function(key){
            if(key.country == country){
                states =  key.state;
            }
        });
        $scope.stateList = states[0];
    }
    $scope.additionalData = $scope.location.customeraddtldata || [{ keyname: "", keyvalue: "" }];

    $scope.cancel = function(){
        $state.go('Home.Customers');
    }

    $scope.reserAll =function() {
        $scope.additionalData = [
            { customerid : "" , customeraddtldataid: "" , keyname: "", keyvalue: "" }
        ];
        $scope.addCustomerForm4.$setUntouched();
        $scope.addCustomerForm4.$setPristine();
        $scope.resetForm1();
        $scope.resetForm2();
        $scope.resetForm3();
        

        
    }

    $scope.resetForm1 = function(){
        $scope.location = {};
        $scope.addCustomerForm1.$setPristine();
        $scope.addCustomerForm1.$setUntouched();
        }
    $scope.resetForm2 = function(){
        $scope.identity = {};
        $scope.addCustomerForm2.$setUntouched();
        $scope.addCustomerForm2.$setPristine();
    }
    $scope.resetForm3 = function(){
        $scope.books = {};
        $scope.addCustomerForm3.$setUntouched();
        $scope.addCustomerForm3.$setPristine();
        $scope.books.openingbalance = 0;
        $scope.books.openingbalancetype = "Dr";
    }

    $scope.Add = function(){
        $scope.addData = {};
        $scope.addData.keyname = "";
        $scope.addData.keyvalue = "";
        $scope.additionalData.push($scope.addData);
    };

    $scope.Remove = function(index){
        if($scope.additionalData.length !== 1) {
            $scope.additionalData.splice(index, 1);
         }
    }

    $scope.panelShow1 = false;
    $scope.panelShow2 = false;
    $scope.panelShow3 = false;    
    $scope.panelShow4 = false;    
    $scope.togglePannel1 = function(){
        $scope.panelShow1 = !$scope.panelShow1;
    }
    $scope.togglePannel2 = function(){
        $scope.panelShow2 = !$scope.panelShow2;
    }
    $scope.togglePannel3 = function(){
        $scope.panelShow3 = !$scope.panelShow3;
    }
    $scope.togglePannel4 = function(){
        $scope.panelShow4 = !$scope.panelShow4;
    }

    $scope.save = function(){
        customerServices.saveCustomer($scope.location , $scope.identity , $scope.additionalData , $scope.books).then(function(success){
            console.log('Customer save Successfully');
            $state.go('Home.Customers');
        },function(error){
            console.log('Customer save Failure');
        });
    }
    $scope.update = function(){
        customerServices.updateCustomer($scope.location , $scope.identity , $scope.additionalData , $scope.books).then(function(success){
            console.log('Customer update Successfully');
            $state.go('Home.Customers');
        },function(error){
            console.log('Customer update Failure');
        });
    }
    /*commonServices.getNatureOfBusiness().then(function(success){
        $scope.identity.nob = success.data;   
    },function(error){
        console.log('Get - Failure Product');
    });*/
    $scope.identity.type = [
        {id : "1" , type : "Retail"},
        {id : "2" , type : "Dealer"}
    ];
    $scope.backToReceipt = function(){
        $scope.receiptData.backFromSales = true;
       $state.go('Home.addReceipt' ,  {data :  $scope.receiptData });
    }

    /*commonServices.getOrgType().then(function(success){
        $scope.identity.type = success.data;   
    },function(error){
        console.log('Get - Failure Product');
    });*/
});
app.controller('addExpenseCtrl',function($rootScope , $scope ,$stateParams , $state , commonServices){
    console.log('Inside Add Expense Controller');
    $rootScope.isActive = 'Expense';

    if(angular.isDefined($stateParams.data.vendorName)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }

    $scope.panelShow1 = true;
    $scope.togglePannel1 = function(){
        $scope.panelShow1 = !$scope.panelShow1;
    }

    $scope.expenses = function(){
        $state.go('Home.Expense');
    }

    $scope.reset = function(){
        $scope.expenseDetails = {};
        $scope.addExpensesForm.$setUntouched();
        $scope.addExpensesForm.$setPristine();
    }

    commonServices.getpaymentMode().then(function(response){
        $scope.paymentList = response.data;
           },function(error){
         console.log('error',error);
    });
});
app.controller('addInventoryCtrl',function($rootScope , $scope ,$stateParams ,$state , inventoryServices , commonServices , vendorServices , CONSTANTS , heightCalc , $timeout , $interval){
    console.log('Inside Add Inventory Controller');
    $rootScope.isActive = 'INVENTORY';
    if(angular.isDefined($stateParams.data.productname)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.inventory = $stateParams.data;
        $scope.inventory.prodId = 1;
        //to enable or disable stock button
        $scope.enableStockButton = true ; //$stateParams.data.showStock;
        }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.inventory = {};
        $scope.inventory.lkupunitofmeasure = "1";
        $scope.enableStockButton = false;
        $scope.inventory.productspecs = [];
    }
    $scope.gstList = ["5%" , "10%" , "15%"];
    commonServices.getProductType().then(function(success){
        $scope.inventory.productService = success.data;   
    },function(error){
        console.log('Get - Failure Product');
    });
    commonServices.getProductGroup().then(function(success){
        $scope.inventory.groupService = success.data;   
    },function(error){
        console.log('Get - Failure Group');
    });
    $scope.inventory.selectedVendors = [];
    vendorServices.searchVendor('').then(function(response){
        $scope.inventory.vendorList = response.data;
        $scope.inventory.selectedVendors = [];
          },function(error){
        console.log('error',error);
     });
    
    $scope.Description = $scope.inventory.productspecs.length != 0 ? $scope.inventory.productspecs : [{ specnamekey: "", specvalue: "" , visibleinsale : "" } ];
    $scope.cancel = function(){
        $state.go('Home.Inventory');
    }
    $scope.reserAll =function() {
        $scope.inventory = {};
        $scope.Description = [
            { specnamekey: "", specvalue: "" , visibleinsale : "" }
        ];
        $scope.addInventoryForm.$setUntouched();
        $scope.addInventoryForm.$setPristine();
    }
    $scope.Add = function(){
        $scope.desc = {};
        $scope.desc.specnamekey = "";
        $scope.desc.specvalue = "";
        $scope.desc.visibleinsale = "";
        $scope.Description.push($scope.desc);
        console.log($scope.Description);
    };

    $scope.Remove = function(index){
        if($scope.Description.length !== 1) {
           $scope.Description.splice(index, 1);
        }
    }

    $scope.panelShow = false ;

    $scope.togglePannel = function(){
        $scope.panelShow = !$scope.panelShow;
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('addInventoryStock');
    $scope.gridOptions.columnDefs = [
        {field : "batchNumber" , displayName : "Batch Number" , enableCellEdit:true},
        {field : "purchaseDate" , displayName : "Purchase Date" , enableCellEdit:true},
        {field : "purchasePrice" , displayName : "Purchase Price" , enableCellEdit:true},
        {field : "stockCount" , displayName : "Stock Count", enableCellEdit:true},
        {field : "currentMrp" , displayName : "Current MRP", enableCellEdit:true},
        {field : "salePrice" , displayName : "Current Sale Price", enableCellEdit:true}
];


    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }
   
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        //debugger;
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });
    $scope.showBelowGrid = false;
    $scope.showStock = function(){
        $interval( function() {
            $scope.gridApi.core.handleWindowResize();
          }, 500, 10);
        $scope.gridOptions.data = [
            {"batchNumber" : "123" ,"salePrice" : "1260", "purchaseDate" : "23/11/2017","purchasePrice" : "1234","stockCount" : "1","currentMrp" : "1233"},
        ];
        $scope.dataForGrid = angular.copy($scope.gridOptions.data);
        $scope.totalPages = Math.ceil($scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
       $scope.showBelowGrid = !$scope.showBelowGrid;
    }
    $scope.addGridData = function(){
        $scope.gridOptions.data.push({"batchNumber" : "" ,"salePrice" : "", "purchaseDate" : "","purchasePrice" : "","stockCount" : "","currentMrp" : ""});
        $scope.dataForGrid = angular.copy($scope.gridOptions.data);
        $scope.totalPages = Math.ceil($scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
    }
    $scope.save = function(){
        inventoryServices.save($scope.inventory , $scope.Description).then(function(success){
            console.log('save Successfully');
            $state.go('Home.Inventory');   
        },function(error){
            console.log('save Failure');
        });
    }
    $scope.update = function(){
        inventoryServices.update($scope.inventory , $scope.Description).then(function(success){
            console.log('update Successfully');
            $state.go('Home.Inventory'); 
        },function(error){
            console.log('update Failure');
        });
    }
    $scope.showStockCount = function(){
        $state.go('Home.SetStock' , {data : $scope.inventory , desc : $scope.Description});
    }
    $scope.changeHeight(0);
});
app.controller('addJournalCtrl',function($rootScope , $scope , $stateParams , $state ,heightCalc, CONSTANTS , journalServices){
    console.log('Inside Add Journal Controller');
    $rootScope.isActive = 'Journal';

    if(angular.isDefined($stateParams.data.referance)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }
    
    $scope.cancel = function(){
        $state.go('Home.Journal');
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('AddJournal');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val,0);
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();

        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
            for(i=0;i<newVal;i++){
                $scope.pageNumber[i] = i+1; 
            }        
    });
    journalServices.getCurrentJournal().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
       
          },function(error){
        console.log('error',error);
   });
    $scope.changeHeight(0);
});
app.controller('addPaymentCtrl',function($rootScope , $scope , $stateParams , commonServices , $state , CONSTANTS){
    console.log('Inside Add Payment Controller');
    $rootScope.isActive = 'Payments';

    if(angular.isDefined($stateParams.data.vendorName) && angular.isUndefined($stateParams.data.backFromSales)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.payment = {}
    }
    else if(angular.isDefined($stateParams.data.backFromSales)){
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.addReceiptLabel = "Add";
        $scope.payment = $stateParams.data;
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.payment = {}
    }
    $scope.panelShow = true ;
    $scope.togglePannel = function(){
        $scope.panelShow = !$scope.panelShow;
    }

    commonServices.getpaymentMode().then(function(response){
        $scope.paymentList = response.data;
           },function(error){
         console.log('error',error);
    });
    $scope.payment.name = '';
    $scope.checkVendors = function(){
        $state.go('Home.addVendors', {data : {"name" : $scope.payment.name}});
    }

    $scope.gotoSales = function(event , data){
        event.stopPropagation();
        $scope.payment.selectedSales = data;
        $scope.payment.custNameList = $scope.custNameList;
        $scope.payment.from = "Payment";
         $state.go('Home.addSales', {data :  $scope.payment });
     }
    $scope.salesList = [
        {"id":1,"date":"9/12/2009","amount":"200"},
        {"id":2,"date":"10/12/2014","amount":"200"},
        {"id":3,"date":"10/12/2017","amount":"200"},
        {"id":4,"date":"10/12/2018","amount":"200"},
        {"id":5,"date":"7/12/2017","amount":"200"},
        {"id":6,"date":"10/12/2017","amount":"200"},
        {"id":7,"date":"10/12/2017","amount":"200"},
        {"id":8,"date":"8/12/2017","amount":"200"},
        {"id":9,"date":"10/12/2011","amount":"200"},
        {"id":10,"date":"10/12/2017","amount":"200"},
        ];
        /*angular.forEach($scope.salesList , function(key){

        });*/
        $scope.salesList.sort(function(a,b){

            //var aa = CONSTANTS.getDateObject(a.date) - CONSTANTS.getDateObject(b.date);
            //var d = new Date(a);
            //console.log('aa',aa);
            return CONSTANTS.getDateObject(a.date) - CONSTANTS.getDateObject(b.date);
            
           
        });
    function getSaleTotal(){
        $scope.totalOfSelectedSaleList = 0;
        $scope.totalOfSaleList = 0;
        angular.forEach($scope.salesList , function(key){
            if(angular.isDefined(key)){
            $scope.totalOfSaleList = $scope.totalOfSaleList + parseInt(key.amount);
            }
        });
        angular.forEach($scope.SelectedSalesList , function(key){
            if(angular.isDefined(key)){
            $scope.totalOfSelectedSaleList = $scope.totalOfSelectedSaleList + parseInt(key.amount);
            }
        });
    };



    getSaleTotal();
   $scope.SelectedSalesList = [];


   $scope.btnRight = function (data , $index) {
    $scope.SelectedSalesList.push(data);

    angular.forEach($scope.salesList , function(key , value){
        if(data.id == key.id){
            $scope.salesList.splice($index,1);
            console.log($scope.salesList);
        }
        
    });
    getSaleTotal();
};
$scope.btnLeft = function (data , $index) {
    $scope.salesList.push(data);
    
        angular.forEach($scope.SelectedSalesList , function(key , value){
            if(data.id == key.id){
                $scope.SelectedSalesList.splice($index,1);
                console.log($scope.SelectedSalesList);
            }
        });
        getSaleTotal();
};

});
app.controller('addPurchaseCtrl',function($rootScope , $scope , $filter , purchaseService ,commonServices, CONSTANTS , heightCalc , $timeout, $q, $log , uiGridConstants , $stateParams){
    console.log('Inside Purchase Controller');
    $rootScope.isActive = 'Purchase';

    if(angular.isDefined($stateParams.data.VendorName)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }

    $scope.panelShow = true;
    $scope.togglePannel = function(){
        $scope.panelShow = !$scope.panelShow;
    }
    var today = new Date();
    $scope.purchase = {};
    $scope.purchase.date = today;
    
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('AddPurchase');
    $scope.gridOptions.columnDefs = [
        {field : "sno" , width: "5%"},
        {field : "productName"},
        {field : "productCode"},
        {field : "hsnCode"},
        {field : "batchNo" , width : "7%"},
        {field : "productIdentifier"},
        {field : "rate"},
        {field : "quantity"},
        {field : "discount"},
        {field : "taxableValue"},
        {field : "gstRate"},
        {field : "outputGst"},
        {field : "netAmount",width: "10%"}
]

    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }
    $scope.search = {
        searchString : ''
    }
    $scope.csvDownload = function(){
        $scope.gridApi.exporter.csvExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }
      
    $scope.pdfDownload = function(){
         $scope.gridApi.exporter.pdfExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }

    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }

    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });
    purchaseService.purchaseList().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }
          },function(error){
        console.log('error',error);
   });


   $scope.stateList = [];
   $scope.identity = {};
   commonServices.getCountries().then(function(success){
       var myArray = success.data;
       var countries = {};
       for (var i = 0; i < myArray.length; i++) {
         var countryName = myArray[i].lkupcountry.countryname;
         if (!countries[countryName]) {
           countries[countryName] = [];
         }
         countries[countryName].push({"countryName": myArray[i].lkupcountry.countryname ,"stateName":myArray[i].statename , "stateId" : myArray[i].id ,"countryId":myArray[i].lkupcountry.countryid});
       }
       myArray = [];
       for (var countryName in countries) {
         myArray.push({country: countryName, state: [countries[countryName]]});
       }
       $scope.countryList = myArray;
      $scope.getState('India');
   },function(error){
       console.log(error);
   });
   
   $scope.identity.country = 'India';

   $scope.getState = function(country) {
       var states;
       angular.forEach($scope.countryList , function(key){
           if(key.country == country){
               states =  key.state;
           }
       });
       $scope.stateList = states[0];
   }

    $scope.changeHeight(0);

    $scope.getMatches = function(searchText) {
        var deferred = $q.defer();
            var data = $scope.getData().filter(function(data) {
                return (data.name.toUpperCase().indexOf(searchText.toUpperCase()) !== -1);
            });
            deferred.resolve(data);
            return deferred.promise;
    }

    
$scope.getData = function() {
    return [{"name": "1234"}
    ,{"name": "1289"}
    ,{"name": "9658"}
    ,{"name": "4585"}
    ,{"name": "6852"}
    ,{"name": "2547"}
    ,{"name": "2058"}]
}
});
app.controller('addReceiptCtrl',function($rootScope , $scope , $stateParams , $state , receiptServices , CONSTANTS ,heightCalc ,commonServices ,$timeout){
    console.log('Inside Add Receipt Controller');
    $rootScope.isActive = 'Receipt';
    $scope.custNameList = [];

    
    $scope.getCustomers = function(){
        receiptServices.getCustomerDetails().then(function(response){
           $scope.receiptDataList = response.data;
           angular.forEach(response.data,function(key){
                $scope.custNameList.push({customername : key.customername});
           });
        },function(err){
            console.log(err);
        });
    }

    $scope.getPerticularCustomer = function(){
        angular.forEach($scope.receiptDataList,function(key){
           if($scope.receipt.customername == key.customername){
            $scope.receipt = key;
           }
       });

    }

    $scope.editData = function(row){
        $scope.receipt = row.entity;
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.addReceiptLabel = "Update";
        console.log('row',$scope.receipt);
    }
    $scope.receipt = {};
    $scope.receipt.customername = '';
    if(angular.isDefined($stateParams.data.customerName) && angular.isUndefined($stateParams.data.backFromSales)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.addReceiptLabel = "Update";
        
    }
    else if(angular.isDefined($stateParams.data.backFromSales)){
        $scope.custNameList =  $stateParams.data.custNameList;
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.addReceiptLabel = "Add";
        $scope.receipt = $stateParams.data;
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.addReceiptLabel = "Add";
        $scope.getCustomers();
    }



    $scope.ifCustomer = true;
   
    
  
    $scope.cancel = function(){
        $state.go('Home.Receipt');
    }
    $scope.checkCustomer = function(){
        $scope.receipt.custNameList = $scope.custNameList;
        $scope.receipt.selectedCustomer = $scope.receipt.customername;
        $state.go('Home.addCustomers', {data : $scope.receipt});
    }
    $scope.resetAll = function(){
        $scope.receipt = {};
        $scope.addReceiptForm.setPristine();
    }
    $scope.panelShow = true ;
    $scope.togglePannel = function(){
        $scope.panelShow = !$scope.panelShow;
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('addReceipt');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    commonServices.getpaymentMode().then(function(response){
        $scope.paymentList = response.data;
           },function(error){
         console.log('error',error);
    });
    commonServices.getBanks().then(function(response){
        $scope.bankList = response.data;
           },function(error){
         console.log('error',error);
    });

    receiptServices.getPreviousReceipts().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
       
          },function(error){
        console.log('error',error);
   });


 $scope.gotoSales = function(event , data){
    event.stopPropagation();
    $scope.receipt.selectedSales = data;
    $scope.receipt.custNameList = $scope.custNameList;
    $scope.receipt.from = "Receipt";
     $state.go('Home.addSales', {data :  $scope.receipt });
 }
   $scope.saveReceipt = function(){
    receiptServices.saveReceipt($scope.receipt).then(function(response){
        console.log($scope.receipt);
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
           },function(error){
         console.log('error',error);
    });
   }

   $scope.salesList = [
    {"id":1,"date":"9/12/2009","amount":"200"},
    {"id":2,"date":"10/12/2014","amount":"200"},
    {"id":3,"date":"10/12/2017","amount":"200"},
    {"id":4,"date":"10/12/2018","amount":"200"},
    {"id":5,"date":"7/12/2017","amount":"200"},
    {"id":6,"date":"10/12/2017","amount":"200"},
    {"id":7,"date":"10/12/2017","amount":"200"},
    {"id":8,"date":"8/12/2017","amount":"200"},
    {"id":9,"date":"10/12/2011","amount":"200"},
    {"id":10,"date":"10/12/2017","amount":"200"}
    ];

    $scope.salesList.sort(function(a,b){
                     return CONSTANTS.getDateObject(a.date) - CONSTANTS.getDateObject(b.date);
                });

    function getSaleTotal(){
        $scope.totalOfSelectedSaleList = 0;
        $scope.totalOfSaleList = 0;
        angular.forEach($scope.salesList , function(key){
            if(angular.isDefined(key)){
            $scope.totalOfSaleList = $scope.totalOfSaleList + parseInt(key.amount);
            }
        });
        angular.forEach($scope.SelectedSalesList , function(key){
            if(angular.isDefined(key)){
            $scope.totalOfSelectedSaleList = $scope.totalOfSelectedSaleList + parseInt(key.amount);
            }
        });
    };

    getSaleTotal();
   $scope.SelectedSalesList = [];


   $scope.btnRight = function (data , $index) {
    $scope.SelectedSalesList.push(data);

    angular.forEach($scope.salesList , function(key , value){
        if(data.id == key.id){
            $scope.salesList.splice($index,1);
            console.log($scope.salesList);
        }
        
    });
    getSaleTotal();
};
$scope.btnLeft = function (data , $index) {
    $scope.salesList.push(data);
    
        angular.forEach($scope.SelectedSalesList , function(key , value){
            if(data.id == key.id){
                $scope.SelectedSalesList.splice($index,1);
                console.log($scope.SelectedSalesList);
            }
        });
        getSaleTotal();
};
   $scope.changeHeight(0);

});
app.controller('addSalesCtrl',function($rootScope , $state ,$scope , $filter , salesService , CONSTANTS , heightCalc , $timeout, $q, $log , uiGridConstants , $stateParams , commonServices){
    console.log('Inside Add Sales Controller');
    $rootScope.isActive = 'Sales';
    $scope.disableAll = false;
    if(angular.isDefined($stateParams.data.customerName) && angular.isUndefined($stateParams.data.selectedSales)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        }
        else if(angular.isDefined($stateParams.data.selectedSales) ){
            console.log('$scope.receiptData',$stateParams.data);
            $scope.disableAll = true;
            $scope.receiptData = $stateParams.data;
        }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }

    $scope.panelShow = true;
    $scope.togglePannel = function(){
        $scope.panelShow = !$scope.panelShow;
    }
    $scope.backToReceipt = function(){
        $scope.receiptData.backFromSales = true;
        if($scope.receiptData.from == "Receipt"){
            $state.go('Home.addReceipt' ,  {data :  $scope.receiptData });
        }else {
            $state.go('Home.addPayments' ,  {data :  $scope.receiptData });
        }
       
    }
    var today = new Date();
    $scope.purchase = {};
    $scope.identity = {};
    $scope.purchase.date = today;
    
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('AddSales');
    $scope.gridOptions.columnDefs = [
        {field : "sno" , width: "5%"},
        {field : "productName"},
        {field : "productCode"},
        {field : "hsnCode"},
        {field : "batchNo" , width : "7%"},
        {field : "productIdentifier"},
        {field : "rate"},
        {field : "quantity"},
        {field : "discount"},
        {field : "taxableValue"},
        {field : "gstRate"},
        {field : "outputGst"},
        {field : "netAmount",width: "10%"}
]

    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }
    $scope.search = {
        searchString : ''
    }
    $scope.csvDownload = function(){
        $scope.gridApi.exporter.csvExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }
      
    $scope.pdfDownload = function(){
         $scope.gridApi.exporter.pdfExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }

    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }

    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });
    salesService.salesAllList().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }
          },function(error){
        console.log('error',error);
   });

   $scope.stateList = [];
   commonServices.getCountries().then(function(success){
       var myArray = success.data;
       var countries = {};
       for (var i = 0; i < myArray.length; i++) {
         var countryName = myArray[i].lkupcountry.countryname;
         if (!countries[countryName]) {
           countries[countryName] = [];
         }
         countries[countryName].push({"countryName": myArray[i].lkupcountry.countryname ,"stateName":myArray[i].statename , "stateId" : myArray[i].id ,"countryId":myArray[i].lkupcountry.countryid});
       }
       myArray = [];
       for (var countryName in countries) {
         myArray.push({country: countryName, state: [countries[countryName]]});
       }
       $scope.countryList = myArray;
      $scope.getState('India');
   },function(error){
       console.log(error);
   });
   
   $scope.identity.country = 'India';

   $scope.getState = function(country) {
       var states;
       angular.forEach($scope.countryList , function(key){
           if(key.country == country){
               states =  key.state;
           }
       });
       $scope.stateList = states[0];
   }



    $scope.changeHeight(0);

    $scope.getMatches = function(searchText) {
        var deferred = $q.defer();
            var data = $scope.getData().filter(function(data) {
                return (data.name.toUpperCase().indexOf(searchText.toUpperCase()) !== -1);
            });
            deferred.resolve(data);
            return deferred.promise;
    }

    
$scope.getData = function() {
    return [{"name": "1234"}
    ,{"name": "1289"}
    ,{"name": "9658"}
    ,{"name": "4585"}
    ,{"name": "6852"}
    ,{"name": "2547"}
    ,{"name": "2058"}]
}
});
app.controller('addVendorCtrl',function($rootScope , $scope , $stateParams , $state , vendorServices , CONSTANTS ,commonServices){
    console.log('Inside Add Vendor Controller');
    $rootScope.isActive = 'VENDORS';

    var vendorId;
    $scope.productListByInventory = [];
    if(angular.isDefined($stateParams.data.name)) {
        console.log('$stateParams', $stateParams);
        vendorId = $stateParams.data.vendorid;
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.location = $stateParams.data;
        $scope.identity = $stateParams.data;
        if($stateParams.data.name != ''){
        $scope.books = $stateParams.data.orgledger;
        $scope.books.updateddate = CONSTANTS.getDateObject($stateParams.data.orgledger.updateddate);
        }
    }
    else {
        vendorId = '';
        $scope.heading = "New";
        $scope.btnLabel = "Save";
        $scope.location = {};
        $scope.identity = {};
        $scope.books = {};
    }

    vendorServices.getProducts(vendorId).then(function(response){
        var productNames = response.data;
        angular.forEach(productNames , function(key){
            $scope.productListByInventory.push({"prodName" : key.productname });
        });
        console.log('productListByInventory',$scope.productListByInventory);
          },function(error){
        console.log('error',error);
   });




    $scope.location.country = 'india';
$scope.vendorsData = $scope.location.vendoraddtnldetails || [{ addionalkeyname: "", additionalkeyvalue: "" }];
    $scope.cancel = function(){
        $state.go('Home.Vendors');
    }
    
    $scope.reserAll =function() {
        $scope.vendorsData = [
            { addionalkeyname: "", additionalkeyvalue: "" }
        ];
        $scope.addVendorForm4.$setUntouched();
        $scope.addVendorForm4.$setPristine();
        $scope.resetForm1();
        $scope.resetForm2();
        $scope.resetForm3();
        

        
    }
    $scope.resetForm1 = function(){
        $scope.location = {};
        $scope.addVendorForm1.$setUntouched();
        $scope.addVendorForm1.$setPristine();
    }
    $scope.resetForm2 = function(){
        $scope.identity = {};
        $scope.addVendorForm2.$setUntouched();
        $scope.addVendorForm2.$setPristine();
    }
    $scope.resetForm3 = function(){
        $scope.books = {};
        $scope.addVendorForm3.$setUntouched();
        $scope.addVendorForm3.$setPristine();
    }

    $scope.Add = function(){
        $scope.desc = {};
        $scope.desc.addionalkeyname = "";
        $scope.desc.additionalkeyvalue = "";
        $scope.vendorsData.push($scope.desc);
    };

    $scope.Remove = function(index){
        if($scope.vendorsData.length !== 1) {
            $scope.vendorsData.splice(index, 1);
         }
    }

    $scope.panelShow1 = false;
    $scope.panelShow2 = false;
    $scope.panelShow3 = false;    
    $scope.panelShow4 = false;    
    $scope.panelShow5 = false;    
    $scope.togglePannel1 = function(){
        $scope.panelShow1 = !$scope.panelShow1;
    }
    $scope.togglePannel2 = function(){
        $scope.panelShow2 = !$scope.panelShow2;
    }
    $scope.togglePannel3 = function(){
        $scope.panelShow3 = !$scope.panelShow3;
    }
    $scope.togglePannel4 = function(){
        $scope.panelShow4 = !$scope.panelShow4;
    }
    $scope.togglePannel5 = function(){
        $scope.panelShow5 = !$scope.panelShow5;
    }

    $scope.save = function(){
        vendorServices.saveVendor($scope.location , $scope.identity , $scope.additionalData , $scope.books , $scope.SelectedListItems).then(function(success){
            console.log('success');
            $state.go('Home.Vendors');
        },function(error){
            console.log('error');
        });
    }
    $scope.update = function(){
        vendorServices.updateVendor($scope.location , $scope.identity , $scope.additionalData , $scope.books).then(function(success){
            console.log('success');
            $state.go('Home.Vendors');
        },function(error){
            console.log('error');
        });
    }
    $scope.identity.type = [
        {id : "1" , type : "GST Registered Dealer"},
        {id : "2" , type : "GST Composition Dealer"},
        {id : "3" , type : "Unregistered Dealer"}
    ]
    $scope.gstRequired = false;
    /*
    
     if($scope.identity.type == 'Unregistered Dealer' || $scope.identity.types==''){
            return false;
        }
        return true;
        
        commonServices.getOrgType().then(function(success){
        $scope.identity.type = success.data;   
    },function(error){
        console.log('Get - Failure Product');
    });
    commonServices.getNatureOfBusiness().then(function(success){
        $scope.identity.nob = success.data;   
    },function(error){
        console.log('Get - Failure Product');
    });*/
    $scope.stateList = [];

    commonServices.getCountries().then(function(success){
        var myArray = success.data;
        var countries = {};
        for (var i = 0; i < myArray.length; i++) {
          var countryName = myArray[i].lkupcountry.countryname;
          if (!countries[countryName]) {
            countries[countryName] = [];
          }
          countries[countryName].push({"countryName": myArray[i].lkupcountry.countryname ,"stateName":myArray[i].statename , "stateId" : myArray[i].id ,"countryId":myArray[i].lkupcountry.countryid});
        }
        myArray = [];
        for (var countryName in countries) {
          myArray.push({country: countryName, state: [countries[countryName]]});
        }
        $scope.countryList = myArray;
       $scope.getState('India');
    },function(error){
        console.log(error);
    });
    
    $scope.location.country = 'India';
    $scope.getState = function(country) {
        var states;
        angular.forEach($scope.countryList , function(key){
            if(key.country == country){
                states =  key.state;
            }
        });
        $scope.stateList = states[0];
    }

    

    $scope.selectFaIndex = 0;
    $scope.SelectedAvailItems = [];
    $scope.SelectedSelectedListItems = [];
    $scope.SelectedListItems = [
        []
    ];
    $scope.AvailableListItems = [
        []
    ];

    $scope.DefaultListItems = [$scope.productListByInventory];
    $scope.AvailableListItems =  [$scope.productListByInventory];
    
    $scope.btnRight = function () {
        //move selected.
        angular.forEach($scope.SelectedAvailItems, function (value, key) {
            this.push(value);
        }, $scope.SelectedListItems[$scope.selectFaIndex]);

        //remove the ones that were moved.
        angular.forEach($scope.SelectedAvailItems, function (value, key) {
            for (var i = $scope.AvailableListItems[$scope.selectFaIndex].length - 1; i >= 0; i--) {
                if ($scope.AvailableListItems[$scope.selectFaIndex][i].prodName == value.prodName) {
                    $scope.AvailableListItems[$scope.selectFaIndex].splice(i, 1);
                }
            }
        });
        $scope.SelectedAvailItems = [];

    };

    $scope.btnLeft = function () {
        //move selected.
        angular.forEach($scope.SelectedSelectedListItems, function (value, key) {
            this.push(value);
        }, $scope.AvailableListItems[$scope.selectFaIndex]);

        //remove the ones that were moved from the source container.
        angular.forEach($scope.SelectedSelectedListItems, function (value, key) {
            for (var i = $scope.SelectedListItems[$scope.selectFaIndex].length - 1; i >= 0; i--) {
                if ($scope.SelectedListItems[$scope.selectFaIndex][i].prodName == value.prodName) {
                    $scope.SelectedListItems[$scope.selectFaIndex].splice(i, 1);
                }
            }
        });
        $scope.SelectedSelectedListItems = [];
    };
});
app.controller('applicationLevelCtrl',function($rootScope){
    console.log('Inside Application level Controller');
    $rootScope.isActive = 'Application Level';
});


/* Application Level */
app.controller('applicationFormatLevelCtrl',function($rootScope , $scope , CONSTANTS){
    console.log('Inside Application Format Level Controller');
    $rootScope.isActive = 'Application Level';
    $rootScope.isSubActive = 'Format';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.applicationNavigation;
});

app.controller('applicationTaxLevelCtrl',function($rootScope , $scope , CONSTANTS){
    console.log('Inside Application Level Tax Controller');
    $rootScope.isActive = 'Application Level';
    $rootScope.isSubActive = 'Tax';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.applicationNavigation;
});
app.controller('applicationAccountingLevelCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , applicationServices){
    console.log('Inside Application Level Accounting Controller');
    $rootScope.isActive = 'Application Level';
    $rootScope.isSubActive = 'Accounting';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.applicationNavigation;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Accounting');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        $scope.changeHeight(0);
    }
    applicationServices.getAccounts().then(function(response){
        $scope.gridOptions.data = response.data;
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
          },function(error){
        console.log('error',error);
   });
   $scope.changeHeight(0);
});

app.controller('bankBRSCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , bankingServices){
    console.log('Inside Bank BRS Controller');
    $rootScope.isActive = 'CASH/BANKING';
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('BRS');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }
    $scope.cancel = function(){
        $state.go('Home.bankLedger');
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    bankingServices.getBRS().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
       
          },function(error){
        console.log('error',error);
   });
      
   $scope.changeHeight(0);

});
app.controller('bankingCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , bankingServices ,uiGridGroupingConstants , uiGridExporterConstants , $filter){
    console.log('Inside Banking Controller');
    $rootScope.isActive = 'CASH/BANKING';

    $scope.add = function(){
        $state.go('Home.bankLedger');
    }

    
    $scope.moduleHeading = 'Cash / Banking Ledgers';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 32);
    }
    $scope.editData = function(row){
        $state.go('Home.bankLedger' , { data: row.entity });
    }    
    $scope.editLedger = function(row){
        row.entity.bank = "bank";
        $state.go('Home.bankBRS');
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Banking');
    $scope.gridOptions.headerTemplate = 'application/Partials/inventoryHeader.html';
    $scope.gridOptions.category =[{name: 'Balance Amount', visible: true}];
    $scope.gridOptions.columnDefs = [
        { field: 'ledgerName',
        headerCellClass : 'LedgerHead topPadding15',
        cellTemplate: '<div class="ui-grid-cell-contents ifCenter" >'+
        '<span class="marginLeft10">{{grid.getCellValue(row, col)}}</span>'+
        '<span class="marginRight15 marginLeft10 pull-right" ng-click="grid.appScope.editData(row)">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
        '</span>'+
        '</div>' 
        },
        { field: 'debit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="grid.getCellValue(row, col) != undefined">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>' },
        { field: 'credit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="grid.getCellValue(row, col) != undefined">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>' }
];

$scope.checkModule = function(){
    if($scope.gridOptions.data.length == 0) {
        return true;
    }
    return false;
}
$scope.csvDownload = function(){
    $scope.gridApi.exporter.csvExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
  }
  
   $scope.pdfDownload = function(){
    $scope.gridApi.exporter.pdfExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
  }

$scope.search = {
    searchString : ''
}
$scope.search = function(searchterm){
    if(searchterm == '') {
    return;
    }
    var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
    $scope.gridOptions.data = temp;
    if(temp.length == 0) {
        $scope.totalPages = 1;
        $scope.changeHeight(200);
    }
    else {
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }       
}
$scope.removeSearchFilter = function() {
    $scope.gridOptions.data =  $scope.dataForGrid;
    $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
    $scope.search.searchString = '';
    $scope.changeHeight(0);
}
$scope.getCompanyLedger = function(row,column){
    $state.go('Home.bankLedger');
}

    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;

         }

         $scope.nextPage = function(){
            $scope.gridApi.pagination.nextPage();
            if($scope.paging.pageSelected != $scope.totalPages) {
                $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
            }
            else{
                $scope.paging.pageSelected = $scope.paging.pageSelected;
            }
            $scope.changeHeight(0);
        }
        $scope.prevPage = function(){
            $scope.gridApi.pagination.previousPage();
            if($scope.paging.pageSelected != 1) {
                $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
            }
            else{
                $scope.paging.pageSelected = $scope.paging.pageSelected;
            }
            $scope.changeHeight(0);
        }
        $scope.seek = function(pageSelected){
            $scope.paging.pageSelected = pageSelected;
            $scope.gridApi.pagination.seek($scope.paging.pageSelected);
            $scope.changeHeight(0);
        }
        $scope.totalPages = 0;
        $scope.paging = {
            pageSelected : 1
        };
        $scope.pageNumber = [];
        $scope.$watch('totalPages',function(newVal , oldVal){
            $scope.totalPages = newVal;
            var i = 0;
            $scope.pageNumber = [];
            for(i=0;i<newVal;i++){
                $scope.pageNumber[i] = i+1; 
            }
        });
     
   bankingServices.getLedgers().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
       if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
          },function(error){
        console.log('error',error);
   });
      
   $scope.changeHeight(0);
});
app.controller('bankLedgerCtrl',function($rootScope,$scope ,$state ,$stateParams , CONSTANTS ,heightCalc , bankingServices){
    console.log('Inside Ledger CASH/BANKING Controller');
    $rootScope.isActive = 'CASH/BANKING';

    if(angular.isDefined($stateParams.data.ledgerName)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Create";
    }

    $scope.resetAll = function(){
        $scope.banking ={};
        $scope.addBankingForm.$setPristine();
    }

    $scope.cancel = function(){
        $state.go('Home.Banking');
    }


    /*$scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('BankLedger');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }

    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    bankingServices.getBankLedgers().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
       
          },function(error){
        console.log('error',error);
   });
      
   $scope.brs = function(){
       $state.go('Home.bankBRS');
   }

   $scope.changeHeight(0);*/

});
app.controller('companyLedgersCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , ledgerServices , $stateParams){
    console.log('Inside Company Ledger Controller');
    $rootScope.isActive = 'LEDGERS';
    $scope.pageData = $stateParams.data;
    if(angular.isDefined($scope.pageData.productname)){
        $scope.showOnlyProduct = true;
        $scope.gridOptions = CONSTANTS.gridOptionsConstants('CompanyLedger');
        $scope.gridOptions.category =[{name: 'Net Balance', visible: true}];
        $scope.gridOptions.headerTemplate = 'application/Partials/inventoryHeader.html';
        $scope.gridOptions.columnDefs = [
            {field : "date" ,headerCellClass : 'topPadding15'},
            {field : "particulars",headerCellClass : 'topPadding15'},
            {field : "voucherType",headerCellClass : 'topPadding15'},
            {field : "voucherNo",headerCellClass : 'topPadding15',
            cellTemplate: '<div class="ui-grid-cell-contents" style="color:blue" ng-click="grid.appScope.salePurchase(row)" >'+
            '<span>{{grid.getCellValue(row, col)}}</span>'+
            '</div>'},
            
            {field : "debit",headerCellClass : 'topPadding15'},
            {field : "credit",headerCellClass : 'topPadding15'},
            {field : "count",category:"Net Balance",
            cellTemplate: '<div class="ui-grid-cell-contents">'+
            '<span class="" ng-if="row.entity.voucherType == \'purchase\'">+</span>'+
            '<span class="" ng-if="row.entity.voucherType == \'sale\'">-</span>'+
            '<span>{{grid.getCellValue(row, col)}}</span>'+
            '</div>'
    },
            {field : "balance",category:"Net Balance"}
    ]
    }
    else {
        $scope.showOnlyProduct = false;
        $scope.gridOptions = CONSTANTS.gridOptionsConstants('CompanyLedger');
    }
    console.log($scope.pageData);
    
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }

    $scope.group1 = "day";
    $scope.salePurchase = function(row){
        if(row.entity.voucherType == 'sale'){
            $state.go('Home.addSales',{data: row.entity});
        }
        else {
            $state.go('Home.addPurchase',{data: row.entity});
        }
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    ledgerServices.getCompanyLedgers().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
       
          },function(error){
        console.log('error',error);
   });
   $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }   
    $scope.brs = function(){
        $state.go('Home.bankBRS');
    }
      
   $scope.changeHeight(0);

});
app.controller('contraCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , contraServices , $filter){
    console.log('Inside Contra Controller');
    $rootScope.isActive = 'Contra';

    $scope.moduleHeading = 'Contra List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Contra'
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }
    $scope.myObj = {};
    $scope.add = function(){
        $state.go('Home.addContra', { data: $scope.myObj });
    }
    $scope.editData = function(row){
        $state.go('Home.addContra' , { data: row.entity });
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Contra');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        /*$scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.addContra' , { data: row.entity });
        });*/
    }
    $scope.search = {
        searchString : ''
    }
    $scope.search = function(searchterm){
        if(searchterm == '') {
        return;
        }
        var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
        $scope.gridOptions.data = temp;
        if(temp.length == 0) {
            $scope.totalPages = 1;
            $scope.changeHeight(200);
        }
        else {
            $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
            $scope.paging.pageSelected=1;
            $scope.changeHeight(0);
        }       
    }
    $scope.removeSearchFilter = function() {
        $scope.gridOptions.data =  $scope.dataForGrid;
        $scope.search.searchString = '';
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    contraServices.searchContra('').then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
          },function(error){
        console.log('error',error);
   });
    $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }
      
   $scope.changeHeight(0);

});
app.controller('creditNoteCtrl',function($rootScope){
    console.log('Inside Credit Note Controller');
    $rootScope.isActive = 'Credit Note';
});
app.controller('customerCtrl',function($rootScope , $scope , $state , CONSTANTS ,heightCalc , customerServices , $filter , uiGridExporterConstants){
    console.log('Inside Customer Controller');
    $rootScope.isActive = 'CUSTOMERS';
    
    $scope.moduleHeading = 'Customers List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.btn3 = 'Import';
    $scope.ifThreeBtn = true;
    $rootScope.showLoader = true;

    $scope.myObj = {};

    $scope.add = function() {
        $state.go('Home.addCustomers', { data: $scope.myObj });
    }
    $scope.import = function(){
        $state.go('Home.ImportCustomer', { from: "Customer" });
    }
    $scope.editData = function(row){
        $state.go('Home.addCustomers' , { data: row.entity });
    }    
    $scope.editLedger = function(row){
        $state.go('Home.companyLedgers' , { data: row.entity });
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Customer');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }
    $scope.gridOptions.category =[{name: 'Balance Amount', visible: true}];
    $scope.gridOptions.headerTemplate = 'application/Partials/inventoryHeader.html';
    $scope.search = {
        searchString : ''
    }
    $scope.csvDownload = function(){
        $scope.gridApi.exporter.csvExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }
      
       $scope.pdfDownload = function(){
        $scope.gridApi.exporter.pdfExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }
    $scope.search = function(searchterm){
        if(searchterm == '') {
        return;
        }
        var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
        $scope.gridOptions.data = temp;
        if(temp.length == 0) {
            $scope.totalPages = 1;
            $scope.changeHeight(200);
        }
        else {
            $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
            $scope.paging.pageSelected=1;
            $scope.changeHeight(0);
        }       
    }
    $scope.removeSearchFilter = function() {
        $scope.gridOptions.data =  $scope.dataForGrid;
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.search.searchString = '';
        $scope.changeHeight(0);
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 32);
    }

    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    customerServices.searchCustomer('').then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }
        $rootScope.showLoader = false;
          },function(error){
        console.log('error',error);
   });
    $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }

    $scope.changeHeight(0);
});
app.controller('dashboardCtrl',function($rootScope){
    console.log('Inside Dashboard Controller');
    $rootScope.isActive = 'DASHBOARD';
});
app.controller('debitNoteCtrl',function($rootScope){
    console.log('Inside Debit Note Controller');
    $rootScope.isActive = 'Debit Note';
});
app.controller('expenseCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , expenseServices , $filter){
    console.log('Inside Expense Controller');
    $rootScope.isActive = 'Expense';

    $scope.moduleHeading = 'Expenses List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Expense'
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }

    $scope.myObj = {};
    $scope.add = function(){
        $state.go('Home.addExpense', { data: $scope.myObj });
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Expense');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        /*$scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.addExpense' , { data: row.entity });
        });*/
    }
    $scope.editData = function(row){
        $state.go('Home.addExpense', {data : row.entity});
    }
    $scope.editLedger = function(row){
        $state.go('Home.companyLedgers', {data : row.entity});
    }
    $scope.search = {
        searchString : ''
    }
    $scope.search = function(searchterm){
        if(searchterm == '') {
        return;
        }
        var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
        $scope.gridOptions.data = temp;
        if(temp.length == 0) {
            $scope.totalPages = 1;
            $scope.changeHeight(200);
        }
        else {
            $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
            $scope.paging.pageSelected=1;
            $scope.changeHeight(0);
        }       
    }
    $scope.removeSearchFilter = function() {
        $scope.gridOptions.data =  $scope.dataForGrid;
        $scope.search.searchString = '';
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }

    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });


    expenseServices.searchExpense('').then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
       
          },function(error){
        console.log('error',error);
   });
   $scope.checkModule = function(){
       if($scope.gridOptions.data.length == 0) {
           return true;
       }
       return false;
   }
   $scope.changeHeight(0);
});
app.controller('helpCtrl',function($rootScope){
    console.log('Inside Help Controller');
    $rootScope.isActive = 'Help';
});
app.controller('homeCtrl',function($scope,$rootScope,CONSTANTS ,$state){
    console.log('Inside Home Controller');
    $rootScope.isActive = '';
    $scope.sideMenuOptions = CONSTANTS.sideBarNavigator;
    $scope.headMenuOptions = CONSTANTS.headBarNavigator;
    $scope.organizationNavigation = CONSTANTS.organizationNavigation;
    $scope.backToHome = function(){
        $rootScope.isActive = '';
        $rootScope.showNavigations = true ;
        $state.go('Home.Dashboard');
    }
});
app.controller('importCustomerCtrl',function($http , $q ,$scope, $rootScope , $stateParams , heightCalc ,CONSTANTS ,customerServices , inventoryServices){
    console.log('Inside Import Cust Controller');
   
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('ImportCustomer');
        $rootScope.isActive = 'CUSTOMERS';
        $scope.from = "Customer";
        $scope.gridOptions.columnDefs = [
            { field: 'customername' , displayName:'Customer Name',
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.customername == null){
                       return true;
                     }else{
                         return false;
                     }
             }
        },
            { field: 'address1', displayName:'Address 1' ,
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.address1 == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'address2', displayName:'Address 2' ,enableCellEdit:false},
            { field: 'city', displayName:'City' ,cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.city == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'state', displayName:'State' ,cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.state == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'country', displayName:'Country' ,
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.country == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'PIN', displayName:'Pin' ,cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.PIN == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'type', displayName:'Type' ,enableCellEdit:false},
            { field: 'gst', displayName:'GST' ,enableCellEdit:false},
            { field: 'pan', displayName:'PAN' ,enableCellEdit:false},
            { field: 'aadhar', displayName:'Aadhar' ,enableCellEdit:false},
            { field: 'openingbal', displayName:'Opening Balance' ,cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.openingbal == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'crdr', displayName:'Credit' , cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.crdr == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'openingbaldate', displayName:'Opening Bal Date' ,cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.openingbaldate == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'customercontactname', displayName:'Cust Name' ,enableCellEdit:false},
            { field: 'customercontactphone', displayName:'Cust Phone' ,enableCellEdit:false},
            { field: 'customercontactemail', displayName:'Cust Email' ,enableCellEdit:false}
         
        ];

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }
    $scope.gridOptions.enableRowSelection = false;
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
            if(colDef.field == "customername"){
                if(rowEntity.customername != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "address1"){
                if(rowEntity.address1 != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "city"){
                if(rowEntity.city != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "state"){
                if(rowEntity.state != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "country"){
                if(rowEntity.country != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "PIN"){
                if(rowEntity.PIN != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "openingbal"){
                if(rowEntity.openingbal != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "crdr"){
                if(rowEntity.crdr != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "openingbaldate"){
                if(rowEntity.openingbaldate != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }
            
          });
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    /*if($rootScope.isActive == 'CUSTOMERS'){
    customerServices.importCustomer().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
          },function(error){
        console.log('error',error);
     });
    }*/
     $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }
    $scope.downloadSample = function(){
        window.open('application/fixture/Files/download.csv');
    }

      $scope.changeHeight(200);

        /*Import Logic & validation*/
        $scope.saveEnabled = false;
        //var unitOfMeasure = ["Ampules","Bags", "Bale", "Bundles", "Buckles", "Billions of Units", "Boxes", "Bottles", "Bunches", "Cans", "Cases", "Cubic Meter", "Centi Meter", "Carat", "Cartons", "Dozen", "Drum", "Feet", "Great Gross", "Grams", "Gross Yards", "Kilogram Activity", "Kilogram Base", "Kilograms", "Kits", "Kilo Liter", "Kilo Meters", "Pounds", "Liters", "Milligrams", "Million Keasergen", "Milli Liter", "Millions of Unit", "Meter", "Metric Ton", "Million Units", "Number", "Packs", "Pieces", "Pairs", "Quintal", "Rolls", "Sets", "Square Feet", "Square Meter", "Square Yards", "Tablets", "Ten Grams", "Thousands", "Great Britain Ton", "Tubes", "US Gallons", "Units", "Vials", "Yards"];
        $scope.gridOptions.failureData = [];
        $scope.gridOptions.successData = [];
        $scope.tempGridData = $scope.gridOptions.data;
        $scope.saveList = function(){
            $rootScope.showLoaderWithProgress = true;
            $scope.tempGridData = $scope.gridOptions.data;
            var promises = [];
            $scope.i=0;            
            $scope.gridOptions.data = [];
            $scope.gridOptions.failureData = [];
            $scope.gridOptions.successData = [];
            $scope.tempGridData.forEach(function(d) {
                inventoryServices.saveImportedList(d).then(function(response){
                    $scope.gridOptions.data.push(d);
                    $scope.gridOptions.successData.push(d);
                },function(error){
                    $scope.gridOptions.failureData.push(d);
                }).finally(function(){
                    $scope.i++;
                    if($scope.i == $scope.tempGridData.length)
                    {
                        $rootScope.showLoaderWithProgress = false;
                    }
                   
                });
              });
        };

       
    
        $scope.switchData = function(section){
            if(section == "failure"){
                $scope.gridOptions.data = $scope.gridOptions.failureData;
            }
            else {
                $scope.gridOptions.data = $scope.gridOptions.successData;
            }
            if($scope.gridOptions.data.length == 0){
             $scope.changeHeight(200);
            }
            else {
                $scope.changeHeight(0);
            }
        }

        
    function showGridData(data){
        $scope.gridOptions.data = data;
        $scope.totalPages = Math.ceil($scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        } 
        verifyGridData($scope.gridOptions.data);
    } 
    $scope.errorCount = 0;
    function verifyGridData(gridData){
        angular.forEach(gridData , function(key , value){
            if(angular.isUndefined(key["customername"])){
                key.customername = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["address1"])){
                key.address1 = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["city"])){
                key.city = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["state"])){
                key.state = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["country"])){
                key.country = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["PIN"])){
                key.PIN = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["openingbal"])){
                key.openingbal = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["crdr"])){
                key.crdr = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["openingbaldate"])){
                key.openingbaldate = null;
                $scope.errorCount = $scope.errorCount+1;
            }
        });
        if($scope.errorCount == 0){
            $scope.saveEnabled = true;
        }
        else {
            $scope.saveEnabled = false;
        }
    }   
     $scope.import = function(file) {
        var file = file;
        var rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer
          var reader = new FileReader();
          reader.onload = function(e) {
            var data = e.target.result;
            if(!rABS) data = new Uint8Array(data);
            var workbook = XLSX.read(data, {type: rABS ? 'binary' : 'array'});
           var xlsxData = XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"],{raw:true});
           console.log(xlsxData);
            showGridData(xlsxData);
          };
          if(rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);
        };
});

app.controller('importInventoryCtrl',function($http , $q ,$scope, $rootScope , $stateParams , heightCalc ,CONSTANTS ,customerServices , inventoryServices){
    console.log('Inside Import Inventory Controller');
    $rootScope.isActive = 'INVENTORY';
    $scope.from = "Inventory"
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('ImportCustomer');
        $scope.gridOptions.columnDefs = [
            { field: 'productname' , displayName:'Product Name' , 
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
               if (grid.getCellValue(row,col) == null) {
                    return 'red';
                }
                else {
                    return '';
                }
              },
              enableCellEdit:true,
              cellEditableCondition : function($scope){
                  if($scope.row.entity.productname == null){
                      return true;
                    }else{
                        return false;
                    }
            }
            },
            { field: 'description' ,enableCellEdit:false},
            { field: 'barcode' , displayName:'Barcode',enableCellEdit:false },
            { field: 'hsncode', displayName:'Code',enableCellEdit:false },
            { field: 'sku', displayName:'Count',enableCellEdit:false },
            { field: 'lkupunitofmeasure', displayName:'Unit Of Measure' , 
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                    if(unitOfMeasure.indexOf(grid.getCellValue(row,col)) == -1){
                        return 'red';
                    }
                    else {
                        return '';
                    }
            },
            enableCellEdit:true,
            cellEditableCondition : function($scope){
                if(unitOfMeasure.indexOf($scope.row.entity.lkupunitofmeasure == -1)){
                    return true;
                  }else{
                      return false;
                  }
          }},
            { field: 'gstpercent', displayName:'GST',enableCellEdit:false },
            { field: 'group' ,enableCellEdit:false},
            { field: 'specification name',enableCellEdit:false },
            { field: 'specification value' ,enableCellEdit:false},
        ];

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }

    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
            if(colDef.field == "productname"){
                if(rowEntity.productname != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                    console.log("$scope.errorCount1",$scope.errorCount);
                }
            }
            if(colDef.field == "lkupunitofmeasure"){
                if(unitOfMeasure.indexOf(rowEntity.lkupunitofmeasure) != -1){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                    console.log("$scope.errorCount2",$scope.errorCount);
                }
            }
          });
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });
     $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }
    $scope.downloadSample = function(){
        window.open('application/fixture/Files/download.csv');
    }

        if($rootScope.isActive == 'INVENTORY'){
            $scope.changeHeight(200);
        }
        else{
            $scope.changeHeight(0);
        }

        /*Import Logic & validation*/
        $scope.saveEnabled = false;
        var unitOfMeasure = ["Ampules","Bags", "Bale", "Bundles", "Buckles", "Billions of Units", "Boxes", "Bottles", "Bunches", "Cans", "Cases", "Cubic Meter", "Centi Meter", "Carat", "Cartons", "Dozen", "Drum", "Feet", "Great Gross", "Grams", "Gross Yards", "Kilogram Activity", "Kilogram Base", "Kilograms", "Kits", "Kilo Liter", "Kilo Meters", "Pounds", "Liters", "Milligrams", "Million Keasergen", "Milli Liter", "Millions of Unit", "Meter", "Metric Ton", "Million Units", "Number", "Packs", "Pieces", "Pairs", "Quintal", "Rolls", "Sets", "Square Feet", "Square Meter", "Square Yards", "Tablets", "Ten Grams", "Thousands", "Great Britain Ton", "Tubes", "US Gallons", "Units", "Vials", "Yards"];
        $scope.gridOptions.failureData = [];
        $scope.gridOptions.successData = [];
        $scope.tempGridData = $scope.gridOptions.data;
        $scope.saveList = function(){
            $rootScope.showLoaderWithProgress = true;
            $scope.tempGridData = $scope.gridOptions.data;
            var promises = [];
            $scope.i=0;            
            $scope.gridOptions.data = [];
            $scope.gridOptions.failureData = [];
            $scope.gridOptions.successData = [];
            $scope.tempGridData.forEach(function(d) {
                inventoryServices.saveImportedList(d).then(function(response){
                    $scope.gridOptions.data.push(d);
                    $scope.gridOptions.successData.push(d);
                },function(error){
                    $scope.gridOptions.failureData.push(d);
                }).finally(function(){
                    $scope.i++;
                    if($scope.i == $scope.tempGridData.length)
                    {
                        $rootScope.showLoaderWithProgress = false;
                    }
                    $scope.changeHeight(0);
                });
              });
        };

       
    
        $scope.switchData = function(section){
            if(section == "failure"){
                $scope.gridOptions.data = $scope.gridOptions.failureData;
            }
            else {
                $scope.gridOptions.data = $scope.gridOptions.successData;
            }
            if($scope.gridOptions.data.length == 0){
                $scope.changeHeight(200);
               }
               else {
                   $scope.changeHeight(0);
               }
        }

        
    function showGridData(data){
        $scope.gridOptions.data = data;
        $scope.totalPages = Math.ceil($scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        } 
        verifyGridData($scope.gridOptions.data);
    } 
    $scope.errorCount = 0;
    function verifyGridData(gridData){
        angular.forEach(gridData , function(key , value){
            if(angular.isUndefined(key["productname"])){
                key.productname = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["lkupunitofmeasure"])){
                key.lkupunitofmeasure = null;
                $scope.errorCount = $scope.errorCount+1;
            }
        });
        if($scope.errorCount == 0){
            $scope.saveEnabled = true;
        }
        else {
            $scope.saveEnabled = false;
        }
    }   
     $scope.import = function(file) {
        var file = file;
        var rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer
          var reader = new FileReader();
          reader.onload = function(e) {
            var data = e.target.result;
            if(!rABS) data = new Uint8Array(data);
            var workbook = XLSX.read(data, {type: rABS ? 'binary' : 'array'});
           var xlsxData = XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"],{raw:true});
            showGridData(xlsxData);
          };
          if(rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);
        };
});

app.controller('importLedgerCtrl',function( $rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , ledgerServices ,inventoryServices ){
    console.log('Inside Import Ledgers Controller');
    $rootScope.isActive = 'LEDGERS';

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 32);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('ImportLedger');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
            if(colDef.field == "date"){
                if(rowEntity.date != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                    console.log("$scope.errorCount1",$scope.errorCount);
                }
            }
            if(colDef.field == "DrCr"){
                if(rowEntity.DrCr == "dr" || rowEntity.DrCr == "cr"){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                    console.log("$scope.errorCount1",$scope.errorCount);
                }
            }
            if(colDef.field == "credit"){
                if(angular.isDefined(rowEntity.credit)){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                    console.log("$scope.errorCount1",$scope.errorCount);
                }
        }
        if(colDef.field == "debit"){
            if(angular.isDefined(rowEntity.debit)){
                $scope.errorCount = $scope.errorCount-1;
                if($scope.errorCount == 0){
                    $scope.saveEnabled = true;
                }
                else {
                    $scope.saveEnabled = false;
                }
                console.log("$scope.errorCount1",$scope.errorCount);
            }
    }
        });
    }

    $scope.gridOptions.category =[{name: 'Balance Amount', visible: true}];
    $scope.gridOptions.headerTemplate = 'application/Partials/inventoryHeader.html';
    $scope.gridOptions.columnDefs = [
        {field : "entrynotes",displayName:"Ledger Entry Notes",headerCellClass : 'topPadding15',enableCellEdit:false},
        {field : "rows",headerCellClass : 'topPadding15',enableCellEdit:false},
        {field : "DrCr",headerCellClass : 'topPadding15',cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
            if (grid.getCellValue(row,col) == null) {
                return 'red';
             }
             else if(row.entity.DrCr == 'dr'){
                return '';
            }
            else if(row.entity.DrCr == 'cr'){
                return '';
            }
             else {
                 return "red";
             }
           },
           enableCellEdit:true,
           cellEditableCondition : function($scope){
               if($scope.row.entity.DrCr == null ){
                   return true;
                 }
                 else if($scope.row.entity.DrCr == 'dr'){
                    return false;
                 }
                 else if($scope.row.entity.DrCr == 'cr'){
                    return false;
                 }else{
                     return true;
                 }
         }},
        {field : "date",headerCellClass : 'topPadding15',cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
            if (grid.getCellValue(row,col) == null) {
                 return 'red';
             }
             else {
                 return '';
             }
           },
           enableCellEdit:true,
           cellEditableCondition : function($scope){
               if($scope.row.entity.date == null){
                   return true;
                 }else{
                     return false;
                 }
         }},
        { field: 'debit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span ng-if="row.entity.DrCr == \'dr\' ">{{row.entity.amount}}</span>'+
        '<span ng-if="row.entity.DrCr != \'dr\' "> &nbsp; </span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="row.entity.DrCr == \'dr\'">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>', cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
            if (row.entity.amount == null && row.entity.DrCr == 'dr') {
                if(angular.isDefined(row.entity.debit)){
                    row.entity.amount = row.entity.debit;
                    return "";
                }
                return 'red';
            }
            else if(row.entity.amount == null && row.entity.DrCr == null){
                if(angular.isDefined(row.entity.debit)){
                    row.entity.amount = row.entity.debit;
                    return "";
                }
                return 'red';
            }
            else {
               
                return "";
            }
           },
           enableCellEdit:true,
           cellEditableCondition : function($scope){
               if($scope.row.entity.amount == null){
                
                   return true;
                 }else{
                    $scope.row.entity.amount = $scope.row.entity.debit;
                     return false;
                 } } 
        },
        { field: 'credit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span ng-if="row.entity.DrCr !=  \'dr\' ">{{row.entity.amount}}</span>'+
        '<span ng-if="row.entity.DrCr ==  \'dr\' "> &nbsp; </span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="row.entity.DrCr != \'dr\'">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>', cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {

            if (row.entity.amount == null && row.entity.DrCr == 'cr') {
                if(angular.isDefined(row.entity.credit)){
                    row.entity.amount = row.entity.credit;
                    return "";
                }
                return 'red';
            }
            else if(row.entity.amount == null && row.entity.DrCr == null){
                if(angular.isDefined(row.entity.credit)){
                    row.entity.amount = row.entity.credit;
                    return "";
                }
                return 'red';
            }
            else {
               
                return "";
            }/*
            else if (angular.isDefined(row.entity.credit)) {
                row.entity.amount = row.entity.credit;
                return '';
            }
            else {
                //row.entity.amount = row.entity.credit;
                return "";
            }
            if (row.entity.amount == null && row.entity.DrCr == null) {
                return 'red';
            }
            else if(row.entity.DrCr == "cr" && row.entity.amount == null){
                return "red";
             }
             else if(row.entity.credit != null){
                return ""
             }
            else {
                return '';
            }
            row.entity.amount = row.entity.credit;*/ 
           },
           enableCellEdit:true,
           cellEditableCondition : function($scope){
               if($scope.row.entity.amount == null){
                   return true;
                 }else{
                    $scope.row.entity.amount = $scope.row.entity.credit;
                     return false;
                 } }  }
];
    /*ledgerServices.importLedgers().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
          },function(error){
        console.log('error',error);
     });*/

     $scope.saveEnabled = false;
     $scope.gridOptions.failureData = [];
     $scope.gridOptions.successData = [];
     $scope.tempGridData = $scope.gridOptions.data;
     $scope.saveList = function(){
         $rootScope.showLoaderWithProgress = true;
         $scope.tempGridData = $scope.gridOptions.data;
         var promises = [];
         $scope.i=0;            
         $scope.gridOptions.data = [];
         $scope.gridOptions.failureData = [];
         $scope.gridOptions.successData = [];
         $scope.tempGridData.forEach(function(d) {
             inventoryServices.saveImportedList(d).then(function(response){
                 $scope.gridOptions.data.push(d);
                 $scope.gridOptions.successData.push(d);
             },function(error){
                 $scope.gridOptions.failureData.push(d);
             }).finally(function(){
                 $scope.i++;
                 if($scope.i == $scope.tempGridData.length)
                 {
                     $rootScope.showLoaderWithProgress = false;
                 }
                 $scope.changeHeight(0);
             });
           });
     };

    
 
     $scope.switchData = function(section){
         if(section == "failure"){
             $scope.gridOptions.data = $scope.gridOptions.failureData;
         }
         else {
             $scope.gridOptions.data = $scope.gridOptions.successData;
         }
         if($scope.gridOptions.data.length == 0){
             $scope.changeHeight(200);
            }
            else {
                $scope.changeHeight(0);
            }
     }

     $scope.errorCount = 0;
     function verifyGridData(gridData){
         angular.forEach(gridData , function(key , value){
             if(angular.isUndefined(key["DrCr"])){
                 key.DrCr = null;
                 $scope.errorCount = $scope.errorCount+1;
             }
             if(angular.isUndefined(key["date"])){
                key.date = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["amount"])){
                key.amount = null;
                $scope.errorCount = $scope.errorCount+1;
            }
         });
         if($scope.errorCount == 0){
             $scope.saveEnabled = true;
         }
         else {
             $scope.saveEnabled = false;
         }
     }   

     function showGridData(data){
        $scope.gridOptions.data = data;
        $scope.totalPages = Math.ceil($scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        } 
        verifyGridData($scope.gridOptions.data);
    } 
     $scope.import = function(file) {
        var file = file;
        var rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer
          var reader = new FileReader();
          reader.onload = function(e) {
            var data = e.target.result;
            if(!rABS) data = new Uint8Array(data);
            var workbook = XLSX.read(data, {type: rABS ? 'binary' : 'array'});
           var xlsxData = XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"],{raw:true});
           console.log(xlsxData);
            showGridData(xlsxData);
          };
          if(rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);
        };

        ledgerServices.getprimaryGroupList().then(function(responce){
            $scope.primaryGroupList = responce.data;
    
        },function(error){
            console.log(error);
        });

        function getGroupOrLedgerList(primary , main , sub){
            ledgerServices.getGroupOrLedgerList(primary , main , sub).then(function(success){
                $scope.groupLedgerList = success.data;
                /*if(main == "" && sub ==""){
                    $scope.groupLedgerList = success.data;
                }
                else if(sub == ""){
                    $scope.groupLedgerList = success.data;
                }
                else {
                    $scope.groupLedgerList = success.data;
                }*/
            },function(error){
                console.log('error' , error);
            });
        }


        
        $scope.changeGroup = function() {
            angular.forEach($scope.primaryGroupList , function(key,value){
              if(angular.isDefined(key.mainGroup[value])) {
                  if(key.name == $scope.ledger.primaryGroup){
                    $scope.majorGroupList = key.mainGroup;
                  }
              }
            });
           
            getGroupOrLedgerList($scope.ledger.primaryGroup , "" , "");
            $scope.ledger.majorGroup = "";
            $scope.ledger.subGroup = "";
        }
        $scope.changeMainGroup = function(){
            angular.forEach($scope.majorGroupList , function(key,value){
                if(angular.isDefined(key.subGroup[value])) {
                    if(key.name == $scope.ledger.majorGroup){
                      $scope.subGroupList = key.subGroup;
                    }
                }
        });
        getGroupOrLedgerList($scope.ledger.primaryGroup , $scope.ledger.majorGroup , "" );
        $scope.ledger.subGroup = "";
    }
    $scope.changeSubGroup = function(){
        
        getGroupOrLedgerList($scope.ledger.primaryGroup , $scope.ledger.majorGroup , $scope.ledger.subGroup );
        
    }
    $scope.changeHeight(200);
});

app.controller('importVendorCtrl',function($http , $q ,$scope, $rootScope , $stateParams , heightCalc ,CONSTANTS ,customerServices , inventoryServices){
    console.log('Inside Import Vendor Controller');
   
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('ImportCustomer');
        $rootScope.isActive = 'VENDORS';
        $scope.from = "Vendors";
        $scope.gridOptions.columnDefs = [
            { field: 'vendorname' , displayName:'Vendor Name',
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.vendorname == null){
                       return true;
                     }else{
                         return false;
                     }
             }
        },
            { field: 'address1', displayName:'Address 1' ,
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.address1 == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'address2', displayName:'Address 2' ,enableCellEdit:false},
            { field: 'city', displayName:'City' ,cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.city == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'state', displayName:'State' ,cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.state == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'country', displayName:'Country' ,
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.country == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'PIN', displayName:'Pin' ,cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.PIN == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'type', displayName:'Type' ,enableCellEdit:false},
            { field: 'gst', displayName:'GST' ,enableCellEdit:false},
            { field: 'pan', displayName:'PAN' ,enableCellEdit:false},
            { field: 'aadhar', displayName:'Aadhar' ,enableCellEdit:false},
            { field: 'openingbal', displayName:'Opening Balance' ,cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.openingbal == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'crdr', displayName:'Credit' , cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.crdr == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'openingbaldate', displayName:'Opening Bal Date' ,cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                if (grid.getCellValue(row,col) == null) {
                     return 'red';
                 }
                 else {
                     return '';
                 }
               },
               enableCellEdit:true,
               cellEditableCondition : function($scope){
                   if($scope.row.entity.openingbaldate == null){
                       return true;
                     }else{
                         return false;
                     }
             }},
            { field: 'customercontactname', displayName:'Cust Name' ,enableCellEdit:false},
            { field: 'customercontactphone', displayName:'Cust Phone' ,enableCellEdit:false},
            { field: 'customercontactemail', displayName:'Cust Email' ,enableCellEdit:false}
         
        ];

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }
    $scope.gridOptions.enableRowSelection = false;
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
            if(colDef.field == "vendorname"){
                if(rowEntity.vendorname != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "address1"){
                if(rowEntity.address1 != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "city"){
                if(rowEntity.city != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "state"){
                if(rowEntity.state != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "country"){
                if(rowEntity.country != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "PIN"){
                if(rowEntity.PIN != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "openingbal"){
                if(rowEntity.openingbal != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "crdr"){
                if(rowEntity.crdr != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }

            if(colDef.field == "openingbaldate"){
                if(rowEntity.openingbaldate != null){
                    $scope.errorCount = $scope.errorCount-1;
                    if($scope.errorCount == 0){
                        $scope.saveEnabled = true;
                    }
                    else {
                        $scope.saveEnabled = false;
                    }
                }
            }
            
          });
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    /*if($rootScope.isActive == 'CUSTOMERS'){
    customerServices.importCustomer().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
          },function(error){
        console.log('error',error);
     });
    }*/
     $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }
    $scope.downloadSample = function(){
        window.open('application/fixture/Files/download.csv');
    }

      $scope.changeHeight(200);

        /*Import Logic & validation*/
        $scope.saveEnabled = false;
        //var unitOfMeasure = ["Ampules","Bags", "Bale", "Bundles", "Buckles", "Billions of Units", "Boxes", "Bottles", "Bunches", "Cans", "Cases", "Cubic Meter", "Centi Meter", "Carat", "Cartons", "Dozen", "Drum", "Feet", "Great Gross", "Grams", "Gross Yards", "Kilogram Activity", "Kilogram Base", "Kilograms", "Kits", "Kilo Liter", "Kilo Meters", "Pounds", "Liters", "Milligrams", "Million Keasergen", "Milli Liter", "Millions of Unit", "Meter", "Metric Ton", "Million Units", "Number", "Packs", "Pieces", "Pairs", "Quintal", "Rolls", "Sets", "Square Feet", "Square Meter", "Square Yards", "Tablets", "Ten Grams", "Thousands", "Great Britain Ton", "Tubes", "US Gallons", "Units", "Vials", "Yards"];
        $scope.gridOptions.failureData = [];
        $scope.gridOptions.successData = [];
        $scope.tempGridData = $scope.gridOptions.data;
        $scope.saveList = function(){
            $rootScope.showLoaderWithProgress = true;
            $scope.tempGridData = $scope.gridOptions.data;
            var promises = [];
            $scope.i=0;            
            $scope.gridOptions.data = [];
            $scope.gridOptions.failureData = [];
            $scope.gridOptions.successData = [];
            $scope.tempGridData.forEach(function(d) {
                inventoryServices.saveImportedList(d).then(function(response){
                    $scope.gridOptions.data.push(d);
                    $scope.gridOptions.successData.push(d);
                },function(error){
                    $scope.gridOptions.failureData.push(d);
                }).finally(function(){
                    $scope.i++;
                    if($scope.i == $scope.tempGridData.length)
                    {
                        $rootScope.showLoaderWithProgress = false;
                    }
                   
                });
              });
        };

       
    
        $scope.switchData = function(section){
            if(section == "failure"){
                $scope.gridOptions.data = $scope.gridOptions.failureData;
            }
            else {
                $scope.gridOptions.data = $scope.gridOptions.successData;
            }
            if($scope.gridOptions.data.length == 0){
             $scope.changeHeight(200);
            }
            else {
                $scope.changeHeight(0);
            }
        }

        
    function showGridData(data){
        $scope.gridOptions.data = data;
        $scope.totalPages = Math.ceil($scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        } 
        verifyGridData($scope.gridOptions.data);
    } 
    $scope.errorCount = 0;
    function verifyGridData(gridData){
        angular.forEach(gridData , function(key , value){
            if(angular.isUndefined(key["vendorname"])){
                key.vendorname = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["address1"])){
                key.address1 = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["city"])){
                key.city = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["state"])){
                key.state = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["country"])){
                key.country = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["PIN"])){
                key.PIN = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["openingbal"])){
                key.openingbal = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["crdr"])){
                key.crdr = null;
                $scope.errorCount = $scope.errorCount+1;
            }
            if(angular.isUndefined(key["openingbaldate"])){
                key.openingbaldate = null;
                $scope.errorCount = $scope.errorCount+1;
            }
        });
        if($scope.errorCount == 0){
            $scope.saveEnabled = true;
        }
        else {
            $scope.saveEnabled = false;
        }
    }   
     $scope.import = function(file) {
        var file = file;
        var rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer
          var reader = new FileReader();
          reader.onload = function(e) {
            var data = e.target.result;
            if(!rABS) data = new Uint8Array(data);
            var workbook = XLSX.read(data, {type: rABS ? 'binary' : 'array'});
           var xlsxData = XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"],{raw:true});
           console.log(xlsxData);
            showGridData(xlsxData);
          };
          if(rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);
        };
});

app.controller('inventoryCtrl', function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , inventoryServices , $filter , uiGridExporterConstants){
    console.log('Inside Inventory Controller');
    
    $rootScope.isActive = 'INVENTORY';
    $scope.moduleHeading = 'Inventory';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.btn3 = 'Import';
    $scope.ifThreeBtn = true;


    $scope.showWait = true;
    $rootScope.showLoader = true;
    
    $scope.myObj = {};

    $scope.add = function() {
        $state.go('Home.AddInventory' , { data: $scope.myObj });
    }
    $scope.import = function(){
        $state.go('Home.ImportInventory');
    }
    
    $scope.editData = function(row){
        $state.go('Home.AddInventory' , { data: row.entity });
    }    
    $scope.editLedger = function(row){
        $state.go('Home.companyLedgers' , { data: row.entity });
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Inventory');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
       
    }
   
    $scope.gridOptions.category =[{name: 'Balance Amount', visible: true}];
    $scope.gridOptions.headerTemplate = 'application/Partials/inventoryHeader.html';
    $scope.search = {
        searchString : ''
    }

    $scope.csvDownload = function(){
        $scope.gridApi.exporter.csvExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }
      
       $scope.pdfDownload = function(){
        $scope.gridApi.exporter.pdfExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }
      $scope.print = function(){
        var gridOptions = $scope.gridOptions;
        
        var innerContents = '<div class="col-xs-12 inventorySection">'+
        '<div id="grid2" ui-grid="optionsForGrid" class="grid" style="width:100%">'+
            '</div></div>';
        sessionStorage.setItem("gridOpts", JSON.stringify(gridOptions)); 
        var popupWinindow = window.open('', '_blank', 'width=1000,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html  ng-app="print"><head><base href="/">'+
        '<script src="/node_modules/jquery/dist/jquery.min.js"></script>'+
        '<link rel="stylesheet" type="text/css" href="/node_modules/bootstrap/dist/css/bootstrap.min.css" />'+
        '<link rel="stylesheet" type="text/css" href="/node_modules/angular-ui-grid/ui-grid.css" />'+
        '<link rel="stylesheet" type="text/css" href="/application/css/index.css"/>'+
        '<script src="/node_modules/angular/angular.min.js"></script>'+
        '<script src="/node_modules/angular-ui-grid/ui-grid.js"></script>'+ 
        '<style>.ui-grid-header { height : 40px; } </style>'+   
        '<script>'+
        'var print= angular.module("print",["ui.grid"]);print.controller("printCtrl",function($rootScope,$scope,$timeout,$window){'+
            '$scope.optionsForGrid = JSON.parse(sessionStorage.getItem("gridOpts"));'+
            '$timeout(function(){var height = $(".ui-grid-canvas").height();$(".grid").css("height",height + 0 + 43);},500);'+
            'console.log("Print in Progress");'+
            '});'+ 
            '</script>'+
            '</head>'+
            '<body id="body" ng-controller="printCtrl"><a>Hit Ctrl+P to print this Document</a><div>'+innerContents+'</div></body></html>');
       
            popupWinindow.document.close();
      }
    $scope.search = function(searchterm){
        if(searchterm == '') {
        return;
        }
        var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
        $scope.gridOptions.data = temp;
        if(temp.length == 0) {
            $scope.totalPages = 1;
            $scope.changeHeight(200);
        }
        else {
            $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
            $scope.paging.pageSelected=1;
            $scope.changeHeight(0);
        }       
    }
    $scope.removeSearchFilter = function() {
        $scope.gridOptions.data =  $scope.dataForGrid;
        $scope.search.searchString = '';
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val,0);
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();

        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
            for(i=0;i<newVal;i++){
                $scope.pageNumber[i] = i+1; 
            }        
    });
    inventoryServices.searchInventories('').then(function(response){
        $scope.gridOptions.data = response.data;

        $scope.gridOptions.data.forEach( function addDates( row, index ){
            console.log('row',row);
            row.value = row.orgledger.balanceamount;
            if(row.productspecs.length !=0) {
                row.specification = row.productspecs[0].productspecid;
            }
            else {
                row.specification = "-";
            }
          });

        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }
        $rootScope.showLoader = false;
          },function(error){
        console.log('error',error);
   });
   $scope.panelShow = true;
   $scope.showAccordian = false;
   $scope.togglePannel = function(){
    $scope.panelShow = !$scope.panelShow;
   }
   $scope.showPrice = function(row){
    var inventoryDetails = row.entity;
    $state.go('Home.InventoryDetails', { data: inventoryDetails , gridData : $scope.gridOptions.data});

   }
 
   $scope.showCounts = function(row){
    $scope.panelShow = true;
    $rootScope.showLoader = true;
    $scope.productName = row.entity.productname;
    $scope.showAccordian = true;

    inventoryServices.getStockCount($scope.productName).then(function(response){
        $scope.stockCountList = response.data;
        $rootScope.showLoader = false;
          },function(error){
        console.log('error',error);
        $rootScope.showLoader = false;
   });
}

    $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }

   $scope.changeHeight(0);
});
app.controller('inventoryDetailsCtrl', function($filter , $rootScope,$scope , $state ,$stateParams, CONSTANTS ,heightCalc , inventoryServices){
    console.log('Inside Inventory Details Controller');

    $rootScope.isActive = 'INVENTORY';

    $scope.productDetails = $stateParams.data;
    $scope.gridData = $stateParams.gridData;
    /* remove Later after API INtegrated */
    angular.forEach($scope.gridData , function(key,value){
        $scope.gridData[value].createddate = CONSTANTS.getDateObject(key.createddate);
        $scope.gridData[value].currentMrp = "10";
        $scope.gridData[value].newMrp = "";
        $scope.gridData[value].newSalePrice = "";
        $scope.gridData[value].stockCount = "10";
    });
    $scope.selectedProduct = $scope.productDetails.productname;
    
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('InventoryDetails');
    $scope.gridOptions.columnDefs = [
        {field : "batchNumber" , displayName : "Batch Number" , enableCellEdit:false},
        {field : "purchaseDate" , displayName : "Purchase Date" , enableCellEdit:false},
        {field : "purchasePrice" , displayName : "Purchase Price" , enableCellEdit:false},
        {field : "stockCount" , displayName : "Stock Count", enableCellEdit:false},
        {field : "currentMrp" , displayName : "Current MRP", enableCellEdit:false},
        {field : "newMrp" , displayName : "New MRP",
        enableCellEdit:true,
        cellEditableCondition : function($scope){if($scope.row.entity.stockCount > 0){return true;}else{return false;}}},
        {field : "salePrice" , displayName : "Current Sale Price", enableCellEdit:false},
        {field : "newSalePrice" , displayName : "New Sale Price" ,
        enableCellEdit:true,
        cellEditableCondition : function($scope){if($scope.row.entity.stockCount > 0){return true;}else{return false;}}},
        {field : "createddate" , displayName : "New Price Effective Date",
        editableCellTemplate: 'application/Partials/dateTemplate.html',
        enableCellEdit:true,
        cellFilter : 'date : \'dd/MM/yyyy\'',
        cellEditableCondition : function($scope){if($scope.row.entity.stockCount > 0){return true;}else{return false;}}}
];

$scope.getEffectiveDate = function(data){
    return data;
}
$scope.save = function(){

}
$scope.disableSave = true;
function checkSaveDisable(){
    $scope.trueRows = 0;
    angular.forEach($scope.gridOptions.data , function(key,value){
    if(key.newMrp != "" && key.newSalePrice != ""){
        debugger;
        $scope.trueRows = $scope.trueRows +1 ;
    }
    });
    if($scope.trueRows == $scope.gridOptions.data.length ) {
        $scope.disableSave = false;
    }
}

    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
          console.log(colDef);
          if(colDef.newMrp){
            if(rowEntity.newMrp <= 0) {
                
                            rowEntity.newMrp = "";
                          }
                          else {
                            rowEntity.newMrp=  rowEntity.newMrp ;
                          }
          }
          else if(colDef.newSalePrice){
            if(rowEntity.newSalePrice <= 0) {
                
                            rowEntity.newSalePrice = "";
                          }
                          else {
                            rowEntity.newSalePrice=  rowEntity.newSalePrice ;
                          }
          }
          else {
              //
          }
          checkSaveDisable();
        });
    }
    $scope.cancel = function(){
        $state.go('Home.Inventory');
    }

    $scope.gridOptions.data = $scope.gridData;

    $scope.csvDownload = function(){
        $scope.gridApi.exporter.csvExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }
      
       $scope.pdfDownload = function(){
        $scope.gridApi.exporter.pdfExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }

      $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val,0);
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();

        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
            for(i=0;i<newVal;i++){
                $scope.pageNumber[i] = i+1; 
            }        
    });
    checkSaveDisable();
    $scope.changeHeight(0);
    
    console.log($stateParams.gridData);


});
app.controller('journalCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , journalServices , $filter){
    console.log('Inside Journal Controller');
    $rootScope.isActive = 'Journal';

    $scope.moduleHeading = 'Journal List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Journal'
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }
    $scope.myObj = {};
    $scope.add = function(){
        $state.go('Home.addJournal', { data: $scope.myObj });
    }
    $scope.editData = function(row){
        $state.go('Home.addJournal' , { data: row.entity });
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Journal');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        /*$scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
           
        });*/
    }
    $scope.search = {
        searchString : ''
    }
    $scope.search = function(searchterm){
        if(searchterm == '') {
        return;
        }
        var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
        $scope.gridOptions.data = temp;
        if(temp.length == 0) {
            $scope.totalPages = 1;
            $scope.changeHeight(200);
        }
        else {
            $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
            $scope.paging.pageSelected=1;
            $scope.changeHeight(0);
        }       
    }
    $scope.removeSearchFilter = function() {
        $scope.gridOptions.data =  $scope.dataForGrid;
        $scope.search.searchString = '';
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    
    journalServices.searchJournal('').then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
       
          },function(error){
        console.log('error',error);
   });
   $scope.checkModule = function(){
       if($scope.gridOptions.data.length == 0) {
           return true;
       }
       return false;
   }
   $scope.changeHeight(0);

});
app.controller('ledgerCtrlPriviors',function( $rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , ledgerServices ,uiGridGroupingConstants , uiGridTreeBaseService , $filter){
    console.log('Inside Ledgers Controller');
    $rootScope.isActive = 'LEDGERS';

    $scope.add = function(){
        $state.go('Home.addLedgers');
    }

    $scope.checkModule = function(){
        return true;
    }
    
    $scope.moduleHeading = 'Ledgers';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }

    var setGroupValues = function( columns, rows ) {
       
        columns.forEach( function( column ) {
          if ( column.grouping && column.grouping.groupPriority > -1 ){
            // Put the balance next to all group labels.
            column.customTreeAggregationFinalizerFn = function( aggregation ) {
              if ( typeof(aggregation.groupVal) !== 'undefined') {
                aggregation.rendered = aggregation.groupVal;
              } else {
                aggregation.rendered = null;
              }
            };
          }
        });
        return columns;
      };

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Ledger');
    $scope.gridOptions.treeRowHeaderAlwaysVisible = false;
    $scope.gridOptions.enableRowSelection = false;
    var cellTemplate = '<div ng-if="!col.grouping || col.grouping.groupPriority === undefined || col.grouping.groupPriority === null || ( row.groupHeader && col.grouping.groupPriority === row.treeLevel )" class="ui-grid-cell-contents" title="TOOLTIP"><div style=\"position:absolute;\" class=\"ui-grid-tree-base-row-header-buttons\" ng-class=\"{\'ui-grid-tree-base-header\': row.treeLevel > -1 }\" ng-click=\"grid.appScope.toggleRow(row,evt)\"><i ng-show="grid.appScope.ifToShow(row)" ng-class=\"{\'ui-grid-icon-minus-squared\': ( ( grid.options.showTreeExpandNoChildren && row.treeLevel > -1 ) || ( row.treeNode.children && row.treeNode.children.length > 0 ) ) && row.treeNode.state === \'expanded\', \'ui-grid-icon-plus-squared\': ( ( grid.options.showTreeExpandNoChildren && row.treeLevel > -1 ) || ( row.treeNode.children && row.treeNode.children.length > 0 ) ) && row.treeNode.state === \'collapsed\'}\" ng-style=\"{\'padding-left\': grid.options.treeIndent * row.treeLevel + \'px\'}\"></i> &nbsp;</div>{{COL_FIELD CUSTOM_FILTERS}}</div>';
    $scope.gridOptions.columnDefs = [
        { field: 'primaryGroup' , 
        grouping: { groupPriority: 0 },
        cellTemplate : cellTemplate},
        { field: 'majorGroupName' ,grouping: { groupPriority: 1 },
        cellTemplate : cellTemplate},
        { field: 'subGroupName' ,grouping: { groupPriority: 2 },
        cellTemplate : cellTemplate},
        { field: 'ledgerName',
        cellTemplate : '<div>'+
        '<div ng-click="grid.appScope.getCompanyLedger(row,col)" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'+
           '</div>'
        },
        { field: 'balance' , 
        treeAggregationType: uiGridGroupingConstants.aggregation.SUM,
        customTreeAggregationFinalizerFn: function( aggregation ) {
          aggregation.rendered = aggregation.value;
        }}
];
$scope.ifToShow = function(row){
    var exp = $scope.gridApi.treeBase.getRowChildren(row)[0];
    for (var key in exp.entity) {
        var keys = exp.entity[key];
        if(keys.groupVal==""){
            return false;
        }
    }
    return true;
}
$scope.search = {
    searchString : ''
}
$scope.search = function(searchterm){
    if(searchterm == '') {
    return;
    }
    var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
    $scope.gridOptions.data = temp;
    if(temp.length == 0) {
        $scope.totalPages = 1;
        $scope.changeHeight(200);
    }
    else {
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }       
}
$scope.removeSearchFilter = function() {
    $scope.gridOptions.data =  $scope.dataForGrid;
    $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
    $scope.search.searchString = '';
    $scope.changeHeight(0);
}

$scope.toggleRow = function( row,evt ){
    uiGridTreeBaseService.toggleRowTreeState($scope.gridApi.grid, row, evt);
    //$scope.gridApi.treeBase.toggleRowTreeState($scope.gridApi.grid.renderContainers.body.visibleRowCache[rowNum]);
  };
$scope.getCompanyLedger = function(row,column){
    $state.go('Home.companyLedgers');
}
$scope.gridOptions.showTreeExpandNoChildren = true;
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;

        $scope.gridApi.grid.registerColumnsProcessor( setGroupValues, 410 );

        $scope.gridApi.treeBase.on.rowExpanded($scope, function(row) {
            var exp = $scope.gridApi.treeBase.getRowChildren(row)[0];
            for (var key in exp.entity) {
                var keys = exp.entity[key];
                if(keys.groupVal==""){
                    $scope.gridApi.treeBase.toggleRowTreeState(row);
                }
            }
                 $scope.changeHeight(0);
         });
         $scope.gridApi.treeBase.on.rowCollapsed($scope, function(row) {
                 $scope.changeHeight(0);
         });
      }
     
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        $scope.changeHeight(0);
    }

    ledgerServices.getLedgers().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
          },function(error){
        console.log('error',error);
   });
      
   $scope.changeHeight(0);
});

app.controller('addLedgerCtrl',function($rootScope , $scope , $state){
    console.log('Inside Add Inventory Controller');
    $rootScope.isActive = 'LEDGERS';


    $scope.resetAll = function(){
        $scope.ledger ={};
        $scope.addLedgerForm.$setPristine();
    }

    $scope.cancel = function(){
        $state.go('Home.Ledgers');
    }

});

app.controller('ledgerCtrdddl',function( $rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , ledgerServices ,uiGridGroupingConstants , uiGridTreeBaseService , $filter){
    console.log('Inside Ledgers Controller');
    $rootScope.isActive = 'LEDGERS';

    $scope.add = function(){
        $state.go('Home.addLedgers');
    }

    $scope.checkModule = function(){
        return true;
    }
    
    $scope.moduleHeading = 'Ledgers';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Ledger');
    $scope.gridOptions.columnDefs = [
        { field: 'ledgerName',
        cellTemplate : '<div>'+
        '<div ng-click="grid.appScope.getCompanyLedger(row,col)" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'+
           '</div>'
        },
        { field: 'balance',category:"Balance Amount" }
];
$scope.search = {
    searchString : ''
}
$scope.search = function(searchterm){
    if(searchterm == '') {
    return;
    }
    var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
    $scope.gridOptions.data = temp;
    if(temp.length == 0) {
        $scope.totalPages = 1;
        $scope.changeHeight(200);
    }
    else {
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }       
}
$scope.removeSearchFilter = function() {
    $scope.gridOptions.data =  $scope.dataForGrid;
    $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
    $scope.search.searchString = '';
    $scope.changeHeight(0);
}


$scope.getCompanyLedger = function(row,column){
    $state.go('Home.companyLedgers');
}

    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }
     
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        $scope.changeHeight(0);
    }

    ledgerServices.getLedgers().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
          },function(error){
        console.log('error',error);
   });
      
   $scope.changeHeight(0);
});

app.controller('addLedgerCtrl',function($rootScope , $scope , $state){
    console.log('Inside Add Inventory Controller');
    $rootScope.isActive = 'LEDGERS';


    $scope.resetAll = function(){
        $scope.ledger ={};
        $scope.addLedgerForm.$setPristine();
    }

    $scope.cancel = function(){
        $state.go('Home.Ledgers');
    }

});
/*[
    {
        "primaryGroup": "Assets",
        "majorGroupName": "Plant & Machinary",
        "subGroupName": "",
        "ledgerName": "",
        "balance": "5000"
    },
    {
        "primaryGroup": "Assets",
        "majorGroupName": "Furniture & Fixtures",
        "subGroupName": "",
        "ledgerName": "",
        "balance": "5000"
    },
    {
        "primaryGroup": "Assets",
        "majorGroupName": "Office Equipment",
        "subGroupName": "",
        "ledgerName": "",
        "balance": "5000"
    },
    {
        "primaryGroup": "Assets",
        "majorGroupName": "Vehicles",
        "subGroupName": "Subgroup-2",
        "ledgerName": "op",
        "balance": "5000"
    }
    ,
    {
        "primaryGroup": "Assets",
        "majorGroupName": "Intengible",
        "subGroupName": "Subgroup-2",
        "ledgerName": "Abc Ledger",
        "balance": "5000"
    }
    ,
    {
        "primaryGroup": "Assets",
        "majorGroupName": "Intengible",
        "subGroupName": "Subgroup-2",
        "ledgerName": "Abc Ledger - 2",
        "balance": "5000"
    }
    ,
    {
        "primaryGroup": "Liabilities",
        "majorGroupName": "Deferred Tax Liabilities",
        "subGroupName": "",
        "ledgerName": "",
        "balance": "5000"
    }
    ,
    {
        "primaryGroup": "Liabilities",
        "majorGroupName": "Capital Account",
        "subGroupName": "Capital",
        "ledgerName": "Capital",
        "balance": "5000"
    }
    ,
    {
        "primaryGroup": "Liabilities",
        "majorGroupName": "Capital Account",
        "subGroupName": "Capital",
        "ledgerName": "Reserve & Surplus",
        "balance": "5000"
    }
    ,
    {
        "primaryGroup": "Liabilities",
        "majorGroupName": "Capital Account",
        "subGroupName": "Capital",
        "ledgerName": "Profit & Loss A/C",
        "balance": "5000"
    }
   
]*/
app.controller('ledgerCtrl',function( $rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , ledgerServices ,uiGridGroupingConstants , uiGridTreeBaseService , $filter , uiGridExporterConstants){
    console.log('Inside Ledgers Controller');
    $rootScope.isActive = 'LEDGERS';

    $scope.add = function(){
        $state.go('Home.addLedgers');
    }

    $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }
    $scope.csvDownload = function(){
        $scope.gridApi.exporter.csvExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }
      
       $scope.pdfDownload = function(){
        $scope.gridApi.exporter.pdfExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
      }
    $scope.moduleHeading = 'Ledgers';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.btn3 = 'Import';
    $scope.ifThreeBtn = true;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 32);
    }
    $scope.editData = function(row){
        $state.go('Home.addLedgers' , { data: row.entity });
    }    
    $scope.editLedger = function(row){
        $state.go('Home.companyLedgers' , { data: row.entity });
    }
    $scope.import = function(){
        $state.go('Home.ImportLedger' , { data: "" });   
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Ledger');
    $scope.gridOptions.headerTemplate = 'application/Partials/inventoryHeader.html';
    $scope.gridOptions.category =[{name: 'Balance Amount', visible: true}];
    $scope.gridOptions.columnDefs = [
        { field: 'ledgerName',
        headerCellClass : 'LedgerHead topPadding15',
        cellTemplate: '<div class="ui-grid-cell-contents ifCenter" >'+
        '<span class="marginLeft10">{{grid.getCellValue(row, col)}}</span>'+
        '<span class="marginRight15 marginLeft10 pull-right" ng-click="grid.appScope.editData(row)">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
        '</span>'+
        '</div>' 
        },
        { field: 'debit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="grid.getCellValue(row, col) != undefined">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>' },
        { field: 'credit' ,category:"Balance Amount" ,
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)" ng-if="grid.getCellValue(row, col) != undefined">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>' }
];
$scope.search = {
    searchString : ''
}
$scope.search = function(searchterm){
    debugger;
    if(searchterm == '') {
    return;
    }
    var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
    $scope.gridOptions.data = temp;
    if(temp.length == 0) {
        $scope.totalPages = 1;
        $scope.changeHeight(200);
    }
    else {
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }       
}
$scope.removeSearchFilter = function() {
    $scope.gridOptions.data =  $scope.dataForGrid;
    $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
    $scope.search.searchString = '';
    $scope.changeHeight(0);
}


$scope.getCompanyLedger = function(row,column){
    $state.go('Home.companyLedgers');
}

    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }
     
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });
    ledgerServices.getLedgers().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
          },function(error){
        console.log('error',error);
   });
      
   $scope.changeHeight(0);
});

app.controller('addLedgerCtrl',function($rootScope , $scope , $state , $stateParams , ledgerServices){
    console.log('Inside Add Inventory Controller');
    $rootScope.isActive = 'LEDGERS';
    $scope.groupLedgerList = [];
    if(angular.isDefined($stateParams.data.ledgerName)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
        $scope.ledger ={};
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Create";
        $scope.ledger ={};
    }

    $scope.resetAll = function(){
        $scope.ledger ={};
        $scope.addBankingForm.$setPristine();
    }

    $scope.cancel = function(){
        $state.go('Home.Ledgers');
    }

    $scope.primaryGroupList = [];
    $scope.showdrcr = true;
    $scope.checkBalance = function(){

        if($scope.heading != 'Update'){
            $scope.showdrcr = true;
        }
        else {
            if($scope.ledger.group == 'sub'){
                $scope.showdrcr = false;
            }
            $scope.showdrcr = true;
        } 
    }
    $scope.checkBalance();
    $scope.showMainGroup = true;
    $scope.showSubGroup = true;
    
    $scope.subGroupList = [
       
    ];
    $scope.majorGroupList = [
       
    ];

    $scope.selectGroup = function(){
        if($scope.ledger.group == 'main'){
            $scope.showdrcr = true;
            if($scope.ledger.ledger == 'ledger'){
                $scope.showMainGroup = true;
                $scope.showSubGroup = false;
            }
            else {
            $scope.showMainGroup = false;
            $scope.showSubGroup = false;
            }
        }
        else {
            $scope.showdrcr = false;
            if($scope.ledger.ledger == 'ledger'){
                $scope.showMainGroup = true;
                $scope.showSubGroup = true;
            }           
            else { 
            $scope.showSubGroup = false;
            $scope.showMainGroup = true;
            }
        }
    }
    function getGroupOrLedgerList(primary , main , sub){
        ledgerServices.getGroupOrLedgerList(primary , main , sub).then(function(success){
            $scope.groupLedgerList = success.data;
            /*if(main == "" && sub ==""){
                $scope.groupLedgerList = success.data;
            }
            else if(sub == ""){
                $scope.groupLedgerList = success.data;
            }
            else {
                $scope.groupLedgerList = success.data;
            }*/
        },function(error){
            console.log('error' , error);
        });
    }
    $scope.checkGroups = function(){
        $scope.ledger.group='';
        $scope.showMainGroup = true;
        $scope.showSubGroup = true;
    }
    ledgerServices.getprimaryGroupList().then(function(responce){
        $scope.primaryGroupList = responce.data;

    },function(error){
        console.log(error);
    });

    $scope.changeGroup = function() {
        angular.forEach($scope.primaryGroupList , function(key,value){
          if(angular.isDefined(key.mainGroup[value])) {
              if(key.name == $scope.ledger.primaryGroup){
                $scope.majorGroupList = key.mainGroup;
              }
          }
        });
        $scope.ledger.majorGroup = "";
        $scope.ledger.subGroup = "";

        if( $scope.showMainGroup == false && $scope.showSubGroup == false){
            getGroupOrLedgerList($scope.ledger.primaryGroup , "" , "");
        }
    }
    $scope.changeMainGroup = function(){
        angular.forEach($scope.majorGroupList , function(key,value){
            if(angular.isDefined(key.subGroup[value])) {
                if(key.name == $scope.ledger.majorGroup){
                  $scope.subGroupList = key.subGroup;
                }
            }
    });
    $scope.ledger.subGroup = "";

    if( $scope.showMainGroup == true && $scope.showSubGroup == false){
        getGroupOrLedgerList($scope.ledger.primaryGroup , $scope.ledger.majorGroup , "" );
    }
}
$scope.changeSubGroup = function(){
    
    getGroupOrLedgerList($scope.ledger.primaryGroup , $scope.ledger.majorGroup , $scope.ledger.subGroup );
    
}
});
app.controller('LoginCtrl',function($scope,$state){
    console.log('Inside Login Controller');
    $scope.login = function(){
        $state.go('Home.Dashboard');
    }
});
app.controller('notificationCtrl',function($rootScope){
    console.log('Inside Notification Controller');
    $rootScope.isActive = 'Notification';
});
app.controller('organizationLevelCtrl',function($rootScope , $scope , CONSTANTS , commonServices){
    console.log('Inside Organization Level Controller');
    $rootScope.isActive = 'Org Level';
    $rootScope.isSubActive = 'Organization';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.organizationNavigation;

    $scope.panelShow1 = false;
    $scope.panelShow2 = false;
    $scope.panelShow3 = false;    
 
    $scope.togglePannel1 = function(){
        $scope.panelShow1 = !$scope.panelShow1;
    }
    $scope.togglePannel2 = function(){
        $scope.panelShow2 = !$scope.panelShow2;
    }
    $scope.togglePannel3 = function(){
        $scope.panelShow3 = !$scope.panelShow3;
    }

    commonServices.getOrgType().then(function(response){
        $scope.orgTypeList = response.data;
    },function(error){});

    commonServices.getNatureOfBusiness().then(function(success){
        $scope.nob = success.data;   
    },function(error){
        console.log('Get - Failure Product');
    });

    commonServices.getGstScheme().then(function(success){
        $scope.gstSchemeList = success.data;   
    },function(error){
        console.log('Get - Failure Product');
    });

    $scope.stateList = [];
    $scope.location = {};
    commonServices.getCountries().then(function(success){
        var myArray = success.data;
        var countries = {};
        for (var i = 0; i < myArray.length; i++) {
          var countryName = myArray[i].lkupcountry.countryname;
          if (!countries[countryName]) {
            countries[countryName] = [];
          }
          countries[countryName].push({"countryName": myArray[i].lkupcountry.countryname ,"stateName":myArray[i].statename , "stateId" : myArray[i].id ,"countryId":myArray[i].lkupcountry.countryid});
        }
        myArray = [];
        for (var countryName in countries) {
          myArray.push({country: countryName, state: [countries[countryName]]});
        }
        $scope.countryList = myArray;
       $scope.getState('India');
    },function(error){
        console.log(error);
    });
    
    $scope.location.country = 'India';
 
    $scope.getState = function(country) {
        var states;
        angular.forEach($scope.countryList , function(key){
            if(key.country == country){
                states =  key.state;
            }
        });
        $scope.stateList = states[0];
    }
 
 
});

app.controller('organizationUserCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , organizationServices , $filter , commonServices){
    console.log('Inside Organization Level - user Controller');
    $rootScope.isActive = 'Org Level';
    $rootScope.isSubActive = 'User';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.organizationNavigation;
    $scope.orgUser = {};
    $scope.reset = function(){
        $scope.user ={};
       $scope.orgUser.addUserForm.$setPristine();
        $scope.orgUser.addUserForm.$setUntouched();
    }
    $scope.addNewUserPanel = false;
    $scope.add = function(){
        $scope.addNewUserPanel = true;
        $scope.userType = "New";
        $scope.usertypeBtn = "Save";
    }
    $scope.cancel = function(){
        $scope.addNewUserPanel = false;
    }

    $scope.moduleHeading = 'Application Users';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val) {
        heightCalc.calculateGridHeight(val , 0);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('OrganizationUser');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }
    $scope.editData = function(row){
        //$state.go('Home.AddInventory' , { data: row.entity });
        $scope.addNewUserPanel = true;
        $scope.userType = "Update";
        $scope.usertypeBtn = "Update";
    } 
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });
    $scope.search = {
        searchString : ''
    }
    $scope.search = function(searchterm){
        if(searchterm == '') {
        return;
        }
        var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
        $scope.gridOptions.data = temp;
        if(temp.length == 0) {
            $scope.totalPages = 1;
            $scope.changeHeight(200);
        }
        else {
            $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
            $scope.paging.pageSelected=1;
            $scope.changeHeight(0);
        }       
    }
    $scope.removeSearchFilter = function() {
        $scope.gridOptions.data =  $scope.dataForGrid;
        $scope.search.searchString = '';
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }
    commonServices.getuserStatus().then(function(response){
       $scope.userStatusList = response.data;
          },function(error){
        console.log('error',error);
   });

   commonServices.getRole().then(function(response){
    $scope.userRoleList = response.data;
       },function(error){
     console.log('error',error);
});

    organizationServices.searchUsers('').then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
          },function(error){
        console.log('error',error);
   });
   $scope.checkModule = function(){
       if($scope.gridOptions.data.length == 0) {
           return true;
       }
       return false;
   }
    $scope.changeHeight(0);
});
app.controller('organizationRoleCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , organizationServices , $filter){
    console.log('Inside Organization Level - role Controller');
    $rootScope.isActive = 'Org Level';
    $rootScope.isSubActive = 'Roles';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.organizationNavigation;
    $scope.myObj = {};

    $scope.add = function(){
        $state.go('Home.addRole', { data: $scope.myObj });
    }

    $scope.moduleHeading = 'Role List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }

    $scope.editData = function(row){
        $state.go('Home.addRole' , { data: row.entity });
    }  

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('RoleList');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
       /* $scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            
        });*/
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });
    $scope.gridOptions.rowHeight = 160;
    $scope.search = {
        searchString : ''
    }
    $scope.search = function(searchterm){
        if(searchterm == '') {
        return;
        }
        var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
        $scope.gridOptions.data = temp;
        if(temp.length == 0) {
            $scope.totalPages = 1;
            $scope.changeHeight(200);
        }
        else {
            $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
            $scope.paging.pageSelected=1;
            $scope.changeHeight(0);
        }       
    }
    $scope.removeSearchFilter = function() {
        $scope.gridOptions.data =  $scope.dataForGrid;
        $scope.search.searchString = '';
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }

    organizationServices.getRoleList('').then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
          },function(error){
        console.log('error',error);
   });
   $scope.checkModule = function(){
       if($scope.gridOptions.data.length == 0) {
           return true;
       }
       return false;
   }
    $scope.changeHeight(0);


});

app.controller('addRoleCtrl',function($rootScope , $scope , CONSTANTS , $stateParams , $state , commonServices){
    console.log('Inside Organization Add Role Controller');
    $rootScope.isActive = 'Org Level';
    $rootScope.isSubActive = 'Roles';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.organizationNavigation;

    if(angular.isDefined($stateParams.data.category)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }

    $scope.cancel = function(){
        $state.go('Home.Roles');
    }

    commonServices.getuserStatus().then(function(response){
        $scope.userStatusList = response.data;
           },function(error){
         console.log('error',error);
    });
 
    commonServices.getRole().then(function(response){
     $scope.userRoleList = response.data;
        },function(error){
      console.log('error',error);
 });
 
});
app.controller('paymentCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , paymentServices , $filter){
    console.log('Inside Payment Controller');
    $rootScope.isActive = 'Payments';
    
    $scope.moduleHeading = 'Payment List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Payment'
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }
    $scope.myObj = {};
    $scope.add = function(){
        $state.go('Home.addPayments', { data: $scope.myObj });
    }

    $scope.editData = function(row){
        $state.go('Home.addPayments', {data : row.entity});
    }
    $scope.editLedger = function(row){
        $state.go('Home.companyLedgers', {data : row.entity});
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Payment');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        /*$scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.addPayments' , { data: row.entity });
        });*/
    }
    $scope.search = {
        searchString : ''
    }
    $scope.search = function(searchterm){
        if(searchterm == '') {
        return;
        }
        var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
        $scope.gridOptions.data = temp;
        if(temp.length == 0) {
            $scope.totalPages = 1;
            $scope.changeHeight(200);
        }
        else {
            $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
            $scope.paging.pageSelected=1;
            $scope.changeHeight(0);
        }       
    }
    $scope.removeSearchFilter = function() {
        $scope.gridOptions.data =  $scope.dataForGrid;
        $scope.search.searchString = '';
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });
 
    paymentServices.searchPayments('').then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
       
          },function(error){
        console.log('error',error);
   });
   $scope.checkModule = function(){
       if($scope.gridOptions.data.length == 0) {
           return true;
       }
       return false;
   }
   $scope.changeHeight(0);


});
app.controller('purchaseCtrl',function($rootScope , $scope , $filter , purchaseService , CONSTANTS , heightCalc , $timeout, $q, $log , uiGridConstants , $state){
    console.log('Inside Purchase Controller');
    $rootScope.isActive = 'Purchase';

    $scope.moduleHeading = 'Purchase List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Purchase'
    $scope.ifThreeBtn = false;

    $scope.myObj = {};
    
    $scope.add = function() {
        $state.go('Home.addPurchase' , { data: $scope.myObj });
    }
    $scope.editData = function(row){
        $state.go('Home.addPurchase' , { data: row.entity });
    }    
    $scope.editLedger = function(row){
        $state.go('Home.companyLedgers' , { data: row.entity });
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Purchase');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }
    $scope.gridOptions.category =[{name: 'Balance Amount', visible: true}];
    $scope.gridOptions.headerTemplate = 'application/Partials/inventoryHeader.html';
    $scope.search = {
        searchString : ''
    }
    $scope.search = function(searchterm){
        if(searchterm == '') {
        return;
        }
        var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
        $scope.gridOptions.data = temp;
        if(temp.length == 0) {
            $scope.totalPages = 1;
            $scope.changeHeight(200);
        }
        else {
            $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
            $scope.paging.pageSelected=1;
            $scope.changeHeight(0);
        }       
    }

    $scope.removeSearchFilter = function() {
        $scope.gridOptions.data =  $scope.dataForGrid;
        $scope.search.searchString = '';
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val,32);
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();

        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
            for(i=0;i<newVal;i++){
                $scope.pageNumber[i] = i+1; 
            }        
    });

    purchaseService.searchPurchase('').then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }
          },function(error){
        console.log('error',error);
   });

    $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }

   $scope.changeHeight(0);
});
app.controller('purchaseOrderCtrl',function($rootScope){
    console.log('Inside Purchase Order Controller');
    $rootScope.isActive = 'Purchase Order';
});
app.controller('receiptCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , receiptServices , $filter){
    console.log('Inside Receipt Controller');
    $rootScope.isActive = 'Receipt';

    $scope.moduleHeading = 'Receipt List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Receipt'
    $scope.ifThreeBtn = false;

    $scope.myObj = {};
    $scope.add = function() {
        $state.go('Home.addReceipt', { data: $scope.myObj });
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Receipt');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.addReceipt' , { data: row.entity });
        });
    }
    $scope.search = {
        searchString : ''
    }
    $scope.search = function(searchterm){
        if(searchterm == '') {
        return;
        }
        var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
        $scope.gridOptions.data = temp;
        if(temp.length == 0) {
            $scope.totalPages = 1;
            $scope.changeHeight(200);
        }
        else {
            $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
            $scope.paging.pageSelected=1;
            $scope.changeHeight(0);
        }       
    }
    $scope.removeSearchFilter = function() {
        $scope.gridOptions.data =  $scope.dataForGrid;
        $scope.search.searchString = '';
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 0);
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    receiptServices.searchReceipt('').then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
       
          },function(error){
        console.log('error',error);
   });
   $scope.checkModule = function(){
       if($scope.gridOptions.data.length == 0) {
           return true;
       }
       return false;
   }
   $scope.editData = function(row){
    $state.go('Home.addReceipt', {data : row.entity});
}
$scope.editLedger = function(row){
    $state.go('Home.companyLedgers', {data : row.entity});
}
   $scope.changeHeight(0);
});
app.controller('passwordResetCtrl',function($scope , $rootScope , $stateParams , commonServices){
    console.log('Inside password Reset');
    var user = {};
    user.user = $stateParams.data[0];
    user.org = $stateParams.data[1];
    $scope.strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    $scope.resetPassword = function(){
        user.cred = $scope.creds.password;
        commonServices.setPassword(user).then(function(success){
            console.log('saved');
        } , function(error){
            console.log('failed');
        });
    }
});
app.controller('salesCtrl',function($rootScope , $scope , $filter , salesService , CONSTANTS , heightCalc , $timeout, $q, $log , uiGridConstants , $state){
    console.log('Inside Sales Controller');
    $rootScope.isActive = 'Sales';

    $scope.moduleHeading = 'Sales List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Sale'
    $scope.ifThreeBtn = false;

    $scope.myObj = {};
    
    $scope.add = function() {
        $state.go('Home.addSales' , { data: $scope.myObj });
    }
    $scope.editData = function(row){
        $state.go('Home.addSales' , { data: row.entity });
    }    
    $scope.editLedger = function(row){
        $state.go('Home.companyLedgers' , { data: row.entity });
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Sales');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
    }
    $scope.gridOptions.category =[{name: 'Balance Amount', visible: true}];
    $scope.gridOptions.headerTemplate = 'application/Partials/inventoryHeader.html';
    $scope.search = {
        searchString : ''
    }
    $scope.search = function(searchterm){
        if(searchterm == '') {
        return;
        }
        var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
        $scope.gridOptions.data = temp;
        if(temp.length == 0) {
            $scope.totalPages = 1;
            $scope.changeHeight(200);
        }
        else {
            $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
            $scope.paging.pageSelected=1;
            $scope.changeHeight(0);
        }       
    }

    $scope.removeSearchFilter = function() {
        $scope.gridOptions.data =  $scope.dataForGrid;
        $scope.search.searchString = '';
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.changeHeight(0);
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val,32);
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();

        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
            for(i=0;i<newVal;i++){
                $scope.pageNumber[i] = i+1; 
            }        
    });

    salesService.salesList('').then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }
          },function(error){
        console.log('error',error);
   });

    $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }

   $scope.changeHeight(0);


});
app.controller('salesOrderCtrl',function($rootScope){
    console.log('Inside Sales Order Controller');
    $rootScope.isActive = 'Sales Order';
});
app.controller('setStockCtrl',function($rootScope , $scope ,$stateParams, CONSTANTS , heightCalc , $interval , $timeout , inventoryServices , $state){
    console.log('Inside Set Stock Controller');
    $rootScope.isActive = 'INVENTORY';
    $scope.setStock = {};
    $scope.rowCounts = 0;
    console.log('$stateParams',$stateParams);
    $scope.fieldData = $stateParams.data;
    $scope.specifications = $stateParams.desc ;
    /*$scope.specifications = [
        {specnamekey: "pp", specvalue: "12", visibleinsale: "", ifSpecDefined: true},
        {specnamekey: "p00p", specvalue: "23", visibleinsale: "", ifSpecDefined: true},
        {specnamekey: "p00p", specvalue: "34", visibleinsale: "", ifSpecDefined: false},
        {specnamekey: "p00p", specvalue: "45", visibleinsale: "", ifSpecDefined: true}
        ];*/
        $scope.showSpecs = false;
        angular.forEach($scope.specifications , function(key){
            if(key.ifSpecDefined){
                $scope.showSpecs = true;
            }
        });
        var temp = angular.copy($scope.specifications);
    $scope.stockCountSpecifications = [temp];
    //$scope.stockCountSpecifications.push($scope.specifications);
    $scope.setStockCountSpecs = function(){
        if($scope.showSpecs){

                for(var i=0 ; i < $scope.setStock.stockCount; i++){
                        //$scope.specifications[i].specvalue = $scope.spec.specvalue;
                        var itm = angular.copy($scope.specifications);
                        console.log('itm[i].specvalue',itm.specvalue);
                    $scope.stockCountSpecifications.push(itm);
                    }
    }
    
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val,0);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('InventoryDetails');
    $scope.gridOptions.enableRowSelection = true;
    $scope.gridOptions.expandableRowTemplate = 'application/Partials/specificationSub.html';
    $scope.gridOptions.expandableRowHeight = 150;
    $scope.gridOptions.columnDefs = [
        {field : "sno" , displayName : "SNO.",width:"10%",
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '<span class="productInactive" ng-click="grid.appScope.edit(row)"  style="position:absolute;left: 10px;text-align: left;">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
        '</span>'+
        '</div>' },
        {field : "batchId" , displayName : "Batch id"},
        {field : "purchaseDate" , displayName : "Purchase Date" , cellFilter : 'date : \'dd/MM/yyyy\''},
        {field : "purchasePrice" , displayName : "Purchase Price"},
        {field : "stockCount" , displayName : "Opening Stock Count"},
        {field : "specification" , displayName : "Specification"}
];

$scope.gridOptions.onRegisterApi = function( gridApi ) {
    $scope.gridApi = gridApi;
    $scope.gridApi.expandable.on.rowExpandedStateChanged($scope,function(row){
        if(row.isExpanded){
            $timeout(function(){
                var height = $('.ui-grid-canvas').height();
               // debugger;
                console.log('height',height + 45);
                $('.grid').css('height',height + 45);
            },1000);
        }
        else {
            $timeout(function(){
                var height = $('.ui-grid-canvas').height();
                //debugger;
                console.log('height',height + 45);
                $('.grid').css('height',height + 45);
            },1000);
        }
        $interval( function() {
            gridApi.core.handleWindowResize();
          }, 500, 10);
       /* $timeout(function(){
                var height = $('.ui-grid-canvas').height();
                console.log('height',height + 150 + 45);
                $('.grid').css('height',height + 150 + 45);
        },1000);
        
        
        
        gridApi.expandable.collapseAllRows();
        if(row.isExpanded){
        console.log('pp',gridApi.expandable.getExpandedRows().length);
        if(gridApi.expandable.getExpandedRows().length == 1){

            
            gridApi.expandable.toggleRowExpansion(row);
        }
        else {
          console.log('Failed'); 
        }
     
    }*/
        

    });

}

$scope.gridOptions.data = [];
var gridCount = 1;
$scope.add = function(){
    $scope.gridApi.expandable.collapseAllRows();
    var insideGridData = {
        sno : gridCount++,
        batchId : $scope.setStock.batchId,
        purchaseDate : $scope.setStock.purchaseDate,
        purchasePrice : $scope.setStock.purchasePrice,
        stockCount : $scope.setStock.stockCount,
        specification : $scope.stockCountSpecifications,

    }
    console.log('frfr' , insideGridData);
    $scope.gridOptions.data.push(insideGridData);

        $scope.changeHeight(0);

   
}
$scope.nextPage = function(){
    $scope.gridApi.pagination.nextPage();

    if($scope.paging.pageSelected != $scope.totalPages) {
        $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
    }
    else{
        $scope.paging.pageSelected = $scope.paging.pageSelected;
    }
    $scope.changeHeight(0);
}
$scope.prevPage = function(){
    $scope.gridApi.pagination.previousPage();
    if($scope.paging.pageSelected != 1) {
        $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
    }
    else{
        $scope.paging.pageSelected = $scope.paging.pageSelected;
    }
    $scope.changeHeight(0);
}
$scope.seek = function(pageSelected){
    $scope.paging.pageSelected = pageSelected;
    $scope.gridApi.pagination.seek($scope.paging.pageSelected);
    $scope.changeHeight(0);
}
$scope.totalPages = 1;
$scope.paging = {
    pageSelected : 1
};
$scope.pageNumber = [];
$scope.$watch('totalPages',function(newVal , oldVal){
    $scope.totalPages = newVal;
    var i = 0;
    $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }        
});
$scope.checkValidity = function(data){
    angular.forEach($scope.gridOptions.data , function(key){
        if(key.batchId == data) {
            $scope.batchIdError = true;
        }
        else {
            $scope.batchIdError = false;
        }
    });
}
$scope.edit = function(row){
    $scope.setStock = row.entity;
}
$scope.cancel = function(){
    $state.go('Home.Inventory');
}
$scope.reset = function(){
    $scope.setStock = {};
    $scope.batchIdError = false;
}
$scope.save = function(){
    $state.go('Home.Inventory');
    /*inventoryServices.saveList().then(function(success){
        $state.go('Home.Inventory');
    },function(error){
        $state.go('Home.Inventory');
    });*/
}
$scope.changeHeight(200);


});
app.controller('vendorCtrl',function($rootScope , $scope , $state , CONSTANTS ,heightCalc , vendorServices , $filter , uiGridExporterConstants){
    console.log('Inside Vendor Controller');
    $rootScope.isActive = 'VENDORS';

    $scope.moduleHeading = 'Vendor List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.btn3 = 'Import';
    $scope.ifThreeBtn = true;
    $rootScope.showLoader = true;
    $scope.myObj = {};
    $scope.add = function() {
        $state.go('Home.addVendors', { data: $scope.myObj });
    }
    $scope.import = function(){
        $state.go('Home.ImportVendors');
    }
    $scope.editData = function(row){
        $state.go('Home.addVendors' , { data: row.entity });
    }    
    $scope.editLedger = function(row){
        $state.go('Home.companyLedgers' , { data: row.entity });
    }
    $scope.csvDownload = function(){
        $scope.gridApi.exporter.csvExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
    }
    
    $scope.pdfDownload = function(){
        $scope.gridApi.exporter.pdfExport(uiGridExporterConstants.VISIBLE,uiGridExporterConstants.ALL);
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Vendor');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        /*$scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.addVendors' , { data: row.entity });
        });*/
    }
    $scope.search = {
        searchString : ''
    }
    $scope.gridOptions.category =[{name: 'Balance Amount', visible: true}];
    $scope.gridOptions.headerTemplate = 'application/Partials/inventoryHeader.html';
    $scope.search = function(searchterm){
        if(searchterm == '') {
        return;
        }
        var temp = $filter('filter')($scope.dataForGrid ,searchterm , undefined);
        $scope.gridOptions.data = temp;
        if(temp.length == 0) {
            $scope.totalPages = 1;
            $scope.changeHeight(200);
        }
        else {
            $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
            $scope.paging.pageSelected=1;
            $scope.changeHeight(0);
        }       
    }
    $scope.removeSearchFilter = function() {
        $scope.gridOptions.data =  $scope.dataForGrid;
        $scope.totalPages = Math.ceil( $scope.gridOptions.data.length / $scope.gridOptions.paginationPageSize);
        $scope.search.searchString = '';
        $scope.changeHeight(0);
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val , 32);
    }
    $scope.nextPage = function(){
        $scope.gridApi.pagination.nextPage();
        if($scope.paging.pageSelected != $scope.totalPages) {
            $scope.paging.pageSelected = $scope.paging.pageSelected + 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.prevPage = function(){
        $scope.gridApi.pagination.previousPage();
        if($scope.paging.pageSelected != 1) {
            $scope.paging.pageSelected = $scope.paging.pageSelected - 1;
        }
        else{
            $scope.paging.pageSelected = $scope.paging.pageSelected;
        }
        $scope.changeHeight(0);
    }
    $scope.seek = function(pageSelected){
        $scope.paging.pageSelected = pageSelected;
        $scope.gridApi.pagination.seek($scope.paging.pageSelected);
        $scope.changeHeight(0);
    }
    $scope.totalPages = 0;
    $scope.paging = {
        pageSelected : 1
    };
    $scope.pageNumber = [];
    $scope.$watch('totalPages',function(newVal , oldVal){
        $scope.totalPages = newVal;
        var i = 0;
        $scope.pageNumber = [];
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });
 
    vendorServices.searchVendor('').then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.dataForGrid = angular.copy(response.data);
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }   
        $rootScope.showLoader = false;
          },function(error){
        console.log('error',error);
     });
     $scope.checkModule = function(){
        if($scope.gridOptions.data.length == 0) {
            return true;
        }
        return false;
    }

    $scope.changeHeight(0);


});
app.service('applicationServices',function($http , CONSTANTS){
    this.getAccounts = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].accountingList);
    };
});
app.service('bankingServices',function($http , CONSTANTS){
    this.getLedgers = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].bankingLedger);
     };
     this.getBankLedgers = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].bankLedgers);
     };
     this.getBRS = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].bankBRS);
     };
});
app.service('commonServices',function($http , CONSTANTS){
    this.getCountries = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].getCountries);
    }
    this.getProductGroup = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].productGroup);
    }
    this.getuserStatus = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].userStatus);
    }
    this.getSubscriptionStatus = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].subscriptionStatus);
    }
    this.getSubscriptionPlan = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].subscriptionPlan);
    }
    this.getSubscriptionOption  = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].subscriptionOption);
    }
    this.getRole = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].userRole);
    }
    this.getProductType = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].productType);
    }
    this.getpaymentMode = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].paymentMode);
    }
    this.getBoardingStatus = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].boardingStatus);
    }
    this.getOrgType = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].orgType);
    }
    this.getNatureOfBusiness = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].NOB);
    }
    this.getGstScheme = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].gstScheme);
    }
    this.getBanks = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].getBanks);
    }
    this.setPassword = function(data){
        return $http({
            method: "post",
            url: CONSTANTS.service[CONSTANTS.appLevel].setPassword,
            data: data
            })
    }
});
app.service('contraServices',function($http , CONSTANTS){
    this.getContraList = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].contraList);
    };
    this.searchContra = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].contraList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
    }
});
app.service('customerServices',function($http , CONSTANTS){
    this.importCustomer = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].importCustomer);
    }
    this.searchCustomer = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].customerList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
    }
    this.saveCustomer = function(location , identity , additionalData , books){
        var data = {
            "aadharnum": identity.aadharnum,
            "city": location.city,
            "contactemail": location.contactemail,
            "contactemail2": location.contactemail2,
            "contactphone": location.contactphone,
            "contactphone2": location.contactphone2,
            "corporateaddress1": location.corporateaddress1,
            "corporateaddress2": location.corporateaddress2,
            "customername": location.customername,
            "customertype": location.customertype,
            "gst": identity.gst,
            "lkupnatbus": location.lkupnatbus,
            "lkupstate": location.lkupstate,
            "pincode": location.pincode,
            "regnumber": identity.regnumber,
            "status": location.status,
            "uorgid": CONSTANTS.uuid,
            "customeraddtldata": additionalData,
            "createdby": CONSTANTS.uuid,
            "updatedby": CONSTANTS.uuid,
            };
            console.log(data);
            return $http({
                method: "post",
                url: "CONSTANTS.service[CONSTANTS.appLevel].saveCustomer",
                data: data
                })
    }
    this.updateCustomer = function(location , identity , additionalData , books){
       var data = {
        "aadharnum": identity.aadharnum,
        "city": location.city,
        "contactemail": location.contactemail,
        "contactemail2": location.contactemail2,
        "contactphone": location.contactphone,
        "contactphone2": location.contactphone2,
        "corporateaddress1": location.corporateaddress1,
        "corporateaddress2": location.corporateaddress2,
        "customername": location.customername,
        "customertype": location.customertype,
        "gst": identity.gst,
        "lkupnatbus": location.lkupnatbus,
        "lkupstate": location.lkupstate,
        "pincode": location.pincode,
        "regnumber": identity.regnumber,
        "status": location.status,
        "uorgid": CONSTANTS.uuid,
        "customeraddtldata": additionalData,
        "createddate": new Date(),
        "createdby": CONSTANTS.uuid,
        "updatedby": CONSTANTS.uuid,
        "orgledger": {
            "orgledgerid": "900bf6df-b3d6-4fb9-88ab-4731f4f5ddb8",
            "balanceamount": location.orgledger.balanceamount,
            "createdby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
            "drcr": location.orgledger.drcr
 
             }
        }
        console.log(data);
        return $http({
            method: "put",
            url: "CONSTANTS.service[CONSTANTS.appLevel].updateCustomer",
            data: data
            })
    }

});
app.service('expenseServices',function($http , CONSTANTS){
    this.searchExpense = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].expenseList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
    }
});
app.factory('heightCalc',function($timeout){
    return {
        calculateGridHeight : function(val , val1){

            if(val !== 0){
                $timeout(function(){
                    $('.grid').css('height',val + 43);   

                },500);
            }
            else {
            $timeout(function(){
                var height = $('.ui-grid-canvas').height();
                $('.grid').css('height',height + val1 + 43);
                    
            },500);
        }
        }
    }
});



/*$timeout(function(){
    var headerHeight = $('.ui-grid-header-cell').height();
    console.log('headerHeight',headerHeight);    
},500);*/


app.service('inventoryServices',function($http , CONSTANTS , $q){
    this.getStockCount = function(prod){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].stockCountList);
    }
    this.saveList = function(){
        var data = {};
        return $http({
            method: "post",
            url: "CONSTANTS.service[CONSTANTS.appLevel].saveList",
            data: data
            })
    }
    this.searchInventories = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].inventoryList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
     };
     this.save = function(inventory , description){
       var data =  {
            "barcode": inventory.barcode,
            "description": inventory.description,
            "group": inventory.group,
            "hsncode": inventory.hsncode,
            "lkupproducttype":inventory.lkupproducttype,
            "lkupunitofmeasure": inventory.lkupunitofmeasure,
            "productname": inventory.productname,
            "sku": inventory.sku,
            "status": inventory.productname,
            "uorgid": inventory.uorgid,
            "createdby": inventory.createdby,
            "updatedby": inventory.updatedby,
            "vendor":  {
            "vendorid": inventory.vendor
            },
        "productspecs" : description
    }
            console.log(data);
            return $http({
                method: "post",
                url: "CONSTANTS.service[CONSTANTS.appLevel].saveInventory",
                data: data
                })
    }

    this.update = function(inventory , description){
        var data = {
            "barcode": inventory.barcode,
            "description": inventory.description,
            "group": inventory.group,
            "hsncode": inventory.hsncode,
            "lkupproducttype": inventory.lkupproducttype,
            "lkupunitofmeasure": inventory.lkupunitofmeasure,
            "productname": inventory.productname ,
            "sku": inventory.sku,
            "status": inventory.status,
            "uorgid": "43682e5e-af9c-4805-a29a-5f34e24185af",
            "createdby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
            "updatedby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
            "vendor":  {
            "vendorid": "ecc9ae1c-a4d6-4890-8072-8eedebe5b54a"
            },
            "orgledger": {
                "orgledgerid": "900bf6df-b3d6-4fb9-88ab-4731f4f5ddb8",
                "balanceamount": inventory.orgledger.balanceamount,
                "createdby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
                "drcr": inventory.orgledger.balanceamount     
                 }
        };
         return $http({
             method: "put",
             url: CONSTANTS.service[CONSTANTS.appLevel].updateInventory,
             data: data
             })
     }
     this.saveImportedList = function(rowData) {
        if(rowData.productname != null){
            return $http.get('https://api.github.com/users/haroldrv');
        }
        else {
            return $http.get('https://api.github.com/users/haroldrv0');
        }
        

        //comment above code and uncomment the below code and change the url for the post call
        //return $http({method: "post",url: "https://api.github.com/users/haroldrv",data: rowData})
      };

      
});
app.service('journalServices',function($http , CONSTANTS){
    this.searchJournal = function(search) {
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].journalList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
    }
    this.getCurrentJournal = function() {
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].getCurrentJournal);
    }
});
app.service('ledgerServices',function($http , CONSTANTS){
    this.getLedgers = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].ledgerList);
     };
     this.getCompanyLedgers = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].companyLedgers);
     };
     this.importLedgers = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].importLedgers);
     }
     this.getprimaryGroupList = function(){ 
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].groupList);
     }
     this.getGroups = function(){ 
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].groupList);
     }
     this.getGroupOrLedgerList = function(primary , main , sub){
         var data = {
            primary : primary,
            main : main,
            sub : sub,

         };

        return $http({
            method: "post",
            url: CONSTANTS.service[CONSTANTS.appLevel].postLedgerList,
            data: data
            })
     }

     
});
app.service('organizationServices',function($http , CONSTANTS){
     this.searchUsers = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].organizationUserList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
    }
    this.getRoleList = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].organizationRoleList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
    }
});
app.service('paymentServices',function($http , CONSTANTS){
    this.searchPayments = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].paymentList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
    }
});
app.service('purchaseService',function($http , CONSTANTS){
    this.purchaseList = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].purchaseList);
    }
    this.searchPurchase = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].allPurchseList);
        }        
       // return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
     };
});
app.service('receiptServices',function($http , CONSTANTS){
    this.searchReceipt = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].receiptList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
    }
    this.getCustomerDetails = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].getCustomerDetails);
    }
    this.getPreviousReceipts = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].getPreviousReceipts);
    }
    this.saveReceipt = function(data){
        console.log(data);
        return $http({
            method: "post",
            url: CONSTANTS.service[CONSTANTS.appLevel].saveReceiptList,
            data: data
            })
    }
});
app.service('salesService',function($http , CONSTANTS){
    this.salesList = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].salesList);
    }
    this.salesAllList = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].purchaseList);
    }
});
app.service('vendorServices',function($http , CONSTANTS){
    this.getProducts = function(vendorId){
        this.vendorId = vendorId;
        if(this.vendorId == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].inventoryList);
        }   
        else{
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].inventoryList);
        }
        
    }
    this.importVendor = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].importVendor);
    }
    this.searchVendor = function(search){
        this.search = search;
        if(this.search == ''){
            return $http.get(CONSTANTS.service[CONSTANTS.appLevel].vendorList);
        }        
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].searchInventoryList);
    }

    this.saveVendor = function(location , identity , additionalData , books , SelectedSelectedListItems){
        console.log('SelectedSelectedListItems',SelectedSelectedListItems[0]);
        var data = 
        {
            "aadhar": identity.aadhar,
            "address1": location.address1,
            "address2": location.address2,
            "city":location.city ,
            "contactperson": location.contactperson,
            "contactphone": location.contactphone,
            "createdby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
            "email":location.email ,
            "gstnnumber":identity.gstnnumber ,
            "lkupgsttreatment": location.lkupgsttreatment,
            "lkupstatecountry": location.lkupstatecountry,
            "mobile":location.mobile ,
            "name": location.name,
            "pan": location.pan,
            "pin": identity.pin ,
            "salesperson": location.salesperson,
             "uorgid": "43682e5e-af9c-4805-a29a-5f34e24185af",
             "updatedby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
             "orgledger": {
              "orgledgerid": "900bf6df-b3d6-4fb9-88ab-4731f4f5ddb8",
              "balanceamount": location.orgledger.balanceamount
            }
          };
        console.log(data);
        return $http({
            method: "post",
            url: "CONSTANTS.service[CONSTANTS.appLevel].saveVendor",
            data: data
            })
    }

    this.updateVendor = function(location , identity , additionalData , books){
        var data = 
        {
            "aadhar": identity.aadhar,
            "address1": location.address1,
            "address2": location.address2,
            "city":location.city ,
            "contactperson": location.contactperson,
            "contactphone": location.contactphone,
            "createdby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
            "email":location.email ,
            "gstnnumber":identity.gstnnumber ,
            "lkupgsttreatment": location.lkupgsttreatment,
            "lkupstatecountry": location.lkupstatecountry,
            "mobile":location.mobile ,
            "name": location.name,
            "pan": location.pan,
            "pin": identity.pin ,
            "salesperson": location.salesperson,
             "uorgid": "43682e5e-af9c-4805-a29a-5f34e24185af",
             "updatedby": "6aeca4b7-6f4f-4071-9fd7-af3cb5a4a341",
             "orgledger": {
              "orgledgerid": "900bf6df-b3d6-4fb9-88ab-4731f4f5ddb8",
              "balanceamount": location.orgledger.balanceamount
                        }
          };
        console.log(data);
        return $http({
            method: "post",
            url: "CONSTANTS.service[CONSTANTS.appLevel].updateVendor",
            data: data
            })
    }
});