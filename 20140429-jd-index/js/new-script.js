//utils
(function(a) {
    //slider
    a.fn.JsliderNew = function(b, c) {
        if (this.length) {
            "function" == typeof b && (c = b, b = {});
            var d = a.extend({
                auto: !1,
                reInit: !1,
                data: [],
                defaultIndex: 0,
                slideWidth: 0,
                slideHeight: 0,
                slideDirection: 1,
                speed: "normal",
                stay: 5e3,
                delay: 150,
                maxAmount: null,
                template: null,
                showControls: !0
            }, b || {}),
                e = a(this),
                f = null,
                g = null,
                h = null,
                i = null,
                j = null,
                k = function() {
                    var a;
                    d.maxAmount && d.maxAmount < d.data.length && d.data.splice(d.maxAmount, d.data.length - d.maxAmount), "object" == typeof d.data && (d.data.length ? (a = {}, a.json = d.data) : a = d.data);
                    var b = d.template;
                    if (d.reInit) {
                        var i, j = b.controlsContent.process(a);
                        a.json = a.json.slice(1), i = b.itemsContent.process(a), e.find(".slide-items").eq(0).append(i), e.find(".slide-controls").eq(0).html(j)
                    } else {
                        // var k = b.itemsWrap.replace("{innerHTML}", b.itemsContent) + b.controlsWrap.replace("{innerHTML}", b.controlsContent),
                        //     m = k.process(a);
                        // e.html(m)
                    }
                    f = e.find(".slide-items"), g = e.find(".slide-controls"), h = g.find("span"), l(), n(), c && c(e)
                }, l = function() {
                    h.bind("mouseover", function() {
                        var a = h.index(this);
                        a != d.defaultIndex && (clearTimeout(j), clearInterval(i), j = setTimeout(function() {
                            m(a)
                        }, d.delay))
                    }).bind("mouseleave", function() {
                        clearTimeout(j), clearInterval(i), n()
                    }), f.bind("mouseover", function() {
                        clearTimeout(j), clearInterval(i)
                    }).bind("mouseleave", function() {
                        n()
                    })
                }, m = function(b) {
                    h.each(function(c) {
                        c == b ? a(this).addClass("curr") : a(this).removeClass("curr")
                    });
                    var c = 0,
                        e = 0;
                    if (3 == d.slideDirection) {
                        var g = f.children(),
                            i = g.eq(d.defaultIndex),
                            j = g.eq(b);
                        i.css({
                            zIndex: 0
                        }), j.css({
                            zIndex: 1
                        }), i.fadeOut("fast"), j.fadeIn("slow"), d.defaultIndex = b
                    } else 1 == d.slideDirection ? (f.css({
                        width: d.slideWidth * d.data.length
                    }), c = -d.slideWidth * b) : e = -d.slideHeight * b, f.animate({
                        top: e + "px",
                        left: c + "px"
                    }, d.speed, function() {
                        d.defaultIndex = b
                    })
                }, n = function() {
                    d.auto && (i = setInterval(function() {
                        var a = d.defaultIndex;
                        a++, a == d.data.length && (a = 0), m(a)
                    }, d.stay))
                };
            k()
        }
    }
})(jQuery);


//ready
$(function(){
    //header-我的京东
    $("#my360buy-2014").Jdropdown({
        delay: 50
    })
    //首屏banner
    $('#slide').JsliderNew({
        data:[1,2,3],
        slideWidth: 760,
        slideHeight: 350
    });
    $('#J_navCon').click(function(e){
        return;
        $('#J_navCon .banner-bg-left').animate({
            backgroundColor:'#000'
        },500);
    });
    
    //slider
    var item, sw;
    var cateArr = $(".catalogue .mc .slide");
    for(var i=0, len=cateArr.length; i<len; i++){
        item = $(cateArr[i]);
        sw = item.find('li').width();
        item.JsliderNew({
            data:[1,2,3],
            slideWidth: sw,
            slideHeight: 380
        });
    }
    var plistArr = $('.plist .slide-new');
    for(i=0,len=plistArr.length; i<len; i++){
        item = $(plistArr[i]);
        item.JsliderNew({
            data:[1,2],
            slideWidth: 384,
            slideHeight: 189
        });
    }
    var brandsArr = $('.brands .smcbd .slide');
    for(i=0,len=brandsArr.length; i<len; i++){
        item = $(brandsArr[i]);
        item.JsliderNew({
            data:[1,2],
            slideWidth: 220,
            slideHeight: 162
        });
    }
    
});