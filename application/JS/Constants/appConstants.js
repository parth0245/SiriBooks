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
                        saveReceiptList :''
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
        { field: 'modeOfPayment'}
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
              cellTemplate: '<div class="ui-grid-cell-contents" style="color:blue" ng-click="grid.appScope.showCounts(row)" >'+
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
        {field : "voucherNo",
        cellTemplate: '<div class="ui-grid-cell-contents" style="color:blue" ng-click="grid.appScope.salePurchase(row)" >'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '</div>'},
        {field : "count",
        cellTemplate: '<div class="ui-grid-cell-contents">'+
        '<span class="" ng-if="row.entity.voucherType == \'purchase\'">+</span>'+
        '<span class="" ng-if="row.entity.voucherType == \'sale\'">-</span>'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '</div>'
},
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
        {field : "date" ,enableCellEdit: false ,cellFilter: 'date:"dd-MM-yyyy"',},
        {field : "particulars" ,enableCellEdit: false},
        {field : "voucherType" ,enableCellEdit: false},
        {field : "debit" ,enableCellEdit: false},
        {field : "credit" ,enableCellEdit: false},
        {field : "date" , headerCellClass: 'headColor',
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
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '<span class="productInactive" ng-click="grid.appScope.editData(row)">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
        '</span>'+
        '</div>' },
        {field : "orgledger.balanceamount" , displayName:"Amount"},
        {field : "date"},
        {field : "mode" ,displayName : 'Mode Of Payment',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span ng-if="row.entity.mode == \'1\'">Cash</span>'+
        '<span ng-if="row.entity.mode == \'2\'">Bank</span>'+
        '<span ng-if="row.entity.mode == \'3\'">NA</span>'+
        '<span class="productInactive" ng-click="grid.appScope.editLedger(row)">'+
        '<img height="20" width="20" '+
                'src="application/Images/Assets/INVENTORY_page/ladger_inactive.png"/>'+
        '</span>'+
        '</div>' },
        {field:'regnumber', displayName:'Receipt Number',
        cellTemplate: '<div class="ui-grid-cell-contents" >'+
        '<span>{{grid.getCellValue(row, col)}}</span>'+
        '<span class="productInactive" ng-click="grid.appScope.editData(row)">'+
        '<img height="15" width="15" '+
                'src="application/Images/Assets/INVENTORY_page/edit_inactive.png"/>'+
        '</span>'+
        '</div>'}
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
ImportLedgerfields : [
        {field : "ledgerEntry",headerCellClass : 'topPadding15'},
        {field : "rows",headerCellClass : 'topPadding15'},
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
]
});