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
                        importCustomer : 'application/fixture/importCustomer.json',
                        companyLedgers : 'application/fixture/companyLedger.json',
                        bankLedgers : 'application/fixture/bankLedger.json',
                        bankBRS : 'application/fixture/bankLedger.json',
                        searchInventoryList : 'application/fixture/searchInventory.json'
                        
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
                        importCustomer : '',
                        companyLedgers : 'application/fixture/importCustomer.json',
                        bankLedgers : 'application/fixture/bankLedger.json',
                        bankBRS : 'application/fixture/bankLedger.json',
                        searchInventoryList : ''
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
],
CompanyLedgerfields : [
        {field : "date"},
        {field : "particulars"},
        {field : "voucherType"},
        {field : "voucherNo."},
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
        {field : "date"},
        {field : "particulars"},
        {field : "voucherType"},
        {field : "debit"},
        {field : "credit"},
        {field : "note"},
        {field : "date"}

]
});