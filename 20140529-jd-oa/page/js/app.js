$(function(){
    $(".oa-nav").find("li").hover(function(){
        $(this).addClass("active");
        $(this).find(".oa-nav-list").show();
    },function(){
        $(this).removeClass("active");
        $(this).find(".oa-nav-list").hide();
    });
    $(".oa-nav-list").find("dd").hover(function(){
        $(this).addClass("active");
        $(this).find(".oa-nav-child").show();
    },function(){
        $(this).removeClass("active");
        $(this).find(".oa-nav-child").hide();
    });
    $(".oa-tab-mod").each(function(){
        var $tabs = $(this).find(".oa-tab-items li");
        var $panels = $(this).find(".oa-panel");
        $tabs.each(function(i, k){
            $(this).click(function(){
                $tabs.removeClass("active");
                $panels.hide();
                $(this).addClass("active");
                $panels.eq(i).show();
            });
        });
    });
    $(".oa-slider-mod").slick({
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        touchMove: false,
        slidesToScroll: 1
    });
    $(".oa-slick-mod").slick({
        autoplay: true,
        arrows: false,
        dots: true
    });
    $('.oa-sdlist').showMore({
        speedDown: 300,
        speedUp: 300,
        height: '125px',
        showText: 'Show more',
        hideText: 'Show less'
    });
    //popup
    $(".oa-icon-mod").click(function(e){
        e.preventDefault();
        //center
        var popNode = $('#J_popup');
        var _scrollHeight = $(document).scrollTop(),//获取当前窗口距离页面顶部高度
        _windowHeight = $(window).height(),//获取当前窗口高度
        _windowWidth = $(window).width(),//获取当前窗口宽度
        _popupHeight = popNode.height(),//获取弹出层高度
        _popupWeight = popNode.width();//获取弹出层宽度
        _posiTop = (_windowHeight - _popupHeight)/2 + _scrollHeight;
        _posiLeft = (_windowWidth - _popupWeight)/2;
        // popNode
        popNode.css({
            left: _posiLeft,
            top: _posiTop
        });
        var cls = $(this).attr('class').match(/pop\d/);
        cls = cls ? cls : 'pop1';
        popNode.find('.popup-item').hide();
        popNode.find('.popup-item').filter('.'+cls).show();
        popNode.show();
    });
    $('#J_popup .tab-hd li').click(function(e){
        if($(this).hasClass('cur')){
            return
        }
        var index = $(this).index();
        var parent = $(this).parents('.popup-item');
        parent.find('.tab-hd li').removeClass('cur');
        $(this).addClass('cur');
        //bd
        var bdNode = parent.find('.tab-bd');
        bdNode.removeClass('cur');
        bdNode.eq(index).addClass('cur');
    });
    $('#J_popup .close').click(function(e){
        $('#J_popup').hide();
    });
    $('#J_popup .btn-cancel').click(function(e){
        e.preventDefault();
        $('#J_popup').hide();
    });
});

/*
 * Show More jQuery Plugin
 */
(function($) {
    $.fn.showMore = function (options) {

        // Default showmore 
        var defaults = {
            speedDown   :   300,
            speedUp     :   300,
            height      :   '265px',
            showText    :   'Show',
            hideText    :   'Hide'   
        };

        var options = $.extend(defaults, options);

        return this.each(function() {           
            var $this                   = $(this),
                $showMoreOrgHeight      = $this.height(),
                state = 1;

            if( $showMoreOrgHeight > parseInt(options.height) ){
                // Insert showmore_content within the showmore div
                $this.wrapInner('<div class="showmore_content" />');

                // Set the height of the showmore_content           
                $this.find('.showmore_content').css('height', options.height)

                // Append the showmore trigger within the showmore div          
                $this.append('<div class="showmore_trigger"><span class="more">' + options.showText + '</span><span class="less" style="display:none;">' + options.hideText + '</span></div>')

                // Showmore going down
                $this.find('.showmore_trigger').on('click', function (){
                    if(state){
                        var that = $(this).find(".more");
                        that.hide();
                        that.next().show();
                        $(this).prev().animate({ height: $showMoreOrgHeight }, options.speedDown);
                        state = 0;
                    }else{
                        var that = $(this).find(".less");
                        that.hide();
                        that.prev().show();
                        $(this).prev().animate({ height: options.height }, options.speedUp);
                        state = 1;
                    }
                });
            }       

        });

    };
})(jQuery);