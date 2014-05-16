//utils--tabSwitch
(function($){
//tabSwitch class
var TabSwitch = function(tabItem, options){
    this.tabElement = tabItem;
    this.tableWhole = tabItem.parent().find('div');
    this._init(options);
};
//fun
TabSwitch.prototype = {
    version: '1.0.0',
    _init: function(options){
        var me = this;
        var tabItem = this.tabElement;
        var settings = this._getSettings(tabItem);
        var mergeData = settings ? settings : $.fn.tabSwitch.defaults;
        settings = $.extend({}, mergeData, options);
        //tab
        settings.tabHd = settings.tabHd ? settings.tabHd : tabItem.find('.tab-hd');
        settings.tablist = settings.tablist ? settings.tablist : tabItem.find('.tab-list');
        this._setSettings(tabItem, settings);
        //
         me._bindHandler();
    },
    _bindHandler: function(){
        var me = this;
        var tabItem = this.tabElement;
        var settings = this._getSettings(tabItem);
        var tabHd = settings.tabHd;
        var tablist = settings.tablist;
        tabHd.find('li').bind(settings.eventType, function(){
            var curNode = $(this);
            if(curNode.hasClass('cur')){
                return;
            }
            //hd
            var index = tabHd.find('li').index(curNode);
            tabHd.find('li').removeClass('cur');
            curNode.addClass('cur');
            //list
            tablist.hide();
            tablist.eq(index).show();
        });
    },
    _getSettings: function(item){
        var tabItem = this.tabElement;
        return tabItem.data('tabOpt');
    },
    _setSettings: function(item,options){
        var tabItem = this.tabElement;
        tabItem.data('tabOpt', options);
    }
}
//public fun
var methods = {
    init: function(options){
        this.each(function() {
            var $this = $(this);
            if (!$this.data('tabSwitch-instance')) {
                $this.data('tabSwitch-instance', new TabSwitch($this, options));
            }
        });
    }
};
$.fn.tabSwitch = function(){
    var method = arguments[0];
    if(methods[method]) {
        if(!this.data('tabSwitch-instance')){
            $.error('please init tabSwitch first');
            return;
        }
        method = methods[method];
        arguments = Array.prototype.slice.call(arguments, 1);
    } else if( typeof(method) == 'object' || !method ) {
        method = methods.init;
    } else {
        $.error( 'Method ' +  method + ' does not exist on jQuery.tabSwitch' );
        return this;
    }

    return method.apply(this, arguments);
};
// defaults
$.fn.tabSwitch.defaults = {
    tabHd: null,
    tablist: null,
    eventType: 'mouseover'
};

})(jQuery);



$(function() {
//main
var initHandler = function(){
    bindHandler();
    initTopBanner();
    initHotSlider();
};
var bindHandler = function(){
    //category
    $('#J_category').bind('mouseover', function(){
        $(this).addClass('hover');
    }).bind('mouseleave', function(){
        $(this).removeClass('hover');
    });
    //tab
    $('.rank .tab-switch').tabSwitch({
        eventType: 'click'
    });
    $('#J_newestTab').tabSwitch();
};
var initTopBanner = function(){
    //init
    var node = $('#J_bannerSlide');
    var picList = node.find('.slide-pic li');
    var controls = node.find('.slide-controls');
    var picNum = picList.length;
    var curIndex = 0;
    var auto = true;
    var autoPlayID = -1;
    var autoTime = 3000;
    //bind
    controls.find('li:not(.arrow)').bind('mouseover', function(e){
        var curNode = $(this);
        if(curNode.hasClass('cur')){
            return;
        }
        //controls
        controls.find('li').removeClass('cur');
        curNode.addClass('cur');
        //clean
        picList.stop(true,true);
        //animate
        var speed = 800;
        var oldPic = picList.eq(curIndex);
        var index = controls.find('li').index(curNode)-1;
        var curPic = picList.eq(index);
        picList.removeClass('cur');
        curPic.addClass('cur');
        oldPic.css('opacity',1);
        curPic.css('opacity',0);
        oldPic.animate({
            opacity: 0
        },speed);
        curPic.animate({
            opacity: 1
        },speed, function(){
            oldPic.css('opacity',0);
            curPic.css('opacity',1);
        });
        //index
        curIndex = index;
    });
    controls.find('.arrow').bind('click', function(e){
        var cls = $(this).attr('class');
        var dir = 'left';
        if(cls.match('arrow-r')){
            dir = 'right';
        }
        var tempIndex = 0;
        if(dir == 'left'){
            tempIndex = curIndex - 1;
            tempIndex = tempIndex<0 ? picNum-1 : tempIndex;
        }else{
            tempIndex = curIndex + 1;
            tempIndex = tempIndex==picNum ? 0 : tempIndex;
        }
        controls.find('li').eq(tempIndex+1).trigger('mouseover');
    });
    node.bind('mouseover', function(e){
        clearInterval(autoPlayID);
    });
    node.bind('mouseleave', function(e){
        startAuto();
    });
    var startAuto = function(){
        if(!auto){
            return;
        }
        clearInterval(autoPlayID);
        autoPlayID = setInterval(function(){
            controls.find('.arrow-r').trigger('click');
        },autoTime);
    }
    //auto
    startAuto();
};
var initHotSlider = function(){
    //init
    var speed = 'normal';
    var node = $('#J_hotSlider');
    var list = node.find('.slider-list-wrap');
    var controls = node.find('.slider-controls');
    var colW = 217;
    var itemNum = list.find('li').length;
    var sw = parseInt(itemNum/2)*colW;
    list.css('width',sw);
    //bind
    controls.find('li').bind('mouseover', function(e){
        var curNode = $(this);
        if(curNode.hasClass('cur')){
            return;
        }
        var index = controls.find('li').index(curNode);
        //cotrols
        controls.find('li').removeClass('cur');
        curNode.addClass('cur');
        //animate
        list.animate({
            left: -index*colW*2
        },speed);
    });
};

//init
initHandler();
});