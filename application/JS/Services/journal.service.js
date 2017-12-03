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