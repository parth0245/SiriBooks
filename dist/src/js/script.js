var app = angular.module('siriBooks',['ui.router','ngMaterial','ngSanitize','ui.grid','ui.grid.selection','ui.grid.resizeColumns','ui.grid.pagination','ui.grid.grouping','ngMessages','flow']);

app.config(function($stateProvider , $urlRouterProvider,  $locationProvider , flowFactoryProvider) {
    $stateProvider
    .state('Login', {
        url: '/login',
        templateUrl: 'application/Partials/login.html',
        controller : 'LoginCtrl'
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
        url: '/importCustomer',
        templateUrl: 'application/Partials/importCustomer.html',
        controller: 'importCustomerCtrl'
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
        templateUrl: 'application/Partials/importVendor.html',
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
        controller: 'addLedgerCtrl'
    })
    .state('Home.Banking', {
        url: '/banking',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'bankingCtrl'
    })
    .state('Home.Sales', {
        url: '/sales',
        templateUrl: 'application/Partials/sales.html',
        controller: 'salesCtrl'
    })
    .state('Home.Purchase', {
        url: '/purchase',
        templateUrl: 'application/Partials/purchase.html',
        controller: 'purchaseCtrl'
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
  });

app.run(function($rootScope) {
    console.log('Inside Run');
    $rootScope.isActive = '';
    $rootScope.isSubActive = '';
    $rootScope.showNavigations = true ;
    $rootScope.appTitle = 'Siri-Books';
  });
app.constant('CONSTANTS', {
        appLevel : 0,
        service : [
                {
                        inventoryList : 'application/fixture/inventoryList.json',
                        customerList : 'application/fixture/customerList.json',
                        vendorList : 'application/fixture/vendorList.json',
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
                        importCustomer : 'application/fixture/importCustomer.json'
                },{
                        inventoryList : '',
                        customerList : '',
                        vendorList : '',
                        importVendor :'',
                        receiptList :'',
                        paymentList : '',
                        expenseList : '',
                        journalList : '',
                        contraList : '',
                        ledgerList : 'application/fixture/ledgerList.json',
                        organizationUserList : '',
                        organizationRoleList : '' ,
                        accountingList : '',
                        bankingLedger : 'application/fixture/bankingLedger.json',
                        importCustomer : ''
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
                {url : 'Home.DebitNote', name : 'Debit Note' , SelimgSrc:'application/Images/Assets/Debit_Note_active.png' , imgSrc : 'application/Images/Assets/Debit_Note.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.SalesOrder', name : 'Sales Order' ,SelimgSrc:'application/Images/Assets/Sale_Order_active.png' , imgSrc : 'application/Images/Assets/Sale_Order.png', glyphClasses : 'glyphicon glyphicon-signal'},
                {url : 'Home.PurchaseOrder', name : 'Purchase Order' , SelimgSrc:'application/Images/Assets/Purchase_Order_active.png' , imgSrc : 'application/Images/Assets/Purchase_Order.png', glyphClasses : 'glyphicon glyphicon-signal'}
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
                if(gridName == 'Ledger' || gridName == 'Banking'){
                        return {
                                enableSorting: true,
                                rowHeight: 40,
                                enableRowSelection: true,
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
                        enableSorting: true,
                        rowHeight: 40,
                        enableRowSelection: true,
                        enableColumnResizing: false,
                        enableRowHeaderSelection: false,
                        multiSelect : false,
                        enableColumnMenus : false,
                        enableSorting :false,
                        enableVerticalScrollbar : 0 ,
                        enablePaginationControls: false,
                        paginationPageSizes: [5 , 10, 20 , 25],
                        paginationPageSize: 5,
                        treeRowHeaderAlwaysVisible:false,
                        showColumnFooter: false,
                        columnDefs : this[gridName+"fields"]
                }
        }
        },
        Paymentfields :[
                { field: 'vendorName',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span class="productInactive" ng-if="!row.isSelected" style="float:left;margin-left:20px;">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected" style="float:left;margin-left:20px;">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                        '</span>'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '</div>' },
                { field: 'amount',
                width : '15%',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '<span class="productInactive" ng-if="!row.isSelected">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_active.png"/>'+
                        '</span>'+
                        '</div>' },
                { field: 'date' },
                { field: 'modeOfPayment'}       
        ],
        Expensefields :[
                { field: 'vendorName',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span class="productInactive" ng-if="!row.isSelected" style="float:left;margin-left:20px;">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected" style="float:left;margin-left:20px;">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                        '</span>'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '</div>' },
                { field: 'amount',
                width : '15%',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '<span class="productInactive" ng-if="!row.isSelected">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_active.png"/>'+
                        '</span>'+
                        '</div>' },
                { field: 'date' },
                { field: 'expenseDescription'}       
        ],
        Journalfields :[
                { field: 'referance',
                width : '20%',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span class="productInactive" ng-if="!row.isSelected" style="float:left;margin-left:20px;">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected" style="float:left;margin-left:20px;">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
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
                        '<span class="productInactive" ng-if="!row.isSelected" style="float:left;margin-left:20px;">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected" style="float:left;margin-left:20px;">'+
                        '<img height="15" width="15" '+
                                'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
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
                '<span class="productInactive" ng-if="!row.isSelected" style="float:left;margin-left:20px;">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                '</span>'+
                '<span class="productInactive" ng-if="row.isSelected" style="float:left;margin-left:20px;">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                '</span>'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '</div>' },
        { field: 'amount',
        width : '15%',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '<span class="productInactive" ng-if="!row.isSelected">'+
                '<img height="20" width="20" '+
                        'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                '</span>'+
                '<span class="productInactive" ng-if="row.isSelected">'+
                '<img height="20" width="20" '+
                        'src="application/Images/Assets/INVENTORY_page/ladger_active.png"/>'+
                '</span>'+
                '</div>' },
        { field: 'date' },
        { field: 'modeOfPayment'}
        ],
        Inventoryfields : [
                { field: 'product',
                width : '20%',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                              '<span>{{grid.getCellValue(row, col)}}</span>'+
                              '<span class="productInactive" ng-if="!row.isSelected">'+
                              '<img height="15" width="15" '+
                                    'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                              '</span>'+
                              '<span class="productInactive" ng-if="row.isSelected">'+
                              '<img height="15" width="15" '+
                                    'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                              '</span>'+
                              '</div>' },
              { field: 'ledger',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                        '<span>{{grid.getCellValue(row, col)}}</span>'+
                        '<span class="productInactive" ng-if="!row.isSelected">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                        '</span>'+
                        '<span class="productInactive" ng-if="row.isSelected">'+
                        '<img height="20" width="20" '+
                                'src="application/Images/Assets/INVENTORY_page/ladger_active.png"/>'+
                        '</span>'+
                        '</div>' },
              { field: 'specification',
              width : '20%' },
              { field: 'stockCount'},
              { field: 'vendor',
              width : '20%',
                cellTemplate: '<div class="ui-grid-cell-contents" >'+
                            '<span>{{grid.getCellValue(row, col)}}</span>'+
                            '<span class="productInactive" ng-if="!row.isSelected">'+
                            '<img height="15" width="15" '+
                                    'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                            '</span>'+
                            '<span class="productInactive" ng-if="row.isSelected">'+
                            '<img height="15" width="15" '+
                                    'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                            '</span>'+
                            '</div>' },
              { field: 'status'}
],
Customerfields : [
        { field: 'name',
        width : '20%',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span class="productInactive" ng-if="!row.isSelected" style="float:left;margin-left:20px;">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                '</span>'+
                '<span class="productInactive" ng-if="row.isSelected" style="float:left;margin-left:20px;">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                '</span>'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '</div>' },
        { field: 'ledger',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '<span class="productInactive" ng-if="!row.isSelected">'+
                '<img height="20" width="20" '+
                        'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                '</span>'+
                '<span class="productInactive" ng-if="row.isSelected">'+
                '<img height="20" width="20" '+
                        'src="application/Images/Assets/INVENTORY_page/ladger_active.png"/>'+
                '</span>'+
                '</div>' },
        { field: 'address',
        width : '20%' },
        { field: 'type'},
        { field: 'contact'},
        { field: 'status',
width : '20%'}
],
Vendorfields : [
        { field: 'name',
        width : '20%',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span class="productInactive" ng-if="!row.isSelected" style="float:left;margin-left:20px;">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
                '</span>'+
                '<span class="productInactive" ng-if="row.isSelected" style="float:left;margin-left:20px;">'+
                '<img height="15" width="15" '+
                        'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
                '</span>'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '</div>' },
        { field: 'ledger',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
                '<span>{{grid.getCellValue(row, col)}}</span>'+
                '<span class="productInactive" ng-if="!row.isSelected">'+
                '<img height="20" width="20" '+
                        'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
                '</span>'+
                '<span class="productInactive" ng-if="row.isSelected">'+
                '<img height="20" width="20" '+
                        'src="application/Images/Assets/INVENTORY_page/ladger_active.png"/>'+
                '</span>'+
                '</div>' },
        { field: 'address' },
        { field: 'product'},
        { field: 'contact'},
        { field: 'status'}
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
        '<span class="productInactive" ng-if="!row.isSelected" style="float:left;margin-left:20px;">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
        '</span>'+
        '<span class="productInactive" ng-if="row.isSelected" style="float:left;margin-left:20px;">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_active.png"/>'+
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
        {field : "name" ,
        cellClass : "paddingTop65"},
        {field : "createdOn",
        cellClass : "paddingTop65" },
        {field : "updatedOn",
        cellClass : "paddingTop65" },
        {field : "modules",
        width : "25%",
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<div>'+
        '<div class="moduleSection">'+
            '<span class="pull-left">Sales</span>'+
            '<span class="pull-right">'+
                '<img src="application/Images/Assets/Module.png"/>'+
            '</span>'+
        '</div>'+
        '<div class="clearBoth moduleSection">'+
        '<span class="pull-left">Accounting</span>'+
        '<span class="pull-right">'+
            '<img src="application/Images/Assets/Module.png"/>'+
        '</span>'+
    '</div>'+
    '<div class="clearBoth moduleSection">'+
    '<span class="pull-left">Inventory</span>'+
    '<span class="pull-right">'+
        '<img src="application/Images/Assets/Module.png"/>'+
    '</span>'+
'</div>'+
'<div class="clearBoth moduleSection">'+
'<span class="pull-left">Products</span>'+
'<span class="pull-right">'+
    '<img src="application/Images/Assets/Module.png"/>'+
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
]
});
app.controller('addContraCtrl',function($rootScope , $scope , $stateParams){
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

});
app.controller('addCustomerCtrl',function($rootScope , $scope ,$stateParams){
    console.log('Inside Add Customer Controller');
    $rootScope.isActive = 'CUSTOMERS';

    if(angular.isDefined($stateParams.data.name)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }


    $scope.additionalData = [
        { name: "", value: "" }
    ];

    $scope.Add = function(){
        $scope.addData = {};
        $scope.addData.name = "";
        $scope.addData.value = "";
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

});
app.controller('addExpenseCtrl',function($rootScope , $scope ,$stateParams){
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

    $scope.panelShow1 = false;
    $scope.togglePannel1 = function(){
        $scope.panelShow1 = !$scope.panelShow1;
    }
});
app.controller('addInventoryCtrl',function($rootScope , $scope ,$stateParams){
    console.log('Inside Add Inventory Controller');
    $rootScope.isActive = 'INVENTORY';
    if(angular.isDefined($stateParams.data.product)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }

    $scope.Description = [
        { name: "", value: "" }
    ];

    $scope.Add = function(){
        $scope.desc = {};
        $scope.desc.name = "";
        $scope.desc.value = "";
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
});
app.controller('addJournalCtrl',function($rootScope , $scope , $stateParams){
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
    

});
app.controller('addPaymentCtrl',function($rootScope , $scope , $stateParams){
    console.log('Inside Add Payment Controller');
    $rootScope.isActive = 'Payments';

    if(angular.isDefined($stateParams.data.vendorName)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }


});
app.controller('addReceiptCtrl',function($rootScope , $scope , $stateParams){
    console.log('Inside Add Receipt Controller');
    $rootScope.isActive = 'Receipt';
    if(angular.isDefined($stateParams.data.customerName)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }
});
app.controller('addVendorCtrl',function($rootScope , $scope , $stateParams){
    console.log('Inside Add Vendor Controller');
    $rootScope.isActive = 'VENDORS';


    if(angular.isDefined($stateParams.data.name)) {
        $scope.heading = "Update";
        $scope.btnLabel = "Update";
    }
    else {
        $scope.heading = "New";
        $scope.btnLabel = "Save";
    }

    $scope.vendorsData = [
        { name: "", value: "" }
    ];

    $scope.Add = function(){
        $scope.desc = {};
        $scope.desc.name = "";
        $scope.desc.value = "";
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

app.controller('bankingCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , bankingServices ,uiGridGroupingConstants){
    console.log('Inside Banking Controller');
    $rootScope.isActive = 'CASH/BANKING';

    $scope.add = function(){
       // $state.go('Home.addLedgers');
    }

    $scope.checkModule = function(){
        return true;
    }
    $scope.moduleHeading = 'Cash / Banking Ledgers';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }
    var cellTemplate = '<div '+
    'ng-if="!col.grouping || col.grouping.groupPriority === undefined ||'+
    'col.grouping.groupPriority === null ||'+
    '( row.groupHeader && col.grouping.groupPriority === row.treeLevel )"'+
    'class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}'+
    '</div>';
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

      
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Banking');
    $scope.gridOptions.treeRowHeaderAlwaysVisible = false;
    $scope.gridOptions.enableRowSelection = false;

    $scope.gridOptions.columnDefs = [
        { field: 'primaryGroup' , 
        grouping: { groupPriority: 0 },
        cellTemplate : cellTemplate},
        { field: 'majorGroupName' ,grouping: { groupPriority: 1 },
        cellTemplate : cellTemplate},
        { field: 'subGroupName' ,grouping: { groupPriority: 2 },
        cellTemplate: cellTemplate},
        { field: 'ledgerName'},
        { field: 'balance' , 
        treeAggregationType: uiGridGroupingConstants.aggregation.SUM,
        customTreeAggregationFinalizerFn: function( aggregation ) {
          aggregation.rendered = aggregation.value;
        }}
];
function getRowIndex(id , grid) {
    var rowIndex = -1;
    for (var i = 0; i < grid.renderContainers.body.visibleRowCache.length; i++) {
        if (id === grid.renderContainers.body.visibleRowCache[i].uid) {
            rowIndex = i;
            break;
        }
    }
    return rowIndex;
};
$scope.gridOptions.showTreeExpandNoChildren = false;
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

    bankingServices.getLedgers().then(function(response){
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
app.controller('contraCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , contraServices){
    console.log('Inside Contra Controller');
    $rootScope.isActive = 'Contra';

    $scope.moduleHeading = 'Contra List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Contra'
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }
    $scope.myObj = {};
    $scope.add = function(){
        $state.go('Home.addContra', { data: $scope.myObj });
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Contra');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.addContra' , { data: row.entity });
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
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    contraServices.getContraList().then(function(response){
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
app.controller('creditNoteCtrl',function($rootScope){
    console.log('Inside Credit Note Controller');
    $rootScope.isActive = 'Credit Note';
});
app.controller('customerCtrl',function($rootScope , $scope , $state , CONSTANTS ,heightCalc , customerServices){
    console.log('Inside Customer Controller');
    $rootScope.isActive = 'CUSTOMERS';
    
    $scope.moduleHeading = 'Customers List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.btn3 = 'Import';
    $scope.ifThreeBtn = true;

    $scope.myObj = {};

    $scope.add = function() {
        $state.go('Home.addCustomers', { data: $scope.myObj });
    }
    $scope.import = function(){
        $state.go('Home.ImportCustomer');
    }
    
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Customer');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.addCustomers' , { data: row.entity });
        });
    }
    
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
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

    customerServices.getCustomer().then(function(response){
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
app.controller('dashboardCtrl',function($rootScope){
    console.log('Inside Dashboard Controller');
    $rootScope.isActive = 'DASHBOARD';
});
app.controller('debitNoteCtrl',function($rootScope){
    console.log('Inside Debit Note Controller');
    $rootScope.isActive = 'Debit Note';
});
app.controller('expenseCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , expenseServices){
    console.log('Inside Expense Controller');
    $rootScope.isActive = 'Expense';

    $scope.moduleHeading = 'Expenses List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Expense'
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }

    $scope.myObj = {};
    $scope.add = function(){
        $state.go('Home.addExpense', { data: $scope.myObj });
    }
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Expense');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.addExpense' , { data: row.entity });
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
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    expenseServices.getExpenses().then(function(response){
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
app.controller('importCustomerCtrl',function($scope, $rootScope , heightCalc ,CONSTANTS ,customerServices){
    console.log('Inside Import Cust Controller');
    $rootScope.isActive = 'CUSTOMERS';

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('ImportCustomer');
    $scope.gridOptions.enableRowSelection = false;
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

    customerServices.importCustomer().then(function(response){
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

app.controller('importVendorCtrl',function($scope, $rootScope , heightCalc ,CONSTANTS ,vendorServices){
    console.log('Inside Import Vendor Controller');
    $rootScope.isActive = 'VENDORS';

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('ImportVendor');
    $scope.gridOptions.enableRowSelection = false;
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

    vendorServices.importVendor().then(function(response){
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

app.controller('inventoryCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , inventoryServices){
    console.log('Inside Inventory Controller');
    
    $rootScope.isActive = 'INVENTORY';
    $scope.moduleHeading = 'Inventory';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New Product'
    $scope.ifThreeBtn = false;
    $scope.showWait = true;
    
    $scope.myObj = {};

    $scope.add = function() {
        $state.go('Home.AddInventory' , { data: $scope.myObj });
    }
    
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Inventory');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.AddInventory' , { data: row.entity });
        });
    }
    
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
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
   inventoryServices.getInventories().then(function(response){
        $scope.gridOptions.data = response.data;
        $scope.totalPages = Math.ceil(response.data.length / $scope.gridOptions.paginationPageSize);
        $scope.showWait = false;
        if($scope.gridOptions.data.length !== 0){
            $scope.changeHeight(0);
        }
        else {
            $scope.changeHeight(200);
        }
          },function(error){
        console.log('error',error);
        $scope.showWait = false;
   });
      
   $scope.changeHeight(0);
});
app.controller('journalCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , journalServices){
    console.log('Inside Journal Controller');
    $rootScope.isActive = 'Journal';

    $scope.moduleHeading = 'Journal List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Journal'
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }
    $scope.myObj = {};
    $scope.add = function(){
        $state.go('Home.addJournal', { data: $scope.myObj });
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Journal');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.addJournal' , { data: row.entity });
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
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    journalServices.getJournals().then(function(response){
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
app.controller('ledgerCtrl',function( $rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , ledgerServices ,uiGridGroupingConstants){
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
        heightCalc.calculateGridHeight(val);
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
    var cellTemplate = '<div ng-if="!col.grouping || col.grouping.groupPriority === undefined || col.grouping.groupPriority === null || ( row.groupHeader && col.grouping.groupPriority === row.treeLevel )" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>';
    $scope.gridOptions.columnDefs = [
        { field: 'primaryGroup' , 
        grouping: { groupPriority: 0 },
        cellTemplate : cellTemplate},
        { field: 'majorGroupName' ,grouping: { groupPriority: 1 },
        cellTemplate : cellTemplate},
        { field: 'subGroupName' ,grouping: { groupPriority: 2 },
        cellTemplate : cellTemplate},
        { field: 'ledgerName'},
        { field: 'balance' , 
        treeAggregationType: uiGridGroupingConstants.aggregation.SUM,
        customTreeAggregationFinalizerFn: function( aggregation ) {
          aggregation.rendered = aggregation.value;
        }}
];
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

app.controller('addLedgerCtrl',function($rootScope , $scope){
    console.log('Inside Add Inventory Controller');
    $rootScope.isActive = 'LEDGERS';
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
app.controller('organizationLevelCtrl',function($rootScope , $scope , CONSTANTS){
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

});

app.controller('organizationUserCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , organizationServices){
    console.log('Inside Organization Level - user Controller');
    $rootScope.isActive = 'Org Level';
    $rootScope.isSubActive = 'User';
    $rootScope.showNavigations = false;
    $scope.$parent.organizationNavigation = CONSTANTS.organizationNavigation;

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

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('OrganizationUser');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $scope.addNewUserPanel = true;
            $scope.userType = "Update";
            $scope.usertypeBtn = "Update";
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
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });

    organizationServices.getuserList().then(function(response){
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
app.controller('organizationRoleCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , organizationServices){
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
        heightCalc.calculateGridHeight(val);
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('RoleList');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.addRole' , { data: row.entity });
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
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });
    $scope.gridOptions.rowHeight = 160;
    organizationServices.getRoleList().then(function(response){
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

app.controller('addRoleCtrl',function($rootScope , $scope , CONSTANTS , $stateParams){
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
});
app.controller('paymentCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , paymentServices){
    console.log('Inside Payment Controller');
    $rootScope.isActive = 'Payments';
    
    $scope.moduleHeading = 'Payment List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'New Payment'
    $scope.ifThreeBtn = false;

    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
    }
    $scope.myObj = {};
    $scope.add = function(){
        $state.go('Home.addPayments', { data: $scope.myObj });
    }

    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Payment');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.addPayments' , { data: row.entity });
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
        for(i=0;i<newVal;i++){
            $scope.pageNumber[i] = i+1; 
        }
    });
    paymentServices.getPayments().then(function(response){
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
app.controller('purchaseCtrl',function($rootScope){
    console.log('Inside Purchase Controller');
    $rootScope.isActive = 'Purchase';
});
app.controller('purchaseOrderCtrl',function($rootScope){
    console.log('Inside Purchase Order Controller');
    $rootScope.isActive = 'Purchase Order';
});
app.controller('receiptCtrl',function($rootScope,$scope ,$state ,$timeout , CONSTANTS ,heightCalc , receiptServices){
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
    
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
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

    receiptServices.getReceipts().then(function(response){
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
app.controller('salesCtrl',function($rootScope){
    console.log('Inside Sales Controller');
    $rootScope.isActive = 'Sales';
});
app.controller('salesOrderCtrl',function($rootScope){
    console.log('Inside Sales Order Controller');
    $rootScope.isActive = 'Sales Order';
});
app.controller('vendorCtrl',function($rootScope , $scope , $state , CONSTANTS ,heightCalc , vendorServices){
    console.log('Inside Vendor Controller');
    $rootScope.isActive = 'VENDORS';

    $scope.moduleHeading = 'Vendor List';
    $scope.btn1 = 'Search';
    $scope.btn2 = 'Add New';
    $scope.btn3 = 'Import';
    $scope.ifThreeBtn = true;
    $scope.myObj = {};
    $scope.add = function() {
        $state.go('Home.addVendors', { data: $scope.myObj });
    }
    $scope.import = function(){
        $state.go('Home.ImportVendors');
    }
    
    $scope.gridOptions = CONSTANTS.gridOptionsConstants('Vendor');
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        $scope.gridApi.selection.on.rowSelectionChanged($scope, function(row){
            $state.go('Home.addVendors' , { data: row.entity });
        });
    }
    $scope.changeHeight = function(val){
        heightCalc.calculateGridHeight(val);
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
    //$scope.gridOptions.data = [];
    vendorServices.getVendors().then(function(response){
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
app.service('applicationServices',function($http , CONSTANTS){
    this.getAccounts = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].accountingList);
    };
});
app.service('bankingServices',function($http , CONSTANTS){
    this.getLedgers = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].bankingLedger);
    };
});
app.service('contraServices',function($http , CONSTANTS){
    this.getContraList = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].contraList);
    };
});
app.service('customerServices',function($http , CONSTANTS){
    this.getCustomer = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].customerList);
    };
    this.importCustomer = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].importCustomer);
    }
});
app.service('expenseServices',function($http , CONSTANTS){
    this.getExpenses = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].expenseList);
    };
});
app.factory('heightCalc',function($timeout){
    return {
        calculateGridHeight : function(val){
            if(val !== 0){
                $timeout(function(){
                    $('.grid').css('height',val + 43);     
                },500);
            }
            else {
            $timeout(function(){
                var height = $('.ui-grid-canvas').height();
                $('.grid').css('height',height + 43);     
            },500);
        }
        }
    }
});
app.service('inventoryServices',function($http , CONSTANTS){
    this.getInventories = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].inventoryList);
    };
});
app.service('journalServices',function($http , CONSTANTS){
    this.getJournals = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].journalList);
    };
});
app.service('ledgerServices',function($http , CONSTANTS){
    this.getLedgers = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].ledgerList);
    };
});
app.service('organizationServices',function($http , CONSTANTS){
    this.getuserList = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].organizationUserList);
     };
     this.getRoleList = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].organizationRoleList);
     };
});
app.service('paymentServices',function($http , CONSTANTS){
    this.getPayments = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].paymentList);
    };
});
app.service('receiptServices',function($http , CONSTANTS){
    this.getReceipts = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].receiptList);
    };
});
app.service('vendorServices',function($http , CONSTANTS){
    this.getVendors = function(){
       return $http.get(CONSTANTS.service[CONSTANTS.appLevel].vendorList);
    };
    this.importVendor = function(){
        return $http.get(CONSTANTS.service[CONSTANTS.appLevel].importVendor);
    }
});