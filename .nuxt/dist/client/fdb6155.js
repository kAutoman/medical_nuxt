(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{630:function(t,e,n){"use strict";var r={name:"form-subscribe",data:function(){return{email:null}},methods:{handleSubscribe:function(){this.$emit("handleSubscribe",this.email)}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("form",[e("div",{staticClass:"ps-form--subscribe"},[e("div",{staticClass:"ps-form__control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control ps-input",attrs:{type:"email",placeholder:"Enter your email address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),e("button",{staticClass:"ps-btn ps-btn--warning",on:{click:function(e){return e.preventDefault(),t.handleSubscribe()}}},[t._v("Subscribe")])])])])}),[],!1,null,null,null);e.a=component.exports},632:function(t,e,n){"use strict";n(8);var r={props:{banner:{type:Object,default:function(){}},reverse:{type:Boolean,default:!1}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.banner?e("div",{staticClass:"ps-banner",style:{backgroundColor:t.banner.bgColor}},[t.banner.imgbg?e("img",{class:["ps-banner__imagebg",t.banner.imgbg],attrs:{src:t.banner.img,alt:"alt"}}):t._e(),t._v(" "),e("div",{class:[t.banner.noFull?"container-no-round":"container container-initial"]},[e("div",{class:["ps-banner__block",t.reverse?"row-reverse":""]},[e("div",{staticClass:"ps-banner__content"},[t.banner.baged?e("p",{staticClass:"ps-banner__baged"},[e("strong",[t._v(t._s(t.banner.baged))])]):t._e(),t._v(" "),e("h2",{class:["ps-banner__title",t.banner.textColor&&t.banner.textColor],domProps:{innerHTML:t._s(t.banner.title)}}),t._v(" "),e("div",{class:["ps-banner__desc",t.banner.textColor&&t.banner.textColor],domProps:{innerHTML:t._s(t.banner.desc)}}),t._v(" "),t.banner.price?e("div",{staticClass:"ps-banner__price"},[e("span",[t._v(t._s(t.banner.price.ins))]),t._v(" "),e("del",[t._v(t._s(t.banner.price.del))])]):t._e(),t._v(" "),t.banner.button?e("div",{staticClass:"ps-banner__btn-group"},t._l(t.banner.button,(function(n,r){return e("div",{key:r,class:["ps-banner__btn",t.banner.buttonColor&&t.banner.buttonColor]},[e("img",{style:t.banner.filter&&t.banner.filter,attrs:{src:n.icon,alt:"alt"}}),t._v(t._s(n.text)+"\n                    ")])})),0):t._e(),t._v(" "),t.banner.shop||t.banner.cart?e("a",{class:["ps-banner__shop",t.banner.shop,t.banner.cart],attrs:{href:"#"}},[t._v(t._s(t.banner.textShop?t.banner.textShop:t.banner.shop?"Shop now":"Add to cart"))]):t._e(),t._v(" "),t.banner.percent&&!t.banner.percent.thumbnail?e("div",{class:["ps-banner__persen",t.banner.percent.extraClass],domProps:{innerHTML:t._s(t.banner.percent.text)}}):t._e()]),t._v(" "),e("div",{class:["ps-banner__thumnail",{"ps-banner__fluid":!t.banner.round}]},[t.banner.round?e("img",{staticClass:"ps-banner__round",attrs:{src:t.banner.round,alt:"alt"}}):t._e(),t._v(" "),!t.banner.imgbg&&t.banner.img?e("img",{staticClass:"ps-banner__image",attrs:{src:t.banner.img,alt:"alt"}}):t._e(),t._v(" "),t.banner.percent&&t.banner.percent.thumbnail?e("div",{class:["ps-banner__persen",t.banner.percent.extraClass]},[t._v("\n                "+t._s(t.banner.percent.text)+"\n                ")]):t._e()])])])]):t._e()}),[],!1,null,null,null);e.a=component.exports},633:function(t,e,n){"use strict";var r=n(190),o=n(183),menu=n(85),c=n(110),l={components:{SocialIcon:r.a,LanguageCurrency:o.a,RenderList:c.a},data:function(){return{menu:menu.f}}},_=n(4),component=Object(_.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"ps-top__right"},[e("language-currency"),t._v(" "),e("div",{staticClass:"ps-top__social"},[e("social-icon")],1),t._v(" "),e("render-list",{attrs:{list:t.menu,className:"menu-top"}}),t._v(" "),t._m(1)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-header__text"},[e("strong",[t._v("100% Secure delivery ")]),t._v("without contacting the courier ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-header__text"},[t._v("Need help? "),e("strong",[t._v("0020 500 - MYMEDI - 000")])])}],!1,null,null,null);e.a=component.exports},635:function(t,e,n){"use strict";n(10),n(9),n(8),n(13),n(14);var r=n(1),o=n(12),c=n(632);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var _={props:{listData:{type:Array,default:function(){return[]}},sectionClass:{type:String,default:""},round:{type:Boolean,default:!1}},components:{Banner:c.a},data:function(){return{swiperOption:{slidesPerView:1,loop:!0,effect:"fade",autoplay:{delay:15e3,disableOnInteraction:!1},navigation:{prevEl:".swiper-prev-banner",nextEl:".swiper-next-banner"},pagination:{el:".pagination-banner",clickable:!0}},loadingBanner:!0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({loading:function(t){return t.app.loading}})),mounted:function(){var t=this;setTimeout((function(){t.loadingBanner=!1}),1e3)}},d=_,v=n(4),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("section",{class:["ps-section--banner",t.sectionClass]},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.loadingBanner,expression:"loadingBanner"}],staticClass:"ps-section__overlay"},[e("div",{staticClass:"ps-section__loading"})]),t._v(" "),e("div",{staticClass:"ps-swiper"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:bannerSwiper",value:t.swiperOption,expression:"swiperOption",arg:"bannerSwiper"}],staticClass:"swiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.listData,(function(n,r){return e("div",{key:r,staticClass:"swiper-slide"},[t.round?e("div",{staticClass:"ps-banner--round"},[e("banner",{attrs:{banner:n}})],1):e("banner",{attrs:{banner:n}})],1)})),0)]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"swiper-pagination pagination-banner"})])])}),[function(){var t=this._self._c;return t("div",{staticClass:"ps-swiper__nav"},[t("div",{staticClass:"swiper-button-prev swiper-prev-banner"}),this._v(" "),t("div",{staticClass:"swiper-button-next swiper-next-banner"})])}],!1,null,null,null);e.a=component.exports},701:function(t,e,n){"use strict";var r=n(57),o={props:{products:{type:Array,default:function(){return[]}},bgImage:{type:String,default:""}},components:{ProductStandard:r.a}},c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-section--black-style",style:{backgroundImage:"url("+t.bgImage+")"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-section__body"},[e("h3",{staticClass:"ps-section__title"},[t._v("Choose your style")]),t._v(" "),e("div",{staticClass:"ps-section__content"},t._l(t.products,(function(t){return e("div",{key:t.id,staticClass:"ps-section__product"},[e("product-standard",{attrs:{product:t}})],1)})),0)])])])}),[],!1,null,null,null);e.a=component.exports},702:function(t,e,n){"use strict";n(393);var r={props:{banner:{type:Object,default:function(){}}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-banner--full",style:{backgroundImage:"url("+t.banner.img+")"}},[e("section",{staticClass:"ps-banner"},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-banner__block"},[e("div",{staticClass:"ps-banner__content"},[e("h2",{staticClass:"ps-banner__title",domProps:{innerHTML:t._s(t.banner.title)}}),t._v(" "),e("div",{staticClass:"ps-banner__desc",domProps:{innerHTML:t._s(t.banner.desc)}}),t._v(" "),e("div",{staticClass:"ps-banner__btn-group"},t._l(t.banner.button,(function(n,r){return e("div",{key:r,staticClass:"ps-banner__btn"},[e("img",{attrs:{src:n.icon,alt:""}}),t._v(t._s(n.text)+"\n                        ")])})),0),t._v(" "),e("nuxt-link",{class:["ps-banner__shop",t.banner.shop.class],attrs:{to:t.banner.shop.link}},[t._v(t._s(t.banner.shop.text))])],1),t._v(" "),e("div",{staticClass:"ps-banner__thumnail"})]),t._v(" "),t.banner.group?e("div",{staticClass:"ps-banner__group"},t._l(t.banner.group,(function(n,r){return e("div",{key:r,staticClass:"ps-banner__item"},[e("img",{attrs:{src:n.icon,alt:""}}),t._v(" "),e("p",{domProps:{innerHTML:t._s(n.text)}})])})),0):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},707:function(t,e,n){"use strict";n(19);var r=n(112),o={props:{item:{type:Object,default:function(){}}},components:{RatingComponent:r.a}},c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-review"},[e("div",{staticClass:"ps-review__review"},[e("rating-component",{attrs:{value:t.item.rate}})],1),t._v(" "),e("div",{staticClass:"ps-review__text"},[t._v(t._s(t.item.text))]),t._v(" "),t.item.images?e("div",{staticClass:"ps-review__thumbnail"},t._l(t.item.images,(function(t,n){return e("img",{key:n,attrs:{src:t,alt:""}})})),0):t._e(),t._v(" "),e("div",{staticClass:"ps-review__author"},[e("div",{staticClass:"ps-review__image"},[e("img",{attrs:{src:t.item.avatar,alt:""}})]),t._v(" "),e("span",{staticClass:"ps-review__name"},[t._v(t._s(t.item.name))]),t._v(" "),e("span",{staticClass:"ps-review__date"},[t._v(t._s(t.item.date))])])])}),[],!1,null,null,null);e.a=component.exports},717:function(t,e,n){"use strict";n(393);var r={props:{item:{type:Object,default:function(){}},reverse:{type:Boolean,default:!1}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-promo--mask"},[e("div",{class:["ps-banner",t.item.class]},[e("div",{staticClass:"container"},[e("div",{class:["ps-banner__block",t.reverse?"row-reverse":""]},[e("div",{staticClass:"ps-banner__content"},[e("h2",{staticClass:"ps-banner__title",domProps:{innerHTML:t._s(t.item.title)}}),t._v(" "),t.item.desc?e("div",{staticClass:"ps-banner__desc",domProps:{innerHTML:t._s(t.item.desc)}}):t._e(),t._v(" "),t.item.btnGroup?e("div",{staticClass:"ps-banner__btn-group"},t._l(t.item.btnGroup,(function(n,r){return e("div",{key:r,staticClass:"ps-banner__btn"},[e("img",{attrs:{src:n.icon,alt:""}}),t._v(t._s(n.text)+"\n                        ")])})),0):t._e(),t._v(" "),e("nuxt-link",{class:["ps-banner__shop",t.item.shop.class],attrs:{to:t.item.shop.link}},[t._v(t._s(t.item.shop.text))])],1),t._v(" "),e("div",{staticClass:"ps-banner__thumnail"},[e("img",{staticClass:"ps-banner__image",attrs:{src:t.item.image,alt:""}}),t._v(" "),t.item.persen?e("div",{class:["ps-banner__persen",t.item.persen.class]},[t._v(t._s(t.item.persen.text))]):t._e()])])])])])}),[],!1,null,null,null);e.a=component.exports},718:function(t,e,n){"use strict";var r=n(184),o={components:{ReviewAvatarItem:n(707).a},data:function(){return{reviews:r.g}}},c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-section--reviews ps-reviews--3"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"ps-section__content"},[e("ul",{staticClass:"ps-section__list"},t._l(t.reviews,(function(t,n){return e("li",{key:n},[e("review-avatar-item",{attrs:{item:t}})],1)})),0)])])])}),[function(){var t=this._self._c;return t("h3",{staticClass:"ps-section__title"},[t("img",{attrs:{src:"/img/quote-icon.png",alt:""}}),this._v("Latest reviews")])}],!1,null,null,null);e.a=component.exports},744:function(t,e,n){var content=n(827);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("20da2b70",content,!0,{sourceMap:!1})},826:function(t,e,n){"use strict";n(744)},827:function(t,e,n){var r=n(21)(!1);r.push([t.i,".ps-home--9 .ps-banner--full{background-position:65%}.ps-home--9 .ps-banner--full .ps-banner .ps-banner__btn,.ps-home--9 .ps-banner--full .ps-banner .ps-banner__desc,.ps-home--9 .ps-banner--full .ps-banner .ps-banner__title{color:#fff}.ps-home--9 .ps-banner--full .ps-banner__btn img{filter:brightness(0) invert(1)}.ps-home--9 .ps-reviews--3{padding:80px 0}.ps-home--9 .ps-section--newsletter-full{margin-bottom:80px;padding:140px 0}.ps-home--9 .ps-promo--mask{padding-bottom:80px}.ps-home--9 .ps-promo--mask .ps-banner__btn img{filter:invert(9%) sepia(19%) saturate(9%) hue-rotate(352deg) brightness(101%) contrast(91%)}.ps-home--9 .ps-section--black-style{padding:80px 0}",""]),t.exports=r},835:function(t,e,n){"use strict";n.r(e);var r=n(621),o=n(7),c=(n(26),n(10),n(9),n(8),n(13),n(14),n(1)),l=n(111),menu=n(85),_=n(110),d=n(183),v=n(185),m=n(49),f=n(187),h=n(186),C=n(12),w=n(633);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={components:{Notification:l.a,RenderList:_.a,LanguageCurrency:d.a,FormSearch:v.a,LoginModal:f.a,CartMini:h.a,HeaderTop:w.a},data:function(){return{mainMenu:menu.d,product:null,sticky:!1,showNavigation:!1}},computed:O(O({},Object(C.b)({cartItems:function(t){return t.cart.cartItems},wishlistItems:function(t){return t.wishlist.items},appDrawer:function(t){return t.app.appDrawer}})),{},{productCartQuantity:function(){var t=0;return this.cartItems.forEach((function(element){t+=element.quantity})),t}}),created:function(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.getProductById)(5);case 2:t.product=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{handleScroll:function(){var t=window.scrollY;this.sticky=t>200},handleOpenDrawer:function(t){this.$store.commit("app/setCurrentDrawerContent",t),this.$store.commit("app/setAppDrawer",!this.appDrawer)},handleOpenMenu:function(){this.showNavigation=!this.showNavigation}}},x=n(4),j=Object(x.a)(k,(function(){var t=this,e=t._self._c;return e("header",{class:["ps-header ps-header--2 ps-header--9",{"ps-header--sticky":t.sticky}]},[e("notification"),t._v(" "),e("div",{staticClass:"ps-header__top"},[e("header-top")],1),t._v(" "),e("div",{staticClass:"ps-header__middle"},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-logo"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo.png",alt:""}}),t._v(" "),e("img",{staticClass:"sticky-logo",attrs:{src:"/img/sticky-logo.png",alt:""}}),t._v(" "),e("img",{staticClass:"logo-white",attrs:{src:"/img/logo-white.png",alt:""}})])],1),t._v(" "),e("div",{staticClass:"ps-header__right"},[e("ul",{staticClass:"ps-header__icons"},[e("li",{},[e("a",{staticClass:"active ps-header__item open-search",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleOpenDrawer("search")}}},[e("i",{staticClass:"icon-magnifier"})])]),t._v(" "),e("li",{staticClass:"ps-header__user"},[t._m(0),t._v(" "),e("login-modal")],1),t._v(" "),e("li",{},[e("nuxt-link",{staticClass:"ps-header__item",attrs:{to:"/shop/wishlist"}},[e("i",{staticClass:"fa fa-heart-o"}),t._v(" "),e("span",{staticClass:"badge"},[t._v(t._s(t.wishlistItems.length))])])],1),t._v(" "),e("li",{staticClass:"ps-header__cart"},[e("a",{staticClass:"active ps-header__item",attrs:{href:"#"}},[e("i",{staticClass:"icon-cart-empty"}),t._v(" "),e("span",{staticClass:"badge"},[t._v(t._s(t.productCartQuantity))])]),t._v(" "),e("cart-mini")],1)]),t._v(" "),e("language-currency"),t._v(" "),e("div",{staticClass:"ps-header__menu"},[e("render-list",{attrs:{list:t.mainMenu,className:"menu"}})],1)],1)])])],1)}),[function(){var t=this._self._c;return t("a",{staticClass:"active ps-header__item",attrs:{href:"#"}},[t("i",{staticClass:"icon-user"})])}],!1,null,null,null).exports;function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var P={components:{Notification:l.a},data:function(){return{sticky:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(C.b)({appDrawer:function(t){return t.app.appDrawer}})),created:function(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.scrollY;this.sticky=t>700},handleOpenDrawer:function(t){this.$store.commit("app/setCurrentDrawerContent",t),this.$store.commit("app/setAppDrawer",!this.appDrawer)}}},D=P,L=Object(x.a)(D,(function(){var t=this,e=t._self._c;return e("header",{class:["ps-header ps-header--9 ps-header--mobile",{"ps-header--sticky":t.sticky}]},[e("notification"),t._v(" "),e("div",{staticClass:"ps-header__middle"},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-logo"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"sticky-logo",attrs:{src:"/img/mobile-logo.png",alt:""}}),t._v(" "),e("img",{staticClass:"logo-white",attrs:{src:"/img/logo-white.png",alt:""}})])],1),t._v(" "),e("div",{staticClass:"ps-header__right"},[e("ul",{staticClass:"ps-header__icons"},[e("li",[e("a",{staticClass:"ps-header__item open-search",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleOpenDrawer("search")}}},[e("i",{staticClass:"fa fa-search"})])])])])])])],1)}),[],!1,null,null,null).exports,M=n(191),N=n(188),E=n(192),I=n(189),footer=n(113),H={components:{FooterBottom:M.a,FooterTop:N.a,FooterContact:E.a,FooterAddress:I.a,RenderList:_.a},data:function(){return{information:footer.e,account:footer.a,store:footer.g}}},A=Object(x.a)(H,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"ps-footer ps-footer--9"},[e("div",{staticClass:"container"},[e("footer-top"),t._v(" "),e("div",{staticClass:"ps-footer__middle"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-7"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6 col-md-4"},[e("footer-address")],1),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-8"},[e("footer-contact")],1)])]),t._v(" "),e("div",{staticClass:"col-12 col-md-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 col-sm-4"},[e("div",{staticClass:"ps-footer--block"},[e("h5",{staticClass:"ps-block__title"},[t._v(t._s(t.information.title))]),t._v(" "),e("render-list",{attrs:{list:t.information.items,className:"ps-block__list"}})],1)]),t._v(" "),e("div",{staticClass:"col-6 col-sm-4"},[e("div",{staticClass:"ps-footer--block"},[e("h5",{staticClass:"ps-block__title"},[t._v(t._s(t.account.title))]),t._v(" "),e("render-list",{attrs:{list:t.account.items,className:"ps-block__list"}})],1)]),t._v(" "),e("div",{staticClass:"col-6 col-sm-4"},[e("div",{staticClass:"ps-footer--block"},[e("h5",{staticClass:"ps-block__title"},[t._v(t._s(t.store.title))]),t._v(" "),e("render-list",{attrs:{list:t.store.items,className:"ps-block__list"}})],1)])])])])]),t._v(" "),e("footer-bottom")],1)])}),[],!1,null,null,null).exports,B=n(635),T=n(717),R=n(718),$=n(701),F={components:{FormSubscribe:n(630).a},methods:{handleSubscribe:function(t){console.log("email",t);this.$store.commit("app/setMessageNotify",{message:"Thank you for you subscribe.",icon:"icon-shield-check"}),this.$store.commit("app/setDialogNotify",!0)}}},V=Object(x.a)(F,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-section--newsletter ps-section--newsletter-full",staticStyle:{"background-image":"url('/img/bg-newsletter.jpg')"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-section__content"},[e("h3",{staticClass:"ps-section__title"},[t._v("Join our newsletter and get $20 discount for your first order")]),t._v(" "),e("form-subscribe",{on:{handleSubscribe:t.handleSubscribe}})],1)])])}),[],!1,null,null,null).exports,G=n(702),J={layout:"home-default",components:{HeaderV9:j,HeaderMobile:L,FooterV7:A,SectionBanner:B.a,MaskPromo:T.a,LatestReviewAvatar:R.a,ChooseStyleMask:$.a,NewsletterFull:V,BannerSingle:G.a},data:function(){return{promoReverse:{title:"The best quality <br>masks at the best price",image:"/img/promotion/home9-mask.png",btnGroup:[{icon:"/img/icon/bacterial.svg",text:"Up to 5 users simultaneously"},{icon:"/img/icon/ribbon.svg",text:"Has HEALTH certificate"}],shop:{text:"Shop now",class:"bg-warning",link:"/shop"}},promoMask:{title:"Effective & reliable <br>protection for your family",desc:"Only this week 30% to 50% cheaper! <br/>Choose a color that really matches your personality",image:"/img/promotion/goby-unsplash.jpg",shop:{text:"About",class:"bg-warning",link:"/shop"},class:"bg-white"},productChoose:[],banner:{title:"Best quality masks <br />for your daily life",desc:"Now with special price -30%",button:[{icon:"/img/icon/bacterial.svg",text:"Anti-Bacterial"},{icon:"/img/icon/virus.svg",text:"Anti-Virus"}],img:"/img/promotion/slide9.jpg",shop:{text:"Select mask for you",class:"bg-warning",link:"/shop"},group:[{icon:"/img/icon/certificate-1.png",text:"Health Certificate 2000 - <br />professional care"},{icon:"/img/icon/bacteria-1.png",text:"Anti-bacterial<br />protection"},{icon:"/img/icon/anti-virus.png",text:"Anti-bacterial<br />protection"}]}}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("app/setLoading",!0),"id=38&id=39&id=40",e.next=4,Object(m.getListIdProduct)("id=38&id=39&id=40");case 4:t.productChoose=e.sent,t.$store.commit("app/setLoading",!1);case 6:case"end":return e.stop()}}),e)})))()}},Y=(n(826),Object(x.a)(J,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"ps-page"},[e("header-v9"),t._v(" "),e("header-mobile"),t._v(" "),e("div",{staticClass:"ps-home ps-home--9"},[e("div",{staticClass:"ps-home__content"},[e("banner-single",{attrs:{banner:t.banner}}),t._v(" "),e("mask-promo",{attrs:{reverse:!0,item:t.promoReverse}}),t._v(" "),e("mask-promo",{attrs:{item:t.promoMask}}),t._v(" "),e("latest-review-avatar"),t._v(" "),e("choose-style-mask",{attrs:{products:t.productChoose,bgImage:"/img/rounds.png"}}),t._v(" "),e("newsletter-full")],1)]),t._v(" "),e("footer-v7")],1)}),[],!1,null,null,null));e.default=Y.exports}}]);