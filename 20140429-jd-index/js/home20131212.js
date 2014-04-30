/*
 item.index 
 Date: 2014-04-22 
 */
function getPriceNum(t, e, i, a, n) {
    t = "string" == typeof t ? [t] : t, i = i || $("body"), a = a || "J-p-";
    var s = "";
    if (null !== e && (s = readCookie("ipLoc-djd") ? "&area=" + readCookie("ipLoc-djd").replace(/-/g, "_") : "&area=1"), void 0 !== t) {
        var o = "http://p.3.cn/prices/mgets?type=1&skuIds=J_" + t.join(",J_") + s;
        $.ajax({
            url: o,
            dataType: "jsonp",
            success: function(t) {
                if (!t && !t.length) return !1;
                for (var e = 0; t.length > e; e++) {
                    if (!t[e].id) return !1;
                    var s = t[e].id.replace("J_", ""),
                        r = parseFloat(t[e].p);
                    parseFloat(t[e].m), r > 0 ? i.find("." + a + s).html("\uffe5" + t[e].p) : i.find("." + a + s).html("\u6682\u65e0\u62a5\u4ef7"), "function" == typeof n && n(s, t[e], o)
                }
            }
        })
    }
}

function setAccordion(t) {
    var e = $(t),
        i = "1",
        a = "0.8",
        n = "0",
        s = "-15px";
    6 == parseInt($.browser.version, 10) ? "left" : "margin-left", e.removeClass("advanced"), e.find("a").bind("mouseenter", function() {
        $(this).stop(!0).animate({
            opacity: i
        }, 800).siblings("a").stop(!0).animate({
            opacity: a
        }, 800).end().find("img").stop(!0).animate({
            left: s
        }, 400), $(this).parent(".item").siblings().find("a").each(function() {
            $(this).stop(!0).animate({
                opacity: a
            }, 800)
        })
    }).bind("mouseleave", function() {
        $(this).find("img").stop(!0).animate({
            left: n
        }, 400)
    }), e.bind("mouseleave", function() {
        $(this).find("a").stop(!0).animate({
            opacity: i
        }, 800)
    })
}

function renderAccordion(t) {
    function e(t, e) {
        for (var n = 0 === t % 2 ? 2 : 1, s = $("#clothing .accordion"), o = {
                data: i(e, n)
            }, r = 0; o.data.length > r; r++) $("#clothing-accordion-r" + (t + 1)).html(a.process(o, o.data.length));
        pageConfig.FN_ImgError(s[0]), s.find("img").Jlazyload({
            type: "image",
            threshold: 200,
            placeholderClass: "err-product"
        })
    }

    function i(t, e) {
        return t.sort(function() {
            return Math.random() - .5
        }), t.slice(0, e)
    }
    for (var a = '{for item in data}<a target="_blank" class="fore${arguments[2]}" href="${item.href}">    <strong>${item.title}</strong>    <em>${item.desc}</em>    <img data-img="2" data-lazyload="${item.srcB}" alt="${item.alt}"></a>{/for}', n = 0; t.length > n; n++) e(n, t[n].list);
    $.browser.msie && 9 >= parseInt($.browser.version, 10) ? setAccordion("#clothing .accordion") : $("#clothing .accordion").addClass("advanced"), $("#clothing .accordion .item a").each(function(t) {
        $(this).attr("clstag", "homepage|keycount|home2013|22c" + (t + 2))
    })
}

function setArea() {
    var t, e = $("#shortcut-2013"),
        i = readCookie("areaId") || 1,
        a = {
            list: [{
                text: "\u5317\u4eac",
                val: 1
            }, {
                text: "\u4e0a\u6d77",
                val: 2
            }, {
                text: "\u5929\u6d25",
                val: 3
            }, {
                text: "\u91cd\u5e86",
                val: 4
            }, {
                text: "\u6cb3\u5317",
                val: 5
            }, {
                text: "\u5c71\u897f",
                val: 6
            }, {
                text: "\u6cb3\u5357",
                val: 7
            }, {
                text: "\u8fbd\u5b81",
                val: 8
            }, {
                text: "\u5409\u6797",
                val: 9
            }, {
                text: "\u9ed1\u9f99\u6c5f",
                val: 10
            }, {
                text: "\u5185\u8499\u53e4",
                val: 11
            }, {
                text: "\u6c5f\u82cf",
                val: 12
            }, {
                text: "\u5c71\u4e1c",
                val: 13
            }, {
                text: "\u5b89\u5fbd",
                val: 14
            }, {
                text: "\u6d59\u6c5f",
                val: 15
            }, {
                text: "\u798f\u5efa",
                val: 16
            }, {
                text: "\u6e56\u5317",
                val: 17
            }, {
                text: "\u6e56\u5357",
                val: 18
            }, {
                text: "\u5e7f\u4e1c",
                val: 19
            }, {
                text: "\u5e7f\u897f",
                val: 20
            }, {
                text: "\u6c5f\u897f",
                val: 21
            }, {
                text: "\u56db\u5ddd",
                val: 22
            }, {
                text: "\u6d77\u5357",
                val: 23
            }, {
                text: "\u8d35\u5dde",
                val: 24
            }, {
                text: "\u4e91\u5357",
                val: 25
            }, {
                text: "\u897f\u85cf",
                val: 26
            }, {
                text: "\u9655\u897f",
                val: 27
            }, {
                text: "\u7518\u8083",
                val: 28
            }, {
                text: "\u9752\u6d77",
                val: 29
            }, {
                text: "\u5b81\u590f",
                val: 30
            }, {
                text: "\u65b0\u7586",
                val: 31
            }, {
                text: "\u53f0\u6e7e",
                val: 32
            }, {
                text: "\u9999\u6e2f",
                val: 42
            }, {
                text: "\u6fb3\u95e8",
                val: 43
            }, {
                text: "\u9493\u9c7c\u5c9b",
                val: 84
            }, {
                link: !0,
                text: "\u6d77\u5916",
                val: "http://en.jd.com/chinese.html"
            }],
            key: {
                A1: {
                    text: "\u5317\u4eac",
                    val: 1
                },
                A2: {
                    text: "\u4e0a\u6d77",
                    val: 2
                },
                A3: {
                    text: "\u5929\u6d25",
                    val: 3
                },
                A4: {
                    text: "\u91cd\u5e86",
                    val: 4
                },
                A5: {
                    text: "\u6cb3\u5317",
                    val: 5
                },
                A6: {
                    text: "\u5c71\u897f",
                    val: 6
                },
                A7: {
                    text: "\u6cb3\u5357",
                    val: 7
                },
                A8: {
                    text: "\u8fbd\u5b81",
                    val: 8
                },
                A9: {
                    text: "\u5409\u6797",
                    val: 9
                },
                A10: {
                    text: "\u9ed1\u9f99\u6c5f",
                    val: 10
                },
                A11: {
                    text: "\u5185\u8499\u53e4",
                    val: 11
                },
                A12: {
                    text: "\u6c5f\u82cf",
                    val: 12
                },
                A13: {
                    text: "\u5c71\u4e1c",
                    val: 13
                },
                A14: {
                    text: "\u5b89\u5fbd",
                    val: 14
                },
                A15: {
                    text: "\u6d59\u6c5f",
                    val: 15
                },
                A16: {
                    text: "\u798f\u5efa",
                    val: 16
                },
                A17: {
                    text: "\u6e56\u5317",
                    val: 17
                },
                A18: {
                    text: "\u6e56\u5357",
                    val: 18
                },
                A19: {
                    text: "\u5e7f\u4e1c",
                    val: 19
                },
                A20: {
                    text: "\u5e7f\u897f",
                    val: 20
                },
                A21: {
                    text: "\u6c5f\u897f",
                    val: 21
                },
                A22: {
                    text: "\u56db\u5ddd",
                    val: 22
                },
                A23: {
                    text: "\u6d77\u5357",
                    val: 23
                },
                A24: {
                    text: "\u8d35\u5dde",
                    val: 24
                },
                A25: {
                    text: "\u4e91\u5357",
                    val: 25
                },
                A26: {
                    text: "\u897f\u85cf",
                    val: 26
                },
                A27: {
                    text: "\u9655\u897f",
                    val: 27
                },
                A28: {
                    text: "\u7518\u8083",
                    val: 28
                },
                A29: {
                    text: "\u9752\u6d77",
                    val: 29
                },
                A30: {
                    text: "\u5b81\u590f",
                    val: 30
                },
                A31: {
                    text: "\u65b0\u7586",
                    val: 31
                },
                A32: {
                    text: "\u53f0\u6e7e",
                    val: 32
                },
                A42: {
                    text: "\u9999\u6e2f",
                    val: 42
                },
                A43: {
                    text: "\u6fb3\u95e8",
                    val: 43
                },
                A84: {
                    text: "\u9493\u9c7c\u5c9b",
                    val: 84
                }
            }
        }, n = a.key["A" + i].text,
        s = '<dl id="home-area">    <dt>        <b></b>        <strong>${def.text}</strong>        <a href="javascript:;">[\u66f4\u6362]</a>        <span class="blank"></span>    </dt>    <dd class="dd">        <ul class="lh">            {for item in list}                {if item.link}                    <li><a href="${item.val}" target="_blank">${item.text}</a></li>                {else}            <li><a href="#none" data-id="${item.val}">${item.text}</a></li>                {/if}            {/for}        </ul>        <div class="close" onclick="$(\'#home-area\').removeClass(\'hover\')">\u00d7</div>   </dd></dl>';
    a.def = {
        text: n,
        val: i
    }, e.find("ul").eq(0).after(s.process(a)), t = $("#home-area"), t.Jdropdown({
        event: "click"
    }), t.find(".dd ul a[data-id]").click(function() {
        var e = $(this).attr("data-id");
        createCookie("areaId", e, 10, "/;domain=jd.com"), createCookie("ipLoc-djd", e + "-0-0-0", 10, "/;domain=jd.com"), location.href = "http://www.jd.com/", t.removeClass("hover")
    })
}

function setShowcase(t) {
    var e = $(t);
    if (pageConfig.wideVersion && pageConfig.compatible, $.browser.msie && 9 >= parseInt($.browser.version, 10)) {
        var i = e.find(".sc-list").find(".item");
        i.bind("mouseenter", function() {
            $(this).find(".s-img").find("img").stop(!0).animate({
                left: "-10px"
            }, 300)
        }).bind("mouseleave", function() {
            $(this).find(".s-img").find("img").stop(!0).animate({
                left: "0px"
            }, 300)
        })
    } else e.addClass("advanced")
}

function setClothingPlist2(t) {
    var e = $(t);
    e.find(".smc").find("li").each(function() {
        ($(this).hasClass("fore1") || $(this).hasClass("fore2")) && $(this).bind("mouseenter", function() {
            $(this).find(".p-info").find("span").stop(!0).fadeIn(300)
        }).bind("mouseleave", function() {
            $(this).find(".p-info").find("span").stop(!0).fadeOut(300, function() {
                $(this).attr("style", "display: none;")
            })
        })
    })
}

function setCheckEptArea() {
    var t = function(t) {
        if (0 !== t.type) {
            var e = readCookie("__jda"),
                i = e ? e.split(".")[1] : !1,
                a = $("#header-2013"),
                n = $('<div id="jd-ept-link" style="height: 60px;margin-bottom:10px;"></div>'),
                s = "http://en.jd.com/";
            if (i) {
                pageConfig.eptABTest = new ABTest(i, .5, 1e4);
                var o = pageConfig.eptABTest.isHitVersion();
                "A" === o && (s = "http://en.jd.com/chinese.html")
            }
            var r = '<div class="w" clstag="homepage|keycount|home2013|ept"><a target="_blank" href="' + s + '" style="display: block;text-align: center;border: 2px solid #F0AF00;background: #FFFBDD url(http://misc.360buyimg.com/lib/img/e/blank.gif);">' + '<img style="vertical-align: top;" class="loading-style2" data-img="1" src="http://img11.360buyimg.com/da/g14/M03/1E/18/rBEhVlNUvcEIAAAAAAAgBol2wPcAAMVkwEJL5gAACAe087.png" width="874" height="56" />' + "</a></div>";
            n.html(r), a.after(n)
        }
    };
    $.ajax({
        url: "http://ai.jd.com/jdip/useripinfo.php",
        dataType: "jsonp",
        success: function(e) {
            void 0 !== e && t(e)
        }
    })
}
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(t, e, i, a, n) {
        return jQuery.easing[jQuery.easing.def](t, e, i, a, n)
    },
    easeInQuad: function(t, e, i, a, n) {
        return a * (e /= n) * e + i
    },
    easeOutQuad: function(t, e, i, a, n) {
        return -a * (e /= n) * (e - 2) + i
    },
    easeInOutQuad: function(t, e, i, a, n) {
        return 1 > (e /= n / 2) ? a / 2 * e * e + i : -a / 2 * (--e * (e - 2) - 1) + i
    },
    easeInCubic: function(t, e, i, a, n) {
        return a * (e /= n) * e * e + i
    },
    easeOutCubic: function(t, e, i, a, n) {
        return a * ((e = e / n - 1) * e * e + 1) + i
    },
    easeInOutCubic: function(t, e, i, a, n) {
        return 1 > (e /= n / 2) ? a / 2 * e * e * e + i : a / 2 * ((e -= 2) * e * e + 2) + i
    },
    easeInQuart: function(t, e, i, a, n) {
        return a * (e /= n) * e * e * e + i
    },
    easeOutQuart: function(t, e, i, a, n) {
        return -a * ((e = e / n - 1) * e * e * e - 1) + i
    },
    easeInOutQuart: function(t, e, i, a, n) {
        return 1 > (e /= n / 2) ? a / 2 * e * e * e * e + i : -a / 2 * ((e -= 2) * e * e * e - 2) + i
    },
    easeInQuint: function(t, e, i, a, n) {
        return a * (e /= n) * e * e * e * e + i
    },
    easeOutQuint: function(t, e, i, a, n) {
        return a * ((e = e / n - 1) * e * e * e * e + 1) + i
    },
    easeInOutQuint: function(t, e, i, a, n) {
        return 1 > (e /= n / 2) ? a / 2 * e * e * e * e * e + i : a / 2 * ((e -= 2) * e * e * e * e + 2) + i
    },
    easeInSine: function(t, e, i, a, n) {
        return -a * Math.cos(e / n * (Math.PI / 2)) + a + i
    },
    easeOutSine: function(t, e, i, a, n) {
        return a * Math.sin(e / n * (Math.PI / 2)) + i
    },
    easeInOutSine: function(t, e, i, a, n) {
        return -a / 2 * (Math.cos(Math.PI * e / n) - 1) + i
    },
    easeInExpo: function(t, e, i, a, n) {
        return 0 == e ? i : a * Math.pow(2, 10 * (e / n - 1)) + i
    },
    easeOutExpo: function(t, e, i, a, n) {
        return e == n ? i + a : a * (-Math.pow(2, -10 * e / n) + 1) + i
    },
    easeInOutExpo: function(t, e, i, a, n) {
        return 0 == e ? i : e == n ? i + a : 1 > (e /= n / 2) ? a / 2 * Math.pow(2, 10 * (e - 1)) + i : a / 2 * (-Math.pow(2, -10 * --e) + 2) + i
    },
    easeInCirc: function(t, e, i, a, n) {
        return -a * (Math.sqrt(1 - (e /= n) * e) - 1) + i
    },
    easeOutCirc: function(t, e, i, a, n) {
        return a * Math.sqrt(1 - (e = e / n - 1) * e) + i
    },
    easeInOutCirc: function(t, e, i, a, n) {
        return 1 > (e /= n / 2) ? -a / 2 * (Math.sqrt(1 - e * e) - 1) + i : a / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
    },
    easeInElastic: function(t, e, i, a, n) {
        var s = 1.70158,
            o = 0,
            r = a;
        if (0 == e) return i;
        if (1 == (e /= n)) return i + a;
        if (o || (o = .3 * n), Math.abs(a) > r) {
            r = a;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(a / r);
        return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - s) * 2 * Math.PI / o)) + i
    },
    easeOutElastic: function(t, e, i, a, n) {
        var s = 1.70158,
            o = 0,
            r = a;
        if (0 == e) return i;
        if (1 == (e /= n)) return i + a;
        if (o || (o = .3 * n), Math.abs(a) > r) {
            r = a;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(a / r);
        return r * Math.pow(2, -10 * e) * Math.sin((e * n - s) * 2 * Math.PI / o) + a + i
    },
    easeInOutElastic: function(t, e, i, a, n) {
        var s = 1.70158,
            o = 0,
            r = a;
        if (0 == e) return i;
        if (2 == (e /= n / 2)) return i + a;
        if (o || (o = n * .3 * 1.5), Math.abs(a) > r) {
            r = a;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(a / r);
        return 1 > e ? -.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - s) * 2 * Math.PI / o) + i : .5 * r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - s) * 2 * Math.PI / o) + a + i
    },
    easeInBack: function(t, e, i, a, n, s) {
        return void 0 == s && (s = 1.70158), a * (e /= n) * e * ((s + 1) * e - s) + i
    },
    easeOutBack: function(t, e, i, a, n, s) {
        return void 0 == s && (s = 1.70158), a * ((e = e / n - 1) * e * ((s + 1) * e + s) + 1) + i
    },
    easeInOutBack: function(t, e, i, a, n, s) {
        return void 0 == s && (s = 1.70158), 1 > (e /= n / 2) ? a / 2 * e * e * (((s *= 1.525) + 1) * e - s) + i : a / 2 * ((e -= 2) * e * (((s *= 1.525) + 1) * e + s) + 2) + i
    },
    easeInBounce: function(t, e, i, a, n) {
        return a - jQuery.easing.easeOutBounce(t, n - e, 0, a, n) + i
    },
    easeOutBounce: function(t, e, i, a, n) {
        return 1 / 2.75 > (e /= n) ? a * 7.5625 * e * e + i : 2 / 2.75 > e ? a * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? a * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : a * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
    },
    easeInOutBounce: function(t, e, i, a, n) {
        return n / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, a, n) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - n, 0, a, n) + .5 * a + i
    }
});
var ABTest = function(t, e, i) {
    return this.id = t, this.percent = e, this.base = i || 1e4, this.tested = !1, this.version = {
        A: 0,
        B: 0,
        N: 0
    }, this.result = {
        A: [],
        B: [],
        N: []
    }, this
};
ABTest.prototype = {
    test: function() {
        function t() {
            var t = i.version;
            console.log("%c====================\u7ed3\u679c====================", "color:#f00");
            for (var e in t) console.info("| \u7248\u672c" + e + "\u547d\u4e2d\u4e86" + t[e] / 100 + " % \u7684uuuid");
            console.log("%c====================\u7ed3\u679c====================", "color:#f00"), i.tested = !0
        }

        function e(e) {
            for (var a = e, n = e.length, s = 0; n > s; s++) console.log("UUUID\u300c" + a[s] + "\u300d  \u547d\u4e2d\u4e86 \u7248\u672c\u300c" + i.isHitVersion(a[s]) + "\u300d");
            t()
        }
        var i = this;
        window.collectUUUID = function(t) {
            e(t)
        }, $.ajax({
            url: "http://fa.360buy.com/loadFa_toJson.js?aid=2_163_4827-2_163_4828",
            dataType: "jsonp",
            cache: !0,
            success: function() {}
        })
    },
    isHitVersion: function(t) {
        t = t || this.id;
        var e, i = this.base * this.percent;
        return "string" != typeof t && (t += ""), t ? (e = this.getHashProbability(t, this.base), i > e ? (this.version.A++, this.result.A.push(t), "A") : e >= i && 2 * i > e ? (this.version.B++, this.result.B.push(t), "B") : (this.version.N++, this.result.N.push(t), "NONE")) : (console.log("xxxxxxxxxxxxxxxxx"), version.N++, this.result.N.push(t), "NONE")
    },
    switchVersion: function(t) {
        if (!t || !/A|B|N/.test(t)) return console.warn("Are you kidding me~ Is there a test version called " + t + "?"), !1;
        this.tested || console.warn("Please run test method first.");
        var e = this.result[t],
            i = e[Math.floor(Math.random() * e.length)];
        createCookie("__jda", "122270672." + i + ".043878.1386043878.1386043878.1", 10, "/;domain=jd.com"), console.log(i)
    },
    getHashProbability: function(t, e) {
        function i(t) {
            for (var e = 0, i = 0; t.length > i; i++) e = (e << 5) - e + t.charCodeAt(i), e &= e;
            return e
        }
        return Math.abs(i(t)) % e
    }
};
var BackPanel = {
    init: function(t, e, i) {
        var a = $('<div class="w backpanel hide"></div>');
        return "string" == typeof t && a.attr("id", t), this.el = a, this.el.html('<iframe marginwidth="0" marginheight="0" frameborder="0" scrolling="no" class="backpanel-iframe"></iframe><div class="backpanel-inner"></div>'), this.wrap = this.el.find(".backpanel-inner"), this.mask = this.el.find(".backpanel-iframe"), this.start = e || 10, $("body").eq(0).prepend(this.el), this.add(i || {}), this.bindScroll(), this
    },
    bindScroll: function() {
        var t = this;
        $(window).bind("scroll", function() {
            var e = $("html").scrollTop() || $("body").scrollTop();
            e > t.start ? (t.el.show(), t.resized || t.setPosition()) : t.el.hide()
        })
    },
    setPosition: function() {
        var t = $("body").eq(0).width(),
            e = $("body .w").eq(0).width(),
            i = 50,
            a = 605;
        i = this.wrap.find(".bp-item").eq(0).outerWidth(), a = parseInt(this.wrap.css("marginLeft")), this.resizeMask || (this.mask.css({
            height: this.wrap.outerHeight() - 10,
            width: this.wrap.outerWidth() + 27
        }), this.resizeMask = !0), i > (t - e) / 2 && (this.wrap.add(this.mask).css("marginLeft", a - i), this.resized = !0)
    },
    add: function(t) {
        var e = $.extend({
            cName: "backtop",
            text: "B" === pageConfig.isHitVersion ? "<s></s>\u9876\u90e8" : "\u8fd4\u56de\u9876\u90e8",
            href: "#none",
            target: "_self",
            newTag: !1,
            scrollTo: 0,
            fn: function() {}
        }, t);
        return this.resizeMask = !1, this.render(e), this
    },
    render: function(t) {
        var e = this,
            i = '<div class="{if newTag}bp-item-new{/if} bp-item" data-top="${scrollTo}">    <a href="${href}" class="${cName}" target="${target}">${text}</a><s></s></div>',
            a = $(i.process(t));
        this.wrap.prepend(a), a.unbind("click").bind("click", function() {
            t.fn.apply(e, [a])
        })
    }
}, Floors = {
        cacheData: null,
        data: function(t) {
            return "default" === t ? {
                sort: [0, 1, 2, 3, 4, 5, 6, 7],
                defaultFloors: [{
                    id: 0
                }, {
                    id: 1
                }, {
                    id: 2
                }, {
                    id: 3
                }, {
                    id: 4
                }, {
                    id: 5
                }, {
                    id: 6
                }, {
                    id: 7
                }]
            } : "extra" === t ? {
                list: [{
                    def: !1,
                    name: "\u5176\u5b83\u5206\u7c7b1",
                    id: 9
                }, {
                    def: !1,
                    name: "\u5176\u5b83\u5206\u7c7b2",
                    id: 10
                }, {
                    def: !1,
                    name: "\u5176\u5b83\u5206\u7c7b3",
                    id: 11
                }, {
                    def: !1,
                    name: "\u5176\u5b83\u5206\u7c7b4",
                    id: 12
                }, {
                    def: !1,
                    name: "\u5176\u5b83\u5206\u7c7b5",
                    id: 13
                }, {
                    def: !1,
                    name: "\u5176\u5b83\u5206\u7c7b6",
                    id: 14
                }]
            } : void 0
        },
        init: function() {
            this.el = $("#floors-list"), this.get()
        },
        get: function(t) {
            var e = this;
            $.ajax({
                url: "http://ai.jd.com/",
                dataType: "jsonp",
                success: function(i) {
                    i && i.info && (e.set(i.info), e.cacheData = i.info), t && t(i.info)
                }
            })
        },
        sort: function(t) {
            var e, i, a, n = $("#floors-list"),
                s = this.result || [],
                o = s.length;
            for (e = 0; o > e; e++) a = t.filter('[data-fid="' + s[e] + '"]'), i = n.find(".f-sorted"), a.find("script").html(""), i.length > 0 ? n.find(".f-sorted:last").after(a) : n.prepend(a), a.addClass("f-sorted")
        },
        set: function(t) {
            $("#floors-list"), this.result = t.sort || readCookie("fsort").split(",");
            var e = $("#floors-list .w[data-fid]");
            this.sort(e), this.resetFloorIcons()
        },
        resetFloorIcons: function() {
            this.el.find("[data-fid]").each(function(t) {
                var e = $(this),
                    i = e.find(".floor .b3");
                i.text(t + 1 + "F")
            })
        }
    }, Grecommend = {
        init: function(t, e, i, a, n) {
            this.sku = t, this.rid = e, this.locId = i, this.onLoad = n || function() {}, this.pin = readCookie("pin"), this.pid = null === i ? 1 : i.split("-")[0], this.el = a;
            var s = readCookie("__jda");
            this.uuid = s ? "-" == s.split(".")[1] ? -1 : s.split(".")[1] : -1, this.get()
        },
        get: function() {
            var t = this,
                e = [],
                i = readCookie("aview"),
                a = readCookie("atw");
            i && i.split(".")[1] && e.push(i.split(".")[1].split("|")[0]), a && a.split(".")[1] && e.push(a.split(".")[1]), a && a.split(".")[3] && e.push(a.split(".")[3]), a && a.split("|")[2] && e.push(a.split("|")[2].split(".")[1]);
            var n = {
                p: this.rid,
                ck: "ipLocation",
                lid: this.pid,
                lim: 6,
                uuid: this.uuid,
                ec: "gbk"
            };
            this.pin && (n.pin = this.pin), $.ajax({
                url: "http://diviner.jd.com/diviner?skus=" + e.join(","),
                data: n,
                dataType: "jsonp",
                success: function(e) {
                    t.set(e)
                }
            })
        },
        set: function(t) {
            this.skus = [];
            var e = '<ul class="lh">    {for item in data}    {if Number(item.jp)>=0}    <li data-push="${Grecommend.skus.push(item.sku)}" class="fore1" onclick="reClick2012(\'cai2012\',\'${item.sku}#${item.jp}\',0)" data-clk="${item.clk}">        <div class="p-img ld"><a target="_blank" href="http://my.jd.com/product/likes.html?id=${item.sku}"><img height="130" width="130" alt="${item.t}" data-img="1" src="${pageConfig.FN_GetImageDomain(item.sku)}n3/${item.img}"></a></div>        <div class="p-name"><a target="_blank" href="http://my.jd.com/product/likes.html?id=${item.sku}" title="${item.t}">${item.t}</a></div>        <div class="p-price">\u4eac\u4e1c\u4ef7\uff1a<strong class="J-p-${item.sku}">\uffe5${item.jp}</strong></div>    </li>    {/if}    {/for}</ul>';
            t.success && t.data.length > 0 && (this.el.html(e.process(t)).parent().show(), $("#c-tabs").show(), this.setTrackCode(t.impr), getPriceNum(this.skus, readCookie("ipLoc-djd"), this.el), this.onLoad(t))
        },
        setTrackCode: function(t) {
            var e = this.el.find("li"),
                i = this,
                a = "&m=UA-J2011-1&ref=" + encodeURIComponent(document.referrer);
            e.each(function() {
                var t = $(this).attr("data-clk");
                $(this).bind("click", function(e) {
                    var n = (e.srcElement || e.target).tagName.toUpperCase();
                    ("A" === n || "IMG" === n || "SPAN" === n) && i.newImage(t + a, !0)
                })
            }), this.newImage(t + a)
        },
        newImage: function(t, e, i) {
            var a = new Image;
            t = e ? t + "&random=" + Math.random() + new Date : t, a.setAttribute("src", t), a.onload = function() {
                i !== void 0 && i(t)
            }
        }
    };
(function() {
    document.referrer.match(/^http:\/\/\S*\.360buy\.com/) && !$.cookie("_fv") && $("#shortcut-2013 .fl li").append('<div class="jtip"><div class="jtip-arrow"><div class="jtip-arrow1"></div><div class="jtip-arrow2"></div></div><div class="jtip-content">\u628a\u4eac\u4e1c\u52a0\u5165\u6536\u85cf\u5939<br />\u4e00\u952e\u8f7b\u677e\u8bbf\u95eeJD.COM</div><div class="jtip-close" onclick="this.parentNode.style.display=\'none\'">\u00d7</div></div>'), $(".plist .style1 .p-img,.plist .style2 .p-img").bind("mouseover", function() {
        $(this).css("opacity", "0.7")
    }).bind("mouseout", function() {
        $(this).css("opacity", "1")
    }), $("#hot").Jtab({
        delay: 200,
        source: "data-boole"
    }, function(t, e, i) {
        var a = window.screen.width >= 1200 ? 178 : 154,
            n = readCookie("aview"),
            s = n ? n.split("|")[0] : "";
        if ($("#hot .tab-arrow").animate({
            left: i * a
        }, 500, "easeInOutQuint"), 1 == i) {
            if (!t) return;
            Grecommend.init(s, 301e3, readCookie("ipLoc-djd"), e, function() {
                pageConfig.FN_ImgError(e.get(0)), log("hcaip", "Show")
            })
        } else e.find("img").Jlazyload({
            type: "image",
            source: "data-src"
        }, function() {
            pageConfig.FN_ImgError(e.get(0))
        })
    });
    var t = $('#virtuals div[data-widget="tab-item"]').index($("#virtuals .curr")) || 0;
    $("#virtuals").Jtab({
        type: "dynamic",
        index: t,
        source: "data-url",
        delay: 200
    }, function(t, e, i) {
        var a = window.screen.width >= 1200 ? 77 : 52;
        $("#virtuals").find(".tab-arrow").animate({
            left: 0 == i ? 0 : i * a + 2,
            width: 0 == i ? a + 2 : a
        }, 500, "easeInOutQuint"), t && (1210 > screen.width && (t += "?990"), e.html('<iframe scrolling="no" height="139px" frameborder="0" width="100%" src="' + t + '"></iframe>'))
    }), pageConfig.TPL_Timed = '<div class="countdown" id="timer${qid}">\u6b63\u5728\u52a0\u8f7d\u4e2d...</div>        {for item in pros}            {if item_index==0}                <div class="p-img ld"><a href="http://item.jd.com/${item.id}.html" target="_blank" title="${unescape(item.mc)}"><b class="pi pix1" id="icon${qid}"><span>${item.zk}</span><br />\u6298 </b><img src="${item.tp}" width="130" height="130" data-img="1" alt="${unescape(item.mc)}"></a></div>                <div class="p-name"><a href="http://item.jd.com/${item.id}.html" title="${unescape(item.mc)}" target="_blank">${unescape(item.mc)}</a></div>                <div class="p-price"><span>\u62a2\u8d2d\u4ef7\uff1a</span><strong>\uffe5${item.qg}</strong></div>            {/if}        {/for}', pageConfig.TIMER_Timed = [], pageConfig.FN_TimedInit = function() {
        $.Jtimer({
            pids: "36,37,38,39,40",
            template: pageConfig.TPL_Timed,
            reset: pageConfig.FN_TimedInit,
            timer: pageConfig.TIMER_Timed,
            finishedClass: "pi pix0"
        })
    }, pageConfig.FN_TimedInit(), pageConfig.TPL_MSlide = {
        itemsWrap: '<ul class="slide-items">{innerHTML}</ul>',
        itemsContent: '{for item in json}            {var v=pageConfig.FN_GetCompatibleData(item)}            <li class="hide" clstag="homepage|keycount|home2013|09a${parseInt(item_index)+2}"><a href="${v.href}" target="_blank" title="${v.alt}">                <img height="${v.height}" width="${v.width}" src="${v.src}" data-img="2" />            </a></li>        {/for}',
        controlsWrap: '<div class="slide-controls">{innerHTML}</div>',
        controlsContent: '{for item in json}            <span class="{if parseInt(item_index)==0}curr{/if}">${parseInt(item_index)+1}</span>        {/for}'
    }, pageConfig.TPL_FSlide = {
        itemsWrap: '<div class="slide-itemswrap"><div class="slide-items">{innerHTML}</div></div>',
        itemsContent: '{for item in json}            <div><a href="${item.href}" target="_blank"><img src="${item.src}" width="${item.width}" height="${item.height}" alt="${item.alt}" data-img="2"></a></div>        {/for}',
        controlsWrap: '<div class="slide-controls">{innerHTML}</div>',
        controlsContent: '{for item in json}            <span class="{if parseInt(item_index)==0}curr{/if}"><b></b></span>        {/for}'
    }, pageConfig.FN_SetPrice = function(t) {
        var e = t.split(".");
        return t.match(/\./) ? e[0] + ".<span>" + e[1] + "</span>" : void 0
    }, pageConfig.FN_SetImg = function(t, e) {
        return e ? e && e.match(/vclist/) ? pageConfig.FN_GetImageDomain(t) + e : pageConfig.FN_GetImageDomain(t) + "N4/" + e : ""
    }, pageConfig.TPL_Tabs = '<ul class="lh style3">        {for item in data}        {var x=pageConfig.FN_SetPrice(item.c)}        {var y=pageConfig.FN_SetImg(item.a,item.d)}        <li class="fore${parseInt(item_index)}">            <div class="p-img ld"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}">{if item.e}${pageConfig.FN_SetPromotion(item.e)}{/if}<img height="100" width="100" alt="${item.b}" data-img="1" src="${y}"></a></div>            <div class="p-name"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}">${item.b}</a></div>            <div class="p-price"><span>\uffe5</span>${x}</div>        </li>        {/for}    </ul>', pageConfig.TPL_Tabs_jp = '<ul class="lh style3">        {for item in data}        <li class="fore${parseInt(item_index)}">            <div class="p-img ld"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}">{if item.e}${pageConfig.FN_SetPromotion(item.e)}{/if}<img height="100" width="100" alt="${item.b}" data-img="1" src="${pageConfig.FN_GetImageDomain(item.a)}${item.d}"></a></div>            <div class="p-name" style="height:1.5em;"><a target="_blank" href="${pageConfig.FN_GetUrl(item.f,item.a)}" title="${item.b}">${item.b}</a></div>            <div class="p-price"><span>${item.c}</span></div>        </li>        {/for}    </ul>', pageConfig.FN_Tabs = function(t, e) {
        var i = t.split(",");
        obj = {}, html = "";
        var a;
        2 == i.length && (t = i[0]), a = this.DATA_Tabs[t], obj.data = a, html = "1640" == t ? this.TPL_Tabs_jp.process(obj) : this.TPL_Tabs.process(obj), "4" == i[1] && (html = html.replace("style3", "style3")), e.html(html), pageConfig.FN_ImgError(e.get(0))
    }, $(".plist").each(function() {
        var t = $(this),
            e = window.screen.width >= 1200 ? 158 : 156;
        $(this).Jtab({
            type: "dynamic",
            source: "data-tag",
            delay: 200
        }, function(i, a, n) {
            if (t.find(".tab-arrow").animate({
                left: n * e
            }, 500, "easeInOutQuint"), i)
                if (a.parents(".plist").hasClass("promotion-place")) {
                    var s = a.find("img[trigger-lazy-img]");
                    s.length && s.each(function() {
                        $(this).attr("src", $(this).attr("trigger-lazy-img")).removeAttr("trigger-lazy-img")
                    })
                } else pageConfig.FN_Tabs(i, a)
        })
    }), $(".ranking").Jtab({}, function(t, e, i) {
        $(".ranking").find(".tab-arrow").animate({
            left: 40 * i,
            width: 4 == i ? 50 : 40
        }, 500, "easeInOutQuint")
    }), $(".club .mc").each(function() {
        var t = $(this);
        setInterval(function() {
            var e = t.find("li:last-child");
            t.find("li:last-child").remove(), t.find("ul").prepend(e.css({
                height: 0
            })), e.animate({
                height: "73px"
            })
        }, 8e3)
    }), $("#slide").Jslider({
        data: pageConfig.DATA_MSlide,
        auto: !0,
        reInit: !0,
        slideWidth: screen.width >= 1210 ? 670 : 550,
        slideHeight: 240,
        maxAmount: 6,
        slideDirection: 3,
        template: pageConfig.TPL_MSlide
    }, function(t) {
        pageConfig.FN_ImgError(t.get(0))
    }), $(".slide[data-lazyload]").Jlazyload({
        type: "module"
    }, function(t, e) {
        var i, a, n = pageConfig.DATA_FSlide["F" + t];
        if (8 > t) i = 473, a = 4;
        else {
            if (1210 > screen.width) return;
            i = 209, a = 2, n = n.sort(function() {
                return .5 - Math.random()
            })
        }
        e.Jslider({
            data: n,
            slideWidth: i,
            slideHeight: 180,
            maxAmount: a,
            speed: "fast",
            template: pageConfig.TPL_FSlide
        }, function(t) {
            pageConfig.FN_ImgError(t.get(0))
        })
    }), $(".catalogue").Jlazyload({
        type: "module",
        threshold: -(document.documentElement.clientHeight - 300) / 2
    }, function(t, e) {
        e.find(".b2").animate({
            height: "34px"
        })
    }), pageConfig.accordionData !== void 0 ? ($("#clothing").addClass("clothing-new"), renderAccordion(pageConfig.accordionData)) : (pageConfig.TIMER_Clothing = null, $("#clothing .accordion .item").mouseover(function() {
        var t = $(this);
        return pageConfig.TIMER_Clothing = setTimeout(function() {
            t.animate({
                width: screen.width >= 1200 ? "190px" : "188px"
            }, {
                duration: 500,
                easing: "easeOutQuart"
            }).siblings().animate({
                width: screen.width >= 1200 ? "150px" : "148px"
            }, {
                duration: 500
            })
        }, 200), !1
    }).mouseout(function() {
        pageConfig.TIMER_Clothing && clearTimeout(pageConfig.TIMER_Clothing)
    })), $("#subscription-submit").bind("click", function() {
        var t = $("#subscription-val").val(),
            e = $("#subscription-prompt"),
            i = "";
        if (!t.match("^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$")) {
            var a = "\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1" == t ? "\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1" : "\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e";
            return e.html(a).attr("class", "incorrect").show(), void 0
        }
        $.ajax({
            url: "http://edm.jd.com/front/ajax/subscribe.ashx",
            data: {
                email: t,
                type: 1
            },
            dataType: "jsonp",
            success: function(t) {
                if (t) {
                    switch (t.state) {
                        case 0:
                            i = "correct";
                            break;
                        case 1:
                            i = "correct";
                            break;
                        case 2:
                            i = "incorrect"
                    }
                    e.html(t.message).attr("class", i).show()
                }
            }
        })
    }), 0 !== $("#showcase").length && setShowcase("#showcase"), 0 !== $("#clothing-plist-2").length && setClothingPlist2("#clothing-plist-2"), setCheckEptArea()
})(), $(function() {
        function t() {
            var t = "B" === pageConfig.isHitVersion ? "backpanel0402" : "backpanel",
                e = BackPanel.init(t, 0, {
                    fn: function() {
                        $("body,html").animate({
                            scrollTop: 0
                        }, 800, "easeOutExpo")
                    }
                }).add({
                    cName: "survey",
                    text: "B" === pageConfig.isHitVersion ? "<s></s>\u53cd\u9988" : "\u95ee\u5377\u8c03\u67e5",
                    target: "_blank",
                    href: "http://surveys.jd.com/index.php?r=survey/index/sid/95425/lang/zh-Hans"
                });
            e.add({
                cName: "home-setting",
                text: "B" === pageConfig.isHitVersion ? "<s></s>\u5b9a\u5236" : "\u5b9a\u5236\u9996\u9875",
                href: "#none",
                fn: function() {
                    "undefined" == typeof HomeSetting ? $.ajax({
                        url: "http://misc.360buyimg.com/product/js/2013/home-settings.js",
                        dataType: "script",
                        cache: !0,
                        scriptCharset: "utf-8"
                    }) : HomeSetting.init("#home-setting")
                }
            }), $(".backpanel .home-setting").attr("clstag", "homepage|keycount|home2013|dingzhi" + ("B" === pageConfig.isHitVersion ? 1 : 2))
        }
        var e = $("#life .brands .smt");
        pageConfig.enableArea && setArea(), 1 > e.find(".extra-ico").length && e.append('<div class="extra-ico"><a target="_blank" href="http://channel.jd.com/jiazhuang.html ">\u751f\u6d3b\u9986</a></div>'),
        function() {
            var t = readCookie("__jda"),
                e = t ? t.split(".")[1] : null;
            e && (pageConfig.abTest = new ABTest(e, .2), pageConfig.isHitVersion = pageConfig.abTest.isHitVersion(), /debug=test/.test(location.href) && pageConfig.abTest.test())
        }();
        var i = function(t) {
            $.getJSON("http://passport.jd.com/loginservice.aspx?method=Login&callback=?", function(e) {
                t && t(e)
            })
        };
        i(function(e) {
            if (readCookie("fsort"), readCookie("pin"), e.Identity && e.Identity.IsAuthenticated) {
                t(), Floors.init();
                var i = document.createElement("img");
                i.src = "http://misc.360buyimg.com/product/skin/2013/i/backpanel20131205.png", i = null
            } else {
                var a = new pageConfig.FN_InitSidebar;
                a.addItem("<a class='research' target='_blank' href='http://market.jd.com/jdvote/vote2.aspx?voteId=167'><b></b>\u8c03\u67e5\u95ee\u5377</a>"), a.setTop(), a.scroll()
            }
        })
    }),
function(t) {
    t.fn.imgScroll = function(e, i) {
        var a = {
            data: [],
            template: null,
            evtType: "click",
            visible: 1,
            direction: "x",
            next: "#next",
            prev: "#prev",
            disableClass: "disabled",
            disableClassPerfix: !1,
            speed: 300,
            step: 1,
            loop: !1,
            showControl: !1,
            width: null,
            height: null,
            navItems: !1,
            navItmesWrapClass: "scroll-nav-wrap",
            navItemActivedClass: "current",
            status: !1,
            statusWrapSelector: ".scroll-status-wrap"
        }, n = t.extend(a, e);
        return this.each(function() {
            function e(t) {
                m >= C + w && !y ? (b.addClass(j), $.removeClass(T)) : y || $.addClass(T), "left" !== p.eq(0).css("float") && p.css("float", "left"), g = n.width || p.eq(0).outerWidth(), v = n.height || p.eq(0).outerHeight(), f.css({
                    position: "static" == f.css("position") ? "relative" : f.css("position"),
                    width: "x" == t ? g * w : g,
                    height: "x" == t ? v : v * w,
                    overflow: "hidden"
                }), u.css({
                    position: "absolute",
                    width: "x" == t ? g * m : g,
                    height: "x" == t ? v : v * m,
                    top: 0,
                    left: 0
                }), "function" == typeof i && i.apply(f, [x, k, p.slice(x * C, x * C + w), p.slice(x * C + w - C, x * C + w)])
            }

            function a() {
                m = n.data.length, u = f.find("ul").eq(0), p = u.children("li"), k = Math.ceil((m - w) / C) + 1, z = 0 === (m - w) % C
            }

            function s(t) {
                var e = {
                    list: t
                };
                f.html(Q.process(e)), a()
            }

            function o(t, e) {
                function a() {
                    y ? (E = w >= m - t * C ? !0 : !1, L = 0 >= t ? !0 : !1) : (w >= m - t * C ? ($.addClass(T), E = !0) : ($.removeClass(T), E = !1), 0 >= t ? (b.addClass(j), L = !0) : (b.removeClass(j), L = !1)), (M || S) && c(t), "function" == typeof i && i.apply(f, [t, k, p.slice(t * C, t * C + w), p.slice(t * C + w - C, t * C + w)])
                }
                if (u.is(":animated")) return !1;
                if (y) L && e && (x = k), E && !e && (x = -1), t = e ? --x : ++x;
                else {
                    if (L && e || E && !e) return !1;
                    t = e ? --x : ++x
                }
                h = "x" == _ ? {
                    left: t >= k - 1 ? -(m - w) * g : -t * C * g
                } : {
                    top: t >= k - 1 ? -(m - w) * v : -t * C * v
                }, n.speed ? u.animate(h, n.speed, a) : (u.css(h), a())
            }

            function r(e, i) {
                for (var a = F ? t("." + e).eq(0) : t('<div class="' + e + '"></div>'), n = 0; k > n; n++) a.append("<em " + (0 === n ? " class=" + i : "") + ' title="' + (n + 1) + '">' + (n + 1) + "</em>");
                F || f.after(a)
            }

            function l() {
                var e = B ? t(O).eq(0) : t('<div class="' + O.replace(".", "") + '"></div>');
                e.html("<b>1</b>/" + k), B || f.after(e)
            }

            function c(e) {
                M && t("." + N).find("em").removeClass(P).eq(e).addClass(P), S && t(O).html("<b>" + (e + 1) + "</b>/" + k)
            }

            function d() {
                b.unbind(I).bind(I, function() {
                    o(x, !0)
                }), $.unbind(I).bind(I, function() {
                    o(x, !1)
                })
            }
            var h, f = t(this),
                u = f.find("ul").eq(0),
                p = u.children("li"),
                m = p.length,
                g = null,
                v = null,
                $ = "string" == typeof n.next ? t(n.next) : n.next,
                b = "string" == typeof n.prev ? t(n.prev) : n.prev,
                x = 0,
                C = n.step,
                w = n.visible,
                k = Math.ceil((m - w) / C) + 1,
                y = n.loop,
                _ = n.direction,
                I = n.evtType,
                A = n.disableClass,
                j = n.disableClassPerfix ? "prev-" + A : A,
                T = n.disableClassPerfix ? "next-" + A : A,
                M = n.navItems,
                N = n.navItmesWrapClass,
                F = t("." + N).length > 0,
                P = n.navItemActivedClass,
                S = n.status,
                O = n.statusWrapSelector,
                B = t(O).length > 0,
                E = !1,
                L = !0,
                z = 0 === (m - w) % C,
                Q = n.template || '<ul>{for slide in list}<li><a href="${slide.href}" target="_blank"><img src="${slide.src}" alt="${slide.alt}" /></a></li>{/for}</ul>';
            if (n.data.length > 0) {
                if (!n.width || !n.height) return !1;
                s(n.data)
            }
            m > w && w >= C ? (e(_), d(), M && r(N, P), S && l(O)) : (n.showControl ? $.add(b).show() : $.add(b).hide(), b.addClass(j), $.addClass(T))
        })
    }
}(jQuery), pageConfig.TPL_MScroll = '<ul class="lh">    {for slide in list}    <li class="item fore${parseInt(slide_index)+1}" clstag="homepage|keycount|home2013|09b${parseInt(slide_index)+1}">        <a href="${slide.href}" target="_blank">            <img width="202" height="159" src="http://misc.360buyimg.com/lib/img/e/blank.gif" class="loading-style2" data-lazyload="background:url(${slide.src}) no-repeat #fff center 0;" alt="${slide.alt}" /></a>    </li>    {/for}</ul>', $("#mscroll-list").imgScroll({
    width: screen.width >= 1200 ? 203 : 163,
    height: 159,
    visible: 3,
    step: 3,
    loop: !0,
    next: "#mscroll-ctrl-next",
    prev: "#mscroll-ctrl-prev",
    data: pageConfig.DATA_MScroll,
    template: pageConfig.TPL_MScroll
}, function(t, e, i, a) {
    a.find("img").each(function() {
        var t = $(this).attr("data-lazyload");
        $(this).attr("style") || $(this).attr("style", t).removeAttr("data-lazyload")
    })
}), pageConfig.TPL_GScroll = '<ul class="lh">    {for slide in list}    {var x=pageConfig.FN_GetCompatibleData(slide)}        <li class="item fore${parseInt(slide_index)+1}">            <a href="${x.href}" target="_blank">                <img width="${x.width}" height="${x.height}" src="http://misc.360buyimg.com/lib/img/e/blank.gif" style="background:url(${x.src}) no-repeat 0 0;" class="loading-style2" alt="${x.alt}" /></a>            <div class="p-detail">                <a target="_blank" class="btn-tuan" href="${x.href}">\u53c2\u56e2</a>                <span>\u56e2\u8d2d\u4ef7\uff1a</span><strong>\uffe5${x.price}</strong>            </div>        </li>    {/for}</ul>', $("#gscroll-list").imgScroll({
    width: screen.width >= 1200 ? 292 : 192,
    height: 155,
    visible: 1,
    step: 1,
    loop: !0,
    next: "#gscroll-ctrl-next",
    prev: "#gscroll-ctrl-prev",
    data: pageConfig.DATA_GScroll,
    template: pageConfig.TPL_GScroll
}, function(t, e, i, a) {
    a.find("img").each(function() {
        var t = $(this).attr("data-lazyload");
        $(this).attr("style") || $(this).attr("style", t).removeAttr("data-lazyload")
    })
}), $("#digitals-brands").Jtab({
    compatible: !0
}, function(t, e) {
    e.find("img").each(function() {
        var t = $(this).attr("data-src");
        $(this).attr("src") || $(this).attr("src", t).removeAttr("data-src")
    })
});