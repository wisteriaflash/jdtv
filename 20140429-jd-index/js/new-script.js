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
                showControls: !0,
                arrowHide: true,
                moveFun: null
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
                        clearTimeout(j), clearInterval(i);
                    }).bind("mouseleave", function() {
                        n();
                    });
                    //arrow
                    var arrow = e.find('.slide-arrow');
                    if(arrow.length>0){
                        arrow.find('.arrow-l').click(function(e){
                            var index = d.defaultIndex-1;
                            if(index<0){
                                index = d.data.length-1;
                            }
                            m(index);
                        });
                        arrow.find('.arrow-r').click(function(e){
                            var index = d.defaultIndex+1;
                            if(index == d.data.length){
                                index = 0;
                            }
                            m(index);
                        });
                    }
                    e.bind('mouseover', function(){
                        if(d.arrowHide && arrow.length>0){
                            e.find('.slide-arrow').show();
                        }
                    }).bind('mouseleave', function(){
                        if(d.arrowHide && arrow.length>0){
                            e.find('.slide-arrow').hide();
                        }
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
                    //fun
                    d.moveFun && d.moveFun(b);
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
var topBanner = {
    navConNode: $('#J_navCon'),
    slideNode: $('#slide'),
    init: function(){
        var me = this;
        me.initNavCon();
        me.initNavSlide();
        me.bindHanlder();
    },
    initNavCon: function(){
        var me = this;
        var sw = $(window).width();
        var swExtra = parseInt((sw - 1210)/2);
        //left
        var navLeft = me.navConNode.find('.banner-bg-left');
        var offsetL = 229;
        navLeft.css('width',(swExtra+offsetL));
        //right
        var navRight = me.navConNode.find('.banner-bg-right');
        var offsetR = 221;
        navRight.css('width',(swExtra+offsetR));
    },
    initNavSlide: function(){
        var me = this;
        me.slideNode.JsliderNew({
            data:[1,2,3],
            slideWidth: 760,
            slideHeight: 350,
            arrowHide: false,
            auto: 1,
            moveFun: function(index){
                var colorStr = me.slideNode.find('.slide-items li').eq(index).attr('data-color');
                var colorL = colorStr.split('|')[0];
                var colorR = colorStr.split('|')[1];
                var time = "normal";
                //left
                var navLeft = me.navConNode.find('.banner-bg-left');
                navLeft.animate({
                    backgroundColor: colorL
                },time);
                //right
                var navRight = me.navConNode.find('.banner-bg-right');
                navRight.animate({
                    backgroundColor: colorR
                },time);
            }
        });
    },
    bindHanlder: function(){
        var me = this;
        $(window).resize(function(e){
            me.initNavCon();
        });
    }
}
topBanner.init();
//showcase
var showcase = {
    scListNode : $('#J_scList'),
    isPlaying: false,
    playId: -1,
    init: function(){
        var me = this;
        me.bindHanlder();
    },
    bindHanlder: function(){
        var me = this;
        me.scListNode.find('li').bind('mouseover', function(e){
            if($(this).hasClass('cur')){
                return;
            }
            if(me.isPlaying){
                // return;
            }
            var that = $(this);
            var delayTime = 100;
            clearTimeout(me.playId);
            me.playId = setTimeout(function(){
                var me = showcase;
                //clean
                var curCls = that.attr('class').match(/item\d/);
                me.scListNode.find('li:not(.'+curCls+')').stop(true, true);
                //
                me.isPlaying = true;
                var speed = 240;
                var easingStr = 'swing';
                var old = me.scListNode.find('li.cur');
                var oldSw = old.hasClass('last') ? 131 : 132;
                var cur = that;
                var curSw = cur.hasClass('last') ? 280 : 281;
                //old
                if(!old.hasClass('last')){
                    old.css({
                        'borderRight': '1px solid #FFF',
                        'width':  280
                    });
                }
                old.animate({
                    width: oldSw
                },{
                    duration: speed,
                    easing: easingStr,
                    complete: function(){
                        old.removeClass('cur');
                        old.css({
                            border: '',
                            width: ''
                        })    
                    }   
                });
                //cur
                cur.animate({
                    width: curSw
                },{
                    duration: speed,
                    easing: easingStr,
                    complete: function(){
                        cur.addClass('cur');
                        cur.css({
                            'width': ''
                        });
                        me.isPlaying = false;
                    }
                });
            },delayTime);
        });
    }
}
showcase.init();
//categorySlide
//
$.fn.categorySlide = function(config){
    //merge conf
    var node = $(this);
    var conf = {
        container: null,
        defaultWidth: 220,
        slideWidth: 220,
        speed: 'normal'
    };
    var slideNum = 0;
    var curIndex = 0;
    var timeoutID = {
        title: -1,
        pic: -1
    };
    var hoverID = -1;
    //fun
    var initHandler = function(){
        $.extend(true, conf, config);//merge data
        conf.slideWidth = 220;
        initAnimate()
        bindHanlder();
    };
    var initAnimate = function(){
        var slideList = node.find('.slide-items');
        //width
        slideNum = node.find('.slide-items li').length;
        // slideList.css({
        //     width: conf.slideWidth*slideNum
        // });
        slideList.css({
            position: 'relative'
        });
        slideList.find('li').css({
            position: 'absolute',
            left: 0,
            top: 0
        });
        var left = slideList.find('li .pic').css('left');
        node.attr('data-picL',left);
    };
    var bindHanlder = function(){
        //controls
        node.find('.slide-controls span').mouseover(function(e){
            if($(this).hasClass('curr')){
                return;
            }
            //move
            var index = $(this).index();
            clearTimeout(hoverID);
            hoverID = setTimeout(function(){
                movePosition(index);
            },50);
            
        });
        //arrow
        var arrow = node.find('.slide-arrow');
        node.mouseover(function(e){
            arrow.show();
        });
        node.mouseleave(function(e){
            arrow.hide();
        });
        arrow.find('.arrow-l').click(function(e){
            var index = curIndex -1;
            if(index<0){
                index = slideNum -1;
            }
            movePosition(index);
        });
        arrow.find('.arrow-r').click(function(e){
            var index = curIndex +1;
            if(index == slideNum){
                index = 0;
            }
            movePosition(index);
        });
    };
    var movePosition = function(index){
        var me = this;
        var titleDelay = 100, picDelay = 150;
        var slideCon = node.find('.slide-items');
        var preItem = slideCon.find('li').eq(curIndex);
        var curItem = slideCon.find('li').eq(index);
        var slideTitle = curItem.find('.hd');
        var slidePic = curItem.find('.pic');
        var easing = 'swing';
        //clean
        slideCon.find('li').stop(true, true);
        curIndex = index;
        //controls
        var controls = node.find('.slide-controls span');
        controls.removeClass('curr');
        controls.eq(index).addClass('curr');
        //init
        slideTitle.css({
            opacity: 0,
            left: conf.slideWidth
        });
        slidePic.css({
            opacity: 0,
            left: -conf.slideWidth
        });
        curItem.css({
            visibility: 'visible',
            opacity: 0,
            zIndex: 5
        });
        //animate
        // slideCon.animate({
        //     left: -index*conf.slideWidth
        // },conf.speed, easing, function(){
        //     slideCon.find('li').css({
        //         backgroundColor: ''
        //     })
        // });
        //pre
        preItem.animate({
            opacity: 0
        },conf.speed, function(){
            preItem.css('visibility','hidden');
        });
        //cur
        curItem.animate({
            opacity: 1
        });
        //cur-title
        timeoutID.title = setTimeout(function(){
            slideTitle.animate({
                opacity: 1,
                left: 0
            }, conf.speed);
        },titleDelay)
        //cur-pic
        timeoutID.pic = setTimeout(function(){
            slidePic.animate({
                opacity: 1,
                left: node.attr('data-picL')
            }, conf.speed, function(){
                movePosComplete(index);
            });
        },picDelay);
    };
    var movePosClean = function(index){

    };
    var movePosComplete = function(index){
        node.find('.slide-items li').eq(index).css({
            zIndex: 0
        })
    };
    //init
    initHandler();
}
//slider
var item, sw;
var cateArr = $(".catalogue .mc .slide");
for(var i=0, len=cateArr.length; i<len; i++){
    item = $(cateArr[i]);
    sw = item.find('li').width();
    item.categorySlide({
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