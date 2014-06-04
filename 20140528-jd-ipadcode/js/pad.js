// main page scroll
var myscroll;
function loaded(){
	setTimeout(function(){
		myscroll=new iScroll("J_contentWraper", {
			bounce: false,
			onScrollEnd: function() {
				
			}
		});
	}, 500);
};
window.addEventListener("scroll", function(){
	if($("body").scrollTop() !== 0) {
		if($("#J_navToHome").data("scroll") == false || !$("#J_navToHome").data("scroll")) {
			//$("#J_navToHome").trigger("tap").data("scroll", true);
		}
	}
	
});
//loaded()
// swipe fun
function swipeFun(element, direction, number) {
	switch (direction) {
		case "left": {
			element.animate({
				left: number
			}, "fast");
			break;
		}
		case "top": {
			element.animate({
				top: number
			}, "fast");
			break;
		}
		case "right": {
			element.animate({
				right: number
			}, "fast");
			break;
		}
		case "bottom": {
			element.animate({
				bottom: number
			}, "fast");
			break;
		}
	}
}
var isDetail = false;
// whole page fun
var pageFun = {
	// page fun
	pageZindex: function(target, t2){
		$('.J_page').css('z-index','0');
		target.css('z-index',98);
		if(t2){
			t2.css('z-index',97);
		}
		$('#J_detailTag').removeClass("detail_tag2");
	},
	pageTopZindex: function(target){
		$('.J_page').css('z-index','0');
		target.css('z-index',100);
	},
	// sidebar fun
	navFun: function(){
		var eleLinkCurrent = $("#J_navHover"), 	//link which is current
			eleLinkHome = $("#J_navToHome"), 	//home button
			eleLinkList = $("#J_navToList"), 	//list button
			eleLinkCart = $("#J_navToCart"), 	//cart button
			eleListMenu = $("#J_listMenu"); 	//list menu
		// home btn tap event
		eleLinkHome.on("tap", function() {
			$(".J_page").removeClass('cur');
			eleLinkCurrent.css("left",0);
			swipeFun(eleLinkCurrent, "top", "0px");
			swipeFun(eleListMenu, "left", "-203px");
			eleLinkList.data("isHover", false);
			// all other page swipe out fun
			// ...
			swipeFun($(".J_page"), "right", "-1024px");			
			//icon
			$('.side_bar a i').hide();
			$(this).find('i').fadeIn();
			$(".J_cartTopBar").css({position: "absolute"});
			$("#J_leftListWrap").css({position: "absolute", left: "0"})
			$('#J_detailTag').css('position','absolute');
			$("#J_listSub").animate({
				left: -800,
			}, 'fast', function(){
				$("#J_listMenu a").css({
					background: '#E43A3D url(img/category.png) no-repeat 0 0/203px 716px'
					// opacity: 0.2
				});
				$("#J_listMenu").animate({
					left: '-205px',
				}, "fast", 'ease-in');
			});
			var h = $("#J_scroller").height();
			$(".wrap").css({"height":h, "overflow":"hidden"})

		});		
		// list button tap event
		eleLinkList.on("tap", function() {
			$(".J_page").removeClass('cur');
			//
			swipeFun($(".J_page"), "right", "-1024px");
			pageFun.pageZindex($('#J_listMenu'), $('#J_listSub'));
			$(".J_cartTopBar").css({position: "absolute"});
			$("#J_leftListWrap").css({position: "absolute", left: "0"})
			$('#J_detailTag').css('position','absolute');
			//clean
			var newTop = eleLinkList.css("top");
			if(!eleLinkList.data("isHover") || eleLinkList.data("isHover") !== true){
				eleLinkCurrent.css("left",0);
				swipeFun(eleLinkCurrent, "top", newTop);
				swipeFun(eleListMenu, "left", "60px");
				//icon
				$('.side_bar a i').hide();
				$(this).find('i').fadeIn();
				eleLinkList.data("isHover", true);
			} else {
				eleLinkCurrent.css("left",0);
				swipeFun(eleLinkCurrent, "top", "0px");
				swipeFun(eleListMenu, "left", "-203px");
				//icon
				$('.side_bar a i').hide();
				eleLinkHome.find('i').fadeIn();
				eleLinkList.data("isHover", false);
				$("#J_listSub").animate({
					left: -800,
				}, 'fast', function(){
					$("#J_listMenu a").css({
						background: '#E43A3D url(img/category.png) no-repeat 0 0/203px 716px'
						// opacity: 0.2
					});
					$("#J_listMenu").animate({
						left: '-205px',
					}, "fast", 'ease-in');
				});
			}
			var h = $("#J_scroller").height();
			$(".wrap").css({"height":h, "overflow":"hidden"})
		});
		// fold menu
		$("#J_contentWraper").on("tap", function() {
			$("#J_navHover").animate({
				top: 0
			}, "fast");
			$("#J_listMenu").animate({
				  left: '-205px',
				}, "fast", 'ease-in')
			$("#J_navToList").data("isHover", false);
			$('.side_bar a i').hide();
			eleLinkHome.find('i').fadeIn();
		});
		// 点击菜单
		$("#J_listMenu").on("tap", function() {
			// if($("#J_listMenu").hasClass('cur')){
			// 	return;
			// }
			// $("#J_listMenu").addClass('cur');
			$("#J_listMenu a").css({
				background: '#E43A3D url(img/category-selected.png) no-repeat 0 0/203px 716px'
				// opacity: 0.2
			});
			// $("#J_listMenu a").animate({
			// 	opacity: 1
			// }, 1000);
			$("#J_listSub").animate({
					left: 262,
				}, "fast", 'ease-in')
		});

		$("#J_listSub").on("tap", function() {
			$(".J_page").removeClass('cur');
			$('#J_listPage').addClass('cur');
			$("#J_navToList").data("isHover", false);
			$("#J_listSub").animate({
				left: -700,
			}, 'fast', function(){
				$("#J_listMenu a").css({
					background: '#E43A3D url(img/category.png) no-repeat 0 0/203px 716px'
					// opacity: 0.2
				});
				$("#J_listMenu").animate({
					left: '-205px',
				}, "fast", 'ease-in');
			});
			$("#J_listPage").animate({
				right: '0',
			}, "fast", 'ease-in');
			var h = $("#J_listToDetail").height();
			$(".wrap").css({"height":h, "overflow":"hidden"})
			swipeFun($("#detailPage"), "right", "-996px");
		});
		
		// btn channel event
		$("#J_channelLink").on("tap", function() {
			$("body").scrollTop(0);
			swipeFun($("#J_channel"), "right", "0");
			var h = $("#J_channel").height();
			$(".wrap").css({"height":h, "overflow":"hidden"})
		})

		// btn cart event
		eleLinkCart.on("tap", function() {
			$(".J_page").removeClass('cur');	
			//clean
			swipeFun($(".J_page"), "right", "-1024px");
			pageFun.pageZindex($('#J_cartPage'));
			$('#J_cartPage .cart_page_container').css('z-index',0);
			$('#J_cartStep1').css('z-index',90);
			$("#J_leftListWrap").css({position: "absolute", left: "0"})
			$('#J_detailTag').css('position','absolute');
			//animate
			eleLinkCurrent.css("left",0);
			swipeFun(eleLinkCurrent, "top", "195px");
			swipeFun(eleListMenu, "left", "-203px");
			eleLinkList.data("isHover", false);
			swipeFun($("#J_cartPage"), "right", "60px");
			setTimeout(function() {$(".J_cartTopBar").css({position: "fixed"})}, 500);
			swipeFun($("#detailPage"), "right", "-1100px");
			$("#J_leftListWrap").css({position: "absolute", left: "0"});
			//icon
			$('.side_bar a i').hide();
			$(this).find('i').fadeIn();
			$("#J_listSub").animate({
				left: -800,
			}, 'fast', function(){
				$("#J_listMenu a").css({
					background: '#E43A3D url(img/category.png) no-repeat 0 0/203px 716px'
					// opacity: 0.2
				});
				$("#J_listMenu").animate({
					left: '-205px',
				}, "fast", 'ease-in');
			});
			var h = $("#J_cartStep1").height();
			$(".wrap").css({"height":h, "overflow":"hidden"})

		});
		$("#J_detailTag").on("tap", function() {
			
			if($(this).hasClass("detail_tag2")) {
				//console.log("1")
				$('#detailPage').css('z-index', 0);
				swipeFun($("#detailPage"), "right", "-996px");
				$("#J_leftListWrap").css({position: "absolute", left: "0"});
				$(this).removeClass("detail_tag2");
				$('#J_detailTag').css({
					left: 1024
				});
				var h = $("#J_listToDetail").height();
				$(".wrap").css({"height":h, "overflow":"hidden"});
				isDetail = false;
				//pos
				if($('#J_listPage').hasClass('cur')){
					$('#J_detailTag').css({
						position: 'fixed'
					});
				}else{
					$('#J_detailTag').css({
						position: 'absolute'
					});
				}
			} else {
				//console.log("2")
				//clean
				$('#J_detailTag').css({
					left: '',
					position: 'absolute'
				});
				pageFun.pageTopZindex($('#detailPage'));
				swipeFun($("#detailPage"), "right", "0px");
				setTimeout(function() {$("#J_leftListWrap").css({position: "fixed", left: "36px"})}, 500);
				$(this).addClass("detail_tag2");
				var h = $("#detailPage").height();
				$(".wrap").css({"height":h, "overflow":"hidden"})
				isDetail = true;
				setTimeout(function(){
					$('#J_detailTag').css('position','fixed');
				},500)
			};
		});
		$("#J_navEmpty").on("tap", function() {
			if(isDetail == true) {
				$("#J_detailTag").trigger("tap");
			}
		});
		$(".J_otherNav").on("tap", function() {
			alert("开发中，敬请期待")
		});
		$("#J_Apple").on("tap", function() {
			eleLinkHome.trigger("tap")
		})

	},
	indexFun: function() {
		var _touchEvent = 'tap';
		var imgArr = $('#J_indexP1 img');
		for(var i=0, len=imgArr.length; i<len; i++){
				function foo(i){
					return (function(){
						$('#J_indexP1 .pic').eq(i).addClass('animate');
					});
				};
				setTimeout(foo(i),1000*i*5);
		};
		$('#J_indexP1Link').on(_touchEvent, function(e){
			$('#J_detailTag').trigger(_touchEvent);
		});
		$('#J_indexP1Img').on(_touchEvent, function(e){
			$('#J_channelLink').trigger(_touchEvent);
		});
		$('#J_indexP1 .pic1').on(_touchEvent, function(e){
			$('#J_listSub').trigger(_touchEvent);
		});
	},
	list: function() {
		var _touchEvent = 'tap';
		$('#J_listAdd a').on(_touchEvent, function(e){
			//clean
			$('.btn_add').removeClass('active')
			var index = $(this).index();
			var thumbNode = $('<img src="img/item_thumb.jpg" />');
			thumbNode.css({
				position: 'absolute',
				left: 16+index*240,
				top: 73,
				width: 200,
				height: 200,
				opacity: 1
			});
			$('#J_listPage').append(thumbNode);
			thumbNode.animate({
				left: 938,
				top: 340,
				width: 50,
				height: 50,
				opacity: 0
			},500, function(){
				thumbNode.remove();
			});
			//btn
			$('.btn_add').addClass('active');
		});
		$("#J_listToDetail").on("tap", function() {
			//clean
			$('#J_detailTag').trigger('tap');
			return;
			pageFun.pageTopZindex($('#detailPage'));
			$('#J_detailTag').addClass('detail_tag2');
			swipeFun($("#detailPage"), "right", "0px");
			setTimeout(function() {$("#J_leftListWrap").css({position: "fixed", left: "36px"})}, 500);
		});
	},
	cart: function() {
		//init
		  var picW = 368;
		  var _touchEvent = 'tap';
		  function initHandler(){
		    var len = $('#J_orderPicCon img').length;
		    $('#J_orderPicCon').css('width', picW*len);
		  }
		  initHandler();
		  //bindHandler
		  $('#J_btnBuy').on(_touchEvent, function(e){
		  	//animate
			swipeFun($("#J_navHover"), "left", "-70px");
			$('.side_bar a i').hide();
		  	//clean
		  	$('#J_orderPicL a').removeClass('cur');
		    $('#J_orderPicL img').attr('src','img/info_init.png');
		    $('#J_orderPicCon img').css('z-index', 0);
		   	$('#J_orderPicCon img').eq(0).css('z-index', 10);
		  	//animate
		    $('#J_cartStep2').css({
		      left: 1024,
		      zIndex: 95
		    });
		    $('#J_cartStep2 .top_bar').css({
		      position: 'absolute'
		    });
		    $('#J_cartStep2').animate({
		      left: 0
		    },'normal', function(){
		      $('#J_cartStep2 .top_bar').css({
		        position: 'fixed'
		      });
		    });
		    var h = $("#J_cartStep2").height();
			$(".wrap").css({"height":h, "overflow":"hidden"})
		  });
		  $('#J_btnConfirm').on(_touchEvent, function(e){
		    alert('确认订单成功');
		    $("#J_navToHome").trigger("tap");

		  });
		  $('#J_orderPicL a').on(_touchEvent,function(e){
		    if($(this).hasClass('cur')){
		      return;
		    }
		    $('#J_orderPicL a').removeClass('cur');
		    $(this).addClass('cur');
		    //img
		    var img = $(this).attr('data-img');
		    var imgNode = $(this).parent().find('img');
		    imgNode.attr('src','img/'+img+'.png');

		    var index = $(this).index();
		    var imgCur = $('#J_orderPicCon img').eq(index);
		    $('#J_orderPicCon img').css('z-index', 0);
		    imgCur.css({
		      'z-index': 10,
		      left: picW
		    });
		    imgCur.animate({
		      left:0
		    },'fast');
		    $('#J_orderPicCon img').removeClass('cur');
		    imgCur.addClass('cur');
		    //
		    $('#J_consigneeNew').hide();
		    if($('#J_consignee').hasClass('cur')){
		      $('#J_consigneeNew').show();
		    }
		  });
		  $('#J_close').on(_touchEvent,function(e){
		    $('#J_orderPicL a').removeClass('cur');
		    $('#J_orderPicL img').attr('src','img/info_init.png');
		    $('#J_orderPicCon img').css('z-index', 0);
		    var firstImg = $('#J_orderPicCon img').eq(0);
		    $('#J_orderPicCon img').not(firstImg).animate({
		      left: picW
		    },'first',function(){
		      $('#J_orderPicCon img').eq(0).css('z-index', 10);
		    });
		  });
		  $('#J_consigneeNew').on(_touchEvent, function(e){
		    var newNode = $('#J_orderPicCon .pic_consignee_new');
		    if(newNode.hasClass('cur')){
		      return;
		    }
		    newNode.addClass('cur');
		    newNode.css({
		      'z-index': 10,
		      left: picW
		    });
		    newNode.animate({
		      left:0
		    },'fast');
		  });
		  $('#J_consigneeSave').on(_touchEvent, function(e){
		    var newNode = $('#J_orderPicCon .pic_consignee_new');
		    newNode.animate({
		      left: picW
		    },'fast');
		    newNode.removeClass('cur');
		    $('#J_consigneeNew').show();
		  });
	},
	detail: function() {
		var eleBtnEasyBuy = $(".J_easyBuy"), 			// easy buy btn
			eleBtnAddToCart = $(".J_addCart"), 			// add to cart btn
			eleImgUl = $("#J_imgUl"), 					// img ul wrap
			eleLeftList = $(".J_leftList"), 			// left list ele
			eleOverLay = $("#J_overLay"), 				// overlay
			eleBtnBack = $("#J_backBtn"), 				// back btn
			eleBtnDetailBack = $("#J_detailBack"), 		// detail back btn
			eleRemark = $("#J_remark"), 				// input remark
			eleDetailEdit = $(".detailEdit"), 			// other select
			eleBtnPaySure = $("#J_paySure"), 			//btn pay sure
			eleKeyBoard = $("#J_keyboard"), 			// keyborad
			eleDetailInfoEdit = $(".J_detailEditInfo"),
			eleDetailInfo = $("#J_detailInfo"); 		// detail info wrap
		// esay buy fun
		eleBtnEasyBuy.on("tap", function() {
			$("body").scrollTop(0);
			eleDetailInfo.animate({
				height: 341
			}, "fast");
			eleOverLay.css("display", "block");
		});
		// add to cart fun
		eleBtnAddToCart.on("tap", function() {
			alert("成功加入购物车");
		});
		// cancel fun
		eleOverLay.on("tap", function() {
			swipeFun(eleDetailInfoEdit, "right", "-1024px");
			eleDetailInfo.animate({
				height: 0
			}, "fast");
			eleOverLay.hide();
			eleBtnDetailBack.css("z-index", 1);
		});
		eleBtnBack.on("tap", function() {
			eleDetailInfo.animate({
				height: 0
			}, "fast");
			eleOverLay.hide();
			eleBtnDetailBack.css("z-index", 1);
		});
		// remark
		eleRemark.on({
			"focus": function() {
				eleDetailInfo.addClass("detail_info_mark");
				if(navigator.userAgent.toLowerCase().match(/iPad/i) != "ipad") {
					swipeFun(eleKeyBoard, "bottom", "0px");
				}
				
			},
			"blur": function() {
				if(navigator.userAgent.toLowerCase().match(/iPad/i) != "ipad") {
					swipeFun(eleKeyBoard, "bottom", "-406px");
				}
				eleDetailInfo.removeClass("detail_info_mark")
			}
		});
		// other tap event
		eleDetailEdit.on("tap", function() {
			eleBtnDetailBack.css("z-index", 202);
			var id = "#" + $(this).attr("data-id");
			swipeFun($(id), "right", "0px");
		});
		// other back event
		eleBtnDetailBack.on("tap", function() {
			eleBtnDetailBack.css("z-index", 1);
			swipeFun(eleDetailInfoEdit, "right", "-1024px");
		});
		// pay confirm
		eleBtnPaySure.on("tap", function() {
			eleOverLay.trigger("tap");
			alert("付款成功");
		});
		//left
		eleImgUl.on("swipeLeft", function() {
			var w = parseInt($("#J_imgUl").css("left"));
			if(w <= 360 && w > -360 ){
				eleImgUl.animate({
					left: w - 360
				}, "fast", function() {
					var eleLi = eleImgUl.find("li");
					eleLi.removeClass("current");
					var newL = parseInt($("#J_imgUl").css("left"));
					console.log(newL)
					if(newL == -360) {
						eleLi.eq(2).addClass("current");
					} else if (newL == 0) {
						eleLi.eq(1).addClass("current");
					} else {
						eleLi.eq(0).addClass("current");
					}
				})
			}
		});
		//right
		eleImgUl.on("swipeRight", function() {
			var w = parseInt($("#J_imgUl").css("left"));
			if(w < 360) {
				eleImgUl.animate({
					left: w+360
				}, "fast", function() {
					var eleLi = eleImgUl.find("li");
					eleLi.removeClass("current");
					var newL = parseInt($("#J_imgUl").css("left"));
					console.log(newL)
					if(newL == -360) {
						eleLi.eq(2).addClass("current");
					} else if (newL == 0) {
						eleLi.eq(1).addClass("current");
					} else {
						eleLi.eq(0).addClass("current");
					}
				})
			}
		});
		// switch fun
		eleLeftList.on("tap", function() {
			eleLeftList.removeClass("tab_on");
			$(this).addClass("tab_on");
		});
		// del fun
		eleLeftList.on("swipeLeft", function() {
			$(this).fadeOut("fast");
		});

	},

	init: function() {
		this.indexFun();
		this.list();
		this.navFun();
		this.detail();
		this.cart();
		// window.addEventListener("scroll", function(){
		// 	$("#J_navToHome").trigger("tap");
		// });
		// temp
		//swipeFun($("#J_cartPage"), "right", "60px");
		//setTimeout(function() {$("#J_cartTopBar").css({position: "fixed"})}, 500) 
		//swipeFun($("#detailPage"), "right", "0px");
		//$("#J_leftListWrap").css({position: "fixed", left: "36px"})
	}

};
