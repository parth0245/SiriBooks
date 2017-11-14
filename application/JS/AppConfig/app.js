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
    .state('Home.companyLedgers', {
        url: '/companyLedgers',
        templateUrl: 'application/Partials/companyLedgers.html',
        controller: 'companyLedgersCtrl'
    })
    .state('Home.Banking', {
        url: '/banking',
        templateUrl: 'application/Partials/diffModules.html',
        controller: 'bankingCtrl'
    })
    .state('Home.bankLedger', {
        url: '/bankLedger',
        templateUrl: 'application/Partials/bankLedger.html',
        controller: 'bankLedgerCtrl'
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
