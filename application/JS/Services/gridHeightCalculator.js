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

