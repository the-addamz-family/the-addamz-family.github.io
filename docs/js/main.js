(()=>{"use strict";let e=function(){$(".subheading").each((function(){var e=$(this).offset().top;$(window).scrollTop()>=e-$(window).height()&&$(this).children().delay(200).each((function(e){$(this).delay(80*e).fadeIn(80)}))}))};$(".ho-nobo_title").on("click",(function(){var e=$(this).next(".ho-nobo_box");$(e).slideToggle(),$(this).hasClass("close")?$(this).removeClass("close"):$(this).addClass("close")})),$(window).scroll((function(){e()})),$(window).scroll((function(){$(".fadeUp0").each((function(){var e=$(this).offset().top;$(window).scrollTop()>=e-$(window).height()&&$(this).addClass("fadeUp")})),$(".fadeUp1").each((function(){var e=$(this).offset().top;$(window).scrollTop()>=e-$(window).height()&&$(this).addClass("fadeUp")}))})),particlesJS("particles-js",{particles:{number:{value:500,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0}},opacity:{value:1,random:!0,anim:{enable:!0,speed:5,opacity_min:0,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1},move:{enable:!0,speed:120,direction:"none",random:!0,straight:!0,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1},onclick:{enable:!1},resize:!0}},retina_detect:!0}),$("#link-within-business-details a").click((function(){var e=$(this).attr("href"),n=$(e).offset().top;return $("body,html").animate({scrollTop:n},500),!1})),$(".hamburger-menu").click((function(){!function(){$(".hamburger-menu").addClass(".hamburger-menu-active"),$(".hamburger-menu").css({opacity:"0"}),$(".nav-of-hamburger-menu").addClass(".nav-of-hamburger-menu-active"),$(".nav-of-hamburger-menu").css({top:"0"});let e=String(window.innerHeight/2-220)+"px";$(".hamburger-menu-close").css({top:e})}()})),$(".hamburger-menu-close").click((function(){$(".hamburger-menu").removeClass(".hamburger-menu-active"),$(".hamburger-menu").css({opacity:"1"}),$(".nav-of-hamburger-menu").removeClass(".nav-of-hamburger-menu-active"),$(".nav-of-hamburger-menu").css({top:"-120%"}),$(".hamburger-menu-close").css({top:"-120%"})})),$(window).on("load",(function(){$(".accordion-area li:first-of-type section").addClass("open"),$(".open").each((function(e,n){var a=$(n).children(".ho-nobo_title");$(a).addClass("close");var o=$(n).children(".ho-nobo_box");$(o).slideDown(500)})),$(".subheading").each((function(){var e=$(this).html(),n="";e.split("").forEach((function(e){n+=""!==e?"<span>"+e+"</span>":e})),$(this).html(n)})),e()}))})();