$(function() {
    var initHandler = function(){
        bindHandler();
    }

    var bindHandler = function(){
        //category
        $('#J_category').bind('mouseover', function(){
            $(this).addClass('hover');
        }).bind('mouseleave', function(){
            $(this).removeClass('hover');
        });
    }
   
    //init
    initHandler();
});