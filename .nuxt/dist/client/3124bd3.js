(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{633:function(t,e,r){"use strict";var n=r(190),c=r(183),menu=r(85),o=r(110),l={components:{SocialIcon:n.a,LanguageCurrency:c.a,RenderList:o.a},data:function(){return{menu:menu.f}}},d=r(4),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"ps-top__right"},[e("language-currency"),t._v(" "),e("div",{staticClass:"ps-top__social"},[e("social-icon")],1),t._v(" "),e("render-list",{attrs:{list:t.menu,className:"menu-top"}}),t._v(" "),t._m(1)],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-header__text"},[e("strong",[t._v("100% Secure delivery ")]),t._v("without contacting the courier ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"ps-header__text"},[t._v("Need help? "),e("strong",[t._v("0020 500 - MYMEDI - 000")])])}],!1,null,null,null);e.a=component.exports},693:function(t,e,r){"use strict";var n=r(191),c=r(188),o=r(192),l=r(189),footer=r(113),d=r(110),v={components:{FooterBottom:n.a,FooterTop:c.a,FooterContact:o.a,FooterAddress:l.a,RenderList:d.a},data:function(){return{information:footer.e,account:footer.a,store:footer.g}}},h=r(4),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"ps-footer ps-footer--12"},[e("div",{staticClass:"container"},[e("footer-top"),t._v(" "),e("div",{staticClass:"ps-footer__middle"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-7"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-6 col-md-4"},[e("footer-address")],1),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-8"},[e("footer-contact")],1)])]),t._v(" "),e("div",{staticClass:"col-12 col-md-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 col-sm-4"},[e("div",{staticClass:"ps-footer--block"},[e("h5",{staticClass:"ps-block__title"},[t._v(t._s(t.information.title))]),t._v(" "),e("render-list",{attrs:{list:t.information.items,className:"ps-block__list"}})],1)]),t._v(" "),e("div",{staticClass:"col-6 col-sm-4"},[e("div",{staticClass:"ps-footer--block"},[e("h5",{staticClass:"ps-block__title"},[t._v(t._s(t.account.title))]),t._v(" "),e("render-list",{attrs:{list:t.account.items,className:"ps-block__list"}})],1)]),t._v(" "),e("div",{staticClass:"col-6 col-sm-4"},[e("div",{staticClass:"ps-footer--block"},[e("h5",{staticClass:"ps-block__title"},[t._v(t._s(t.store.title))]),t._v(" "),e("render-list",{attrs:{list:t.store.items,className:"ps-block__list"}})],1)])])])])]),t._v(" "),e("footer-bottom")],1)])}),[],!1,null,null,null);e.a=component.exports},704:function(t,e,r){"use strict";r(10),r(9),r(8),r(13),r(14);var n=r(7),c=r(1),o=(r(26),r(111)),menu=r(85),l=r(110),d=r(183),v=r(185),h=r(49),_=r(187),f=r(186),m=r(12),C=r(633);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={components:{Notification:o.a,RenderList:l.a,LanguageCurrency:d.a,FormSearch:v.a,LoginModal:_.a,CartMini:f.a,HeaderTop:C.a},data:function(){return{mainMenu:menu.b,product:null,sticky:!1,showNavigation:!1}},computed:w(w({},Object(m.b)({cartItems:function(t){return t.cart.cartItems},wishlistItems:function(t){return t.wishlist.items},appDrawer:function(t){return t.app.appDrawer}})),{},{productCartQuantity:function(){var t=0;return this.cartItems.forEach((function(element){t+=element.quantity})),t}}),created:function(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.getProductById)(5);case 2:t.product=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{handleScroll:function(){var t=window.scrollY;this.sticky=t>200},handleOpenDrawer:function(t){this.$store.commit("app/setCurrentDrawerContent",t),this.$store.commit("app/setAppDrawer",!this.appDrawer)},handleOpenMenu:function(){this.showNavigation=!this.showNavigation}}},k=r(4),component=Object(k.a)(O,(function(){var t=this,e=t._self._c;return e("header",{class:["ps-header ps-header--11 ps-header--14",{"ps-header--sticky":t.sticky}]},[e("div",{staticClass:"ps-header__middle"},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-logo"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo-dark.png",alt:""}}),t._v(" "),e("img",{staticClass:"sticky-logo",attrs:{src:"/img/logo-dark.png",alt:""}})])],1),t._v(" "),e("div",{staticClass:"ps-header__right"},[e("ul",{staticClass:"ps-header__icons"},[e("li",{},[e("a",{staticClass:"active ps-header__item open-search",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleOpenDrawer("search")}}},[e("i",{staticClass:"icon-magnifier"})])]),t._v(" "),e("li",{staticClass:"ps-header__user"},[t._m(0),t._v(" "),e("login-modal")],1),t._v(" "),e("li",{},[e("nuxt-link",{staticClass:"ps-header__item",attrs:{to:"/shop/wishlist"}},[e("i",{staticClass:"fa fa-heart-o"}),t._v(" "),e("span",{staticClass:"badge"},[t._v(t._s(t.wishlistItems.length))])])],1),t._v(" "),e("li",{staticClass:"ps-header__cart"},[e("a",{staticClass:"active ps-header__item",attrs:{href:"#"}},[e("i",{staticClass:"icon-cart-empty"}),t._v(" "),e("span",{staticClass:"badge"},[t._v(t._s(t.productCartQuantity))])]),t._v(" "),e("cart-mini")],1)]),t._v(" "),e("language-currency"),t._v(" "),e("div",{staticClass:"ps-header__menu"},[e("render-list",{attrs:{list:t.mainMenu,className:"menu"}})],1)],1)])])])}),[function(){var t=this._self._c;return t("a",{staticClass:"active ps-header__item",attrs:{href:"#"}},[t("i",{staticClass:"icon-user"})])}],!1,null,null,null);e.a=component.exports},705:function(t,e,r){"use strict";r(10),r(9),r(8),r(13),r(14);var n=r(1),c=r(12);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={components:{Notification:r(111).a},data:function(){return{sticky:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({appDrawer:function(t){return t.app.appDrawer}})),created:function(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.scrollY;this.sticky=t>700},handleOpenDrawer:function(t){this.$store.commit("app/setCurrentDrawerContent",t),this.$store.commit("app/setAppDrawer",!this.appDrawer)}}},d=l,v=r(4),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("header",{class:["ps-header ps-header--14 ps-header--mobile",{"ps-header--sticky":t.sticky}]},[e("div",{staticClass:"ps-header__middle"},[e("div",{staticClass:"container"},[e("div",{staticClass:"ps-logo"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo-dark.png",alt:""}})])],1),t._v(" "),e("div",{staticClass:"ps-header__right"},[e("ul",{staticClass:"ps-header__icons"},[e("li",[e("a",{staticClass:"ps-header__item open-search",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleOpenDrawer("search")}}},[e("i",{staticClass:"fa fa-search"})])])])])])])])}),[],!1,null,null,null);e.a=component.exports},862:function(t,e,r){"use strict";r.r(e);var n=r(621),c=r(624),o=(r(10),r(9),r(8),r(13),r(14),r(7)),l=r(1),d=(r(26),r(182)),v=r(670),h=r(49),_=r(57),f=r(681),m=r(678),C=r(682),y=r(12),w=r(704),O=r(705),k=r(693);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var P={layout:"home-default",components:{Breadcrumb:d.a,ModulePagination:v.a,ProductStandard:_.a,ShopWrapper:f.a,ShopWidget:m.a,ProductListing:C.a,HeaderV14:w.a,HeaderMobile:O.a,FooterV8:k.a},data:function(){return{breadcrumb:[{url:"/",text:"Home"},{url:"/shop",text:"Shop"},{url:"/shop/grid",extraClass:"active",text:"Diagnosis"}],type:"grid3",products:[],meta:{pageSize:12,pageIndex:1},sortBy:"Latest",productCategory:[],listType:[{icon:"/img/icon/bars-dark.svg",name:"list"},{icon:"/img/icon/grid2-dark.svg",name:"grid2"},{icon:"/img/icon/grid3-dark.svg",name:"grid3"},{icon:"/img/icon/grid4-dark.svg",name:"grid4"}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(y.b)({loading:function(t){return t.app.loading}})),mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.commit("app/setLoading",!0),e.next=3,Object(h.getProductCategory)();case 3:t.productCategory=e.sent,t.getProductList();case 5:case"end":return e.stop()}}),e)})))()},methods:{getProductList:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.meta.pageSize*(t.meta.pageIndex-1),n={_limit:t.meta.pageSize-1,_start:r+44},e.next=4,Object(h.e)(n);case 4:t.products=e.sent,t.$store.commit("app/setLoading",!1);case 6:case"end":return e.stop()}}),e)})))()},handleChangePage:function(t){this.meta.pageIndex=t,this.getProductList()},handleChangeType:function(t){this.type=t},onlySaleProduct:function(t){console.log("val",t)},handleChangeSort:function(t){this.sortBy=t},handleChangePageZise:function(t){this.meta.pageSize=t,this.getProductList()},handleFilter:function(t,e){console.log(t,e)}}},x=P,D=r(4),component=Object(D.a)(x,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"ps-page"},[e("header-v14"),t._v(" "),e("header-mobile"),t._v(" "),e("div",{staticClass:"ps-categogy ps-categogy--dark ps-page--sticky"},[e("div",{staticClass:"container"},[e("breadcrumb",{attrs:{dataList:t.breadcrumb}}),t._v(" "),e("h1",{staticClass:"ps-categogy__name"},[t._v("Face Masks - protective"),e("sup",[t._v("(32)")])]),t._v(" "),e("div",{staticClass:"ps-categogy__content"},[e("div",{staticClass:"row row-reverse"},[e("div",{staticClass:"col-12 col-md-9"},[e("shop-wrapper",{attrs:{type:t.type,pageSize:t.meta.pageSize,sort:t.sortBy,listType:t.listType},on:{handleChangeType:t.handleChangeType,onlySaleProduct:t.onlySaleProduct,handleChangeSort:t.handleChangeSort,handleChangePageZise:t.handleChangePageZise}}),t._v(" "),"list"==t.type?e("div",{staticClass:"ps-categogy--list"},[t.loading?t._l(3,(function(r){return e("div",{key:r,staticClass:"ps-product ps-product--list"},[e("div",{staticClass:"ps-product__content"},[e("div",{staticClass:"ps-product__thumbnail"},[e(c.a,{attrs:{type:"image"}})],1),t._v(" "),e("div",{staticClass:"ps-product__info"},[e(c.a,{attrs:{type:"article"}})],1)]),t._v(" "),e("div",{staticClass:"ps-product__footer"},[e(c.a,{attrs:{type:"article"}})],1)])})):t._l(t.products,(function(t){return e("product-listing",{key:t.id,attrs:{product:t}})}))],2):"grid2"==t.type?e("div",{staticClass:"ps-categogy--grid ps-categogy--detail"},[t.loading?e("div",{staticClass:"row"},t._l(3,(function(t){return e("div",{key:t,staticClass:"col-6 col-md-4"},[e(c.a,{attrs:{type:"image, article"}})],1)})),0):e("div",{staticClass:"row m-0"},[t._l(t.products,(function(t){return e("div",{key:t.id,staticClass:"col-6 col-md-4 p-0"},[e("product-standard",{attrs:{product:t}})],1)})),t._v(" "),e("div",{staticClass:"col-6 col-md-4 p-0"},[e("a",{staticClass:"ps-nextpage",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleChangePage(t.meta.pageIndex+1)}}},[e("span",{staticClass:"ps-nextpage__text"},[t._v("Next "),e("br"),t._v("page")]),e("i",{staticClass:"fa fa-chevron-right"})])])],2)]):"grid3"==t.type?e("div",{staticClass:"ps-categogy--grid"},[t.loading?e("div",{staticClass:"row"},t._l(4,(function(t){return e("div",{key:t,staticClass:"col-6 col-md-4 col-lg-3"},[e(c.a,{attrs:{type:"image, article"}})],1)})),0):e("div",{staticClass:"row m-0"},[t._l(t.products,(function(t){return e("div",{key:t.id,staticClass:"col-6 col-md-4 col-lg-3 p-0"},[e("product-standard",{attrs:{product:t}})],1)})),t._v(" "),e("div",{staticClass:"col-6 col-md-4 col-lg-3 p-0"},[e("a",{staticClass:"ps-nextpage",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleChangePage(t.meta.pageIndex+1)}}},[e("span",{staticClass:"ps-nextpage__text"},[t._v("Next "),e("br"),t._v("page")]),e("i",{staticClass:"fa fa-chevron-right"})])])],2)]):e("div",{staticClass:"ps-categogy--separate"},[t.loading?e("div",{staticClass:"row"},t._l(4,(function(t){return e("div",{key:t,staticClass:"col-12 col-sm-6 col-md-4 col-lg-3"},[e(c.a,{attrs:{type:"image, article"}})],1)})),0):e("div",{staticClass:"row m-0"},[t._l(t.products,(function(t){return e("div",{key:t.id,staticClass:"col-12 col-sm-6 col-md-4 col-lg-3 p-0"},[e("product-standard",{attrs:{product:t}})],1)})),t._v(" "),e("div",{staticClass:"col-12 col-sm-6 col-md-4 col-lg-3 p-0"},[e("a",{staticClass:"ps-nextpage",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleChangePage(t.meta.pageIndex+1)}}},[e("span",{staticClass:"ps-nextpage__text"},[t._v("Next "),e("br"),t._v("page")]),e("i",{staticClass:"fa fa-chevron-right"})])])],2)]),t._v(" "),e("module-pagination",{attrs:{page:t.meta.pageIndex,length:2},on:{handleChangePage:t.handleChangePage}})],1),t._v(" "),e("div",{staticClass:"col-12 col-md-3"},[e("shop-widget",{attrs:{categories:t.productCategory},on:{handleFilter:t.handleFilter}})],1)])])],1)]),t._v(" "),e("footer-v8")],1)}),[],!1,null,null,null);e.default=component.exports}}]);