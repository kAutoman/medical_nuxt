(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{629:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return v}));var r=n(7),o=(n(26),n(11));function c(t){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="posts",e&&(n+="?".concat(Object(o.c)(e))),t.next=4,o.b.get("".concat(o.a,"/").concat(n)).then((function(t){return t.data})).catch((function(t){return console.log(JSON.stringify(t)),null}));case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return _.apply(this,arguments)}function _(){return(_=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.get("".concat(o.a,"/posts/").concat(e)).then((function(t){return t.data})).catch((function(t){return{error:JSON.stringify(t)}}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="post-categories",e&&(n+="?".concat(Object(o.c)(e))),t.next=4,o.b.get("".concat(o.a,"/").concat(n)).then((function(t){return t.data})).catch((function(t){return console.log(JSON.stringify(t)),null}));case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},631:function(t,e,n){"use strict";n(19);var r=n(11),o=n(0),c=n.n(o),l={props:{item:{type:Object,default:function(){}}},data:function(){return{baseDomain:r.a}},computed:{createdAt:function(){return c()(this.item.created_at).format("MMM DD, YYYY")}}},d=n(4),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return t.item?e("div",{staticClass:"ps-blog--latset"},[e("div",{staticClass:"ps-blog__thumbnail"},[t.item.thumbnail?e("nuxt-link",{attrs:{to:"/blog/post-detail-1/".concat(t.item.id)}},[e("img",{attrs:{src:t.baseDomain+t.item.thumbnail.url,alt:"alt"}})]):t._e(),t._v(" "),e("div",{staticClass:"ps-blog__badge"},t._l(t.item.post_categories,(function(n){return e("span",{key:n.id,staticClass:"ps-badge__item"},[t._v(t._s(n.name))])})),0)],1),t._v(" "),e("div",{staticClass:"ps-blog__content"},[e("div",{staticClass:"ps-blog__meta"},[e("span",{staticClass:"ps-blog__date"},[t._v(t._s(t.createdAt))]),e("a",{staticClass:"ps-blog__author",attrs:{href:"#"}},[t._v("Alfredo Austin")])]),t._v(" "),e("nuxt-link",{staticClass:"ps-blog__title",attrs:{to:"/blog/post-detail-1/".concat(t.item.id)}},[t._v(t._s(t.item.name))]),t._v(" "),t.item.short_description?e("p",{staticClass:"ps-blog__desc"},[t._v(t._s(t.item.short_description))]):t._e()],1)]):t._e()}),[],!1,null,null,null);e.a=component.exports},632:function(t,e,n){"use strict";n(8);var r={props:{banner:{type:Object,default:function(){}},reverse:{type:Boolean,default:!1}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.banner?e("div",{staticClass:"ps-banner",style:{backgroundColor:t.banner.bgColor}},[t.banner.imgbg?e("img",{class:["ps-banner__imagebg",t.banner.imgbg],attrs:{src:t.banner.img,alt:"alt"}}):t._e(),t._v(" "),e("div",{class:[t.banner.noFull?"container-no-round":"container container-initial"]},[e("div",{class:["ps-banner__block",t.reverse?"row-reverse":""]},[e("div",{staticClass:"ps-banner__content"},[t.banner.baged?e("p",{staticClass:"ps-banner__baged"},[e("strong",[t._v(t._s(t.banner.baged))])]):t._e(),t._v(" "),e("h2",{class:["ps-banner__title",t.banner.textColor&&t.banner.textColor],domProps:{innerHTML:t._s(t.banner.title)}}),t._v(" "),e("div",{class:["ps-banner__desc",t.banner.textColor&&t.banner.textColor],domProps:{innerHTML:t._s(t.banner.desc)}}),t._v(" "),t.banner.price?e("div",{staticClass:"ps-banner__price"},[e("span",[t._v(t._s(t.banner.price.ins))]),t._v(" "),e("del",[t._v(t._s(t.banner.price.del))])]):t._e(),t._v(" "),t.banner.button?e("div",{staticClass:"ps-banner__btn-group"},t._l(t.banner.button,(function(n,r){return e("div",{key:r,class:["ps-banner__btn",t.banner.buttonColor&&t.banner.buttonColor]},[e("img",{style:t.banner.filter&&t.banner.filter,attrs:{src:n.icon,alt:"alt"}}),t._v(t._s(n.text)+"\n                    ")])})),0):t._e(),t._v(" "),t.banner.shop||t.banner.cart?e("a",{class:["ps-banner__shop",t.banner.shop,t.banner.cart],attrs:{href:"#"}},[t._v(t._s(t.banner.textShop?t.banner.textShop:t.banner.shop?"Shop now":"Add to cart"))]):t._e(),t._v(" "),t.banner.percent&&!t.banner.percent.thumbnail?e("div",{class:["ps-banner__persen",t.banner.percent.extraClass],domProps:{innerHTML:t._s(t.banner.percent.text)}}):t._e()]),t._v(" "),e("div",{class:["ps-banner__thumnail",{"ps-banner__fluid":!t.banner.round}]},[t.banner.round?e("img",{staticClass:"ps-banner__round",attrs:{src:t.banner.round,alt:"alt"}}):t._e(),t._v(" "),!t.banner.imgbg&&t.banner.img?e("img",{staticClass:"ps-banner__image",attrs:{src:t.banner.img,alt:"alt"}}):t._e(),t._v(" "),t.banner.percent&&t.banner.percent.thumbnail?e("div",{class:["ps-banner__persen",t.banner.percent.extraClass]},[t._v("\n                "+t._s(t.banner.percent.text)+"\n                ")]):t._e()])])])]):t._e()}),[],!1,null,null,null);e.a=component.exports},635:function(t,e,n){"use strict";n(10),n(9),n(8),n(13),n(14);var r=n(1),o=n(12),c=n(632);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={props:{listData:{type:Array,default:function(){return[]}},sectionClass:{type:String,default:""},round:{type:Boolean,default:!1}},components:{Banner:c.a},data:function(){return{swiperOption:{slidesPerView:1,loop:!0,effect:"fade",autoplay:{delay:15e3,disableOnInteraction:!1},navigation:{prevEl:".swiper-prev-banner",nextEl:".swiper-next-banner"},pagination:{el:".pagination-banner",clickable:!0}},loadingBanner:!0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({loading:function(t){return t.app.loading}})),mounted:function(){var t=this;setTimeout((function(){t.loadingBanner=!1}),1e3)}},_=d,v=n(4),component=Object(v.a)(_,(function(){var t=this,e=t._self._c;return e("section",{class:["ps-section--banner",t.sectionClass]},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.loadingBanner,expression:"loadingBanner"}],staticClass:"ps-section__overlay"},[e("div",{staticClass:"ps-section__loading"})]),t._v(" "),e("div",{staticClass:"ps-swiper"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:bannerSwiper",value:t.swiperOption,expression:"swiperOption",arg:"bannerSwiper"}],staticClass:"swiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.listData,(function(n,r){return e("div",{key:r,staticClass:"swiper-slide"},[t.round?e("div",{staticClass:"ps-banner--round"},[e("banner",{attrs:{banner:n}})],1):e("banner",{attrs:{banner:n}})],1)})),0)]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"swiper-pagination pagination-banner"})])])}),[function(){var t=this._self._c;return t("div",{staticClass:"ps-swiper__nav"},[t("div",{staticClass:"swiper-button-prev swiper-prev-banner"}),this._v(" "),t("div",{staticClass:"swiper-button-next swiper-next-banner"})])}],!1,null,null,null);e.a=component.exports},643:function(t,e,n){"use strict";var r=n(624),o=(n(10),n(9),n(8),n(13),n(14),n(1)),c=n(631),l=n(12);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var _={props:{title:{type:String,default:"From the blog"},dataList:{type:Array,default:function(){return[]}}},components:{PostLatset:c.a},data:function(){return{swiperOption:{slidesPerView:1,slidesPerGroup:1,spaceBetween:0,loop:!1,autoplay:{delay:15e3,disableOnInteraction:!1},breakpoints:{480:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:3}}}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({loading:function(t){return t.app.loading}}))},v=_,m=n(4),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-section--blog"},[e("div",{staticClass:"container"},[e("h3",{staticClass:"ps-section__title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"ps-section__carousel"},[e("div",{staticClass:"ps-swiper"},[e("div",{directives:[{name:"swiper",rawName:"v-swiper:latestBlogSwiper",value:t.swiperOption,expression:"swiperOption",arg:"latestBlogSwiper"}],staticClass:"swiper"},[t.loading?e("div",{staticClass:"swiper-wrapper"},t._l(3,(function(t){return e("div",{key:t,staticClass:"swiper-slide ps-preloader"},[e(r.a,{attrs:{type:"image, article"}})],1)})),0):e("div",{staticClass:"swiper-wrapper"},t._l(t.dataList,(function(t,n){return e("div",{key:n,staticClass:"swiper-slide"},[e("post-latset",{attrs:{item:t}})],1)})),0)])])])])])}),[],!1,null,null,null);e.a=component.exports},683:function(t,e,n){"use strict";n(8);var r={props:{banner:{type:Object,default:function(){}}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-home__banner"},[t.banner?e("div",{staticClass:"ps-banner",style:{backgroundColor:t.banner.bgColor}},[e("img",{staticClass:"ps-banner__overlay",attrs:{src:t.banner.img,alt:"alt"}}),t._v(" "),e("div",{staticClass:"ps-banner__block"},[e("div",{staticClass:"ps-banner__content"},[e("h2",{class:["ps-banner__title",t.banner.textColor&&t.banner.textColor],domProps:{innerHTML:t._s(t.banner.title)}}),t._v(" "),t.banner.button?e("div",{staticClass:"ps-banner__btn-group"},t._l(t.banner.button,(function(n,r){return e("div",{key:r,class:["ps-banner__btn",t.banner.buttonColor&&t.banner.buttonColor]},[e("img",{style:t.banner.filter&&t.banner.filter,attrs:{src:n.icon,alt:"alt"}}),t._v(t._s(n.text)+"\n                    ")])})),0):t._e(),t._v(" "),t.banner.price?e("div",{staticClass:"ps-banner__price"},[e("span",[t._v(t._s(t.banner.price.ins))]),t._v(" "),e("del",[t._v(t._s(t.banner.price.del))])]):t._e(),t._v(" "),e("a",{class:["ps-banner__shop",t.banner.shop],attrs:{href:"#"}},[t._v(t._s(t.banner.textShop))])]),t._v(" "),t.banner.percent?e("div",{staticClass:"ps-banner__thumnail"},[e("div",{class:["ps-banner__persen",t.banner.percent.extraClass]},[t._v("\n                "+t._s(t.banner.percent.text)+"\n                ")])]):t._e()])]):t._e()])}),[],!1,null,null,null);e.a=component.exports},694:function(t,e,n){"use strict";n(10),n(9),n(8),n(13),n(14);var r=n(7),o=n(1),c=(n(26),n(111)),menu=n(85),l=n(110),d=n(183),_=n(185),v=n(49),m=n(187),h=n(186),f=n(12);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={components:{Notification:c.a,RenderList:l.a,LanguageCurrency:d.a,FormSearch:_.a,LoginModal:m.a,CartMini:h.a},data:function(){return{mainMenu:menu.a,product:null,sticky:!1,showNavigation:!1}},computed:w(w({},Object(f.b)({cartItems:function(t){return t.cart.cartItems},wishlistItems:function(t){return t.wishlist.items},appDrawer:function(t){return t.app.appDrawer}})),{},{productCartQuantity:function(){var t=0;return this.cartItems.forEach((function(element){t+=element.quantity})),t}}),created:function(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.getProductById)(5);case 2:t.product=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{handleScroll:function(){var t=window.scrollY;this.sticky=t>200},handleOpenDrawer:function(t){this.$store.commit("app/setCurrentDrawerContent",t),this.$store.commit("app/setAppDrawer",!this.appDrawer)},handleOpenMenu:function(){this.showNavigation=!this.showNavigation}}},O=n(4),component=Object(O.a)(y,(function(){var t=this,e=t._self._c;return e("header",{class:["ps-header ps-header--13",{"ps-header--sticky":t.sticky}]},[e("notification"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"ps-header__middle"},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-logo"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo-green.png",alt:""}}),t._v(" "),e("img",{staticClass:"sticky-logo",attrs:{src:"/img/logo-green.png",alt:""}})])],1),t._v(" "),e("a",{staticClass:"ps-menu--sticky",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleOpenMenu()}}},[e("i",{staticClass:"fa fa-bars"})]),t._v(" "),e("div",{staticClass:"ps-header__right"},[e("ul",{staticClass:"ps-header__icons"},[e("li",{},[e("a",{staticClass:"active ps-header__item open-search",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleOpenDrawer("search")}}},[e("i",{staticClass:"icon-magnifier"})])]),t._v(" "),e("li",{staticClass:"ps-header__user"},[t._m(1),t._v(" "),e("login-modal")],1),t._v(" "),e("li",{},[e("nuxt-link",{staticClass:"ps-header__item",attrs:{to:"/shop/wishlist"}},[e("i",{staticClass:"fa fa-heart-o"}),t._v(" "),e("span",{staticClass:"badge"},[t._v(t._s(t.wishlistItems.length))])])],1),t._v(" "),e("li",{staticClass:"ps-header__cart"},[e("a",{staticClass:"active ps-header__item",attrs:{href:"#"}},[e("i",{staticClass:"icon-cart-empty"}),t._v(" "),e("span",{staticClass:"badge"},[t._v(t._s(t.productCartQuantity))])]),t._v(" "),e("cart-mini")],1)]),t._v(" "),e("language-currency"),t._v(" "),e("form-search")],1)])]),t._v(" "),e("div",{class:["ps-navigation",{active:t.showNavigation}]},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-navigation__left"},[e("nav",{staticClass:"ps-main-menu"},[e("render-list",{attrs:{list:t.mainMenu,className:"menu",product:t.product}})],1)]),t._v(" "),t._m(2)])])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-header__top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-header__text"},[t._v("Need help? "),e("strong",[t._v("0020 500 - MYMEDI - 000")])])])])},function(){var t=this._self._c;return t("a",{staticClass:"active ps-header__item",attrs:{href:"#"}},[t("i",{staticClass:"icon-user"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-navigation__right"},[t._v("Need help? "),e("strong",[t._v("0020 500 - MYMEDI - 000")])])}],!1,null,null,null);e.a=component.exports},695:function(t,e,n){"use strict";n(10),n(9),n(8),n(13),n(14);var r=n(1),o=n(12);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{Notification:n(111).a},data:function(){return{sticky:!1}},computed:l(l({},Object(o.b)({appDrawer:function(t){return t.app.appDrawer},cartItems:function(t){return t.cart.cartItems}})),{},{productCartQuantity:function(){var t=0;return this.cartItems.forEach((function(element){t+=element.quantity})),t}}),created:function(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.scrollY;this.sticky=t>700},handleOpenDrawer:function(t){this.$store.commit("app/setCurrentDrawerContent",t),this.$store.commit("app/setAppDrawer",!this.appDrawer)}}},_=n(4),component=Object(_.a)(d,(function(){var t=this,e=t._self._c;return e("header",{class:["ps-header ps-header--13 ps-header--mobile",{"ps-header--sticky":t.sticky}]},[e("notification"),t._v(" "),e("div",{staticClass:"ps-header__middle"},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-header__left"},[e("ul",{staticClass:"ps-header__icons"},[e("li",[e("a",{staticClass:"ps-header__item open-search",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleOpenDrawer("search")}}},[e("i",{staticClass:"fa fa-search"})])])])]),t._v(" "),e("div",{staticClass:"ps-logo"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo-green.png",alt:""}})])],1),t._v(" "),e("div",{staticClass:"ps-header__right"},[e("ul",{staticClass:"ps-header__icons"},[e("li",{staticClass:"ps-header__cart"},[e("nuxt-link",{staticClass:"active ps-header__item",attrs:{to:"/shop/shopping-cart"}},[e("i",{staticClass:"icon-cart-empty"}),t._v(" "),e("span",{staticClass:"badge"},[t._v(t._s(t.productCartQuantity))])])],1)])])])])],1)}),[],!1,null,null,null);e.a=component.exports},703:function(t,e,n){"use strict";var r=n(191),o=n(188),c=n(192),l=n(189),footer=n(113),d=n(110),_={components:{FooterBottom:r.a,FooterTop:o.a,FooterContact:c.a,FooterAddress:l.a,RenderList:d.a},data:function(){return{information:footer.e,account:footer.a,store:footer.g}}},v=n(4),component=Object(v.a)(_,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"ps-footer ps-footer--13"},[e("div",{staticClass:"container"},[e("footer-top"),t._v(" "),e("div",{staticClass:"ps-footer__middle"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-7"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6 col-md-4"},[e("footer-address")],1),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-8"},[e("footer-contact")],1)])]),t._v(" "),e("div",{staticClass:"col-12 col-md-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 col-sm-4"},[e("div",{staticClass:"ps-footer--block"},[e("h5",{staticClass:"ps-block__title"},[t._v(t._s(t.information.title))]),t._v(" "),e("render-list",{attrs:{list:t.information.items,className:"ps-block__list"}})],1)]),t._v(" "),e("div",{staticClass:"col-6 col-sm-4"},[e("div",{staticClass:"ps-footer--block"},[e("h5",{staticClass:"ps-block__title"},[t._v(t._s(t.account.title))]),t._v(" "),e("render-list",{attrs:{list:t.account.items,className:"ps-block__list"}})],1)]),t._v(" "),e("div",{staticClass:"col-6 col-sm-4"},[e("div",{staticClass:"ps-footer--block"},[e("h5",{staticClass:"ps-block__title"},[t._v(t._s(t.store.title))]),t._v(" "),e("render-list",{attrs:{list:t.store.items,className:"ps-block__list"}})],1)])])])])]),t._v(" "),e("footer-bottom")],1),t._v(" "),e("div",{staticClass:"ps-promo ps-footer--banner"},[e("div",{staticClass:"ps-promo__item"},[e("img",{staticClass:"ps-promo__banner",attrs:{src:"/img/promotion/footer-banner.jpg",alt:""}}),t._v(" "),e("div",{staticClass:"ps-promo__content"},[e("h4",{staticClass:"ps-promo__name"},[t._v("Magic Mind")]),t._v(" "),e("p",{staticClass:"ps-promo__desc"},[t._v("New delivery!")]),t._v(" "),e("nuxt-link",{staticClass:"ps-promo__btn btn-green",attrs:{to:"/shop"}},[t._v("Shop now")])],1)])])])}),[],!1,null,null,null);e.a=component.exports},720:function(t,e,n){"use strict";var r={components:{FormSubscribe:n(630).a},methods:{handleSubscribe:function(t){console.log("email",t);this.$store.commit("app/setMessageNotify",{message:"Thank you for you subscribe.",icon:"icon-shield-check"}),this.$store.commit("app/setDialogNotify",!0)}}},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"ps-section--newsletter ps-section--newsletter-inline"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),e("div",{staticClass:"col-12 col-lg-5"},[e("div",{staticClass:"ps-section__content"},[e("form-subscribe",{on:{handleSubscribe:t.handleSubscribe}})],1)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"col-12 col-lg-7"},[t("h3",{staticClass:"ps-section__title"},[this._v("Join our newsletter and get $20 discount for your first order")])])}],!1,null,null,null);e.a=component.exports},726:function(t,e,n){"use strict";var r=n(4),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-delivery ps-delivery--info",staticStyle:{"background-image":"url('/img/promotion/banner-delivery-3.jpg')"}},[e("div",{staticClass:"ps-delivery__content"},[t._m(0),t._v(" "),e("nuxt-link",{staticClass:"ps-delivery__more",attrs:{to:"/shop"}},[t._v("More")])],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-delivery__text"},[e("i",{staticClass:"icon-shield-check"}),e("span",[e("strong",[t._v("100% Secure delivery ")]),t._v("without contacting the\n                courier")])])}],!1,null,null,null);e.a=component.exports},734:function(t,e,n){var content=n(807);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("30fb623b",content,!0,{sourceMap:!1})},806:function(t,e,n){"use strict";n(734)},807:function(t,e,n){var r=n(21)(!1);r.push([t.i,":root{--space-unit:1em;--space-xxxxs:calc(var(--space-unit)*0.09);--space-xxxs:calc(var(--space-unit)*0.146);--space-xxs:calc(var(--space-unit)*0.236);--space-xs:calc(var(--space-unit)*0.382);--space-sm:calc(var(--space-unit)*0.618);--space-md:calc(var(--space-unit)*1);--space-lg:calc(var(--space-unit)*1.618);--space-xl:calc(var(--space-unit)*2.618);--space-xxl:calc(var(--space-unit)*4.236);--space-xxxl:calc(var(--space-unit)*6.854);--space-xxxxl:calc(var(--space-unit)*11.08);--component-padding:var(--space-xxxl)}.ps-home--13 .ps-branch{margin-top:45px}.ps-home--13 .ps-branch .ps-branch__title{display:block;color:#333}.ps-home--13 .ps-section--blog{padding:80px 0}.ps-home--13 .ps-section--blog .ps-section__title{color:#333}.ps-home--13 .ps-section--blog .ps-blog--latset .ps-blog__title{margin-bottom:10px;color:#333}.ps-home--13 .ps-section--blog .ps-blog--latset .ps-blog__author,.ps-home--13 .ps-section--blog .ps-blog--latset .ps-blog__date{color:#333}.ps-home--13 .ps-section--blog .ps-blog--latset .ps-blog__meta{margin-bottom:0}.ps-home--13 .ps-section--blog .ps-blog--latset .ps-blog__content{display:flex;flex-direction:column-reverse}.ps-home--13 .ps-section--blog .ps-blog--latset .ps-blog__badge .ps-badge__item{background-color:#333}.ps-home--13 .ps-promo{padding-bottom:35px;padding-top:30px}.ps-home--13 .ps-promo.ps-not-padding{padding-bottom:80px;padding-top:0;margin-left:-15px;margin-right:-15px}.ps-home--13 .ps-promo.ps-not-padding .ps-promo__badge{background-color:#00a198;color:#fff}.ps-home--13 .ps-promo.ps-not-padding .ps-promo__del{color:#333}.ps-home--13 .ps-promo.ps-not-padding .ps-promo__banner{border-radius:0}.ps-home--13 .ps-promo .ps-promo__title{color:#333}.ps-home--13 .ps-promo .ps-promo__badge{background-color:#fff;color:#333}.ps-home--13 .ps-product--standard .ps-product__del,.ps-home--13 .ps-product--standard .ps-product__price,.ps-home--13 .ps-product--standard .ps-product__title,.ps-home--13 .ps-section--latest .ps-section__title{color:#333}.ps-home--13 .ps-product--standard .ps-product__price.sale{color:#fd8d27}.ps-home--13 .ps-swiper__nav div:hover{background-color:#00605a!important}.ps-home--13 .swiper-pagination .swiper-pagination-bullet-active{background-color:#333;border-color:#333}.ps-home--13 .ps-section--banner .ps-banner__image{display:none}.ps-home--13 .ps-section--banner .ps-banner__imagebg{position:absolute;left:0;top:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.ps-home--13 .ps-section--banner .ps-banner__price del{color:#333}.ps-home--13 .ps-section--banner .ps-banner__btn{color:#fff}.ps-home--13 .ps-section--banner .ps-banner__btn-group,.ps-home--13 .ps-section--banner .ps-banner__desc{z-index:10;position:relative}.ps-home--13 .ps-section--banner .ps-banner__btn{margin-bottom:10px;font-size:16px}.ps-home--13 .ps-section--banner .ps-banner__btn img{width:24px}.ps-home--13 .ps-block__image .ps-banner__btn,.ps-home--13 .ps-block__image .ps-banner__title{color:#fff}.ps-home--13 .ps-block__image .ps-banner__shop.bg-white{color:#333}.ps-home--13 .ps-block__image .ps-banner{min-height:550px!important}.ps-home--13 .ps-delivery{margin:30px 0 50px}.ps-home--13 .ps-section--latest{margin-bottom:50px}.ps-home--13 .ps-home--block{padding:30px 0 50px}@media(min-width:768px){.ps-home--13 .ps-promo.ps-not-padding{margin-left:0;margin-right:0;padding-top:30px}.ps-home--13 .ps-promo.ps-not-padding .ps-promo__banner{border-radius:4px}.ps-home--13 .ps-section--banner .ps-banner{height:auto}.ps-home--13 .ps-section--banner .ps-banner__content{padding:80px 0}.ps-home--13 .ps-section--banner .ps-banner__persen{top:50px;bottom:auto;right:10%}.ps-home--13 .ps-section--banner .ps-banner__btn-group{padding:13px 0 10px}.ps-home--13 .ps-section--banner .ps-banner__btn{font-size:18px}.ps-home--13 .ps-section--banner .ps-center{top:50%;right:50%;transform:translate(-40%,-87%)}}@media(min-width:1280px){.ps-home--13 .ps-section--banner .ps-banner__content{padding:140px 0}.ps-home--13 .ps-section--banner .ps-banner__persen{right:7%}.ps-home--13 .ps-section--banner .ps-banner__btn-group{padding:43px 0 25px}.ps-home--13 .ps-section--banner .ps-center{right:50%;transform:translate(-30%,-87%)}}",""]),t.exports=r},860:function(t,e,n){"use strict";n.r(e);var r=n(621),o=n(624),c=n(7),l=(n(26),n(694)),d=n(695),_=n(703),v=n(49),m=n(635),h=n(672),f=n(720),C=n(643),w=n(629),y=n(210),O=n(184),x=n(195),k=n(193),j=n(57),P=n(683),S=n(726),D={layout:"home-default",components:{HeaderV13:l.a,HeaderMobile:d.a,FooterV9:_.a,SectionBanner:m.a,NewsletterInline:f.a,BlogLatest:C.a,Branch:y.a,PromoItem:x.a,LatestProductCarousel:k.a,ProductStandard:j.a,BannerOverlay:P.a,DeliveryInfo:S.a},data:function(){return{banners:h.b,latestPost:[],branchs:O.a,promoTop:[{banner:"/img/promotion/banner-home13-4.jpg",title:"Power Effect <br/>Pro Series",btnName:"More",badge:"New",classTitle:"text-dark",btnClass:"btn-green",image:"/img/icon/icon10.png"},{banner:"/img/promotion/banner-home13-5.jpg",title:"Eczema <br/>Treatment CBD <br/>Ointement",btnName:"Shop now",sale:"-30%",classTitle:"text-white",saleColor:"text-white",btnClass:"btn-green"},{banner:"/img/promotion/banner-home13-6.jpg",title:"Cashew Butter <br/>500MG",btnName:"Buy now",price:"$15.99",del:"$29.99",priceColor:"text-warning",classTitle:"text-dark",btnClass:"btn-green"}],latestProduct:[],productSkin:[],productMedicine:[],bannerContent:h.d,bannerBottom:h.c}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("app/setLoading",!0),e.next=3,Object(w.c)();case 3:return t.latestPost=e.sent,n={_limit:10,_start:44},e.next=7,Object(v.e)(n);case 7:return t.latestProduct=e.sent,"id=54&id=55&id=56&id=57&id=50&id=58",e.next=11,Object(v.getListIdProduct)("id=54&id=55&id=56&id=57&id=50&id=58");case 11:return t.productSkin=e.sent,"id=61&id=46&id=49&id=52&id=59&id=60",e.next=15,Object(v.getListIdProduct)("id=61&id=46&id=49&id=52&id=59&id=60");case 15:t.productMedicine=e.sent,t.$store.commit("app/setLoading",!1);case 17:case"end":return e.stop()}}),e)})))()}},M=(n(806),n(4)),component=Object(M.a)(D,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"ps-page"},[e("header-v13"),t._v(" "),e("header-mobile"),t._v(" "),e("div",{staticClass:"ps-home ps-home--13"},[e("section-banner",{attrs:{listData:t.banners}}),t._v(" "),e("div",{staticClass:"ps-home__content"},[e("div",{staticClass:"ps-promo ps-not-padding"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.promoTop,(function(t,n){return e("div",{key:n,staticClass:"col-12 col-sm-4"},[e("promo-item",{attrs:{item:t}})],1)})),0)])]),t._v(" "),e("latest-product-carousel",{attrs:{title:"Latest products",dataList:t.latestProduct}}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"ps-home--block"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"ps-block__image"},[e("banner-overlay",{attrs:{banner:t.bannerContent[0]}})],1)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-8"},[e("div",{staticClass:"ps-block__product"},[t.productSkin&&t.productSkin.length?t._e():e("div",{staticClass:"row"},t._l(6,(function(t){return e("div",{key:t,staticClass:"col-6 col-lg-4"},[e(o.a,{attrs:{type:"image, article"}})],1)})),0),t._v(" "),e("div",{staticClass:"row m-0"},t._l(t.productSkin,(function(t){return e("div",{key:t.id,staticClass:"col-6 col-lg-4 p-0"},[e("product-standard",{attrs:{product:t}})],1)})),0)])])])]),t._v(" "),e("delivery-info"),t._v(" "),e("div",{staticClass:"ps-home--block"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-8"},[e("div",{staticClass:"ps-block__product"},[t.productMedicine&&t.productMedicine.length?t._e():e("div",{staticClass:"row"},t._l(6,(function(t){return e("div",{key:t,staticClass:"col-6 col-lg-4"},[e(o.a,{attrs:{type:"image, article"}})],1)})),0),t._v(" "),e("div",{staticClass:"row m-0"},t._l(t.productMedicine,(function(t){return e("div",{key:t.id,staticClass:"col-6 col-lg-4 p-0"},[e("product-standard",{attrs:{product:t}})],1)})),0)])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-4"},[e("div",{staticClass:"ps-block__image"},[e("banner-overlay",{attrs:{banner:t.bannerContent[1]}})],1)])])]),t._v(" "),e("div",{staticClass:"ps-promo"},[e("h3",{staticClass:"ps-promo__title"},[t._v("Latest offers")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.bannerBottom,(function(t,n){return e("div",{key:n,staticClass:"col-12 col-sm-4"},[e("promo-item",{attrs:{item:t}})],1)})),0)]),t._v(" "),e("branch",{attrs:{branchs:t.branchs}})],1),t._v(" "),e("blog-latest",{attrs:{dataList:t.latestPost}}),t._v(" "),e("newsletter-inline")],1)],1),t._v(" "),e("footer-v9")],1)}),[],!1,null,null,null);e.default=component.exports}}]);