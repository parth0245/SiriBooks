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

app.filter( 'camelCase', function ()
     {
         var camelCaseFilter = function ( input )
         {
             var words = input;
             var firstLetter = words.charAt(0).toUpperCase();
             var remaining = "";
             for ( var i = 1, len = words.length; i < len; i++ ) {
                remaining = remaining+words.charAt(i).toLowerCase();
             }
             return firstLetter + remaining;
         };
         
         return camelCaseFilter;
     } )